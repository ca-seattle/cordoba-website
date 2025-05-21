import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function CalendarPage() {
  // Sample calendar events - in a real implementation, these would come from a database or API
  const events = [
    {
      date: "May 25, 2025",
      title: "End of Year Celebration",
      description:
        "Join us as we celebrate the achievements of our students and staff for the 2024-2025 academic year.",
      location: "Cordoba Academy Main Hall",
      time: "5:00 PM - 7:30 PM",
    },
    {
      date: "June 10, 2025",
      title: "Graduation Ceremony",
      description:
        "Celebrating our graduating students as they move on to the next chapter of their educational journey.",
      location: "Cordoba Academy Auditorium",
      time: "4:00 PM - 6:00 PM",
    },
    {
      date: "June 15, 2025",
      title: "Summer Camp Begins",
      description: "First day of our summer camp program featuring a variety of educational and fun activities.",
      location: "Cordoba Academy Campus",
      time: "9:00 AM - 3:30 PM",
    },
    {
      date: "August 15, 2025",
      title: "Summer Camp Ends",
      description: "Last day of summer camp with a special showcase of student projects and performances.",
      location: "Cordoba Academy Campus",
      time: "1:00 PM - 4:00 PM",
    },
    {
      date: "August 25, 2025",
      title: "New Parent Orientation",
      description: "Welcome session for families joining Cordoba Academy for the 2025-2026 academic year.",
      location: "Cordoba Academy Main Hall",
      time: "6:00 PM - 8:00 PM",
    },
    {
      date: "September 3, 2025",
      title: "First Day of School",
      description: "Welcome back to school for the 2025-2026 academic year.",
      location: "Cordoba Academy Campus",
      time: "8:30 AM - 3:30 PM",
    },
  ]

  // Group events by month for display
  const months = ["May 2025", "June 2025", "July 2025", "August 2025", "September 2025"]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="School Calendar" subtitle="Stay up-to-date with important dates and events" />

      {/* Calendar Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft size={16} />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <CalendarIcon size={20} className="text-[#B05834]" />
            <h2 className="text-2xl font-bold text-[#333333]">2024-2025 Academic Year</h2>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            Next
            <ChevronRight size={16} />
          </Button>
        </div>

        {/* Calendar Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="space-y-8">
            {months.map((month, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-[#FF4A00] mb-4 border-b border-[#E5D5C5] pb-2">{month}</h3>
                <div className="space-y-4">
                  {events
                    .filter((event) => event.date.includes(month.split(" ")[0]))
                    .map((event, eventIndex) => (
                      <div key={eventIndex} className="bg-[#F5E8D8] rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="mb-2 md:mb-0">
                            <h4 className="font-bold text-[#333333]">{event.title}</h4>
                            <p className="text-[#666666] text-sm">
                              {event.date} • {event.time}
                            </p>
                          </div>
                          <div className="text-[#666666] text-sm">{event.location}</div>
                        </div>
                        <p className="text-[#666666] mt-2">{event.description}</p>
                      </div>
                    ))}
                  {events.filter((event) => event.date.includes(month.split(" ")[0])).length === 0 && (
                    <p className="text-[#666666] italic">No events scheduled for this month.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Calendar */}
        <div className="bg-[#E5D5C5] rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-[#B05834] mb-2">Download Full Calendar</h3>
          <p className="text-[#666666] mb-4">
            Download our complete academic calendar for the 2024-2025 school year, including holidays, parent-teacher
            conferences, and special events.
          </p>
          <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Download Calendar (PDF)</Button>
        </div>
      </div>

      {/* Subscribe to Calendar */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#B05834] mb-4">Stay Updated</h2>
            <p className="text-[#666666] mb-6">
              Subscribe to our calendar to receive automatic updates and reminders about upcoming events. You can add
              our calendar to your Google Calendar, Apple Calendar, or other calendar applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#4285F4] hover:bg-[#3367D6] text-white">Add to Google Calendar</Button>
              <Button className="bg-[#FF4A00] hover:bg-[#B05834] text-white">Add to Apple Calendar</Button>
              <Button variant="outline" className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white">
                Subscribe via iCal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact for Event Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#F5E8D8] rounded-lg p-6 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-[#B05834] mb-2">Need More Information?</h3>
          <p className="text-[#666666] mb-4">
            If you have questions about specific events or need additional information, please contact our office.
          </p>
          <Link href="/contact">
            <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
