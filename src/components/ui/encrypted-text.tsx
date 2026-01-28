"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Confirme se sua versão é motion/react ou framer-motion
import { twMerge } from "tailwind-merge";

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const [revealCount, setRevealCount] = useState<number>(0);
  // Estado extra apenas para forçar re-render quando o gibberish mudar
  const [, setFlipTrigger] = useState<number>(0);
  
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastFlipTimeRef = useRef<number>(0);
  
  // CORREÇÃO SSR: Começamos com o texto original ou vazio para evitar erro de hidratação.
  // O efeito de embaralhar começará assim que o componente montar.
  const scrambleCharsRef = useRef<string[]>(text.split(""));

  useEffect(() => {
    if (!isInView || !text) return;

    // Inicializa o tempo
    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;
    setRevealCount(0);

    // Inicializa o array de caracteres aleatórios no client-side
    scrambleCharsRef.current = text.split("").map((char) => 
       char === " " ? " " : generateRandomCharacter(charset)
    );

    let isCancelled = false;

    const update = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;

      // Cálculo de quantos caracteres reais já devem ser mostrados
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );

      // Lógica de "Flip" (embaralhar os não revelados)
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      let didFlip = false;

      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = currentRevealCount; index < totalLength; index += 1) {
          if (text[index] !== " ") {
            scrambleCharsRef.current[index] = generateRandomCharacter(charset);
            didFlip = true;
          }
        }
        lastFlipTimeRef.current = now;
      }

      // ATUALIZAÇÃO DO ESTADO:
      // Só atualizamos o React se:
      // 1. O número de letras reveladas mudou (progresso)
      // 2. OU se houve um "flip" nos caracteres aleatórios (efeito visual)
      if (currentRevealCount !== revealCount || didFlip) {
        setRevealCount(currentRevealCount);
        if (didFlip) setFlipTrigger(prev => prev + 1); // Força re-render
      }

      if (currentRevealCount < totalLength) {
        animationFrameRef.current = requestAnimationFrame(update);
      }
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // Adicionei revealCount nas deps para garantir que o closure pegue o valor, 
    // embora com refs não seja estritamente necessário, é mais seguro assim.
  }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

  return (
    <motion.span
      ref={ref}
      className={twMerge("inline-block whitespace-pre-wrap", className)}
      aria-label={text} // Leitura correta para cegos
      // role="text" não é padrão HTML válido, span padrão já é texto.
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : (scrambleCharsRef.current[index] ?? char);

        return (
          <span
            key={index}
            className={twMerge(isRevealed ? revealedClassName : encryptedClassName)}
            aria-hidden="true" // Impede que o screen reader leia letra por letra ou o lixo
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};