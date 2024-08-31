import { ScrollReveal, ScrollRevealFromLeft } from '@/components/scroll/reveal'
import img687 from '@/public/images/687.jpg'
import { euphoria } from '@/ui/fonts'
import clsx from 'clsx'
import Image from 'next/image'

const BackgroundImage = () => {
  return (
    <div className='absolute w-screen h-screen overflow-hidden flex items-center justify-center z-0 pointer-events-none'>
      <div className='absolute w-screen top-[calc(70vh)] h-[calc(30vh)] z-30 bg-gradient-to-b from-wed3/0 to-wed3/100' />
      <Image
        src={img687}
        alt='background'
        placeholder='blur'
        className={clsx('w-screen h-screen object-cover z-10 opacity-90')}
      />
    </div>
  )
}

export const SecCover = ({ className, ...rest }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
      {...rest}
    >
      <BackgroundImage />
      <ScrollReveal className='z-30 absolute top-[calc(10vh)] text-left'>
        <ScrollRevealFromLeft>
          <div className='flex flex-row items-center justify-center'>
            <p
              className={`text-[16rem] md:text-[16rem] ${euphoria.className} mr-[22px]`}
            >
              Q
            </p>
            <div className='flex flex-col justify-center items-start'>
              <p
                className={`text-[8rem] md:text-[8rem] ${euphoria.className} leading-[6rem]`}
              >
                uang
              </p>
              <p
                className={`text-[8rem] md:text-[8rem] ${euphoria.className} leading-[6rem]`}
              >
                y
              </p>
              <p className='text-right w-full mt-2'>September 2024</p>
            </div>
          </div>
        </ScrollRevealFromLeft>
      </ScrollReveal>
    </div>
  )
}
