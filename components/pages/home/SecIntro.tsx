import { ScrollReveal, ScrollRevealFromLeft } from '@/components/scroll/reveal'
import { HeartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const SecIntro = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center text-center align-middle',
        'text-lg md:text-xl p-4',
        className,
      )}
    >
      <ScrollReveal>
        <ScrollRevealFromLeft className='flex flex-col items-center justify-center'>
          <p>{`Đây là một chiếc thiệp handmade`}</p>
          <p>{`Chúng mình đã tạo ra để gửi một lời mời chân thành`}</p>
          <div>{`đến với những người mà chúng mình rất yêu quý`}</div>
          <HeartIcon className='w-6 h-6 text-red-500/60' />
        </ScrollRevealFromLeft>
      </ScrollReveal>
    </div>
  )
}
