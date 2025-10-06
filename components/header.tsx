"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "OUR WORK", href: "/our-work" },
    { label: "PROGRAMMES", href: "/programmes" },
    { label: "GET INVOLVED", href: "/get-involved" },
    { label: "BLOG", href: "/blog" },
  ]

  return (
    <>
      {/* Top bar with social icons */}
      <div className="bg-zinc-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-end gap-4 h-8 text-xs">
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Youtube className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="h-3.5 w-3.5" />
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="ml-4 h-6 text-xs bg-primary text-white border-primary hover:bg-primary/90"
            >
              #ForYouth
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <img src="/logo.jpg" alt="Emanate Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <div className="font-bold text-base leading-tight text-[#0a58ca]">EMANATE</div>
                <div className="h-0.5 w-8 bg-[#6b21a8] rounded mt-1 mb-1" />
                <div className="text-[10px] leading-tight text-[#0a58ca]">EVIDENCES MATTER</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/find-emanate">
                <Button variant="outline" size="sm" className="ml-2 bg-transparent">
                  FIND EMANATE
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/find-emanate"
                className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FIND EMANATE
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
