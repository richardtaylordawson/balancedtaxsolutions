import Head from "next/head"
import Script from "next/script"

import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Balanced Tax Solutions - Not Found</title>
        <meta name="description" content="Page not found" />
        <meta
          name="keywords"
          content="taxes, irs, tax made easy, simple, business, small business"
        />
        <meta name="author" content="Richard Taylor Dawson" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Balanced Tax Solutions" />
        <meta property="og:site_name" content="Balanced Tax Solutions" />
        <meta itemProp="name" content="Balanced Tax Solutions" />
        <meta name="twitter:title" content="Balanced Tax Solutions" />
        <meta name="twitter:text:title" content="Balanced Tax Solutions" />
        <meta name="twitter:image:alt" content="Balanced Tax Solutions" />
        <meta property="og:description" content="Page not found" />
        <meta itemProp="description" content="Page not found" />
        <meta name="twitter:description" content="Page not found" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balancedtaxsolutions.com/" />
        <meta
          property="og:image"
          content="https://balancedtaxsolutions.com/images/kylee-hero.jpg"
        />
        <meta
          itemProp="image"
          content="https://balancedtaxsolutions.com/images/kylee-hero.jpg"
        />
        <meta
          name="twitter:image"
          content="https://balancedtaxsolutions.com/images/kylee-hero.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="320" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=KNP85N8M2P`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNP85N8M2P', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main>
        <Hero notFound />
      </main>
      <Footer />
    </>
  )
}
