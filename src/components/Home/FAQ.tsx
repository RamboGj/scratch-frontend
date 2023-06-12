'use client'

import { CaretDown } from 'phosphor-react'
import { AnimatedText } from '../AnimatedText'
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
    <section className="max-w-[393px] lg:max-w-[1584px] px-5 lg:px-0 w-full mx-auto mt-16 lg:mt-[218px] mb-20 lg:mb-[258px]">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-[140px]">
        <AnimatedText
          className="w-[242px] lg:w-[694px] uppercase font-clash text-black break-words flex flex-wrap justify-start gap-x-4 text-[2.25rem] lg:text-[5rem] leading-none font-medium text-left"
          text="Have any questions?"
        />

        <div className="flex-1 font-medium">
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="w-[353px] lg:w-[750px] flex flex-col"
          >
            {faq.map((question) => {
              return (
                <motion.li
                  variants={item}
                  key={question.question}
                  className="w-full flex items-center justify-between pt-8 pb-5 lg:py-8 text-base lg:text-[1.65rem] border-b border-b-[#DDDDDD]"
                >
                  <span className="w-[241px] lg:flex-1">
                    {question.question}
                  </span>
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
