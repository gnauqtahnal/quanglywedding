"use client"
import { useEffect, useState } from "react"

const CountDown = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("Sep 27, 2024 19:00:00")

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
    <div className="flex flex-col items-center justify-center bg-[#fff2e6] text-center align-middle text-[#663300]">
      <div className="flex items-center justify-center px-4 py-2 text-2xl md:text-4xl">
        <p className="inter">Cùng chúng mình đếm ngược khoảnh khắc này nhé</p>
      </div>
      <div className="sacramento m-4 flex flex-row items-center justify-center text-4xl md:text-6xl">
        <div className="grid grid-cols-3 grid-rows-2">
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {Math.floor(days / 10)}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {days % 10}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            :
          </p>
          <p className="col-span-2 flex items-center justify-center">day</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2">
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {Math.floor(hours / 10)}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {hours % 10}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            :
          </p>
          <p className="col-span-2 flex items-center justify-center">hour</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2">
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {Math.floor(minutes / 10)}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {minutes % 10}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            :
          </p>
          <p className="col-span-2 flex items-center justify-center">min</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2">
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {Math.floor(seconds / 10)}
          </p>
          <p className="h-[30px] w-[30px] align-middle md:h-[50px] md:w-[50px]">
            {seconds % 10}
          </p>
          <p className="col-span-2 flex items-center justify-center">sec</p>
        </div>
      </div>
    </div>
  )
}

export default CountDown
