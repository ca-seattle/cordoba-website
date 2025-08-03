"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Phone, BookOpen, UserPlus, Calendar, Info, Heart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update the navItems array to match the requested structure
  const navItems = [
    // { name: "Home", href: "/", icon: Home },
    { name: "Academics", href: "/academics", icon: BookOpen },
    { name: "Enrollment", href: "/enrollment", icon: UserPlus },
    // { name: "Events & News", href: "/events", icon: Calendar },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact Us", href: "/contact", icon: Phone },
  ]

  // Update the secondaryItems array to include Parent Portal and Donate
  const secondaryItems = [
    { name: "Parent Portal", href: "/parent-portal", icon: User },
    { name: "Donate", href: "/donate", icon: Heart },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-navbar-background rounded-full px-6 py-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-full.png" alt="Cordoba Academy Logo" width={50} height={50} />
              <span className="text-brand-text-dark font-medium text-lg">Cordoba Academy</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto">
                  <Menu size={24} className="text-brand-text-dark" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-brand-secondary w-[300px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center p-4 border-b border-navbar-border">
                    <div className="flex items-center gap-2">
                      <Image src="/logo-dome.png" alt="Cordoba Academy Logo" width={30} height={30} />
                      <span className="text-brand-text-dark font-medium">Cordoba Academy</span>
                    </div>
                  </div>
                  <nav className="flex-1 overflow-auto py-4">
                    <ul className="space-y-2 px-2">
                      {navItems.map((item) => {
                        const active = isActive(item.href)
                        const IconComponent = item.icon

                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                                active ? "bg-navbar-border text-brand-text-dark" : "text-brand-text-muted hover:bg-navbar-border/50"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <IconComponent size={20} className={active ? "text-brand-accent-orange" : "text-navbar-text"} />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                      <li className="border-t border-navbar-border mt-4 pt-4">
                        {secondaryItems.map((item) => {
                          const active = isActive(item.href)
                          const IconComponent = item.icon

                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                                active ? "bg-navbar-border text-brand-text-dark" : "text-brand-text-muted hover:bg-navbar-text/50"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <IconComponent size={20} className={active ? "text-brand-accent-orange" : "text-navbar-text"} />
                              <span>{item.name}</span>
                            </Link>
                          )
                        })}
                      </li>
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:justify-between md:flex-1 ml-6">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => {
                const active = isActive(item.href)
                const IconComponent = item.icon

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 ${active ? "text-brand-text-dark" : "text-navbar-text hover:text-brand-text-dark"}`}
                    >
                      <IconComponent size={18} className={active ? "text-brand-accent-orange" : "text-navbar-text"} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center space-x-4">
              {secondaryItems.map((item) => {
                const active = isActive(item.href)
                const IconComponent = item.icon

                // Special styling for Donate button in desktop view
                if (item.name === "Donate") {
                  return (
                    <Link key={item.name} href={item.href}>
                      <Button className="bg-brand-accent-orange hover:bg-brand-primary text-white">Donate</Button>
                    </Link>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-1.5 ${
                      active ? "text-brand-text-dark" : "text-navbar-text hover:text-brand-text-dark"
                    }`}
                  >
                    <IconComponent size={18} className={active ? "text-brand-accent-orange" : "text-navbar-text"} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
