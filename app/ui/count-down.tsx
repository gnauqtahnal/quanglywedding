'use client'

import { useEffect, useState } from 'react'
import { TextBoxXl } from '@/app/ui/text'

const CountDown = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('Sep 27, 2024 19:00:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center text-center align-middle'>
      <div className='m-4 flex flex-row items-center justify-center text-6xl md:text-8xl'>
        <div className='grid grid-cols-11 grid-rows-2'>
          <TextBoxXl className=''>{Math.floor(days / 10)}</TextBoxXl>
          <TextBoxXl className=''>{days % 10}</TextBoxXl>
          <p>:</p>
          <TextBoxXl className=''>{Math.floor(hours / 10)}</TextBoxXl>
          <TextBoxXl className=''>{hours % 10}</TextBoxXl>
          <p>:</p>
          <TextBoxXl className=''>{Math.floor(minutes / 10)}</TextBoxXl>
          <TextBoxXl className=''>{minutes % 10}</TextBoxXl>
          <p>:</p>
          <TextBoxXl className=''>{Math.floor(seconds / 10)}</TextBoxXl>
          <TextBoxXl className=''>{seconds % 10}</TextBoxXl>

          <p className='col-span-2 text-xl md:text-2xl'>ngày</p>
          <p className='col-span-1 text-xl md:text-2xl'></p>
          <p className='col-span-2 text-xl md:text-2xl'>giờ</p>
          <p className='col-span-1 text-xl md:text-2xl'></p>
          <p className='col-span-2 text-xl md:text-2xl'>phút</p>
          <p className='col-span-1 text-xl md:text-2xl'></p>
          <p className='col-span-2 text-xl md:text-2xl'>giây</p>
          <p className='col-span-1 text-xl md:text-2xl'></p>
        </div>
      </div>
    </div>
  )
}

export default CountDown
