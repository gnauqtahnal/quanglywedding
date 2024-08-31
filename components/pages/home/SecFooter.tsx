import {
  ScrollReveal,
  ScrollRevealFromLeft,
  ScrollRevealFromRight,
} from '@/components/scroll/reveal'
import ImgRose from '@/public/rose.png'
import { sacramento, send_flowers, windsong } from '@/ui/fonts'
import clsx from 'clsx'
import Image from 'next/image'

export const SecFooter = ({ className }: { className?: string }) => {
  return (
    <div
      id='thank-you'
      className={clsx(
        'w-screen h-screen flex flex-col justify-center items-center',
        className,
      )}
    >
      <Image
        className='absolute z-0 p-8 opacity-20'
        src={ImgRose}
        alt='ImgRose'
        placeholder='blur'
        width={270}
        height={480}
      />
      <div className='flex flex-col justify-center items-center z-30 flex-1'>
        <ScrollReveal>
          <ScrollRevealFromLeft>
            <p
              className={clsx(
                'p-8 text-7xl font-bold md:text-8xl',
                send_flowers.className,
              )}
            >
              {`Thank you`}
            </p>
          </ScrollRevealFromLeft>
          <ScrollRevealFromRight>
            <div className='flex flex-row items-center justify-center'>
              <p className={clsx(sacramento.className, 'text-3xl md:5xl')}>
                &nbsp;Quang&nbsp;
              </p>
              <p>{`và`}</p>
              <p className={clsx(sacramento.className, 'text-3xl md:5xl')}>
                &nbsp;Ly&nbsp;
              </p>
              <p>{`rất vui và hạnh phúc`}</p>
            </div>
            <p>{`vì sự góp mặt của mọi người`}</p>
          </ScrollRevealFromRight>
        </ScrollReveal>
      </div>
      <div className='flex flex-col justify-center items-center py-8'>
        <p className='text-lg md:text-xl p-4'>
          Copy right ©2024 created with ❤️
        </p>
        <div className='flex flex-row justify-center items-center'>
          <p>by</p>
          <p className={clsx(sacramento.className, 'text-3xl md:5xl')}>
            &nbsp;Quang&nbsp;
          </p>
          <p>và</p>
          <p className={clsx(sacramento.className, 'text-3xl md:5xl')}>
            &nbsp;Ly&nbsp;
          </p>
        </div>
      </div>
    </div>
  )
}
