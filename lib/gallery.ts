import img101 from '@/public/images/101.jpg'
import img1012 from '@/public/images/1012.jpg'
import img1073 from '@/public/images/1073.jpg'
import img1130 from '@/public/images/1130.jpg'
import img1173 from '@/public/images/1173.jpg'
import img1206 from '@/public/images/1206.jpg'
import img1222 from '@/public/images/1222.jpg'
import img1262 from '@/public/images/1262.jpg'
import { StaticImageData } from 'next/image'

export interface GalleryProps {
  id: number
  src: StaticImageData
}

export const gallery = [
  { id: 0, src: img101 },
  { id: 1, src: img1012 },
  { id: 2, src: img1073 },
  { id: 3, src: img1130 },
  { id: 4, src: img1173 },
  { id: 5, src: img1206 },
  { id: 6, src: img1222 },
  { id: 7, src: img1262 },
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
