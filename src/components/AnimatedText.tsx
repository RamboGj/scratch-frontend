import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextWordProps {
  text: string
  highlightedWord?: string[]
  className?: string
}

export function AnimatedText({
  text,
  highlightedWord,
  className = 'font-clash overflow-hidden flex flex-wrap break-words gap-x-4 lg:gap-x-8 py-0 lg:py-2 text-black',
}: AnimatedTextWordProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => {
        const isHighlightedWord = highlightedWord
          ? highlightedWord.indexOf(word) >= 0
          : null

        return (
          <motion.span
            className={`${isHighlightedWord ? 'text-blue500' : ''}`}
            variants={child}
            key={index}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
