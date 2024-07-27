import {
  HTMLMotionProps,
  motion,
  Variants,
  useAnimationControls,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface LoadingTextProps extends HTMLMotionProps<'div'> {
  text: string | string[]
  delay?: number
  once?: boolean
  duration?: number
  className?: string
}

const LoadingText = ({
  text,
  delay = 0,
  once = false,
  duration = 0.08,
  className,
  ...props
}: LoadingTextProps) => {
  const letters = Array.from(text)
  const textArray = Array.isArray(text) ? text : [text]

  const ref = useRef(null)
  const controls = useAnimationControls()

  useEffect(() => {
    ;(async () => {
      while (true) {
        await controls.start('hidden')
        await controls.start('visible')
      }
    })()
  }, [])

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: [0, 1],
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  useEffect(() => {
    const id = setInterval(async () => {}, 2000)
    return clearInterval(id)
  }, [])

  return (
    <motion.p
      ref={ref}
      className={twMerge('flex overflow-hidden', className)}
      initial="hidden"
      animate={controls}
      variants={container}
      {...props}
    >
      {textArray.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`} className="inline-block">
          {line.split(' ').map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="inline-block">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  variants={child}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.p>
  )
}

export default LoadingText
