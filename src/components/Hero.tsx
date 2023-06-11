'use client'

import { montserrat } from '@/utils/fonts'
import { AnimatedText } from './AnimatedText'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="max-w-[1266px] w-full mx-auto mt-[208px] pb-[550px]">
      <div className="flex flex-col w-full mx-auto text-center">
        <AnimatedText
          className="font-clash break-words flex flex-wrap justify-center gap-x-4 lg:gap-x-8 text-[8rem] leading-none font-medium text-center"
          text="Experience Beyond Your Foursome."
          highlightedWord={['Beyond']}
        />

        <AnimatedText
          className={`${montserrat.className} mt-8 mx-auto break-words flex flex-wrap justify-center gap-x-3 text-[2rem] w-[910px] leading-tight`}
          text="Immerse yourself in the golfing experience without stepping foot on the green."
        />

        <motion.div className="mt-10 flex items-center justify-center gap-7">
          <motion.button
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium bg-blue500 text-2xl px-16 py-4 text-white rounded-[10px] hover:bg-blue600 transition-colors duration-300"
          >
            Download iOS
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium bg-blue500 text-2xl px-16 py-4 text-white rounded-[10px] hover:bg-blue600 transition-colors duration-300"
          >
            Download Android
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
