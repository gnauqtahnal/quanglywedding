import { ButtonLayer } from './ButtonLayer'
import { ImageLayer } from './ImageLayer'
import { getGalleryLength } from '@/lib/gallery'
import clsx from 'clsx'

export default function Page({
  searchParams,
}: {
  searchParams: { id: number; direction: number }
}) {
  const id = Number(searchParams.id) || 0
  const direction = Number(searchParams.direction) || 1
  const maxId = getGalleryLength()

  return (
    <div
      className={clsx(
        'w-screen h-screen overflow-hidden',
        'bg-gradient-to-b from-black/80 to-black/90',
      )}
    >
      <ImageLayer
        id={id}
        maxId={maxId}
        direction={direction}
      />
      <ButtonLayer
        id={id}
        maxId={maxId}
      />
    </div>
  )
}
