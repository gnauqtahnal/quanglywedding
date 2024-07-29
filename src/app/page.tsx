import Calendar from "./calendar"
import CoverParallax from "./cover-parallax"
import SvgHeart from "./svg"

export default function Home() {
  return (
    <main className="bg-[#fef8f0]">
      <CoverParallax />
      <Calendar />
      <div className="h-screen w-screen" />
    </main>
  )
}
