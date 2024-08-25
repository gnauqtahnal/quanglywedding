import Footer from '@/app/footer'
import Header from '@/app/header'
import Calendar from '@/app/ui/calendar'
import { send_flowers } from '@/app/ui/fonts'
import ReservationForm from '@/app/ui/reservation-form'
import { TextMd, TextXl } from '@/app/ui/text'
import ImgHeart from '@/public/finger-print-heart-red.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-[#586948]'>
      <Header />

      <Calendar />

      <div className='flex min-h-screen w-screen flex-col text-center align-middle text-xl md:text-2xl'>
        <div className='z-30 my-8 flex w-screen flex-col justify-center text-center text-[#f47aac]'>
          <TextXl className='mb-8'>Lễ Vu Quy</TextXl>
          <TextMd className=''>của</TextMd>
          <div className='flex flex-row items-center justify-center'>
            <TextXl className={`${send_flowers.className}`}>Ly</TextXl>
            <Image
              src={ImgHeart}
              alt='finger-print-heart'
              width={128}
              height={128}
            />
            <TextXl className={`${send_flowers.className}`}>Quang</TextXl>
          </div>

          <TextMd className='mt-8'>được tổ chức vào lúc</TextMd>
          <div className='m-2 flex flex-col items-center justify-center text-2xl md:m-4 md:text-4xl'>
            <div className='grid grid-cols-3'>
              <div className='flex flex-col items-center justify-center border-r border-[#f47aac]'>
                <TextMd className=''>chủ</TextMd>
                <TextMd className=''>nhật</TextMd>
              </div>
              <div className='m-[32px] flex flex-col items-center justify-center'>
                <TextMd className=''>9h00</TextMd>
                <TextXl className=''>22</TextXl>
                <TextMd className=''>2024</TextMd>
              </div>
              <div className='flex flex-col items-center justify-center border-l border-[#f47aac]'>
                <TextMd className=''>tháng</TextMd>
                <TextMd className=''>9</TextMd>
              </div>
            </div>
          </div>
          <TextMd className=''>(nhằm ngày 20 tháng 8 Giáp Thìn)</TextMd>

          <TextMd className='mt-8'>tại</TextMd>
          <TextXl className=''>Tư Gia</TextXl>

          <TextMd className='mt-8'>Định Mỹ, Thoại Sơn, An Giang</TextMd>
        </div>

        <div className='z-30 my-8 flex w-screen flex-col justify-center text-center'>
          <TextXl className='mb-8'>Lễ Tân Hôn</TextXl>
          <TextMd className=''>của</TextMd>
          <div className='flex flex-row items-center justify-center'>
            <TextXl className={`${send_flowers.className}`}>Quang</TextXl>
            <Image
              src={ImgHeart}
              alt='finger-print-heart'
              width={128}
              height={128}
            />
            <TextXl className={`${send_flowers.className}`}>Ly</TextXl>
          </div>

          <TextMd className='mt-8'>được tổ chức vào lúc</TextMd>
          <div className='m-2 flex flex-col items-center justify-center text-2xl md:m-4 md:text-4xl'>
            <div className='grid grid-cols-3'>
              <div className='flex flex-col items-center justify-center border-r border-[#586948]'>
                <TextMd className=''>thứ</TextMd>
                <TextMd className=''>sáu</TextMd>
              </div>
              <div className='m-[32px] flex flex-col items-center justify-center'>
                <TextMd className=''>18h00</TextMd>
                <TextXl className=''>27</TextXl>
                <TextMd className=''>2024</TextMd>
              </div>
              <div className='flex flex-col items-center justify-center border-l border-[#586948]'>
                <TextMd className=''>tháng</TextMd>
                <TextMd className=''>9</TextMd>
              </div>
            </div>
          </div>
          <TextMd className=''>(nhằm ngày 25 tháng 8 Giáp Thìn)</TextMd>

          <TextMd className='mt-8'>tại trung tâm tiệc cưới</TextMd>
          <TextXl className=''>Amor Resort</TextXl>
          <TextMd className=''>sảnh Glamour (lầu 3)</TextMd>

          <TextMd className='mt-8'>
            61A Nguyễn Văn Đậu, Phường 6, Bình Thạnh
          </TextMd>
          <TextMd className=''>TP. Hồ Chí Minh</TextMd>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <ReservationForm />
      </div>

      <Footer />
    </main>
  )
}
