import clsx from 'clsx'

export const FlexColCenterCenter = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center text-center align-middle',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const FlexColCenterStart = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-start text-center align-middle',
        className,
      )}
    >
      {children}
    </div>
  )
}
