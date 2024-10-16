'use client'

import Link from 'next/link'

export default function Navbar() {

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">AI Automation</Link>
        <div className="space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}