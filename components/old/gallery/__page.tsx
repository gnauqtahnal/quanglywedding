import Link from 'next/link'

export default function Page() {
  return (
    <div className='w-screen h-screen'>
      <Link href={`/gallery/carousel?id=0&direction=1`}>GoTo1</Link>
    </div>
  )
}
