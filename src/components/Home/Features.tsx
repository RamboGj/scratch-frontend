'use client'

import { montserrat } from '@/utils/fonts'
import { iphones } from '@/utils/images'
import {
  useScroll,
  motion,
  useSpring,
  // useMotionValueEvent,
} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { AnimatedText } from '../AnimatedText'

export function Features() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: container })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const features = [
    {
      number: 1,
      title: 'Streamlined score tracking to keep you in the game.',
      description:
        'We’ve improved score keeping because you shouldn’t spend more time on your phone when out on the course.',
      image: iphones.mobileLg1,
    },
    {
      number: 2,
      title: 'Front-row seat to your friends’ games with live streaming.',
      description:
        'Trash-talk beyond your foursome with live streaming right in the app.',
      image: iphones.mobileLg2,
    },
    {
      number: 3,
      title: 'Host and join contests to win against your friends.',
      description:
        'Play in contests with participation costs to spice things up on the course.',
      image: iphones.mobileLg3,
    },
    {
      number: 4,
      title: 'Track your game with more features than you can imagine.',
      description:
        'We’re talking live course updates, streamlined scorecards, chatting, contests, livestreaming, and more.',
      image: iphones.mobileLg4,
    },
  ]

  return (
    <section
      ref={container}
      className="max-w-[393px] lg:max-w-[1120px] 2xl:max-w-[1580px] px-5 lg:px-0 w-full mx-auto pt-16 lg:pt-[195px]"
    >
      <div className="w-full flex flex-col mx-auto">
        <AnimatedText
          className="font-clash mx-auto break-words flex flex-wrap justify-center gap-x-2 lg:gap-x-8 text-[2.25rem] lg:text-[5rem] leading-none font-medium text-center"
          text="How Scratch Works"
          highlightedWord={['Scratch']}
        />

        <motion.div className="w-full mx-auto">
          <div className="w-full h-[2800px] lg:h-[4200px] flex relative mx-auto">
            <div className="h-[2800px] lg:h-[4200px] w-3 bg-[#E3E7D9] ml-4 lg:mx-auto relative">
              <motion.div
                style={{ scaleY }}
                className="absolute h-[2800px] lg:h-[4200px] origin-top w-3 z-20 bg-gradient-to-t from-blue500 to-[#F4F8E8]"
              />
            </div>
            <div className="w-full flex flex-col gap-16 lg:gap-[242px] absolute z-20 top-6 lg:top-[265px]">
              {features.map((feature, index) => {
                const alternate = index % 2 === 0

                return (
                  <div
                    key={feature.number}
                    className={`w-full flex ${
                      alternate
                        ? 'flex-col-reverse lg:flex-row'
                        : 'flex-col-reverse lg:flex-row-reverse'
                    }  items-center lg:justify-start gap-6 lg:gap-[328px]`}
                  >
                    <div className="w-full lg:w-[484px] 2xl:w-[657px] flex flex-col items-end">
                      <div className="w-[292px] lg:w-full flex flex-col gap-5 lg:gap-6">
                        <header>
                          <motion.span
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                            }}
                            viewport={{ once: true, amount: 'all' }}
                            className={`${montserrat.className} text-xs lg:text-base 2xl:text-xl text-blue500 tracking-[0.6rem] uppercase`}
                          >
                            Feature {feature.number}
                          </motion.span>
                        </header>

                        <AnimatedText
                          className="-mt-5 lg:mt-0 font-clash text-black mx-auto break-words flex flex-wrap justify-start gap-x-4 text-2xl lg:text-[2rem] 2xl:text-[4rem] leading-none font-medium text-left"
                          text={feature.title}
                        />

                        <motion.p
                          initial={{ opacity: 0, y: 200 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                          }}
                          viewport={{ once: true, amount: 'some' }}
                          className={`${montserrat.className} w-full 2xl:w-[582px] text-base lg:text-lg 2xl:text-2xl text-blue500`}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                      }}
                      viewport={{ once: true, amount: 'all' }}
                    >
                      <Image
                        className="w-[180px] h-[390px] lg:h-[700px] lg:w-[340px] mx-auto"
                        src={feature.image}
                        height={700}
                        alt=""
                        priority
                      />
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
