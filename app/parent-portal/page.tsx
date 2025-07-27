import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Calendar, Bell, Users, BookOpen, MessageSquare } from "lucide-react"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Parent Portal",
  description: "Access Cordoba Academy's Parent Portal for school updates, grades, and resources. Serving families in Seattle, Shoreline, Edmonds, Lynnwood, Bothell & Mountlake Terrace with comprehensive Islamic education tools.",
  openGraph: {
    title: "Parent Portal | Cordoba Academy",
    description: "Stay connected with your child's Islamic education journey at Cordoba Academy. Access grades, announcements, and resources for parents in the Seattle area.",
    images: ['/logo-full.png']
  },
  keywords: ['Islamic School Parent Portal', 'Muslim School Resources Seattle', 'Cordoba Academy Parents', 'Islamic Education Portal Lynnwood']
};

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
                <Link
                  href="https://portal.schoolcues.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="w-full bg-[#B05834] hover:bg-[#8A4526] text-white">Login to School Cues</Button>
                </Link>
                {/* <Link href="/parent-portal/help">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Need Help?
                  </Button>
                </Link> */}
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Parent Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <FileText className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Forms & Documents</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    Access important forms and documents, including permission slips, medical forms, and school
                    policies.
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href="/parent-portal/forms">
                      <Button
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        View Forms
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card> */}

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <FileText className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Student-Teacher Handbook</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    Review school policies, academic expectations, dress code, and other essential information for the academic year.
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href="/handbook.pdf" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        View Handbook
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <Calendar className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>School Calendar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    View the academic calendar, including holidays, events, and important dates for the school year.
                  </CardDescription>
                  <div className="mt-auto">
                    {/* <Link href="/events/calendar"> */}
                    <Link href="/academic_calendar.pdf" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        View Calendar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <Bell className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Announcements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    Stay updated with the latest school announcements, news, and important information.
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href="">
                      <Button
                        disabled
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        View Announcements
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <Users className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Parent Association</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    Learn about our Parent Association, upcoming meetings, and opportunities to get involved.
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href="">
                      <Button
                        disabled
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Curriculum Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    Access resources to support your child's learning at home, including curriculum guides and
                    educational materials.
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href="">
                      <Button
                        disabled
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        View Resources
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#F5E8D8] rounded-full p-2">
                    <MessageSquare className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <div>
                    <CardTitle>Contact Teachers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-[#666666] mb-4">
                    Communicate with your child's teachers and schedule parent-teacher conferences.
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href="">
                      <Button
                        disabled
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        Contact Teachers
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Need Technical Support?</h3>
              <p className="text-[#666666] mb-4">
                If you're experiencing issues with the Parent Portal or School Cues, our technical support team is here
                to help.
              </p>
              <Link href="/contact">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Contact Support</Button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-10">
        <div className="bg-[#B05834] rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="max-w-2xl mx-auto mb-6">
            There are many ways to get involved in your child's education and the Cordoba Academy community. From
            volunteering in the classroom to joining the Parent Association, your participation makes a difference.
          </p>
          {/* <Link href="/parent-portal/volunteer">
            <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Learn About Volunteer Opportunities</Button>
          </Link> */}
        </div>
      </div>
    </div>
  )
}
