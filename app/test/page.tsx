import clsx from 'clsx'
import ScrollReveal from '@/app/ui/scroll-reveal'
import Logo from '@/app/ui/logo'

interface PageProps {
  className?: string
  children?: React.ReactNode
}

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center align-middle text-[#606676]'>
      <PageOne className='bg-[#BEC6A0]' />
      <PageTwo className='bg-[#FEF3E2]' />
    </div>
  )
}

const PageOne = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <Logo className='text-8xl' />,
          <p className='text-4xl'>PageOne</p>,
        ]}
      />
      {children}
    </div>
  )
}

const PageTwo = ({ className, children }: PageProps) => {
  return (
    <div
      className={clsx(
        'flex h-screen w-screen flex-col items-center justify-center',
        className,
      )}
    >
      <ScrollReveal
        childrens={[
          <p className='text-4xl'>PageTwo</p>,
          <p className='text-lg'>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </p>,
        ]}
      />
      {children}
    </div>
  )
}

export default Page
