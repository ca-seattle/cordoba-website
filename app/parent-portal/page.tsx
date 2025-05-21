import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Calendar, Bell, Users, BookOpen, MessageSquare } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function ParentPortalPage() {
  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Parent Portal" subtitle="Resources and information for Cordoba Academy families" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Welcome to the Parent Portal</h2>
            <p className="text-[#666666] mb-6">
              The Parent Portal provides access to important information about your child's education, including grades,
              attendance, assignments, and school communications. Through our School Cues system, you can stay connected
              with your child's progress and engage with our school community.
            </p>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#FF4A00] rounded-full p-3">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333]">School Cues Login</h3>
              </div>
              <p className="text-[#666666] mb-4">
                Access your School Cues account to view your child's academic information, communicate with teachers,
                and stay updated on school announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://schoolcues.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="w-full bg-[#B05834] hover:bg-[#8A4526] text-white">Login to School Cues</Button>
                </a>
                <Link href="/parent-portal/help">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Need Help?
                  </Button>
                </Link>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Parent Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <FileText className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Forms & Documents</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Access important forms and documents, including permission slips, medical forms, and school
                    policies.
                  </CardDescription>
                  <Link href="/parent-portal/forms">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Forms
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <Calendar className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>School Calendar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    View the academic calendar, including holidays, events, and important dates for the school year.
                  </CardDescription>
                  <Link href="/events/calendar">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Calendar
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <Bell className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Announcements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Stay updated with the latest school announcements, news, and important information.
                  </CardDescription>
                  <Link href="/parent-portal/announcements">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Announcements
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <Users className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Parent Association</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Learn about our Parent Association, upcoming meetings, and opportunities to get involved.
                  </CardDescription>
                  <Link href="/parent-portal/association">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Curriculum Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Access resources to support your child's learning at home, including curriculum guides and
                    educational materials.
                  </CardDescription>
                  <Link href="/parent-portal/curriculum">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Resources
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <MessageSquare className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Contact Teachers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666] mb-4">
                    Communicate with your child's teachers and schedule parent-teacher conferences.
                  </CardDescription>
                  <Link href="/parent-portal/contact-teachers">
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Contact Teachers
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Need Technical Support?</h3>
              <p className="text-[#666666] mb-4">
                If you're experiencing issues with the Parent Portal or School Cues, our technical support team is here
                to help.
              </p>
              <Link href="/contact">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Testimonials */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Parent Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <p className="text-[#666666] italic mb-4">
                "The Parent Portal has been an invaluable tool for staying connected with my child's education. I
                appreciate being able to track progress and communicate with teachers so easily."
              </p>
              <p className="font-bold text-[#333333]">Parent of 2nd Grader</p>
            </div>
            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <p className="text-[#666666] italic mb-4">
                "I love how the School Cues system keeps me informed about everything happening at Cordoba Academy. The
                calendar feature helps our family stay organized with school events."
              </p>
              <p className="font-bold text-[#333333]">Parent of 4th and 6th Graders</p>
            </div>
            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <p className="text-[#666666] italic mb-4">
                "As a working parent, the Parent Portal gives me peace of mind by allowing me to check in on my child's
                progress anytime. The communication tools have strengthened our partnership with teachers."
              </p>
              <p className="font-bold text-[#333333]">Parent of Kindergartener</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#B05834] rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="max-w-2xl mx-auto mb-6">
            There are many ways to get involved in your child's education and the Cordoba Academy community. From
            volunteering in the classroom to joining the Parent Association, your participation makes a difference.
          </p>
          <Link href="/parent-portal/volunteer">
            <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Learn About Volunteer Opportunities</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
