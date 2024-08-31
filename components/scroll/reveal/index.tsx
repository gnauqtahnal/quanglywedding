'use client'

import clsx from 'clsx'
import { motion, MotionProps, useInView, HTMLMotionProps } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'

export interface ScrollRevealProps extends MotionProps {
  className?: string
  children?: React.ReactNode
  once?: boolean
}

export interface ScrollRevealChild extends HTMLMotionProps<'div'> {
  className?: string
  children?: React.ReactNode
}

export const ScrollReveal = ({
  className,
  children,
  once = false,
  ...rest
}: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: once })

  return (
    <motion.div
      ref={ref}
      className={clsx('', className)}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.5 } },
      }}
      initial={false}
      animate={isInView ? 'visible' : 'hidden'}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export const ScrollRevealFromLeft = ({
  className,
  children,
  ...rest
}: ScrollRevealChild) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: -200,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
          },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export const ScrollRevealFromRight = ({
  className,
  children,
  ...rest
}: ScrollRevealChild) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: 200,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
          },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
