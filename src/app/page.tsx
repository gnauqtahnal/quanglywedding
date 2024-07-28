import Image from "next/image"
import TRANGWD286 from "@/../public/TRANGWD286.jpg"

export default function Home() {
  return (
    <main className="bg-[#fef8f0]">
      <div className="grid-cols1 absolute z-10 grid h-screen w-screen grid-rows-3 md:grid-rows-4">
        <div className="row-span-2 flex h-full w-full flex-col items-center justify-center">
          <p className="text-center text-4xl text-[#9c9486] md:text-6xl">
            SAVE THE DATE
          </p>
          <p className="text-center text-6xl text-[#9c9486] md:text-9xl">
            Quang & Ly
          </p>
          <p className="text-center text-3xl text-[#9c9486] md:text-6xl">
            27 - 09 - 2024
          </p>
        </div>
      </div>

      <div className="relative z-0 h-screen w-screen bg-[#fef8f0]">
        <Image
          src={TRANGWD286}
          alt="TRANGWD286"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  )
}
