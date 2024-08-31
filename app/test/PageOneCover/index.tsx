import { PageProps } from '../types'
import img687 from '@/public/images/687.jpg'
import { euphoria, sacramento } from '@/ui/fonts'
import { ScrollRevealChildWrap, ScrollRevealWrap } from '@/ui/scroll-reveal'
import clsx from 'clsx'
import Image from 'next/image'

const BackgroundImage = () => {
  return (
    <div className='absolute w-screen h-screen overflow-hidden flex items-center justify-center z-0 pointer-events-none'>
      <div className='absolute w-screen top-[calc(70vh)] h-[calc(30vh)] z-30 bg-gradient-to-b from-[#BEC6A0]/0 to-[#708871]/100' />
      <Image
        src={img687}
        alt='background'
        placeholder='blur'
        className={clsx('w-screen h-screen object-cover brightness-75 z-10')}
      />
    </div>
  )
}

export const PageOneCover = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center text-[#FEF3E2]',
        className,
      )}
    >
      <BackgroundImage />
      <ScrollRevealWrap className='z-30 absolute top-[calc(1vh)] text-left'>
        <ScrollRevealChildWrap>
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
        </ScrollRevealChildWrap>
      </ScrollRevealWrap>
      {children}
    </div>
  )
}
