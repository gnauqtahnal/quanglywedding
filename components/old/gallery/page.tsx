import img1039 from '@/public/images/1039.jpg'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='w-screen min-h-screen bg-[#BEC6A0]'>
      {/* Background image */}
      <div className='absolute z-0 w-screen h-auto flex items-center justify-center'>
        <Image
          src={img1039}
          alt={'background'}
          priority
          placeholder='blur'
          sizes='(min-width 512) 30vw'
          className='w-auto h-screen object-cover brightness-90'
        />
      </div>
      {/* Main text */}
      <div className='absolute w-screen h-screen flex flex-col items-center justify-center md:text-5xl text-3xl z-30 text-white font-bold'>
        <div className='bg-black/30 rounded-xl p-4 flex flex-col items-center justify-center backdrop-blur-2xl gap-4'>
          <div>OUR PHOTOBOOK</div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-row'>
              <div>Quang&nbsp;</div>
              <div>S2</div>
              <div>&nbsp;Ly</div>
            </div>
            <div className='border-2 p-2 w-full flex items-center justify-center'>
              09 2024
            </div>
          </div>
        </div>
      </div>
      {/* Some preview images */}
      <div className='absolute z-30 w-screen flex flex-row items-center justify-center gap-2 bottom-[calc(10%)]'>
        <div className='w-[calc(30%)] md:w-[calc(15%)] aspect-square bg-black/30 backdrop-blur-2xl'></div>
        <div className='w-[calc(30%)] md:w-[calc(15%)] aspect-square bg-black/30 backdrop-blur-2xl'></div>
        <div className='w-[calc(30%)] md:w-[calc(15%)] aspect-square bg-black/30 backdrop-blur-2xl'></div>
      </div>
    </div>
  )
}
