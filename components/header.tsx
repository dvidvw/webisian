"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Selamat Datang di Website Kami!</h1>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <NavItem href="#" label="Beranda" />
              <NavItem href="#" label="Info OVO" />
              <NavItem href="#" label="Info Gopay" />
              <NavItem href="#" label="Info Dana" />
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <ul className="space-y-2 px-2">
            <MobileNavItem href="#" label="Beranda" onClick={toggleMenu} />
            <MobileNavItem href="#" label="Info OVO" onClick={toggleMenu} />
            <MobileNavItem href="#" label="Info Gopay" onClick={toggleMenu} />
            <MobileNavItem href="#" label="Info Dana" onClick={toggleMenu} />
          </ul>
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  )
}

function MobileNavItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="block py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-md font-medium transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  )
}
