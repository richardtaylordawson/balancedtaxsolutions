import Head from 'next/head'

import HeaderBanner from '@/components/HeaderBanner'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ServicesAndPricing from '@/components/ServicesAndPricing'
import Testimonials from '@/components/Testimonials'
import Faqs from '@/components/Faqs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

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
        {/* <HeaderBanner /> */}
        <Hero />
        <About />
        <ServicesAndPricing />
        <Testimonials />
        <Faqs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
