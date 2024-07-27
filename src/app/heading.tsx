'use client'

import LoadingText from '@/component/loading-text/LoadingText'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Heading = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5])
  const bgBorderRadius = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  return (
    <motion.div
      className="mx-auto flex h-screen w-screen flex-col items-center justify-center bg-[#fef8f0]"
      style={{
        scale: bgScale,
        borderRadius: bgBorderRadius,
      }}
    >
      <LoadingText
        text="COMMING SOON..."
        className="inline-block font-bold text-[#9c9486] md:text-4xl xl:text-7xl"
        delay={0.4}
      />
    </motion.div>
  )
}

export default Heading
