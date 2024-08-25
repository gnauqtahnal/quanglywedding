import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface CalendarItemProps {
  text: string
  className?: string
}

const CalendarHeaderItem = ({ text, className = '' }: CalendarItemProps) => {
  return (
    <div className='flex aspect-square items-center justify-center'>
      <p className={clsx('text-center text-lg md:text-2xl', className)}>
        {text}
      </p>
    </div>
  )
}

const CalendarItem = ({ text, className = '' }: CalendarItemProps) => {
  return (
    <div className='flex aspect-square items-center justify-center'>
      <p className={clsx('text-center text-lg md:text-2xl', className)}>
        {text}
      </p>
    </div>
  )
}

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {}

const Calendar = ({ className, ...rest }: CalendarProps) => {
  return (
    <div
      className='flex w-screen flex-col items-center justify-center'
      {...rest}
    >
      <div className='bg-[#FEF3E2] p-4 rounded-md overflow-hidden'>
        <div>
          <p className='text-4xl md:text-6xl'>Tháng 9</p>
        </div>
        <div className='grid grid-cols-1 grid-rows-1'>
          <div className='grid grid-cols-7 grid-rows-1 gap-x-2 text-center border-b border-[#606676]'>
            <CalendarHeaderItem text='MON' />
            <CalendarHeaderItem text='TUE' />
            <CalendarHeaderItem text='WED' />
            <CalendarHeaderItem text='THU' />
            <CalendarHeaderItem text='FRI' />
            <CalendarHeaderItem text='SAT' />
            <CalendarHeaderItem text='SUN' />
          </div>
          <div className='grid grid-cols-7 grid-rows-5 gap-x-2 text-center'>
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='1' />

            <CalendarItem text='2' />
            <CalendarItem text='3' />
            <CalendarItem text='4' />
            <CalendarItem text='5' />
            <CalendarItem text='6' />
            <CalendarItem text='7' />
            <CalendarItem text='8' />

            <CalendarItem text='9' />
            <CalendarItem text='10' />
            <CalendarItem text='11' />
            <CalendarItem text='12' />
            <CalendarItem text='13' />
            <CalendarItem text='14' />
            <CalendarItem text='15' />

            <CalendarItem text='16' />
            <CalendarItem text='17' />
            <CalendarItem text='18' />
            <CalendarItem text='19' />
            <CalendarItem text='20' />
            <CalendarItem text='21' />
            <div className='flex aspect-square items-center justify-center rounded-full border border-pink-500 bg-pink-500'>
              <p className='text-center text-lg text-white md:text-2xl'>22</p>
            </div>

            <CalendarItem text='23' />
            <CalendarItem text='24' />
            <CalendarItem text='25' />
            <CalendarItem text='26' />
            <div className='flex aspect-square items-center justify-center rounded-full border border-blue-500 bg-blue-500'>
              <p className='text-center text-lg text-white md:text-2xl'>27</p>
            </div>
            <CalendarItem text='28' />
            <CalendarItem text='29' />

            <CalendarItem text='30' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
            <CalendarItem text='&nbsp;' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
