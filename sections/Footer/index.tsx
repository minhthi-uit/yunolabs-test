'use client'

import Logo from '@/components/Logo'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-beige py-12 md:py-16">
      <div className="paddingX mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and Navigation */}
          <div className="lg:col-span-6">
            <Link href="/" className="block mb-8">
              <Logo variant='light' />
            </Link>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-body md:text-menu font-medium">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-300">Blog</Link>
              <span>/</span>
              <Link href="/concerns" className="hover:text-gray-300">Concerns</Link>
              <span>/</span>
              <Link href="/treatments" className="hover:text-gray-300">Treatments</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-gray-300">Shop</Link>
              <span>/</span>
              <Link href="/locate-us" className="hover:text-gray-300">Locate Us</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-tag font-medium mb-2">CONTACT US</h3>
              <Link href="tel:+0280063344" className="text-titleMd font-medium hover:text-gray-300">
                +02 8006 3344
              </Link>
            </div>
            <div>
              <h3 className="text-tag mb-2 font-medium">EMAIL</h3>
              <Link href="mailto:robert@cosmedixclinics.com.au" className="hover:text-gray-300 text-body font-normal">
                robert@cosmedixclinics.com.au
              </Link>
            </div>
          </div>

          {/* Address and Hours */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-tag font-medium mb-2">ADDRESS</h3>
              <p className='text-body font-normal'>169 William Street - Darlinghurst<br />Sydney, NSW</p>
            </div>
            <div>
              <h3 className="text-tag font-medium mb-2">OPENING HOURS</h3>
              <p className="text-titleMd font-medium">9am—6pm</p>
              <div className="flex gap-6 mt-16">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Youtube className="w-6 h-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <span className="text-tag mt-auto">
                  © 2024 — COPYRIGHT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

