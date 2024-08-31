import { FlexColCenterCenter } from '@/components/Flex'
import { ScrollReveal, ScrollRevealFromLeft } from '@/components/scroll/reveal'
import { HeartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const SecIntro = ({ className }: { className?: string }) => {
  return (
    <FlexColCenterCenter className={clsx('text-lg md:text-xl p-4', className)}>
      <ScrollReveal>
        <ScrollRevealFromLeft>
          <p>{`Đây là một chiếc thiệp handmade`}</p>
          <p>{`Chúng mình đã tạo ra để gửi một lời mời chân thành`}</p>
          <div className='flex flex-row'>
            {`đến với những người mà chúng mình rất yêu quý`}
            <HeartIcon className='w-6 h-6 ml-2' />
          </div>
        </ScrollRevealFromLeft>
      </ScrollReveal>
    </FlexColCenterCenter>
  )
}
