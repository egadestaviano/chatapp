"use client";

import { useEffect, useState } from "react";

const DEFAULT_WORDS = ["Secure", "Fast", "Private", "Authentic", "Secure"];

export function HeroWordRotator({ words = DEFAULT_WORDS }: { words?: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(150); // Typing speed

        if (currentText === fullWord) {
          // Pause at the end of the word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(75); // Deleting speed

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <span className="inline-flex items-center text-primary font-bold min-h-[1em]">
      {currentText}
      <span className="ml-1 inline-block w-[2px] h-[0.8em] bg-primary animate-pulse" />
    </span>
  );
}
