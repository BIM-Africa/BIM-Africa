import React from 'react'
import type { Metadata } from 'next'
import Home from './Components/Home'

export const metadata: Metadata = {
  alternates: { canonical: 'https://bim.africa' },
}

export default function page() {
  return (
    <div
    >
      <Home/>
    </div>
  )
}
