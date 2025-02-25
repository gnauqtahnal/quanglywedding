import { createReservationForm } from '@/lib/actions'

const ReservationForm = () => {
  return (
    <form action={createReservationForm}>
      <div className='w-full rounded-md bg-[#708871] p-4 text-left text-lg md:w-[50vw] md:text-xl'>
        {/* input field for name */}
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='mb-2 block font-medium text-white'
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
                className='peer block w-full rounded-md border border-gray-200 bg-[#FEF3E2] p-2 outline-2 placeholder:text-gray-500'
                required
              />
            </div>
          </div>
        </div>
        {/* input field for the wish */}
        <div className='mb-4'>
          <label
            htmlFor='wish'
            className='mb-2 block font-medium text-white'
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
                className='peer block h-[20vh] w-full rounded-md border border-gray-200 bg-[#FEF3E2] p-2 outline-2 placeholder:text-gray-500'
              />
            </div>
          </div>
        </div>
        {/* reservation confirm checkbox */}
        <fieldset>
          <legend className='mb-2 block font-medium text-white'>
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
                  className='ml-2 flex cursor-pointer items-center font-medium text-white'
                >
                  Mình chắc chắn có mặt
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {/* submit button */}
        <div className='mt-6 flex justify-end gap-4'>
          <button type='submit'>Gửi lời nhắn</button>
        </div>
      </div>
    </form>
  )
}

export default ReservationForm
