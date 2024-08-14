import clsx from 'clsx'

export interface TextProps
  extends React.TextareaHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function TextMd({ children, className, ...rest }: TextProps) {
  return (
    <p
      {...rest}
      className={clsx(
        'text-center align-middle text-xl md:text-2xl',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function TextXl({ children, className, ...rest }: TextProps) {
  return (
    <p
      {...rest}
      className={clsx(
        'text-center align-middle text-6xl md:text-8xl',
        className,
      )}
    >
      {children}
    </p>
  )
}

export const TextBoxXl = ({ children, className, ...reset }: TextProps) => {
  return (
    <TextXl
      {...reset}
      className={clsx('h-[70px] w-[35px] md:h-[100px] md:w-[50px]', className)}
    >
      {children}
    </TextXl>
  )
}
