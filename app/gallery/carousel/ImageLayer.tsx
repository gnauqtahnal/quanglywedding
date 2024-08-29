'use client'

import { getGalleryImageFromId } from '@/lib/gallery'
import clsx from 'clsx'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSwipeable } from 'react-swipeable'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export const ImageLayer = ({
  id,
  maxId,
  direction,
}: {
  id: number
  maxId: number
  direction: number
}) => {
  const router = useRouter()
  const { src } = getGalleryImageFromId(id)

  const updateId = (id: number, direction: number) => {
    let newId = id
    if (newId < 0) {
      newId = maxId - 1
    } else if (newId > maxId - 1) {
      newId = 0
    }
    router.push(`/gallery/carousel?id=${newId}&direction=${direction}`)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateId(id + 1, 1)
    },
    onSwipedRight: () => {
      updateId(id - 1, -1)
    },
    trackMouse: true,
  })

  return (
    <div className='w-screen h-screen'>
      <MotionConfig
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className='relative z-50 flex w-screen h-screen items-center justify-center'
          {...handlers}
        >
          <AnimatePresence
            initial={false}
            custom={direction}
          >
            <motion.div
              key={id}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute'
            >
              <Image
                src={src}
                alt='image'
                priority
                placeholder='blur'
                sizes='50vw'
                className={clsx(
                  'md:h-[100vh] md:w-auto h-auto w-[100vw]',
                  'object-cover scale-95',
                  'rounded-lg',
                )}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>
    </div>
  )
}
