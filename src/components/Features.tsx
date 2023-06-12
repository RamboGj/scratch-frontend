'use client'

import { montserrat } from '@/utils/fonts'
import { iphones } from '@/utils/images'
import {
  useScroll,
  motion,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { AnimatedText } from './AnimatedText'

export function Features() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: container })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.25) {
      scaleY.set(0.15)
    }

    if (latest >= 0.25 && latest < 0.5) {
      scaleY.set(0.35)
    }

    if (latest >= 0.5 && latest < 0.75) {
      scaleY.set(0.55)
    }

    if (latest >= 0.75 && latest < 1) {
      scaleY.set(0.8)
    }

    if (latest >= 1) {
      scaleY.set(1)
    }
  })

  return (
    <section className="max-w-[1580px] w-full mx-auto pt-[195px]">
      <div className="w-full flex flex-col mx-auto">
        <AnimatedText
          className="font-clash mx-auto break-words flex flex-wrap justify-center gap-x-4 lg:gap-x-8 text-[5rem] leading-none font-medium text-center"
          text="How Scratch Works"
          highlightedWord={['Scratch']}
        />

        <motion.div ref={container} className="w-full mx-auto">
          <div className="w-full h-[4200px] flex relative mx-auto">
            <div className="h-[4200px] w-3 bg-[#E3E7D9] mx-auto relative">
              <motion.div
                style={{ scaleY }}
                className="absolute h-[4200px] origin-top w-3 z-20 bg-gradient-to-t from-blue500 to-[#F4F8E8]"
              >
                <motion.div
                  style={{ y: scaleY }}
                  className="rounded-full border-2 border-white w-12 h-12 z-30 bg-blue500 absolute top-0 -left-[18px] shadow-xl"
                />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-[242px] absolute z-20 top-[265px]">
              <div className="w-full flex items-center justify-start gap-[328px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <motion.span
                      initial={{ opacity: 0, y: -200 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      viewport={{ once: true, amount: 'all' }}
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 1
                    </motion.span>
                  </header>
                  <AnimatedText
                    className="font-clash text-black mx-auto break-words flex flex-wrap justify-start gap-x-4 text-[4rem] leading-none font-medium text-left"
                    text="Streamlined score tracking to keep you in the game."
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    viewport={{ once: true, amount: 'some' }}
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    We’ve improved score keeping because you shouldn’t spend
                    more time on your phone when out on the course.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                  }}
                  viewport={{ once: true, amount: 'all' }}
                >
                  <Image src={iphones.mobileLg1} height={700} alt="" />
                </motion.div>
              </div>
              <div className="w-full flex flex-row-reverse items-center justify-start gap-[328px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <motion.span
                      initial={{ opacity: 0, y: -200 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      viewport={{ once: true, amount: 'all' }}
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 2
                    </motion.span>
                  </header>
                  <AnimatedText
                    className="font-clash text-black mx-auto break-words flex flex-wrap justify-start gap-x-4 text-[4rem] leading-none font-medium text-left"
                    text="Front-row seat to your friends’ games with live streaming."
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    viewport={{ once: true, amount: 'some' }}
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    Trash-talk beyond your foursome with live streaming right in
                    the app.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                >
                  <Image src={iphones.mobileLg2} height={700} alt="" />
                </motion.div>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-[328px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <motion.span
                      initial={{ opacity: 0, y: -200 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      viewport={{ once: true, amount: 'all' }}
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 3
                    </motion.span>
                  </header>
                  <AnimatedText
                    className="font-clash text-black mx-auto break-words flex flex-wrap justify-start gap-x-4 text-[4rem] leading-none font-medium text-left"
                    text="Host and join contests to win against your friends."
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    viewport={{ once: true, amount: 'some' }}
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    Play in contests with participation costs to spice things up
                    on the course.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                >
                  <Image src={iphones.mobileLg3} height={700} alt="" />
                </motion.div>
              </div>
              <div className="w-full flex flex-row-reverse items-center justify-start gap-[328px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <motion.span
                      initial={{ opacity: 0, y: -200 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      viewport={{ once: true, amount: 'all' }}
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 4
                    </motion.span>
                  </header>

                  <AnimatedText
                    className="font-clash text-black mx-auto break-words flex flex-wrap justify-start gap-x-4 text-[4rem] leading-none font-medium text-left"
                    text="Track your game with more features than you can imagine."
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    viewport={{ once: true, amount: 'some' }}
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    We’re talking live course updates, streamlined scorecards,
                    chatting, contests, livestreaming, and more.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                >
                  <Image src={iphones.mobileLg4} height={700} alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
