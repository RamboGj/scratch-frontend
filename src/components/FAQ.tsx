'use client'

import { CaretDown } from 'phosphor-react'
import { AnimatedText } from './AnimatedText'
import { motion } from 'framer-motion'

export function FAQ() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const faq = [
    { question: 'Is Scratch free forever?', content: '' },
    { question: 'Can my information can be safe and secured?', content: '' },
    { question: 'How does entry fees work?', content: '' },
    { question: 'Does Scratch require my identification?', content: '' },
    { question: 'Are there any hidden fees while using Scratch?', content: '' },
  ]

  return (
    <section className="max-w-[1584px] w-full mx-auto mt-[218px] mb-[258px]">
      <div className="w-full mx-auto flex items-center gap-[140px]">
        <AnimatedText
          className="w-[694px] uppercase font-clash text-black mx-auto break-words flex flex-wrap justify-start gap-x-4 text-[5rem] leading-none font-medium text-left"
          text="Have any questions?"
        />

        <div className="flex-1 font-medium">
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col"
          >
            {faq.map((question) => {
              return (
                <motion.li
                  variants={item}
                  key={question.question}
                  className="flex items-center justify-between py-8 text-[1.65rem] border-b border-b-[#DDDDDD]"
                >
                  <span>{question.question}</span>
                  <CaretDown size={24} weight="bold" />
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
