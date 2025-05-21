import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, BookOpen, School } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function OpenHousePage() {
  // Schedule items
  const scheduleItems = [
    {
      time: "10:00 AM - 10:15 AM",
      title: "Welcome & Introduction",
      description: "Opening remarks from the Principal and introduction to Cordoba Academy's mission and vision.",
      location: "Main Hall",
    },
    {
      time: "10:15 AM - 10:45 AM",
      title: "Academic Program Overview",
      description: "Presentation on our curriculum, teaching approach, and student outcomes.",
      location: "Main Hall",
    },
    {
      time: "10:45 AM - 11:15 AM",
      title: "Islamic Studies & Character Development",
      description: "Learn about our approach to Islamic education and character building.",
      location: "Main Hall",
    },
    {
      time: "11:15 AM - 11:45 AM",
      title: "Campus Tours",
      description: "Guided tours of our classrooms, facilities, and learning spaces.",
      location: "Meeting in Main Hall Lobby",
    },
    {
      time: "11:45 AM - 12:00 PM",
      title: "Q&A Session",
      description: "Opportunity to ask questions and speak with faculty and current parents.",
      location: "Main Hall",
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero
        title="Open House for Prospective Families"
        subtitle="Learn about our programs and experience Cordoba Academy firsthand"
        backgroundImage="/open-house-hero.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#B05834] mb-4">Event Details</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-[#FF4A00]" />
                    <span className="text-[#666666]">February 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#FF4A00]" />
                    <span className="text-[#666666]">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#FF4A00]" />
                    <span className="text-[#666666]">Cordoba Academy Main Hall</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[#FF4A00]" />
                    <span className="text-[#666666]">Families with children ages 3-14</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Link href="/events/open-house/register">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Register to Attend</Button>
                </Link>
              </div>
            </div>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/open-house.png" alt="Open House" fill className="object-cover" />
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">About This Event</h3>
            <p className="text-[#666666] mb-4">
              Join us for an informative open house event designed for prospective families interested in learning more
              about Cordoba Academy. This is a great opportunity to tour our campus, meet our faculty and staff, and
              learn about our academic programs and Islamic education approach.
            </p>
            <p className="text-[#666666] mb-6">
              During the open house, you'll hear from our Principal and faculty members about our curriculum,
              educational philosophy, and the unique benefits of a Cordoba Academy education. You'll also have the
              opportunity to ask questions and connect with current parents and students.
            </p>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Event Schedule</h3>
              <div className="space-y-6">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-32 flex-shrink-0 font-bold text-[#333333]">{item.time}</div>
                    <div>
                      <h4 className="font-bold text-[#333333] mb-1">{item.title}</h4>
                      <p className="text-[#666666] mb-1">{item.description}</p>
                      <div className="flex items-center gap-2 text-[#666666] text-sm">
                        <MapPin className="h-4 w-4 text-[#B05834]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-5 w-5 text-[#B05834]" />
                  <h4 className="font-bold text-[#333333]">Academic Programs</h4>
                </div>
                <p className="text-[#666666]">
                  Learn about our comprehensive curriculum that exceeds state standards while integrating Islamic
                  perspectives across all subject areas.
                </p>
              </div>
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <School className="h-5 w-5 text-[#B05834]" />
                  <h4 className="font-bold text-[#333333]">Islamic Education</h4>
                </div>
                <p className="text-[#666666]">
                  Discover our approach to Islamic education, including Quran memorization, Islamic studies, and
                  character development.
                </p>
              </div>
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#B05834]" />
                  <h4 className="font-bold text-[#333333]">School Community</h4>
                </div>
                <p className="text-[#666666]">
                  Experience our warm, inclusive community and learn about opportunities for parent involvement and
                  family engagement.
                </p>
              </div>
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-[#B05834]" />
                  <h4 className="font-bold text-[#333333]">Enrollment Process</h4>
                </div>
                <p className="text-[#666666]">
                  Get information about the application process, tuition and fees, financial aid options, and important
                  enrollment deadlines.
                </p>
              </div>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Registration Information</h3>
              <p className="text-[#666666] mb-4">
                While walk-ins are welcome, we encourage you to register in advance to help us prepare for your visit.
                Registration is free and takes just a few minutes.
              </p>
              <p className="text-[#666666] mb-6">
                Please note that this event is designed for parents and guardians. While children are welcome to attend,
                the presentations are geared toward adults. We will have a supervised activity area for children during
                the presentations.
              </p>
              <Link href="/events/open-house/register">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Register to Attend</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Can't Attend Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#B05834] mb-4">Can't Attend This Open House?</h2>
            <p className="text-[#666666] mb-6">
              If you're unable to attend this open house, there are other ways to learn about Cordoba Academy and
              experience our school community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h3 className="font-bold text-[#333333] mb-2">Schedule a Private Tour</h3>
                <p className="text-[#666666] mb-4">
                  Contact our admissions office to arrange a personalized tour of our campus at a time that works for
                  your family.
                </p>
                <Link href="/enrollment/tour">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Schedule a Tour
                  </Button>
                </Link>
              </div>
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h3 className="font-bold text-[#333333] mb-2">Virtual Information Session</h3>
                <p className="text-[#666666] mb-4">
                  Join one of our upcoming virtual information sessions to learn about our programs from the comfort of
                  your home.
                </p>
                <Link href="/events/virtual-sessions">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    View Schedule
                  </Button>
                </Link>
              </div>
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h3 className="font-bold text-[#333333] mb-2">Request Information</h3>
                <p className="text-[#666666] mb-4">
                  Complete our inquiry form to receive information about our programs, admissions process, and upcoming
                  events.
                </p>
                <Link href="/enrollment/inquire">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Request Info
                  </Button>
                </Link>
              </div>
            </div>
            <p className="text-[#666666]">
              Our next open house will be held on April 10, 2025. Mark your calendar and check back for registration
              details.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-[#B05834] mb-8">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#F5E8D8] p-6 rounded-lg">
            <p className="text-[#666666] italic mb-4">
              "Attending the open house was the deciding factor in our choice to enroll our children at Cordoba Academy.
              We were impressed by the warm community, dedicated teachers, and the balance of academic excellence and
              Islamic values."
            </p>
            <p className="font-bold text-[#333333]">Parents of 1st and 3rd Graders</p>
          </div>
          <div className="bg-[#F5E8D8] p-6 rounded-lg">
            <p className="text-[#666666] italic mb-4">
              "The open house gave us a comprehensive overview of the school's programs and philosophy. We appreciated
              the opportunity to ask questions and speak with current parents about their experiences."
            </p>
            <p className="font-bold text-[#333333]">Parents of Kindergartener</p>
          </div>
          <div className="bg-[#F5E8D8] p-6 rounded-lg">
            <p className="text-[#666666] italic mb-4">
              "We were looking for a school that would nurture our child's Islamic identity while providing a strong
              academic foundation. The open house showed us that Cordoba Academy was exactly what we were looking for."
            </p>
            <p className="font-bold text-[#333333]">Parents of Preschooler</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Us on February 15</h2>
            <p className="mb-6">
              We look forward to welcoming you to Cordoba Academy and sharing our community with your family. Register
              today to secure your spot at our open house event.
            </p>
            <Link href="/events/open-house/register">
              <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Register Now</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#B05834] mb-4">Questions?</h2>
          <p className="text-[#666666] mb-6">
            If you have any questions about the open house or the admissions process, please don't hesitate to contact
            our admissions office.
          </p>
          <div className="bg-[#F5E8D8] p-6 rounded-lg inline-block">
            <p className="text-[#666666] mb-2">
              <span className="font-bold">Email:</span> admissions@cordoba-academy.org
            </p>
            <p className="text-[#666666]">
              <span className="font-bold">Phone:</span> (425) 775-3578 ext. 1
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
