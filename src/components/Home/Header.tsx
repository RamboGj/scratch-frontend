'use client'

import { logos } from '@/utils/images'
import Image from 'next/image'

import { motion } from 'framer-motion'

export function Header() {
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

  return (
    <motion.header
      variants={headerVariant}
      initial="initial"
      animate="animate"
      className="mx-auto pt-16"
    >
      <Image
        className="mx-auto w-[120px] h-[36px] lg:w-[203px] lg:h-[52px]"
        width={203}
        height={52}
        src={logos.logo}
        alt="Scratch Logo"
      />
    </motion.header>
  )
}
