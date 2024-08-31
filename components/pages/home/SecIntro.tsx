import { FlexColCenterCenter } from '@/components/Flex'
import { ScrollReveal, ScrollRevealFromLeft } from '@/components/scroll/reveal'
import clsx from 'clsx'

export const SecIntro = ({ className }: { className?: string }) => {
  return (
    <FlexColCenterCenter className={clsx('text-lg md:text-xl p-4', className)}>
      <ScrollReveal>
        <ScrollRevealFromLeft>
          <p>{`Đây là một chiếc thiệp handmade`}</p>
          <p>{`Chúng mình đã tạo ra để gửi một lời mời chân thành`}</p>
          <p>{`đến với những người mà chúng mình rất yêu quý`}</p>
        </ScrollRevealFromLeft>
      </ScrollReveal>
    </FlexColCenterCenter>
  )
}
