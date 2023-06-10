import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { DownloadCall } from '@/components/DownloadCall'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Grid } from '@/components/Grid'

import { Features } from '@/components/Features'

export default async function Home() {
  return (
    <div className="max-w-screen w-full min-h-screen bg-bgColor font-clash">
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
