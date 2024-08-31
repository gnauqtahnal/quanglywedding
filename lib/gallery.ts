import img1073 from '@/public/images/1073.jpg'
import img1130 from '@/public/images/1130.jpg'
import img1222 from '@/public/images/1222.jpg'
import img1283 from '@/public/images/1283.jpg'
import img194 from '@/public/images/194.jpg'
import img244 from '@/public/images/244.jpg'
import img286 from '@/public/images/286.jpg'
import img520 from '@/public/images/520.jpg'
import img638 from '@/public/images/638.jpg'
import img666 from '@/public/images/666.jpg'
import img729 from '@/public/images/729.jpg'
import img78 from '@/public/images/78.jpg'
import { StaticImageData } from 'next/image'

export interface GalleryProps {
  id: number
  src: StaticImageData
}

export const gallery = [
  { id: 0, src: img78 },
  { id: 1, src: img194 },
  { id: 2, src: img244 },
  { id: 3, src: img286 },
  { id: 4, src: img520 },
  { id: 5, src: img638 },
  { id: 6, src: img666 },
  { id: 7, src: img729 },
  { id: 8, src: img1073 },
  { id: 9, src: img1130 },
  { id: 10, src: img1222 },
  { id: 11, src: img1283 },
]

export const getGalleryImages = () => {
  return gallery
}

export const getGalleryImageFromId = (id: number) => {
  const image = gallery.find((value) => value.id === id)
  return image ? image : gallery[0]
}

export const getGalleryLength = () => {
  return gallery.length
}
