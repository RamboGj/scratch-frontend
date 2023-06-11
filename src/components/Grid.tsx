'use client'

import { grids, logos } from '@/utils/images'
import Image from 'next/image'
import { AnimatedText } from './AnimatedText'
import { motion } from 'framer-motion'

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
    <section className="max-w-screen w-full bg-[#010E09] py-[307px] pb-[256px]">
      <div className="max-w-[1402px] w-full mx-auto px-10">
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
            />
          </motion.div>

          <AnimatedText
            className="font-clash font-medium text-[6rem] w-[600px] mt-5 text-white break-words flex flex-wrap justify-center gap-x-4 lg:gap-x-8 leading-none text-center"
            text="One app for all needs"
          />

          <div className="w-[1326px] mt-24 flex flex-col gap-10 flex-wrap">
            <div className="flex justify-between flex-wrap items-stretch">
              <div className="relative w-[780px]">
                <Image
                  width={780}
                  height={400}
                  src={gridItems[0].image}
                  alt=""
                />
                <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
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
