'use client'

import clsx from 'clsx'
import { motion, MotionProps, useInView } from 'framer-motion'
import { useRef } from 'react'

export interface ScrollRevealProps extends MotionProps {
  className?: string
  childrens?: React.ReactNode | React.ReactNode[]
}

const revealAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
}

const ScrollReveal = ({ className, childrens, ...rest }: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const childs = Array.isArray(childrens) ? childrens : [childrens]

  return (
    <motion.div
      ref={ref}
      {...rest}
      className={clsx('', className)}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.5 } },
      }}
      animate={isInView ? 'visible' : 'hidden'}
    >
      {childs.map((child) => {
        return <motion.div variants={revealAnimation}>{child}</motion.div>
      })}
    </motion.div>
  )
}

export default ScrollReveal
