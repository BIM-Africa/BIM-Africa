import PageSchema from "./Components/PageSchema";
import { withSocialMetadata } from "@/lib/seo";
import React from 'react'
import type { Metadata } from 'next'
import Home from './Components/Home'

export const metadata: Metadata = withSocialMetadata({
  title: 'Web Design Mauritius, Cybersecurity & Digital Support | BIM Africa',
  description: 'BIM Africa designs and develops websites for businesses in Mauritius, with website maintenance, cybersecurity and outsourced digital support. Discuss your project.',
  alternates: { canonical: 'https://bim.africa/' },
  openGraph: {
    title: 'Web Design Mauritius, Cybersecurity & Digital Support | BIM Africa',
    description: 'Website design and development, cybersecurity and digital support for businesses in Mauritius.',
    url: 'https://bim.africa',
    type: 'website',
    siteName: 'BIM Africa',
  },
})

export default function page() {
  return (
    <div
    >
      <PageSchema metadata={metadata} />
      <Home/>
    </div>
  )
}
