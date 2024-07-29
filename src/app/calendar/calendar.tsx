import { twMerge } from "tailwind-merge"

interface CalendarItemProps {
  text: string
  className?: string
}

const CalendarHeaderItem = ({ text, className = "" }: CalendarItemProps) => {
  return (
    <div className="flex aspect-square items-center justify-center border-b border-[#663300]">
      <p
        className={twMerge(
          "inter text-center text-lg text-[#663300] md:text-2xl",
          className,
        )}
      >
        {text}
      </p>
    </div>
  )
}

const CalendarItem = ({ text, className = "" }: CalendarItemProps) => {
  return (
    <div className="flex aspect-square items-center justify-center">
      <p
        className={twMerge(
          "sacramento text-center text-lg text-[#663300] md:text-2xl",
          className,
        )}
      >
        {text}
      </p>
    </div>
  )
}

const Calendar = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center py-4">
      <div>
        <p className="sacramento text-4xl text-[#663300] md:text-6xl">
          Tháng 9
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-7 grid-rows-6 gap-x-2 text-center">
          <CalendarHeaderItem text="MON" />
          <CalendarHeaderItem text="TUE" />
          <CalendarHeaderItem text="WED" />
          <CalendarHeaderItem text="THU" />
          <CalendarHeaderItem text="FRI" />
          <CalendarHeaderItem text="SAT" />
          <CalendarHeaderItem text="SUN" />

          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="1" />

          <CalendarItem text="2" />
          <CalendarItem text="3" />
          <CalendarItem text="4" />
          <CalendarItem text="5" />
          <CalendarItem text="6" />
          <CalendarItem text="7" />
          <CalendarItem text="8" />

          <CalendarItem text="9" />
          <CalendarItem text="10" />
          <CalendarItem text="11" />
          <CalendarItem text="12" />
          <CalendarItem text="13" />
          <CalendarItem text="14" />
          <CalendarItem text="15" />

          <CalendarItem text="16" />
          <CalendarItem text="17" />
          <CalendarItem text="18" />
          <CalendarItem text="19" />
          <CalendarItem text="20" />
          <CalendarItem text="21" />
          <div className="flex aspect-square items-center justify-center rounded-full border border-pink-500">
            <p className="sacramento text-center text-lg font-bold text-pink-500 md:text-2xl">
              22
            </p>
          </div>

          <CalendarItem text="23" />
          <CalendarItem text="24" />
          <CalendarItem text="25" />
          <CalendarItem text="26" />
          <div className="flex aspect-square items-center justify-center rounded-full border border-blue-800">
            <p className="sacramento text-center text-lg font-bold text-blue-800 md:text-2xl">
              27
            </p>
          </div>
          <CalendarItem text="28" />
          <CalendarItem text="29" />

          <CalendarItem text="30" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
          <CalendarItem text="&nbsp;" />
        </div>
      </div>
    </div>
  )
}

export default Calendar
