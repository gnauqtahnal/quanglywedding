'use server'

import { FlexColCenterStart } from '@/components'
import {
  SecCover,
  SecFooter,
  SecIntro,
  SecDateTime,
  SecReservation,
  SecAlbum,
} from '@/components/pages/home'

const HomePage = () => {
  return (
    <div className='relative flex flex-col justify-start items-center text-wed1 min-h-screen w-screen text-lg md:text-xl overflow-hidden'>
      <SecCover />
      <div className='relative flex flex-col justify-center items-center bg-gradient-to-b from-wed3 to-wed2 w-screen'>
        <SecIntro />
        <SecDateTime />
        <SecAlbum />
        <SecReservation />
        <SecFooter />
      </div>
    </div>
  )
}

export default HomePage
