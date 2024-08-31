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
    <FlexColCenterStart className='relative text-wed1 min-h-screen w-screen text-lg md:text-xl'>
      <SecCover />
      <FlexColCenterStart className='relative bg-gradient-to-b from-wed3 to-wed2 w-screen'>
        <SecIntro />
        <SecDateTime />
        <SecAlbum />
        <SecReservation />
        <SecFooter />
      </FlexColCenterStart>
    </FlexColCenterStart>
  )
}

export default HomePage
