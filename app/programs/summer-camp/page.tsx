import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/page-hero"

export default function SummerCampPage() {
  // Sample summer camp themes
  const campThemes = [
    {
      title: "STEAM Explorers",
      description:
        "Hands-on activities in science, technology, engineering, art, and math that spark curiosity and critical thinking.",
      image: "/summer-camp-steam.png",
    },
    {
      title: "Creative Arts",
      description:
        "Explore various art forms including painting, sculpture, drama, and music while developing self-expression.",
      image: "/summer-camp-arts.png",
    },
    {
      title: "Sports & Games",
      description:
        "Active fun through team sports, cooperative games, and fitness activities that promote physical health and teamwork.",
      image: "/summer-camp-sports.png",
    },
    {
      title: "Islamic Heroes",
      description:
        "Learn about inspiring figures from Islamic history through stories, crafts, and interactive activities.",
      image: "/summer-camp-islamic.png",
    },
    {
      title: "Nature Explorers",
      description:
        "Discover the wonders of Allah's creation through outdoor adventures, environmental science, and conservation projects.",
      image: "/summer-camp-nature.png",
    },
    {
      title: "Culinary Adventures",
      description:
        "Explore global cuisines, learn cooking skills, and understand nutrition while preparing delicious halal recipes.",
      image: "/summer-camp-culinary.png",
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero
        title="Summer Camps"
        subtitle="Fun, learning, and Islamic values all summer long"
        backgroundImage="/summer-camp.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Program Overview</h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy's Summer Camps provide a perfect blend of fun, learning, and Islamic values during the
              summer months. Our camps are designed to keep children engaged, active, and growing in a safe, nurturing
              environment while building lasting friendships and memories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image src="/summer-camp-1.png" alt="Summer camp activities" fill className="object-cover" />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image src="/summer-camp-2.png" alt="Summer camp activities" fill className="object-cover" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Summer 2025 Camps</h3>
            <p className="text-[#666666] mb-6">
              Registration for Summer 2025 camps will open in February 2025. We offer weekly themed camps throughout the
              summer, with both half-day and full-day options available.
            </p>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Camp Details</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#666666]">
                <li>
                  <span className="font-medium">Ages:</span> 5-12 years (grouped by age)
                </li>
                <li>
                  <span className="font-medium">Dates:</span> June 15 - August 15, 2025 (weekly sessions)
                </li>
                <li>
                  <span className="font-medium">Hours:</span> Half-day (9:00 AM - 12:30 PM) or Full-day (9:00 AM - 3:30
                  PM)
                </li>
                <li>
                  <span className="font-medium">Extended Care:</span> Available from 8:00 AM - 9:00 AM and 3:30 PM -
                  5:30 PM
                </li>
                <li>
                  <span className="font-medium">Lunch:</span> Bring your own lunch for full-day campers (must be
                  nut-free)
                </li>
                <li>
                  <span className="font-medium">Snacks:</span> Healthy snacks provided for all campers
                </li>
                <li>
                  <span className="font-medium">Location:</span> Cordoba Academy, 3210 200th Pl SW, Lynnwood WA 98036
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Weekly Themes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {campThemes.map((theme, index) => (
                <div key={index} className="bg-[#F5E8D8] rounded-lg overflow-hidden">
                  <div className="relative h-40">
                    <Image src={theme.image || "/placeholder.svg"} alt={theme.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#333333] mb-2">{theme.title}</h4>
                    <p className="text-[#666666] text-sm">{theme.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">A Typical Day at Camp</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">9:00</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Welcome & Morning Assembly</h4>
                  <p className="text-[#666666]">
                    Campers begin with greetings, du'a, and an introduction to the day's activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">9:30</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Theme-Based Activities</h4>
                  <p className="text-[#666666]">
                    Engaging in hands-on projects and activities related to the week's theme.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">10:45</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Snack & Outdoor Play</h4>
                  <p className="text-[#666666]">Healthy snack followed by supervised outdoor activities and games.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">11:30</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Islamic Learning</h4>
                  <p className="text-[#666666]">
                    Age-appropriate Islamic lessons, stories, and activities integrated with the camp theme.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">12:30</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Half-Day Dismissal / Lunch</h4>
                  <p className="text-[#666666]">
                    Half-day campers are dismissed while full-day campers enjoy lunch and prayer time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">1:30</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Afternoon Activities</h4>
                  <p className="text-[#666666]">
                    Continuation of theme-based projects, arts and crafts, or special presentations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">2:45</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Reflection & Closing Circle</h4>
                  <p className="text-[#666666]">
                    Campers share what they learned, closing du'a, and preparation for dismissal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#B05834] font-bold">3:30</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#333333]">Full-Day Dismissal</h4>
                  <p className="text-[#666666]">Full-day campers are dismissed or transition to extended care.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Registration Interest</h3>
              <p className="text-[#666666] mb-4">
                Join our mailing list to be notified when Summer 2025 camp registration opens. Early registration
                discounts will be available.
              </p>
              <Link href="/contact">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Join Mailing List</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Gallery */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Camp Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/summer-camp-3.png"
                alt="Summer camp activities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/summer-camp-4.png"
                alt="Summer camp activities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/summer-camp-1.png"
                alt="Summer camp activities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/summer-camp-2.png"
                alt="Summer camp activities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Parent Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#F5E8D8] p-6 rounded-lg">
            <p className="text-[#666666] italic mb-4">
              "My children look forward to Cordoba's summer camp every year. The balance of fun activities and Islamic
              learning creates an environment where they can enjoy their summer while growing in their faith."
            </p>
            <p className="font-bold text-[#333333]">Parent of 7 and 9-year-olds</p>
          </div>
          <div className="bg-[#F5E8D8] p-6 rounded-lg">
            <p className="text-[#666666] italic mb-4">
              "The camp counselors are amazing! They're energetic, caring, and truly connect with the children. My son
              came home each day excited to share what he learned and the new friends he made."
            </p>
            <p className="font-bold text-[#333333]">Parent of 6-year-old</p>
          </div>
          <div className="bg-[#F5E8D8] p-6 rounded-lg">
            <p className="text-[#666666] italic mb-4">
              "I appreciate how the camp integrates Islamic values into all activities. The weekly themes keep things
              interesting, and the projects they bring home are impressive. It's the perfect summer option for Muslim
              families."
            </p>
            <p className="font-bold text-[#333333]">Parent of 8 and 11-year-olds</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready for a Summer of Fun and Learning?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join our mailing list to be the first to know when registration opens for Summer 2025 camps. Early
            registration discounts will be available!
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Join Mailing List</Button>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">What should my child bring to camp?</h3>
            <p className="text-[#666666]">
              Campers should bring a water bottle, appropriate clothing for outdoor activities, sunscreen, and a lunch
              if attending full-day camp. All items should be labeled with your child's name.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Are there discounts for siblings or multiple weeks?</h3>
            <p className="text-[#666666]">
              Yes, we offer sibling discounts and multi-week discounts. Details will be available when registration
              opens.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">What is the counselor-to-camper ratio?</h3>
            <p className="text-[#666666]">
              We maintain a 1:8 ratio for ages 5-7 and a 1:10 ratio for ages 8-12 to ensure proper supervision and
              individual attention.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Do you accommodate children with special needs?</h3>
            <p className="text-[#666666]">
              We strive to accommodate all children. Please contact us before registration to discuss your child's
              specific needs so we can ensure a positive experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">What is your cancellation policy?</h3>
            <p className="text-[#666666]">
              Full refunds are available up to 2 weeks before the start of camp. After that, a 50% refund is available
              up to 1 week before. No refunds are available within 1 week of the camp start date.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
