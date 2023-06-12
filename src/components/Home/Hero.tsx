'use client'

import { montserrat } from '@/utils/fonts'
import { motion } from 'framer-motion'
import { AnimatedText } from '../AnimatedText'
import Image from 'next/image'
import { iphones } from '@/utils/images'

export function Hero() {
  return (
    <section className="max-w-[393px] lg:max-w-[1266px] w-full mx-auto mt-14 lg:mt-[208px] px-5 lg:px-0 pb-[550px]">
      <div className="flex flex-col w-full mx-auto text-center">
        <AnimatedText
          className="font-clash break-words flex flex-wrap justify-center gap-x-4 lg:gap-x-8 text-[3rem] lg:text-[8rem] leading-none font-medium text-center"
          text="Experience Beyond Your Foursome."
          highlightedWord={['Beyond']}
        />

        <AnimatedText
          className={`${montserrat.className} w-[353px] lg:w-[910px] mt-10 lg:mt-8 mx-auto break-words flex flex-wrap justify-center gap-x-1 lg:gap-x-3 text-base lg:text-[2rem] leading-tight`}
          text="Immerse yourself in the golfing experience without stepping foot on the green."
        />

        <motion.div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7">
          <motion.button
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-auto font-medium bg-blue500 text-[1.25rem] text-2xl px-16 py-4 text-white rounded-[10px] hover:bg-blue600 transition-colors duration-300"
          >
            Download iOS
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-auto font-medium bg-blue500 text-[1.25rem] text-2xl px-16 py-4 text-white rounded-[10px] hover:bg-blue600 transition-colors duration-300"
          >
            Download Android
          </motion.button>
        </motion.div>
        <div className="mx-auto w-full flex justify-center relative z-20 mt-7 lg:mt-[100px]">
          <Image
            width={1216}
            height={782}
            src={iphones.group}
            alt="Multiple iphones next to each other"
          />
          <div className="absolute bottom-0 inset-x-0 h-[150px] lg:h-[200px] bg-gradient-to-b from-transparent to-[#010E09] z-30" />
        </div>
      </div>
    </section>
  )
}
