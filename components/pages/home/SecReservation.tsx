import { createReservationForm } from '@/lib/actions'
import { send_flowers } from '@/ui/fonts'
import { HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const SecReservation = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex flex-col w-screen justify-start items-center',
        'text-lg md:text-xl',
        className,
      )}
    >
      <div
        className={clsx('text-4xl md:text-5xl', send_flowers.className, 'py-4')}
      >{`Sổ lưu bút`}</div>
      <div>{`Cám ơn các bạn rất nhiều vì đã gửi những`}</div>
      <div className='flex flex-row'>
        {`lời chúc tốt đẹp nhất đến với đám cưới của chúng mình`}
        <HeartIcon className='w-6 h-6 ml-2' />
      </div>
      <div className='mt-4 mb-8 w-[calc(10vw)] border-t' />

      <form action={createReservationForm}>
        <div
          className={clsx(
            'w-full rounded-md p-4 text-left md:w-[50vw]',
            'bg-gradient-to-b from-wed3/90 to-wed2/0 rounded-t-xl p-4 pb-10',
          )}
        >
          {/* input field for name */}
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='mb-2 block font-medium '
            >
              Tên của bạn
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Tên của bạn là ...'
                  className='peer block w-full rounded-md bg-wed1 border border-wed1/50 p-2 outline-2 placeholder:text-wed3/50 text-wed3'
                  required
                />
              </div>
            </div>
          </div>

          {/* input field for the wish */}
          <div className='mb-4'>
            <label
              htmlFor='wish'
              className='mb-2 block font-medium '
            >
              Lời nhắn của bạn
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='wish'
                  name='wish'
                  type='text'
                  placeholder='Lời nhắn của bạn là ...'
                  className='peer block h-[20vh] w-full rounded-md border border-wed1/50 bg-wed1 p-2 outline-2 placeholder:text-wed3/50 text-wed3'
                />
              </div>
            </div>
          </div>

          {/* reservation confirm checkbox */}
          <fieldset>
            <legend className='mb-2 block font-medium'>
              Bạn sẽ đến để tham dự buổi lễ của chúng mình chứ
            </legend>
            <div className='p-2'>
              <div className='flex flex-row items-center justify-start'>
                <input
                  id='join'
                  name='join'
                  type='checkbox'
                  value='join'
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-[#FEF3E2] text-gray-600 focus:ring-2'
                  defaultChecked
                />
                <div className='flex items-center'>
                  <label
                    htmlFor='join'
                    className='ml-2 flex cursor-pointer items-center font-medium'
                  >
                    Mình chắc chắn có mặt
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          {/* submit button */}
          <div className='mt-6 flex justify-end gap-4'>
            <button
              type='submit'
              className={clsx(
                'border rounded-xl px-4 py-2',
                'flex flex-row items-center justify-center',
                'hover:bg-wed3',
              )}
            >
              <PaperAirplaneIcon className='w-6 h-6' />
              <div>{`Gửi lời nhắn`}</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
