'use client'

import { grids, logos } from '@/utils/images'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedText } from '../AnimatedText'

export function Grid() {
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
            className="font-clash font-medium text-[2.25rem] lg:text-[4rem] 2xl:text-[6rem] w-[250px] lg:w-[600px] mt-5 text-white break-words flex flex-wrap justify-center gap-x-2 lg:gap-x-4 2xl:gap-x-8 leading-none text-center"
            text="One App For All Needs"
          />

          <div className="w-[372px] lg:w-full 2xl:w-[1326px] mt-14 lg:mt-24 flex flex-col gap-10 flex-wrap px-8">
            <div className="flex justify-between flex-wrap items-stretch">
              <div className="relative w-[372px] lg:w-[524px] 2xl:w-[780px]">
                <Image
                  width={780}
                  height={400}
                  src={gridItems[0].image}
                  alt=""
                />
                <h2 className="font-medium absolute z-20 text-white text-[2rem] 2xl:text-[2.25rem] bottom-8 left-8 leading-none">
                  {gridItems[0].text}
                </h2>
              </div>
              <div className="relative w-[505px]">
                <Image
                  width={505}
                  height={400}
                  src={gridItems[1].image}
                  alt=""
                />
                <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                  {gridItems[1].text}
                </h2>
              </div>
            </div>
            <div className="flex justify-between items-stretch">
              {gridItems.slice(2, 5).map((item) => {
                return (
                  <div key={item.text} className="relative col-span-1">
                    <Image width={415} height={400} src={item.image} alt="" />
                    <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                      {item.text}
                    </h2>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
