import Image from 'next/image'

import logo from '@/images/logos/bts-logo-gold.png'

export function Logo(props) {
  return (
    <Image
      {...props}
      src={logo}
      alt="balanced tax solutions logo"
      unoptimized
    />
  )
}
