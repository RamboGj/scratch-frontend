'use client'

import { CaretDown } from 'phosphor-react'

export function FAQ() {
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
        <h1 className="text-[5rem] w-[694px] uppercase leading-none font-medium">
          Have any questions?
        </h1>
        <div className="flex-1 font-medium">
          <ul className="flex flex-col">
            {faq.map((question) => {
              return (
                <li
                  key={question.question}
                  className="flex items-center justify-between py-8 text-[1.65rem] border-b border-b-[#DDDDDD]"
                >
                  <span>{question.question}</span>
                  <CaretDown size={24} weight="bold" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
