import {
  ScrollReveal,
  ScrollRevealFromLeft,
  ScrollRevealFromRight,
} from '@/components/scroll/reveal'
import CountDown from '@/ui/count-down'
import { send_flowers } from '@/ui/fonts'
import { MapPinIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const SecDateTime = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'w-screen p-4 text-lg md:text-xl',
        className,
      )}
    >
      <div
        className={clsx('text-4xl md:text-5xl', send_flowers.className, 'py-4')}
      >{`Sự kiện`}</div>
      <div className='mt-4 mb-8 w-[calc(10vw)] border-t' />

      <ScrollReveal className='flex flex-col md:flex-row w-screen items-center justify-center gap-8'>
        <ScrollRevealFromLeft>
          <SecDateGroom
            className={clsx(
              'md:w-[calc(40vw)] md:h-[calc(80vh)]',
              'w-[calc(80vw)] h-[calc(60vh)]',
            )}
          />
        </ScrollRevealFromLeft>
        <ScrollRevealFromRight>
          <SecDateBride
            className={clsx(
              'md:w-[calc(40vw)] md:h-[calc(80vh)]',
              'w-[calc(80vw)] h-[calc(60vh)]',
            )}
          />
        </ScrollRevealFromRight>
      </ScrollReveal>

      <ScrollReveal>
        <ScrollRevealFromLeft>
          <Calendar />
        </ScrollRevealFromLeft>
      </ScrollReveal>

      <ScrollReveal>
        <ScrollRevealFromLeft>
          <div className='pt-4 text-lg md:text-xl'>{`cùng chúng mình đếm ngược khoảnh khắc này nhé`}</div>
        </ScrollRevealFromLeft>
        <ScrollRevealFromRight>
          <CountDown />
        </ScrollRevealFromRight>
      </ScrollReveal>
    </div>
  )
}

const SecDateGroom = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'bg-gradient-to-b from-wed1/50 to-wed1/0 rounded-xl p-2',
        className,
      )}
    >
      <div
        className={clsx(
          'flex flex-col',
          'w-full h-full',
          'bg-gradient-to-b from-wed3/90 to-wed2/0 rounded-t-xl p-4 pb-10',
        )}
      >
        <div
          className={clsx(
            send_flowers.className,
            'text-4xl md:text-5xl font-bold',
            'border-b border-wed1/50 pb-2',
          )}
        >
          Lễ Vu Quy
        </div>

        <div className=''>được tổ chức vào lúc</div>
        <div className='flex flex-col items-center justify-center'>
          <div
            className={clsx(
              send_flowers.className,
              'text-4xl md:text-5xl py-4',
            )}
          >
            9h00
          </div>
          <div className='grid grid-cols-3'>
            <div className='flex flex-col items-center justify-center border-r border-wed1/50 px-3'>
              <div className=''>chủ</div>
              <div className=''>nhật</div>
            </div>
            <div className='flex flex-col items-center justify-center px-3'>
              <div className=''>ngày 22</div>
              <div className=''>2024</div>
            </div>
            <div className='flex flex-col items-center justify-center border-l border-wed1/50 px-3'>
              <div className=''>tháng</div>
              <div className=''>9</div>
            </div>
          </div>
        </div>
        <div className='py-4 text-wed1/60 pb-2 border-b border-wed1/50'>{`nhằm ngày 20 tháng 8 Giáp Thìn`}</div>
        <div className='pt-2'>tại Tư Gia</div>
        <div className='mt-4'>Định Mỹ, Thoại Sơn, An Giang</div>

        <div className='flex flex-1' />
        <div className='flex flex-col w-full items-center justify-center'>
          <a
            href='https://maps.app.goo.gl/jT5b4xb2qViXJAidA'
            target='_blank'
          >
            <button className='p-4 flex flex-row items-center justify-center rounded-xl hover:bg-wed3 transition'>
              <MapPinIcon className='w-8 h-8' />
              <div>xem bản đồ</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

const SecDateBride = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'bg-gradient-to-b from-wed1/50 to-wed1/0 rounded-xl p-2',
        className,
      )}
    >
      <div
        className={clsx(
          'flex flex-col',
          'w-full h-full',
          'bg-gradient-to-b from-wed3/90 to-wed2/0 rounded-t-xl p-4 pb-10',
        )}
      >
        <div
          className={clsx(
            send_flowers.className,
            'text-4xl md:text-5xl font-bold',
            'border-b border-wed1/50 pb-2',
          )}
        >
          Lễ Tân Hôn
        </div>

        <div className=''>được tổ chức vào lúc</div>
        <div className='flex flex-col items-center justify-center'>
          <div
            className={clsx(
              send_flowers.className,
              'text-4xl md:text-5xl py-4',
            )}
          >
            9h00
          </div>
          <div className='grid grid-cols-3'>
            <div className='flex flex-col items-center justify-center border-r border-wed1/50 px-3'>
              <div className=''>thứ</div>
              <div className=''>sáu</div>
            </div>
            <div className='flex flex-col items-center justify-center px-3'>
              <div className=''>ngày 27</div>
              <div className=''>2024</div>
            </div>
            <div className='flex flex-col items-center justify-center border-l border-wed1/50 px-3'>
              <div className=''>tháng</div>
              <div className=''>9</div>
            </div>
          </div>
        </div>
        <div className='py-4 text-wed1/60 border-b border-wed1/50 pb-2'>
          nhằm ngày 25 tháng 8 Giáp Thìn
        </div>
        <div className='pt-2'>tại Amor Resort</div>
        <div className=''>sảnh Glamour (lầu 3)</div>
        <div className='mt-4'>61A Nguyễn Văn Đậu, Phường 6, Bình Thạnh</div>
        <div className=''>TP. Hồ Chí Minh</div>

        <div className='flex flex-1' />
        <div className='flex flex-col w-full items-center justify-center'>
          <a
            href='https://maps.app.goo.gl/6sR9vh3KykRpodTA8'
            target='_blank'
          >
            <button className='p-4 flex flex-row items-center justify-center rounded-xl hover:bg-wed3 transition'>
              <MapPinIcon className='w-8 h-8' />
              <div>xem bản đồ</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

const Calendar = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex w-screen flex-col items-center justify-center p-4',
        className,
      )}
    >
      <div
        className={clsx(
          'p-4 rounded-md overflow-hidden',
          'bg-gradient-to-b from-wed3/90 to-wed2/0 rounded-t-xl p-4 pb-10',
          'text-lg md:text-xl',
        )}
      >
        <div
          className={clsx(
            'text-4xl md:text-5xl',
            'p-4',
            send_flowers.className,
          )}
        >
          Tháng 9 - 2024
        </div>

        <div className='grid grid-cols-1 grid-rows-1'>
          <div className='grid grid-cols-7 grid-rows-1 gap-x-2 text-center border-b border-wed1/50'>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
            <div>SUN</div>
          </div>
          <div className='grid grid-cols-7 grid-rows-5 gap-x-2 text-center'>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>1</div>

            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>

            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>

            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div className='flex aspect-square items-center justify-center rounded-full border bg-wed3 text-wed1'>
              <div>22</div>
            </div>

            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div className='flex aspect-square items-center justify-center rounded-full border bg-wed3 text-wed1'>
              <div>27</div>
            </div>
            <div>28</div>
            <div>29</div>

            <div>30</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  )
}
