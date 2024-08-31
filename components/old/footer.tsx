import { windsong } from '@/ui/fonts'
import clsx from 'clsx'

const Footer = () => {
  return (
    <div className='flex h-[30vh] w-screen flex-col items-center justify-center text-center align-middle'>
      <p
        className={clsx(
          windsong.className,
          'mb-3 text-6xl md:mb-5 md:text-8xl',
        )}
      >
        Thank you
      </p>
      <p className='inter md:text4xl text-2xl'>
        Quang và Ly sẽ rất vui và hạnh phúc vì sự góp mặt của mọi người
      </p>
    </div>
  )
}

export default Footer
