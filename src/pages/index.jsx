import Head from "next/head"

import Hero from "@/components/Hero"
import About from "@/components/About"
import ServicesAndPricing from "@/components/ServicesAndPricing"
import Testimonials from "@/components/Testimonials"
import Faqs from "@/components/Faqs"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Tax Solutions - Tax Made Easy</title>
        <meta
          name="description"
          content="Personalized tax preparation services that fit your individual and business needs."
        />
      </Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KNP85N8M2P"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-KNP85N8M2P');
      </script>
      <main>
        <Hero />
        <About />
        <ServicesAndPricing />
        <Testimonials />
        <Faqs />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}
