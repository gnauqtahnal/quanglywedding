import { FlexColCenterCenter } from '@/components/Flex'
import { ScrollReveal, ScrollRevealFromLeft } from '@/components/scroll/reveal'
import ImgRose from '@/public/rose.png'
import { euphoria } from '@/ui/fonts'
import clsx from 'clsx'
import Image from 'next/image'

export const SecFooter = ({ className }: { className?: string }) => {
  return (
    <FlexColCenterCenter className={clsx('w-screen h-[500px]', className)}>
      <Image
        className='absolute z-0 p-8 opacity-20'
        src={ImgRose}
        alt='ImgRose'
        placeholder='blur'
        width={270}
        height={480}
      />
      <FlexColCenterCenter className='z-30 flex-1'>
        <ScrollReveal>
          <ScrollRevealFromLeft>
            <p
              key={1}
              className={clsx(
                'p-8 text-7xl font-bold md:text-8xl',
                euphoria.className,
              )}
            >
              {`Thank you`}
            </p>
            <p
              key={2}
              className='text-lg md:text-xl'
            >
              {`Quang và Ly rất vui và hạnh phúc vì sự góp mặt của mọi người`}
            </p>
          </ScrollRevealFromLeft>
        </ScrollReveal>
      </FlexColCenterCenter>
      <FlexColCenterCenter>
        <p className='text-lg md:text-xl p-4'>
          Copy right ©2024 created with ❤️ by Quang & Ly
        </p>
      </FlexColCenterCenter>
    </FlexColCenterCenter>
  )
}
