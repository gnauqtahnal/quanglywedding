import Calendar from "./calendar"
import CountDown from "./count-down"
import CoverParallax from "./cover-parallax"
import Footer from "./footer"

export default function Home() {
  return (
    <main className="bg-[#fef8f0] text-[#663300]">
      <CoverParallax />
      <Calendar />
      <CountDown />
      {/* <div className="h-[20vh] w-screen" /> */}
      <Footer />
    </main>
  )
}
