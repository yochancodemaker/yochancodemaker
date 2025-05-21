import Header from "@/components/header"
import News from "@/components/news"
import Activities from "@/components/activities"
import Equipment from "@/components/equipment"
import Schedule from "@/components/schedule"
import Footer from "@/components/footer"
import VideoModal from "@/components/video-modal"

export default function Home() {
  return (
    <main>
      <Header />
      <News />
      <Activities />
      <Equipment />
      <Schedule />
      <Footer />
      <VideoModal />
    </main>
  )
}
