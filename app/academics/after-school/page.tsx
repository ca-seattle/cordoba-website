import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Calendar, BookOpen, Music, Palette, Users } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function AfterSchoolPage() {
  // After-school activities
  const activities = [
    {
      title: "Homework Help",
      description:
        "Supervised homework time with teacher assistance to ensure students complete assignments and understand concepts.",
      icon: BookOpen,
    },
    {
      title: "Quran Club",
      description:
        "Additional Quran memorization and practice with dedicated instructors to strengthen recitation and tajweed.",
      icon: BookOpen,
    },
    {
      title: "Arts & Crafts",
      description:
        "Creative projects that develop fine motor skills, self-expression, and appreciation for various art forms.",
      icon: Palette,
    },
    {
      title: "Sports & Games",
      description:
        "Physical activities that promote teamwork, coordination, and healthy habits through organized games and sports.",
      icon: Users,
    },
    {
      title: "STEAM Club",
      description:
        "Hands-on projects exploring science, technology, engineering, arts, and mathematics through fun experiments and challenges.",
      icon: BookOpen,
    },
    {
      title: "Music & Movement",
      description:
        "Activities that develop rhythm, coordination, and self-expression through nasheed, percussion, and movement.",
      icon: Music,
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="After-School Programs" subtitle="Extended learning and enrichment opportunities" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Program Overview</h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy's After-School Program provides a safe, nurturing environment for students beyond the
              regular school day. Our program offers a balance of academic support, enrichment activities, and
              supervised play to meet the needs of working families while continuing the educational and Islamic
              environment of our school.
            </p>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/after-school.png" alt="After-School Program" fill className="object-cover" />
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Available Monday through Friday from 3:30 PM to 5:30 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Supervised by qualified staff with low student-to-staff ratios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Structured schedule that includes homework time, enrichment activities, and free play
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Healthy snacks provided daily to fuel afternoon learning and activities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Flexible enrollment options: full-time, part-time, or drop-in (space permitting)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Continuation of the Islamic environment and values of the school day
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Activities & Enrichment</h3>
            <p className="text-[#666666] mb-6">
              Our After-School Program offers a variety of activities that extend and enrich the learning from the
              school day. Activities rotate throughout the week to provide students with diverse experiences and
              opportunities to explore their interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-[#F5E8D8] rounded-full p-2">
                      <activity.icon className="h-5 w-5 text-[#B05834]" />
                    </div>
                    <div>
                      <CardTitle>{activity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#666666]">{activity.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Daily Schedule</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">3:30 PM - 3:45 PM - Check-In & Snack</h4>
                  <p className="text-[#666666]">
                    Students check in with after-school staff and enjoy a healthy snack to refuel for afternoon
                    activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">3:45 PM - 4:30 PM - Homework Time</h4>
                  <p className="text-[#666666]">
                    Supervised homework completion with staff available to provide assistance and answer questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">4:30 PM - 5:15 PM - Enrichment Activities</h4>
                  <p className="text-[#666666]">
                    Structured activities that rotate throughout the week, including arts and crafts, STEAM projects,
                    Quran practice, sports, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">5:15 PM - 5:30 PM - Clean-Up & Dismissal</h4>
                  <p className="text-[#666666]">
                    Students help clean up activity areas, gather belongings, and prepare for parent pick-up.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="h-8 w-8 text-[#B05834]" />
                <h3 className="text-xl font-bold text-[#FF4A00]">Enrollment & Fees</h3>
              </div>
              <p className="text-[#666666] mb-4">
                Our After-School Program offers flexible enrollment options to meet the needs of families:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Full-Time (5 days/week)</h4>
                  <p className="text-[#666666] mb-2">$250/month</p>
                  <p className="text-[#666666] text-sm">
                    Best value for families needing consistent after-school care every day.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Part-Time (3 days/week)</h4>
                  <p className="text-[#666666] mb-2">$175/month</p>
                  <p className="text-[#666666] text-sm">
                    Ideal for families needing regular but not daily after-school care.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Part-Time (2 days/week)</h4>
                  <p className="text-[#666666] mb-2">$125/month</p>
                  <p className="text-[#666666] text-sm">Perfect for families with limited after-school care needs.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Drop-In (as needed)</h4>
                  <p className="text-[#666666] mb-2">$20/day</p>
                  <p className="text-[#666666] text-sm">Available on a space-available basis with 24-hour notice.</p>
                </div>
              </div>
              <p className="text-[#666666] mb-6">
                Sibling discounts are available: 10% off for the second child and 15% off for the third child enrolled
                in the After-School Program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enrollment/after-school">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">Enroll Now</Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
                  >
                    Contact for More Information
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">After-School Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/after-school-coordinator.png" alt="Staff" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Layla Ahmed</h3>
                <p className="text-[#666666] italic mb-3">After-School Coordinator</p>
                <p className="text-[#666666] mb-4">
                  Sr. Layla oversees the After-School Program, bringing her background in education and child
                  development to create engaging activities and ensure a safe, nurturing environment for all students.
                </p>
              </div>
            </div>

            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/after-school-staff-1.png" alt="Staff" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Br. Omar Malik</h3>
                <p className="text-[#666666] italic mb-3">STEAM & Sports Instructor</p>
                <p className="text-[#666666] mb-4">
                  Br. Omar leads our STEAM activities and sports programs, engaging students in hands-on science
                  experiments, technology projects, and active games that promote teamwork and physical fitness.
                </p>
              </div>
            </div>

            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/after-school-staff-2.png" alt="Staff" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Noor Patel</h3>
                <p className="text-[#666666] italic mb-3">Arts & Quran Instructor</p>
                <p className="text-[#666666] mb-4">
                  Sr. Noor brings creativity and Islamic knowledge to our After-School Program, leading arts and crafts
                  activities and providing support for Quran memorization and practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Parent Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-[#666666] italic mb-4">
              "The After-School Program has been a blessing for our family. My children get their homework done and
              enjoy fun activities in a safe, Islamic environment. The staff is caring and attentive, and my kids look
              forward to going every day."
            </p>
            <p className="font-bold text-[#333333]">Parent of 1st and 3rd Graders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-[#666666] italic mb-4">
              "As working parents, we appreciate the flexibility and quality of the After-School Program. Our daughter
              has improved her Quran memorization and developed new interests through the various enrichment activities
              offered."
            </p>
            <p className="font-bold text-[#333333]">Parent of 2nd Grader</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-[#666666] italic mb-4">
              "The After-School Program provides the perfect balance of academic support and fun activities. My son
              completes his homework with guidance when needed, and then enjoys time with friends in a structured
              environment that reinforces the values we teach at home."
            </p>
            <p className="font-bold text-[#333333]">Parent of 4th Grader</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our After-School Program</h2>
            <p className="mb-6">
              Provide your child with a safe, enriching environment that extends the learning day and supports your
              family's schedule. Space is limited, so enroll today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enrollment/after-school">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8] w-full sm:w-auto">Enroll Now</Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-[#FF4A00] hover:bg-[#FF4A00]/80 text-white w-full sm:w-auto">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">What ages does the After-School Program serve?</h3>
            <p className="text-[#666666]">
              Our After-School Program is available to all Cordoba Academy students in preschool through 8th grade.
              Students are grouped by age for appropriate activities and supervision.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Can my child attend only on certain days?</h3>
            <p className="text-[#666666]">
              Yes, we offer flexible enrollment options including full-time (5 days/week), part-time (3 days/week or 2
              days/week), and drop-in (as needed, subject to availability). You can select the days that work best for
              your family's schedule.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Is a snack provided?</h3>
            <p className="text-[#666666]">
              Yes, we provide a healthy snack each day to help students refuel for afternoon activities. Snacks are
              halal and nut-free. If your child has specific dietary restrictions, please let us know, and we will work
              to accommodate them.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">How is homework handled?</h3>
            <p className="text-[#666666]">
              We dedicate time each day for homework completion with staff available to provide assistance. While we
              encourage students to complete their homework during this time, we recommend that parents review homework
              at home to ensure accuracy and understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
