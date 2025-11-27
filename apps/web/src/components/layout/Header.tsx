'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'A Propos', href: '/about' },
    { name: 'Demander un devis', href: '/demander-devis' },
  ]

  return (
    <header className="fixed w-full bg-white border-b border-gray-100 z-50">
      <nav className="container-custom mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/logo.png" alt="Manguini" width={150} height={40} className="h-10 w-auto" /> */}
          <div className="flex items-center text-secondary">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-2xl font-bold ml-2">Manguini</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-secondary'
                  : 'text-primary hover:text-secondary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/inscription"
            className="bg-secondary hover:bg-secondary-light text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Inscription
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden">
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-secondary'
                      : 'text-primary hover:text-secondary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/inscription"
                className="block bg-secondary hover:bg-secondary-light text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Inscription
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 