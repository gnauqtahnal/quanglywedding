'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

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
      <div
        className={clsx(
          'p-4 flex flex-row items-center justify-center rounded-xl',
        )}
      >
        <div className='grid grid-cols-1 grid-rows-2'>
          <div
            className={clsx(
              'grid grid-cols-11 grid-rows-1',
              'text-4xl md:text-5xl',
            )}
          >
            <div className=''>{Math.floor(days / 10)}</div>
            <div className=''>{days % 10}</div>
            <div>:</div>
            <div className=''>{Math.floor(hours / 10)}</div>
            <div className=''>{hours % 10}</div>
            <div>:</div>
            <div className=''>{Math.floor(minutes / 10)}</div>
            <div className=''>{minutes % 10}</div>
            <div>:</div>
            <div className=''>{Math.floor(seconds / 10)}</div>
            <div className=''>{seconds % 10}</div>
          </div>

          <div className={clsx('grid grid-cols-4 grid-rows-1')}>
            <div>ngày</div>
            <div>giờ</div>
            <div>phút</div>
            <div>giây</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountDown
