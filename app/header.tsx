'use client'

import CountDown from '@/app/ui/count-down'
import TRANGWD286_BACK from '@/public/TRANGWD286_BACK.webp'
import TRANGWD286_FRONT from '@/public/TRANGWD286_FRONT.webp'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Header() {
  const backgroundRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const frontY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section
      className='h-screen w-screen overflow-hidden'
      ref={backgroundRef}
    >
      <div className='grid-cols1 absolute z-10 grid h-screen w-screen grid-rows-3 md:grid-rows-4'>
        <motion.div
          className='row-span-2 flex h-full w-full flex-col items-center justify-center'
          style={{
            y: textY,
          }}
        >
          <CountDown />
        </motion.div>
      </div>

      <motion.div
        className='absolute z-20 h-screen w-screen'
        style={{
          y: frontY,
        }}
      >
        <Image
          src={TRANGWD286_FRONT}
          alt='TRANGWD286_FRONT'
          quality={100}
          fill
          sizes='100vw'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <div className='relative z-0 h-screen w-screen'>
        <Image
          src={TRANGWD286_BACK}
          alt='TRANGWD286'
          quality={100}
          fill
          sizes='100vw'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
