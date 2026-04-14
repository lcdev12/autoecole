'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

const navLinks = [
  { label: 'Formations', href: '#formations' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'L\'école', href: '#equipe' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">AE</span>
            </div>
            <span className={`text-lg font-bold transition-colors ${scrolled || menuOpen ? 'text-brand-text' : 'text-white'}`}>
              {siteConfig.businessName}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  scrolled ? 'text-brand-muted' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-brand-muted hover:text-brand-blue' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-500 transition-colors shadow-sm"
            >
              S&apos;inscrire
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || menuOpen ? 'text-brand-text' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-brand-muted font-medium text-sm hover:text-brand-blue border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center justify-center gap-2 py-3 border border-brand-blue text-brand-blue rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 bg-brand-orange text-white text-center text-sm font-semibold rounded-lg"
            >
              S&apos;inscrire
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
