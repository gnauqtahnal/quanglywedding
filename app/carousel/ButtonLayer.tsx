'use client'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export const ButtonLayer = ({ id, maxId }: { id: number; maxId: number }) => {
  const router = useRouter()

  const exitCarousel = () => {
    router.push(`/`)
  }

  const nextId = () => {
    let newId = id + 1
    if (newId > maxId - 1) {
      newId = 0
    }
    router.push(`/carousel?id=${newId}&direction=1`)
  }

  const prevId = () => {
    let newId = id - 1
    if (newId < 0) {
      newId = maxId - 1
    }
    router.push(`/carousel?id=${newId}&direction=-1`)
  }

  return (
    <div className='absolute w-screen h-screen top-0 bottom-0 left-0 right-0 overflow-hidden z-50 pointer-events-none'>
      <button
        className='absolute rounded-full p-3 bg-black/50 top-[calc(2%)] left-[calc(2%)] hover:bg-black/75 pointer-events-auto'
        onClick={exitCarousel}
      >
        <XMarkIcon className='w-6 h-6 text-white/75 hover:text-white' />
      </button>

      <button
        className='absolute rounded-full p-3 bg-black/50 top-[calc(50%)] left-[calc(2%)] hover:bg-black/75 pointer-events-auto'
        onClick={prevId}
      >
        <ChevronLeftIcon className='w-6 h-6 text-white/75 hover:text-white' />
      </button>

      <button
        className='absolute rounded-full p-3 bg-black/30 top-[calc(50%)] right-[calc(2%)] hover:bg-black/75 pointer-events-auto'
        onClick={nextId}
      >
        <ChevronRightIcon className='w-6 h-6 text-white/75 hover:text-white' />
      </button>
    </div>
  )
}
