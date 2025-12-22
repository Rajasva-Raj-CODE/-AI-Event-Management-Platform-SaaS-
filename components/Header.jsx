import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
 <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
   <Link href="/" className="flex items-center">
            <Image
              src="/spott.png"
              alt="Spott logo"
              width={500}
              height={500}
              className="w-full h-11"
              priority
            />
            {/* Pro badge */}
            </Link>
            {/*Search & Location - Desktop Only */}
                <div className="hidden md:flex flex-1 justify-center">
            {/* <SearchLocationBar /> */}
          </div>
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium text-primary hover:underline">
                Log In
              </Link>
              <Link href="/signup" className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90">
                Sign Up
              </Link>
            </div>
        </div>
        {/* Mobile Search & Location - Below Header */}
    </nav>
    </>
  )
}

export default Header