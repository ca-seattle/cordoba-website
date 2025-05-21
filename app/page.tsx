import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar, BookOpen, Users, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <div className="relative bg-[#B05834] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt="Cordoba Academy students"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Today Students. Tomorrow Leaders.</h1>
            <p className="text-xl md:text-2xl mb-8">
              Nurturing academic excellence and Islamic identity in a vibrant learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enrollment">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Enroll Now</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white text-[#B05834] hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#B05834] mb-4">Welcome to Cordoba Academy</h2>
          <p className="text-[#666666] mb-8">
            Cordoba Academy is a private Islamic school serving students from preschool through 8th grade. Our mission
            is to provide an exceptional educational experience that nurtures academic excellence, Islamic identity, and
            character development in a safe, supportive environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#F5E8D8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#B05834]" />
              </div>
              <h3 className="font-bold text-[#333333] text-lg mb-2">Academic Excellence</h3>
              <p className="text-[#666666]">
                Rigorous curriculum that exceeds state standards and prepares students for future success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#F5E8D8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#B05834]" />
              </div>
              <h3 className="font-bold text-[#333333] text-lg mb-2">Islamic Identity</h3>
              <p className="text-[#666666]">
                Integration of Islamic values and teachings across all aspects of the educational experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#F5E8D8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#B05834]" />
              </div>
              <h3 className="font-bold text-[#333333] text-lg mb-2">Character Development</h3>
              <p className="text-[#666666]">
                Emphasis on building strong moral character, leadership skills, and community service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#F5E8D8] border-none">
              <div className="relative h-48">
                <Image src="/preschool.png" alt="Preschool Program" fill className="object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#B05834]">Preschool</CardTitle>
                <CardDescription>Ages 3-5</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666] mb-4">
                  Our play-based preschool program nurtures a love of learning while developing foundational academic,
                  social, and Islamic skills.
                </p>
                <Link href="/academics/preschool">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-[#F5E8D8] border-none">
              <div className="relative h-48">
                <Image src="/elementary.png" alt="K-6 Program" fill className="object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#B05834]">K-6 Program</CardTitle>
                <CardDescription>Kindergarten through 6th Grade</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666] mb-4">
                  Our elementary program provides a rigorous academic curriculum integrated with Islamic values and
                  character development.
                </p>
                <Link href="/academics/elementary">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-[#F5E8D8] border-none">
              <div className="relative h-48">
                <Image
                  src="/middle-school.png"
                  alt="7th-8th Grade Program"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#B05834]">7th-8th Grade</CardTitle>
                <CardDescription>Middle School (Coming 2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666] mb-4">
                  Our new middle school program will prepare students for high school success while strengthening their
                  Islamic identity.
                </p>
                <Link href="/academics/middle-school">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Quranic Verse */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#F5E8D8] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#B05834] mb-4">Our Inspiration</h2>
            <p className="text-xl italic text-[#333333] mb-4">"And say, 'My Lord, increase me in knowledge.'"</p>
            <p className="text-[#666666]">Surah Ta-Ha, Verse 114</p>
          </div>
        </div>
      </div>

      {/* News and Events */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#B05834]">News & Events</h2>
            <Link href="/news">
              <Button
                variant="outline"
                className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white flex items-center gap-2"
              >
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/middle-school.png" alt="Middle School Expansion" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-[#FF4A00] mb-3">
                  Cordoba Academy Announces Middle School Expansion
                </h3>
                <p className="text-[#666666] mb-4">
                  We're excited to announce our expansion to include 7th and 8th grades starting in the 2025-2026
                  academic year.
                </p>
                <Link href="/news/middle-school-expansion">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/summer-camp.jpg" alt="Summer Camp Registration" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 1, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-[#FF4A00] mb-3">Summer Camp Registration Opens</h3>
                <p className="text-[#666666] mb-4">
                  Registration for our popular summer camp program is now open. Secure your child's spot for a summer of
                  fun and learning.
                </p>
                <Link href="/programs/summer-camp">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/open-house.png" alt="Open House" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 15, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-[#FF4A00] mb-3">Open House for Prospective Families</h3>
                <p className="text-[#666666] mb-4">
                  Join us for an informative open house event to learn about our programs, meet our staff, and tour our
                  facilities.
                </p>
                <Link href="/events/open-house">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-[#666666] italic mb-4">
              "Cordoba Academy has been a blessing for our family. The teachers are dedicated and caring, and the
              Islamic environment has helped our children develop strong faith alongside academic excellence."
            </p>
            <p className="font-bold text-[#333333]">Parent of 2nd and 4th Graders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-[#666666] italic mb-4">
              "We love how the school integrates Islamic values into all aspects of learning. Our daughter has thrived
              academically and spiritually since joining Cordoba Academy."
            </p>
            <p className="font-bold text-[#333333]">Parent of Kindergartener</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-[#666666] italic mb-4">
              "The small class sizes and personalized attention have made a tremendous difference for our son. The
              teachers truly know each child and help them reach their full potential."
            </p>
            <p className="font-bold text-[#333333]">Parent of 6th Grader</p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-[#B05834] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  To provide an exceptional educational experience that nurtures academic excellence, Islamic identity,
                  and character development in a safe, supportive environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Deliver a rigorous academic curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Foster a strong Islamic identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Develop moral character and leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Create a safe, nurturing environment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="mb-4">
                  To be a leading Islamic educational institution that empowers students to excel academically, embody
                  Islamic values, and contribute positively to society.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Graduate well-rounded Muslim leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Set the standard for Islamic education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Build a vibrant, diverse community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Inspire lifelong learning and service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#B05834] mb-4">Join Our Community</h2>
          <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
            We invite you to explore what Cordoba Academy has to offer. Schedule a tour, attend an open house, or
            contact us to learn more about our programs and enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enrollment">
              <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Enroll Now</Button>
            </Link>
            <Link href="/enrollment/tour">
              <Button variant="outline" className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white">
                Schedule a Tour
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
