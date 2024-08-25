import Calendar from '@/app/ui/calendar'
import { euphoria, sacramento } from '@/app/ui/fonts'
import Logo from '@/app/ui/logo'
import ReservationForm from '@/app/ui/reservation-form'
import ScrollReveal from '@/app/ui/scroll-reveal'
import i683_ly from '@/public/i638_ly.png'
import i683_quang from '@/public/i638_quang.png'
import ImgRose from '@/public/rose.png'
import clsx from 'clsx'
import Image from 'next/image'

interface PageProps {
  className?: string
  children?: React.ReactNode
}

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center align-middle text-[#606676]'>
      <PageOne className='bg-[#BEC6A0]' />
      <PageTwo className='bg-[#FEF3E2]' />
      <PageThree className='bg-[#BEC6A0]' />
      <PageFour className='bg-[#FEF3E2]' />
      <PageFive className='bg-[#BEC6A0]' />
      <PageSix className='bg-[#FEF3E2]' />
      <PageSeven className='bg-[#BEC6A0]' />
      <PageEight className='bg-[#FEF3E2]' />
      <PageNine className='bg-[#BEC6A0]' />
    </div>
  )
}

const PageOne = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <Logo
            key={1}
            className='text-[8rem] md:text-[10rem]'
          />,
          <p
            key={2}
            className={`${sacramento.className} text-[3rem] md:text-[5rem]`}
          >
            Quang & Ly
          </p>,
        ]}
      />
      {children}
    </div>
  )
}

const PageTwo = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <p
            key={1}
            className='text-[1rem] md:text-[1.5rem]'
          >{`Đây là một chiếc thiệp handmade`}</p>,
          <p
            key={2}
            className='text-[1rem] md:text-[1.5rem]'
          >{`Chúng mình đã tạo ra để gửi một lời mời chân thành`}</p>,
          <p
            key={3}
            className='text-[1rem] md:text-[1.5rem]'
          >{`đến với những người mà chúng mình rất yêu quý`}</p>,
        ]}
      />
      {children}
    </div>
  )
}

const PageThree = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center p-4',
        className,
      )}
    >
      <div className='flex-1' />
      <ScrollReveal
        childrens={[
          <div
            key={1}
            className='grid grid-cols-3 grid-rows-1'
          >
            <Image
              key={2}
              className='w-[256px] aspect-square rounded-full p-2 md:p-4 bg-[#FEF3E2] place-self-center'
              src={i683_quang}
              alt='quang dep trai'
              placeholder='blur'
              width={256}
              height={256}
              style={{
                objectFit: 'cover',
              }}
            />
            <div
              key={3}
              className='flex flex-col items-start justify-center text-left col-span-2 p-2 md:p-4'
            >
              <p
                key={4}
                className='text-2xl font-bold md:text-3xl'
              >
                Chú rể
              </p>
              <p
                key={5}
                className='text-md md:text-xl'
              >{`Đóng vai trò là người tạo ra những đoạn code này.`}</p>
              <p
                key={6}
                className='text-md md:text-xl'
              >{`Tình cờ bạn thân thời cấp 3 lại là bạn thân thời Đại học của cô dâu.`}</p>
            </div>
          </div>,
        ]}
      />
      <div className='flex-1' />
      <ScrollReveal
        childrens={[
          <div
            key={7}
            className='grid grid-cols-3 grid-rows-1'
          >
            <div
              key={8}
              className='flex flex-col items-end justify-center text-right col-span-2 p-2 md:p-4'
            >
              <p
                key={9}
                className='text-2xl font-bold md:text-3xl'
              >
                Cô dâu
              </p>
              <p
                key={10}
                className='text-md md:text-xl'
              >{`Người gieo hạt giống trí tuệ và vun đắp tương lại cho các bạn nhỏ.`}</p>
              <p
                key={11}
                className='text-md md:text-xl'
              >{`Không chỉ hướng đến mục tiêu cải thiện kỹ năng mà còn nhắm đến việc hỗ trợ các bạn nhỏ hoà nhập xã hội.`}</p>
            </div>
            <Image
              key={12}
              className='w-[256px] aspect-square rounded-full p-2 md:p-4 bg-[#FEF3E2] place-self-center'
              src={i683_ly}
              alt='ly dep gai'
              placeholder='blur'
              width={256}
              height={256}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>,
        ]}
      />
      <div className='flex-1' />
      {children}
    </div>
  )
}

const PageFour = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <p
            key={1}
            className='text-4xl'
          >
            PageFour Our timeline
          </p>,
          <p
            key={2}
            className='text-lg'
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </p>,
        ]}
      />
      {children}
    </div>
  )
}

const PageFive = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        once
        childrens={[<Calendar key={1} />]}
      />
      {children}
    </div>
  )
}

const PageSix = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <p
            key={1}
            className='text-4xl'
          >
            PageSix specific date time, location
          </p>,
          <p
            key={2}
            className='text-lg'
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </p>,
        ]}
      />
      {children}
    </div>
  )
}

const PageSeven = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <p
            key={1}
            className='text-4xl'
          >
            PageSeven Album
          </p>,
          <p
            key={2}
            className='text-lg'
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </p>,
        ]}
      />
      {children}
    </div>
  )
}

const PageEight = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[<ReservationForm key={1} />]}
        once
      />
      {children}
    </div>
  )
}

const PageNine = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-[50vh] w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <Image
        className='absolute z-0 p-8 opacity-30'
        src={ImgRose}
        alt='ImgRose'
        placeholder='blur'
        width={270}
        height={480}
      />
      <div className='z-30 flex flex-1 flex-col items-center justify-center'>
        <ScrollReveal
          childrens={[
            <p
              key={1}
              className={`p-8 text-6xl font-bold md:text-8xl ${euphoria.className}`}
            >
              Thank you
            </p>,
            <p
              key={2}
              className='text-md md:text-xl'
            >
              {`Quang và Ly rất vui và hạnh phúc vì sự góp mặt của mọi người`}
            </p>,
          ]}
        />
      </div>
      <div className='w-screen bg-[#708871] p-4 pb-16 text-white md:pb-4'>
        <p className='text-lg md:text-xl'>
          Copy right ©2024 created with ❤️ by Quang & Ly
        </p>
      </div>
      {children}
    </div>
  )
}

export default Page
