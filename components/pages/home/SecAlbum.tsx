import { send_flowers } from '@/ui/fonts'
import clsx from 'clsx'

export const SecAlbum = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'w-screen flex flex-col items-center justify-start',
        className,
      )}
    >
      <div
        className={clsx('text-4xl md:text-5xl', send_flowers.className, 'py-4')}
      >{`Album hình cưới`}</div>
      <div className='mt-4 mb-8 w-[calc(10vw)] border-t' />
    </div>
  )
}
