"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypewriterEffectLoop = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [typing, setTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeWord = async () => {
      setTyping(true);
      const currentWord = words[currentWordIndex].text;
      setTypedText("");

      for (let i = 0; i <= currentWord.length; i++) {
        await new Promise((resolve) => {
          timeoutRef.current = setTimeout(resolve, 100); // Typing speed
        });
        setTypedText(currentWord.substring(0, i));
      }

      await new Promise((resolve) => {
        timeoutRef.current = setTimeout(resolve, 1000); // Pause after typing
      });
      setTyping(false);

      await new Promise((resolve) => {
        timeoutRef.current = setTimeout(resolve, 500); // short pause before next word.
      });

      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Cycle to next word
    };

    typeWord();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words, currentWordIndex]);

  return (
    <div
      className={cn("text-2xl md:text-4xl font-bold text-center", className)}
    >
      <motion.div
        key={currentWordIndex}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="inline-block"
      >
        {typedText}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: typing ? 1 : 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block w-[4px] h-5 bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};
