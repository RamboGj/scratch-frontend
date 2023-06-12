import { Footer } from '@/components/Home/Footer'
import { FAQ } from '@/components/Home/FAQ'
import { DownloadCall } from '@/components/Home/DownloadCall'
import { Header } from '@/components/Home/Header'
import { Hero } from '@/components/Home/Hero'
import { Grid } from '@/components/Home/Grid'
import { Features } from '@/components/Home/Features'

export default async function Home() {
  return (
    <div className="w-full bg-bgColor font-clash">
      <Header />
      <Hero />
      <Grid />
      <Features />
      <DownloadCall />
      <FAQ />
      <Footer />
    </div>
  )
}
