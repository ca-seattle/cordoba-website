import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function EventsPage() {
  // Upcoming events
  const upcomingEvents = [
    {
      id: "open-house",
      title: "Open House for Prospective Families",
      date: "February 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Cordoba Academy Main Hall",
      description:
        "Join us for an informative open house event to learn about our programs, meet our staff, and tour our facilities. This is a great opportunity for prospective families to experience Cordoba Academy firsthand.",
      image: "/open-house.png",
    },
    {
      id: "quran-competition",
      title: "Annual Quran Competition",
      date: "March 10, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Cordoba Academy Auditorium",
      description:
        "Students will showcase their Quran memorization and recitation skills in our annual competition. Family and community members are invited to attend and support our students as they demonstrate their dedication to the Quran.",
      image: "/quran-competition.png",
    },
    {
      id: "science-fair",
      title: "STEAM Fair",
      date: "April 5, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Cordoba Academy Gymnasium",
      description:
        "Explore innovative projects created by our students in the fields of Science, Technology, Engineering, Arts, and Mathematics. This hands-on event showcases student creativity, critical thinking, and problem-solving skills.",
      image: "/science-fair.png",
    },
    {
      id: "fundraising-dinner",
      title: "Annual Fundraising Dinner",
      date: "April 25, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Lynnwood Convention Center",
      description:
        "Join us for an elegant evening of inspiration, community building, and fundraising to support Cordoba Academy's programs and scholarship fund. The event will feature keynote speakers, student presentations, and a delicious dinner.",
      image: "/fundraising-dinner.png",
    },
  ]

  // Past events
  const pastEvents = [
    {
      id: "winter-program",
      title: "Winter Program",
      date: "December 15, 2024",
      description:
        "Students showcased their talents through performances, recitations, and presentations celebrating the winter season and Islamic traditions.",
      image: "/winter-program.png",
    },
    {
      id: "career-day",
      title: "Career Day",
      date: "November 8, 2024",
      description:
        "Community professionals shared their career journeys and insights with our students, inspiring future aspirations and highlighting diverse career paths.",
      image: "/career-day.png",
    },
    {
      id: "eid-celebration",
      title: "Eid Al-Adha Celebration",
      date: "October 20, 2024",
      description:
        "Our school community gathered to celebrate Eid Al-Adha with special activities, treats, and a focus on the importance of sacrifice and gratitude.",
      image: "/eid-celebration.png",
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Events & News" subtitle="Stay connected with what's happening at Cordoba Academy" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#B05834]">Upcoming Events</h2>
              <Link href="/events/calendar">
                <Button
                  variant="outline"
                  className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white flex items-center gap-2 mt-4 md:mt-0"
                >
                  View Full Calendar <Calendar size={16} />
                </Button>
              </Link>
            </div>

            <div className="space-y-8 mb-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#E5D5C5] pb-8">
                  <div className="relative h-48 md:h-auto rounded-lg overflow-hidden">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-[#FF4A00] mb-2">{event.title}</h3>
                    <div className="flex flex-col space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-[#666666]">
                        <Calendar className="h-4 w-4 text-[#B05834]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#666666]">
                        <Clock className="h-4 w-4 text-[#B05834]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#666666]">
                        <MapPin className="h-4 w-4 text-[#B05834]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-[#666666] mb-4">{event.description}</p>
                    <Link href={`/events/${event.id}`}>
                      <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Learn More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Event Reminders</h3>
              <p className="text-[#666666] mb-6">
                Never miss an important school event! Subscribe to our calendar or sign up for email reminders to stay
                informed about upcoming events and activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/events/calendar">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">
                    Subscribe to Calendar
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
                  >
                    Sign Up for Email Reminders
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#B05834]">Latest News</h2>
              <Link href="/news">
                <Button
                  variant="outline"
                  className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white flex items-center gap-2 mt-4 md:mt-0"
                >
                  View All News <ChevronRight size={16} />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[#F5E8D8] border-none">
                <div className="relative h-48">
                  <Image
                    src="/middle-school.png"
                    alt="Middle School Expansion"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-[#666666] text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>January 15, 2025</span>
                  </div>
                  <CardTitle className="text-[#FF4A00]">Middle School Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    We're excited to announce our expansion to include 7th and 8th grades starting in the 2025-2026
                    academic year.
                  </CardDescription>
                  <Link href="/news/middle-school-expansion">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <div className="relative h-48">
                  <Image
                    src="/math-competition.png"
                    alt="Math Competition Success"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-[#666666] text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>December 10, 2024</span>
                  </div>
                  <CardTitle className="text-[#FF4A00]">Math Competition Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Congratulations to our 4th-6th grade math team for their outstanding performance at the regional
                    mathematics competition.
                  </CardDescription>
                  <Link href="/news/math-competition-success">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <div className="relative h-48">
                  <Image src="/steam-lab.png" alt="New STEAM Lab Opens" fill className="object-cover rounded-t-lg" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-[#666666] text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>October 15, 2024</span>
                  </div>
                  <CardTitle className="text-[#FF4A00]">New STEAM Lab Opens</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    We're excited to announce the opening of our new state-of-the-art STEAM lab, providing students with
                    hands-on learning opportunities.
                  </CardDescription>
                  <Link href="/news/steam-lab-opening">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Past Events */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B05834] mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="font-bold text-[#333333] text-lg mb-3">{event.title}</h3>
                  <p className="text-[#666666] mb-4">{event.description}</p>
                  <Link href={`/events/${event.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Event Recap
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Submission */}
      <div className="bg-[#F5E8D8] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#B05834] mb-4">Suggest an Event</h2>
            <p className="text-[#666666] mb-6">
              Do you have an idea for a school event or community gathering? We welcome suggestions from our school
              community. Submit your event idea for consideration by our administration and parent association.
            </p>
            <Link href="/events/suggest">
              <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Submit Event Idea</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Event Planning Resources */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B05834] mb-6 text-center">Event Planning Resources</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-[#666666] mb-6 text-center">
              Planning a school event? These resources will help you organize successful events that align with our
              school's mission and values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader>
                  <CardTitle className="text-[#B05834]">Event Planning Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Step-by-step guide for planning and executing successful school events, including timelines,
                    checklists, and best practices.
                  </CardDescription>
                  <Link href="/events/planning-guide">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Download Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader>
                  <CardTitle className="text-[#B05834]">Facility Request Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Form for requesting use of school facilities for events, including information on available spaces,
                    equipment, and policies.
                  </CardDescription>
                  <Link href="/events/facility-request">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Access Form
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader>
                  <CardTitle className="text-[#B05834]">Volunteer Sign-Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Platform for recruiting and coordinating volunteers for school events, with options for various
                    roles and time slots.
                  </CardDescription>
                  <Link href="/events/volunteer">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Volunteer Portal
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="mb-6">
              Our school events are successful because of the involvement of our community. Whether you're a parent,
              staff member, or community supporter, there are many ways to contribute to our events and activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events/volunteer">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8] w-full sm:w-auto">Volunteer</Button>
              </Link>
              <Link href="/donate">
                <Button className="bg-[#FF4A00] hover:bg-[#FF4A00]/80 text-white w-full sm:w-auto">
                  Sponsor an Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
