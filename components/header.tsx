"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, BookOpen, UserPlus, Calendar, Info, Heart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update the navItems array to match the requested structure
  const navItems = [
    // { name: "Home", href: "/", icon: Home },
    { name: "Academics", href: "/academics", icon: BookOpen },
    { name: "Enrollment", href: "/enrollment", icon: UserPlus },
    { name: "Events & News", href: "/events", icon: Calendar },
    { name: "About Us", href: "/about", icon: Info },
    // { name: "Donate", href: "/donate", icon: Heart },
  ]

  // Update the secondaryItems array to include only Parent Portal
  const secondaryItems = [{ name: "Parent Portal", href: "/parent-portal", icon: User }]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-[#E5E5E5] rounded-full px-6 py-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-full.png" alt="Cordoba Academy Logo" width={50} height={50} />
              <span className="text-[#333333] font-medium text-lg">Cordoba Academy</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto">
                  <Menu size={24} className="text-[#333333]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#FFF2E6] w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-[#E5D5C5]">
                    <div className="flex items-center gap-2">
                      <Image src="/logo.png" alt="Cordoba Academy Logo" width={30} height={30} />
                      <span className="text-[#333333] font-medium">Cordoba Academy</span>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto" onClick={() => setMobileMenuOpen(false)}>
                      <X size={24} className="text-[#333333]" />
                      <span className="sr-only">Close menu</span>
                    </Button>
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
                                active ? "bg-[#E5D5C5] text-[#333333]" : "text-[#666666] hover:bg-[#E5D5C5]/50"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <IconComponent size={20} className={active ? "text-[#FF4A00]" : "text-[#969696]"} />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                      <li className="border-t border-[#E5D5C5] mt-4 pt-4">
                        {secondaryItems.map((item) => {
                          const active = isActive(item.href)
                          const IconComponent = item.icon

                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                                active ? "bg-[#E5D5C5] text-[#333333]" : "text-[#666666] hover:bg-[#E5D5C5]/50"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <IconComponent size={20} className={active ? "text-[#FF4A00]" : "text-[#969696]"} />
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
                      className={`flex items-center gap-1.5 ${active ? "text-[#333333]" : "text-[#969696] hover:text-[#333333]"}`}
                    >
                      <IconComponent size={18} className={active ? "text-[#FF4A00]" : "text-[#969696]"} />
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

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-1.5 ${
                      active ? "text-[#333333]" : "text-[#969696] hover:text-[#333333]"
                    }`}
                  >
                    <IconComponent size={18} className={active ? "text-[#FF4A00]" : "text-[#969696]"} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              <Link href="/donate">
                <Button className="bg-[#FF4A00] hover:bg-[#B05834] text-white">Donate</Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
