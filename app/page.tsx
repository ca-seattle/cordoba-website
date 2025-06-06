import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar, BookOpen, Users, Heart } from "lucide-react"

// Define types for the event data
type Organizer = {
  name: string
  phone: string
  email: string
}

type Event = {
  created_at: string
  registration_link: string
  end_date: string
  event_description: string
  frequency: string
  start_time: string
  end_time: string
  organizer: Organizer
  start_date: string
  event_image_url: string
  event_title: string
  recurring: boolean
  event_id: string
  event_dates: string[]
}

// Add these functions before the getEvents function
function formatDate(dateStr: string): string {
  // Split the date string and create date in UTC to avoid timezone issues
  const [year, month, day] = dateStr.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[month - 1]} ${day}, ${year}`;
}

function formatTime(timeStr: string): string {
  const [hours, minutes] = timeStr.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

// Function to get the next upcoming date from an array of dates
function getNextUpcomingDate(dates: string[]): Date | null {
  // Create today's date in PST
  const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }))
  today.setHours(0, 0, 0, 0)
  
  // Find the first date that hasn't passed
  for (const date of dates) {
    const [year, month, day] = date.split('-');
    const eventDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (eventDate >= today) {
      return eventDate
    }
  }
  
  return null
}

async function getEvents(): Promise<Event[]> {
  try {
    const response = await fetch('https://mwmliya547.execute-api.us-east-1.amazonaws.com/submit-website-event', {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch events')
    }

    const text = await response.text()    
    const events: Event[] = JSON.parse(text)
    console.log('Parsed events:', events)
    
    // Filter and sort events to get the top 4 upcoming events
    const filteredEvents = events
      .filter(event => {
        const nextDate = getNextUpcomingDate(event.event_dates)
        return nextDate !== null // Only include events with upcoming dates
      })
      .sort((a, b) => {
        const dateA = getNextUpcomingDate(a.event_dates)
        const dateB = getNextUpcomingDate(b.event_dates)
        return (dateA?.getTime() || 0) - (dateB?.getTime() || 0)
      })
      .slice(0, 4)

    console.log('Filtered events:', filteredEvents)
    return filteredEvents
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function Home() {
  const events = await getEvents()

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <div className="relative bg-[#B05834] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/students_cover.jpg"
            alt="Cordoba Academy students"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Today's Students. Tomorrow's Leaders.</h1>
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

      {/* News and Events */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#B05834]">News & Events</h2>
            {/* <Link href="/news">
              <Button
                variant="outline"
                className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white flex items-center gap-2"
              >
                View All <ArrowRight size={16} />
              </Button>
            </Link> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {events.map((event) => {
              const nextEventDate = getNextUpcomingDate(event.event_dates)
              if (!nextEventDate) return null // Skip if no upcoming dates

              return (
                <div key={event.event_id} className="bg-[#F5E8D8] rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96">
                    <Image 
                      src={event.event_image_url} 
                      alt={event.event_title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[#666666] text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(event.event_dates[0])} • {formatTime(event.start_time)} - {formatTime(event.end_time)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#FF4A00] mb-3">
                      {event.event_title}
                    </h3>
                    <p className="text-[#666666] mb-4 whitespace-pre-line">
                      {event.event_description}
                    </p>
                    {event.registration_link && (
                      <Link href={event.registration_link} target="_blank">
                        <Button
                          variant="outline"
                          className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                        >
                          Register Now
                        </Button>
                      </Link>
                    )}
                    {/* Learn More button commented out for future use
                    {!event.registration_link && (
                      <Button
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        Learn More
                      </Button>
                    )}
                    */}
                  </div>
                </div>
              )
            })}
            {/* Add placeholder cards for remaining spaces */}
            {Array.from({ length: Math.max(0, 4 - events.length) }).map((_, index) => (
              <div key={`placeholder-${index}`} className="bg-[#F5E8D8] rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
                <Calendar className="h-12 w-12 text-[#B05834] mb-4 opacity-50" />
                <h3 className="text-lg font-bold text-[#FF4A00] mb-2">Stay Tuned!</h3>
                <p className="text-[#666666]">More exciting events coming soon...</p>
              </div>
            ))}
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
              <h3 className="font-bold text-[#333333] text-lg mb-2">Academic Standard & Excellence</h3>
              <p className="text-[#666666]">
                Our students benefit from rigorous instruction using proven programs like Singapore Math, iReady, and state-certified curriculum support. Activities: Math competitions, reading challenges, and benchmark assessments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#F5E8D8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#B05834]" />
              </div>
              <h3 className="font-bold text-[#333333] text-lg mb-2">Islamic Integration</h3>
              <p className="text-[#666666]">
                We infuse Islamic teachings and values throughout all subjects. Examples: Quran reading circles, Seerah project weeks, and Islamic history woven into social studies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#F5E8D8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#B05834]" />
              </div>
              <h3 className="font-bold text-[#333333] text-lg mb-2">Relevant for Our Community</h3>
              <p className="text-[#666666]">
                Curriculum addresses the needs and interests of our students and families. Examples: Community service projects, leadership workshops, and events like Noor Kids Night and cultural field trips.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#F5E8D8] border-none">
              <div className="relative h-48">
                <Image src="/maymuna-preschool.jpg" alt="Preschool Program" className="object-cover object-[center_20%] rounded-t-lg" fill/>
              </div>
              <CardHeader>
                <CardTitle className="text-[#B05834]">Early Learning</CardTitle>
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
                <Image src="/k-6.jpg" alt="K-5 Program" fill className="object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#B05834]">K-5 Program</CardTitle>
                <CardDescription>Kindergarten through 5th Grade</CardDescription>
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
                  src="/7-8_grade.jpg"
                  alt="7th-8th Grade Program"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#B05834]">6th-8th Grade</CardTitle>
                <CardDescription>Middle School</CardDescription>
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
                  To nurture the intellectual, ethical, social, physical, emotional, and spiritual development of young American Muslims, producing confident, spiritual, and professional Muslim leaders who will be an asset to our society.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Nurture intellectual and academic excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Develop strong ethical and spiritual foundations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Foster social and emotional growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Promote physical well-being and development</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="mb-4">
                  Our vision is to establish an institution dedicated to the dissemination of religious and worldly knowledge rooted in traditional Islamic values; providing a high quality of education to improve the quality of life of Muslim communities in America.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Integrate religious and worldly knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Uphold traditional Islamic values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Deliver high-quality education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#FF4A00] flex-shrink-0 mt-0.5" />
                    <span>Enhance Muslim community life in America</span>
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
