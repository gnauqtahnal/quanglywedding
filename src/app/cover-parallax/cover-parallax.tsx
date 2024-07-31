"use client"
import Image from "next/image"
import TRANGWD286_BACK from "@/../public/TRANGWD286_BACK.webp"
import TRANGWD286_FRONT from "@/../public/TRANGWD286_FRONT.webp"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const CoverParallax = () => {
  const backgroundRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start start", "end start"],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const frontY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section
      className="h-screen w-screen overflow-hidden"
      ref={backgroundRef}
    >
      <div className="grid-cols1 absolute z-10 grid h-screen w-screen grid-rows-3 md:grid-rows-4">
        <motion.div
          className="row-span-2 flex h-full w-full flex-col items-center justify-center"
          style={{
            y: textY,
          }}
        >
          <p className="inter text-center text-2xl text-[#663300] md:text-4xl">
            SAVE THE DATE
          </p>
          <p className="sacramento mb-8 text-center text-6xl text-[#663300] md:text-9xl">
            Quang & Ly
          </p>
          <p className="sacramento text-center text-2xl text-[#663300] md:text-4xl">
            27 - 09 - 2024
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute z-20 h-screen w-screen"
        style={{
          y: frontY,
        }}
      >
        <Image
          src={TRANGWD286_FRONT}
          alt="TRANGWD286_FRONT"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </motion.div>

      <div className="relative z-0 h-screen w-screen">
        <Image
          src={TRANGWD286_BACK}
          alt="TRANGWD286"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  )
}

export default CoverParallax
