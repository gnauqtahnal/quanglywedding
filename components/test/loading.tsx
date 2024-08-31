import { sacramento } from '@/ui/fonts'
import clsx from 'clsx'

const LoadingPage = () => {
  return (
    <div
      className={clsx(
        'fixed w-screen h-screen',
        'flex items-center justify-center',
        sacramento.className,
      )}
    >
      Loading...
    </div>
  )
}

export default LoadingPage
