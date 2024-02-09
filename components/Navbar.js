import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="sticky top-10 mt-8 z-10 bg-[#262a2c] text-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
              <span className="text-2xl text-[#a688fa] font-semibold ">.Vishal</span>
              <div className="flex space-x-4 text-xl">
                  <Link className='hover:border-b-2 border-[#a688fa] transition' href="/">Home</Link>
                  <Link className='hover:border-b-2 border-[#a688fa] transition' href="/about">About</Link>
                  <a href="#">Projects</a>
                  <a href="#">Contact</a>
              </div>
              </div>
          </div>
        </nav>
    </div>
  )
}
