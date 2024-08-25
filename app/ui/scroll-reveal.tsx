'use client'

import clsx from 'clsx'
import { motion, MotionProps, useInView } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'

export interface ScrollRevealProps extends MotionProps {
  className?: string
  childrens?: React.ReactNode | React.ReactNode[]
  once?: boolean
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

const ScrollReveal = ({
  className,
  childrens,
  once = false,
  ...rest
}: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: once })
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
      {childs.map((child, index) => {
        return (
          <motion.div
            key={index}
            variants={revealAnimation}
          >
            {child}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default ScrollReveal
