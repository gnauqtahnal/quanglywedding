import Calendar from "./calendar"
import CountDown from "./count-down"
import CoverParallax from "./cover-parallax"

export default function Home() {
  return (
    <main className="bg-[#fef8f0]">
      <CoverParallax />
      <CountDown />
      <Calendar />
      <div className="h-screen w-screen" />
    </main>
  )
}
