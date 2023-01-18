import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import Faqs from '@/components/Faqs'
import Footer  from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Pricing  from '@/components/Pricing'
import Contact from '@/components/Contact'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Tax Solutions - Tax Made Easy</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
