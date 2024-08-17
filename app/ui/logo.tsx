import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { euphoria } from '@/app/ui/fonts'

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Logo = ({ className = '', ...rest }: LogoProps) => {
  return (
    <div
      {...rest}
      className={clsx(`${euphoria.className} text-6xl`, className)}
    >
      <p>Q</p>
    </div>
  )
}

export default Logo
