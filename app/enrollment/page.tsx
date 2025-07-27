import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, FileText, DollarSign, Users, School, HelpCircle } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function EnrollmentPage() {
  // Enrollment steps
  const enrollmentSteps = [
    {
      title: "Admissions Inquiry Form",
      description: "Begin your journey by completing our Admissions Inquiry Form, which helps us understand your child's background, including their academic history, interests, and goals. This information allows us to better evaluate how we can support your child's educational journey.",
      icon: FileText,
      link: "/enrollment/inquire",
    },
    {
      title: "Interview",
      description: "Connect with our team in a personal interview where we get to know both you and your child. This valuable conversation helps us understand your educational goals while allowing us to share our school's values, philosophy, and expectations to ensure we're the right fit for your family.",
      icon: Users,
      link: "/enrollment/interview",
    },
    {
      title: "Evaluation",
      description: "Our comprehensive evaluation process considers your child's academic performance, social skills, motivation, and your family's commitment to education. We carefully assess each candidate to ensure they're positioned to thrive in our unique learning environment.",
      icon: CheckCircle,
      link: "/enrollment/assessment",
    },
    {
      title: "Registration Application",
      description: "Selected candidates will be invited to complete our full registration application. This final step allows us to gather all necessary information before making our admissions decision.",
      icon: Calendar,
      link: "/enrollment/complete",
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Enrollment" subtitle="Join our vibrant learning community" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Welcome to the Cordoba Academy Family</h2>
            <p className="text-[#666666] mb-6">
              Thank you for your interest in Cordoba Academy. We are dedicated to providing an exceptional educational
              experience that nurtures academic excellence, Islamic identity, and character development. Our enrollment
              process is designed to ensure that Cordoba Academy is the right fit for your family and that we can meet
              your child's educational needs.
            </p>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/enrollment_cover.jpg" alt="Students at Cordoba Academy" fill className="object-cover" style={{ objectPosition: 'center 60%' }} />
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Enrollment Process</h3>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <p className="text-[#666666] mb-4">
                Our admissions process for Grades K–8 is selective and thoughtfully designed to create a thriving learning community. With limited spaces available in each grade and many applications received yearly, we carefully evaluate each candidate to ensure they will both benefit from our program and contribute positively to our school community.
              </p>
              <p className="text-[#666666]">
                While we welcome all inquiries, please note that submitting an Admissions Inquiry Form does not guarantee enrollment. This selective process helps us maintain an environment where every student can flourish academically, spiritually, and socially.
              </p>
            </div>

            <div className="space-y-8 mb-8">
              {enrollmentSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F5E8D8] flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#B05834]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] mb-1">
                        Step {index + 1}: {step.title}
                      </h4>
                      <p className="text-[#666666] mb-2">{step.description}</p>
                      {/* <Link href={step.link}>
                        <Button
                          variant="outline"
                          className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                        >
                          Learn More
                        </Button>
                      </Link> */}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-white border-2 border-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Waitlist Policy</h3>
              <p className="text-[#666666] mb-4">
                Qualified candidates who complete our admissions process may be offered a place on our waitlist when class capacity is reached. Waitlist status is maintained for the current academic year only.
              </p>
              <p className="text-[#666666]">
                While we will contact families if space becomes available, placement on the waitlist does not guarantee enrollment. Families on the waitlist who are not admitted will need to reapply for the following school year.
              </p>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">2025-2026 Enrollment Timeline</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">January 15</div>
                  <div className="text-[#666666]">Re-enrollment begins for current families</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">February 1</div>
                  <div className="text-[#666666]">Open enrollment begins for new families</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">February 15</div>
                  <div className="text-[#666666]">Open House for prospective families</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">March 15</div>
                  <div className="text-[#666666]">
                    Priority deadline for applications (for best chance of placement)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">April 1</div>
                  <div className="text-[#666666]">First round of acceptance notifications</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">April 15</div>
                  <div className="text-[#666666]">Enrollment deposit due to secure placement</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 font-bold text-[#B05834]">May-August</div>
                  <div className="text-[#666666]">Rolling admissions based on space availability</div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Tuition & Fees</h3>
            <p className="text-[#666666] mb-6">
              Cordoba Academy strives to provide high-quality education at an affordable cost. We offer various payment
              plans and financial aid options to eligible families.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader className="bg-[#F5E8D8]">
                  <CardTitle className="text-[#B05834]">Preschool Program</CardTitle>
                  <CardDescription>Ages 3-5</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[#666666]">5 Half Days (AM)</span>
                      <span className="font-bold text-[#333333]">$7,500/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">5 Full Days</span>
                      <span className="font-bold text-[#333333]">$9,500/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">3 Full Days (M/W/F)</span>
                      <span className="font-bold text-[#333333]">$7,200/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">2 Full Days (T/Th)</span>
                      <span className="font-bold text-[#333333]">$5,000/year</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-[#F5E8D8]">
                  <CardTitle className="text-[#B05834]">K-6 Program</CardTitle>
                  <CardDescription>Kindergarten through 6th Grade</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Monthly Tuition</span>
                      <span className="font-bold text-[#333333]">$600/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Payment Period</span>
                      <span className="font-bold text-[#333333]">10 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Sibling Discount</span>
                      <span className="font-bold text-[#333333]">10% off</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-[#F5E8D8]">
                  <CardTitle className="text-[#B05834]">7th-8th Grade Program</CardTitle>
                  <CardDescription>Middle School</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Monthly Tuition</span>
                      <span className="font-bold text-[#333333]">$725/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Payment Period</span>
                      <span className="font-bold text-[#333333]">10 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Sibling Discount</span>
                      <span className="font-bold text-[#333333]">10% off</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-[#F5E8D8]">
                  <CardTitle className="text-[#B05834]">Additional Fees</CardTitle>
                  <CardDescription>Annual Registration and Other Fees</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Registration Fee (annual)</span>
                      <span className="font-bold text-[#333333]">$100</span>
                    </div>
                    <div className="mt-6 p-4 bg-[#F5E8D8] rounded-lg">
                      <p className="text-[#666666] mb-2 font-medium">
                        Please note that additional nonrefundable yearly fees are required and must be paid upfront.
                      </p>
                      <p className="text-[#666666] text-sm">
                        These fees will be outlined in the enrollment package.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="h-8 w-8 text-[#B05834]" />
                <h3 className="text-xl font-bold text-[#FF4A00]">Financial Aid</h3>
              </div>
              <p className="text-[#666666] mb-4">
                Cordoba Academy is committed to making quality Islamic education accessible to all families. We offer
                need-based financial aid to eligible families. Financial aid applications are reviewed separately from
                admission applications and do not affect admission decisions.
              </p>
              <p className="text-[#666666] mb-6">
                If you have questions about tuition, fees, or financial aid options, please don't hesitate to reach out. Our admissions team is here to assist you in making Islamic education accessible for your family.
              </p>
              <Link href="/contact">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Apply */}
      <div className="bg-[#B05834] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="mb-6">
              Take the first step toward providing your child with an exceptional education that nurtures both academic
              excellence and Islamic identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enrollment/tour">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8] w-full sm:w-auto">Schedule a Tour</Button>
              </Link>
              <Link href="https://portal.schoolcues.com/Portal/PreEnrollment/Index/EEB26BB8-40BA-4195-BAD5-36353AB41C77" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#FF4A00] hover:bg-[#FF4A00]/80 text-white w-full sm:w-auto">Apply Now</Button>
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
            <h3 className="font-bold text-[#333333] mb-2">What is the age requirement for kindergarten?</h3>
            <p className="text-[#666666]">
              Children must be 5 years old by August 31st to enroll in kindergarten for the upcoming school year.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Do you accept mid-year transfers?</h3>
            <p className="text-[#666666]">
              Yes, we accept mid-year transfers based on space availability. The same application process applies, and
              we work closely with families to ensure a smooth transition.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">What is your class size?</h3>
            <p className="text-[#666666]">
              We maintain small class sizes to ensure personalized attention. Our average class size is 16-18 students,
              with a maximum of 20 students per class.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Is before and after-school care available?</h3>
            <p className="text-[#666666]">
              Yes, we offer before-school care from 7:30 AM and after-school care until 5:30 PM for an additional fee.
              Our after-school program includes homework help, enrichment activities, and supervised play.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Do you provide transportation?</h3>
            <p className="text-[#666666]">
              We do not currently provide transportation services. Families are responsible for arranging transportation
              to and from school. Many families organize carpools, which we are happy to help facilitate.
            </p>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#F5E8D8] rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#B05834] mb-4">Have Questions?</h2>
          <p className="text-[#666666] mb-6">
            Our admissions team is here to help you navigate the enrollment process and answer any questions you may
            have about Cordoba Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">
                Contact Admissions
              </Button>
            </Link>
            <Link href="/enrollment/faq">
              <Button
                variant="outline"
                className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
              >
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
