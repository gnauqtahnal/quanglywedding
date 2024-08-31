'use client'
import { getGalleryImages } from '@/lib/gallery'
import { send_flowers } from '@/ui/fonts'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

export const SecAlbum = ({ className }: { className?: string }) => {
  const images = getGalleryImages()

  return (
    <div
      className={clsx(
        'w-screen flex flex-col items-center justify-center pb-8',
        className,
      )}
    >
      <div
        className={clsx(
          'text-4xl md:text-5xl',
          send_flowers.className,
          'py-4',
          'w-screen flex items-center justify-center',
        )}
      >{`Album hình cưới`}</div>
      <div className='mt-4 mb-8 w-[calc(10vw)] border-t' />

      <Masonry
        breakpointCols={{
          default: 4,
          1200: 4,
          512: 2,
        }}
        className='w-screen flex pr-2'
        columnClassName='pl-2'
      >
        {images.map((image) => {
          return (
            <Link href={`/carousel?id=${image.id}&direction=1`}>
              <Image
                key={image.id}
                src={image.src}
                alt='gallery'
                className='rounded-xl mb-2'
              />
            </Link>
          )
        })}
      </Masonry>
    </div>
  )
}
