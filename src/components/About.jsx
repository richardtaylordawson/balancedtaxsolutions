import Image from "next/image"
import Kylee from "@/images/kylee.png"

export default function About() {
  return (
    <div id="about" className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-tahiti-600">About Me</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Meet Kylee
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            {/* <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7">
                  <Image
                    className="hidden h-14 w-14 object-cover lg:block"
                    src={Kylee}
                    alt=""
                    style={{
                      height: '580px',
                      width: '400px',
                      top: '-175px',
                      right: '200px',
                    }}
                  />

                  <Image
                    className="h-14 w-14 object-cover lg:hidden"
                    src={Kylee}
                    alt=""
                    style={{
                      height: '100%',
                      width: '100%',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </figure>
            </div> */}
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                Hi, I’m Kylee! I’ve been doing taxes since 2017 and I LOVE what
                I do! I especially enjoy interacting with my clients to help
                them have the best tax preparation experience, while making sure
                we maximize refunds or reduce tax liabilities to keep every hard
                earned dollar in their pockets.
              </p>
            </div>
            <div className="prose-tahiti prose mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="text-lg text-gray-500">
                I started Balanced Tax Solutions to create a space where
                professional tax help is affordable and accessible for everyone.
              </p>
            </div>
            <div className="prose-tahiti prose mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="text-lg text-gray-500">
                Taxes can be complicated and confusing. It’s always my goal to
                take the stress out of tax season and simplify your tax
                experience to make it as painless and pleasant as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
