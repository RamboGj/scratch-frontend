'use client'

import { grids, logos } from '@/utils/images'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { AnimatedText } from '../AnimatedText'
import { useRef } from 'react'

export function Grid() {
  const gridRef = useRef<HTMLUListElement>(null)

  const headerVariant = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const gridItems = [
    {
      text: 'Streamlined Score Tracking',
      image: grids.grid1,
    },
    {
      text: 'Live-Stream Matches',
      image: grids.grid2,
    },
    {
      text: 'Set Entry Fees',
      image: grids.grid3,
    },
    {
      text: 'Play Against Friends',
      image: grids.grid4,
    },
    {
      text: 'Win Contests',
      image: grids.grid5,
    },
  ]

  const { scrollYProgress } = useScroll({ target: gridRef })

  const gridTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 300, 600, 900, 1200, 1200],
  )

  const first = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 375, 750, 1125, 1500, 1875],
  )
  const second = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 375, 750, 1125, 1500],
  )
  const third = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 0, 375, 750, 1125],
  )

  const fourth = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 0, 0, 375, 750],
  )

  const fifth = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 0, 0, 0, 375],
  )

  const firstSpring = useSpring(first, {
    stiffness: 750,
    damping: 200,
  })
  const secondSpring = useSpring(second, {
    stiffness: 750,
    damping: 200,
  })
  const thirdSpring = useSpring(third, {
    stiffness: 750,
    damping: 200,
  })
  const fourthSpring = useSpring(fourth, {
    stiffness: 750,
    damping: 200,
  })
  const fifthSpring = useSpring(fifth, {
    stiffness: 750,
    damping: 200,
  })

  const positions = [
    firstSpring,
    secondSpring,
    thirdSpring,
    fourthSpring,
    fifthSpring,
  ]

  return (
    <section className="max-w-screen w-full pb-16 lg:pb-[256px] pt-20 lg:pt-[302px] bg-[#010E09] -mt-[600px] lg:-mt-[800px]">
      <div className="max-w-[393px] lg:max-w-[1024px] 2xl:max-w-[1402px] px-3 lg:px-10 w-full mx-auto ">
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={headerVariant}
            whileInView="animate"
            initial="initial"
          >
            <Image
              width={45}
              height={62}
              src={logos.logoSm}
              alt="Scratch Logo"
              className="w-5 h-7 lg:w-[45px] lg:h-[62px]"
            />
          </motion.div>

          <AnimatedText
            className="font-clash font-medium text-[2.25rem] lg:text-[4rem] 2xl:text-[6rem] w-[250px] lg:w-[600px] mt-5 text-white break-words flex flex-wrap justify-center gap-x-2 lg:gap-x-4 2xl:gap-x-6 leading-none text-center"
            text="One App For All Needs"
          />

          <motion.ul
            style={{ y: gridTransform }}
            ref={gridRef}
            className="w-[372px] lg:w-full 2xl:w-[1326px] mt-14 lg:mt-24 flex flex-col items-center gap-10 px-8 h-[4000px] relative"
          >
            {gridItems.map((item, index) => {
              const z = ['z-0', 'z-10', 'z-20', 'z-30', 'z-40']
              console.log(z[index])

              return (
                <motion.li
                  style={{
                    y: positions[index],
                  }}
                  key={item.text}
                  className={`group cursor-pointer w-[323px] lg:w-[780px] h-[400px] relative rounded-[30px] overflow-hidden border-2 border-[#063A28] hover:border-white bg-[#011C12] transition-colors duration-500 ${z[index]}`}
                >
                  <Image width={780} height={400} src={item.image} alt="" />
                  <h2 className="font-medium absolute z-30 text-white text-[2.25rem] bottom-8 left-8">
                    {item.text}
                  </h2>
                  <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent to-[#063A28]  group-hover:from-transparent group-hover:to-[#126D4E] transition-colors"></div>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
