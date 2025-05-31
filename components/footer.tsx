import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo-full.png" alt="Cordoba Academy Logo" width={60} height={60} />
              <span className="font-bold text-xl">Cordoba Academy</span>
            </div>
            <p className="text-[#CCCCCC] mb-4">
              Nurturing academic excellence and Islamic identity in a vibrant learning community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/cordoba.academySEA/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4D4D4D] p-2 rounded-full hover:bg-[#B05834] transition"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/cordoba_academy_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4D4D4D] p-2 rounded-full hover:bg-[#B05834] transition"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@cordobaacademyinfo7088"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4D4D4D] p-2 rounded-full hover:bg-[#B05834] transition"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-[#4D4D4D] pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics" className="text-[#CCCCCC] hover:text-white transition">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/enrollment" className="text-[#CCCCCC] hover:text-white transition">
                  Enrollment
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#CCCCCC] hover:text-white transition">
                  Events & News
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#CCCCCC] hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/parent-portal" className="text-[#CCCCCC] hover:text-white transition">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-[#CCCCCC] hover:text-white transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#CCCCCC] hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-[#4D4D4D] pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                <span className="text-[#CCCCCC]">
                  3210 200th Pl SW
                  <br />
                  Lynnwood, WA 98036
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                <span className="text-[#CCCCCC]">(425) 775-3578</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                <span className="text-[#CCCCCC]">info@cordobaacademy.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-[#4D4D4D] pb-2">Newsletter</h3>
            <p className="text-[#CCCCCC] mb-4">Subscribe to our newsletter to receive updates and announcements.</p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#4D4D4D] border-[#4D4D4D] text-white placeholder:text-[#999999]"
              />
              <Button className="bg-[#FF4A00] hover:bg-[#B05834] text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4D4D4D] mt-8 pt-8 text-center text-[#CCCCCC]">
          <p>&copy; {new Date().getFullYear()} Cordoba Academy. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
