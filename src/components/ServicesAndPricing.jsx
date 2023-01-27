// TODO Features for packages
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Personal<br/>&nbsp',
    href: '#',
    price: '75 - 200',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
  },
  {
    name: 'Sole Proprietor<br/>(Schedule C)',
    href: '#',
    price: '150-275',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
  {
    name: 'Partnership<br/>(Multimember LLC)',
    href: '#',
    price: 300,
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'S-Corp<br/>&nbsp',
    href: '#',
    price: 350,
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
]

export default function ServicesAndPricing() {
  return (
    <div id="services-and-pricing" className="bg-tahiti-400 text-white">
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
            Services & Pricing
          </h1>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-6">
                <h2
                  className="text-lg font-medium leading-6 text-gray-900"
                  dangerouslySetInnerHTML={{ __html: tier.name }}
                ></h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-tahiti-900">
                    ${tier.price}
                  </span>{' '}
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-tahiti-700"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
