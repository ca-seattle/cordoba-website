import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import PageHero from "@/components/page-hero"

export default function NewsPage() {
  // Sample news items - in a real implementation, these would come from a database or API
  const newsItems = [
    {
      id: "middle-school-expansion",
      date: "January 15, 2025",
      title: "Cordoba Academy Announces Middle School Expansion",
      excerpt:
        "We're excited to announce our expansion to include 7th and 8th grades starting in the 2025-2026 academic year, meeting a critical need in our community.",
      image: "/middle-school.png",
      category: "Announcements",
    },
    {
      id: "math-competition-success",
      date: "December 10, 2024",
      title: "Students Excel in Regional Math Competition",
      excerpt:
        "Congratulations to our 4th-6th grade math team for their outstanding performance at the regional mathematics competition, bringing home several awards.",
      image: "/math-competition.png",
      category: "Student Achievements",
    },
    {
      id: "fundraising-success",
      date: "November 25, 2024",
      title: "Annual Fundraising Dinner Raises Record Amount",
      excerpt:
        "Thanks to our generous community, our annual fundraising dinner was a tremendous success, raising funds that will support scholarships and facility improvements.",
      image: "/fundraising-dinner.png",
      category: "Community Events",
    },
    {
      id: "steam-lab-opening",
      date: "October 15, 2024",
      title: "New STEAM Lab Opens at Cordoba Academy",
      excerpt:
        "We're excited to announce the opening of our new state-of-the-art STEAM lab, providing students with hands-on learning opportunities in science, technology, engineering, arts, and mathematics.",
      image: "/steam-lab.png",
      category: "Facilities",
    },
    {
      id: "quran-competition",
      date: "September 30, 2024",
      title: "Students Shine in Annual Quran Competition",
      excerpt:
        "Our students demonstrated their dedication to memorizing and reciting the Holy Quran at our annual competition, with many achieving personal bests and receiving recognition for their efforts.",
      image: "/quran-competition.png",
      category: "Student Achievements",
    },
    {
      id: "new-faculty",
      date: "August 20, 2024",
      title: "Cordoba Academy Welcomes New Faculty Members",
      excerpt:
        "We're pleased to introduce several new faculty members joining our team for the 2024-2025 academic year, bringing diverse expertise and a shared commitment to excellence in Islamic education.",
      image: "/new-faculty.png",
      category: "Faculty & Staff",
    },
  ]

  // Categories for filtering
  const categories = [
    "All",
    "Announcements",
    "Student Achievements",
    "Community Events",
    "Facilities",
    "Faculty & Staff",
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="News & Updates" subtitle="Stay informed about the latest happenings at Cordoba Academy" />

      {/* Search and Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" size={18} />
            <Input
              type="search"
              placeholder="Search news..."
              className="pl-10 border-[#E5D5C5] focus:border-[#B05834] focus:ring-[#B05834]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-[#B05834] hover:bg-[#8A4526] text-white"
                    : "border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#B05834] mb-6">Featured News</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image src="/middle-school.png" alt="Middle School Expansion" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-[#FF4A00] mb-3">
                  Cordoba Academy Announces Middle School Expansion
                </h3>
                <p className="text-[#666666] mb-6">
                  We're excited to announce our expansion to include 7th and 8th grades starting in the 2025-2026
                  academic year. As the only Islamic middle school in Lynnwood, our expansion will serve families from
                  Tacoma to Marysville, filling a crucial gap in Islamic education options for middle school students in
                  our region.
                </p>
                <Link href="/news/middle-school-expansion">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Read Full Article</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div>
          <h2 className="text-2xl font-bold text-[#B05834] mb-6">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-[#FF4A00] text-white text-xs px-2 py-1 rounded-bl-lg">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3">{item.title}</h3>
                  <p className="text-[#666666] mb-4">{item.excerpt}</p>
                  <Link href={`/news/${item.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" className="border-[#B05834] text-[#B05834]" disabled>
              Previous
            </Button>
            <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">1</Button>
            <Button variant="outline" className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white">
              2
            </Button>
            <Button variant="outline" className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white">
              3
            </Button>
            <Button variant="outline" className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[#B05834] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter to receive the latest news and updates from Cordoba Academy directly in your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-white text-[#333333] border-white" />
              <Button className="bg-[#FF4A00] hover:bg-[#FF4A00]/80 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#B05834] mb-2">Follow Us</h2>
          <p className="text-[#666666]">
            Stay connected with Cordoba Academy on social media for more updates and community highlights.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5E8D8] p-4 rounded-full hover:bg-[#E5D5C5] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B05834"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5E8D8] p-4 rounded-full hover:bg-[#E5D5C5] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B05834"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5E8D8] p-4 rounded-full hover:bg-[#E5D5C5] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B05834"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
