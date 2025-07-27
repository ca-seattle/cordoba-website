import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, BookOpen, Users, Building, Gift, Calendar, CreditCard, Smartphone } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function DonatePage() {
  // Donation options
  const donationOptions = [
    {
      title: "General Fund",
      description:
        "Support our overall mission and operations, allowing us to allocate funds where they are most needed.",
      icon: Heart,
      color: "#FF4A00",
    },
    {
      title: "Scholarship Fund",
      description:
        "Help make Islamic education accessible to all families by contributing to our need-based scholarship program.",
      icon: BookOpen,
      color: "#B05834",
    },
    {
      title: "Teacher Development",
      description:
        "Invest in our teachers through professional development opportunities that enhance classroom instruction.",
      icon: Users,
      color: "#FF4A00",
    },
    {
      title: "Facility Improvements",
      description:
        "Support upgrades to our campus, including classroom technology, playground equipment, and building maintenance.",
      icon: Building,
      color: "#B05834",
    },
  ]

  // Donation amounts
  const donationAmounts = ["$25", "$50", "$100", "$250", "$500", "$1,000", "Other"]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Support Our Mission" subtitle="Your generosity helps shape the future of our students" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Make a Difference Today</h2>
            <p className="text-[#666666] mb-6">
              Your support enables Cordoba Academy to provide an exceptional educational experience that nurtures
              academic excellence, Islamic identity, and character development. As a 501(c)(3) nonprofit organization,
              your contributions are tax-deductible to the extent allowed by law.
            </p>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/donate-hero.png" alt="Students at Cordoba Academy" fill className="object-cover" />
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Ways to Give</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {donationOptions.map((option, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-[#F5E8D8] rounded-full p-2">
                      <option.icon className="h-5 w-5" style={{ color: option.color }} />
                    </div>
                    <div>
                      <CardTitle>{option.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#666666]">{option.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Gift className="h-8 w-8 text-[#B05834]" />
                <h3 className="text-xl font-bold text-[#FF4A00]">Other Ways to Support</h3>
              </div>
              <ul className="space-y-4 text-[#666666]">
                <li className="flex items-start gap-3">
                  <div className="font-bold text-[#333333] w-32 flex-shrink-0">Planned Giving</div>
                  <div>
                    Include Cordoba Academy in your will or estate planning to create a lasting legacy of support for
                    Islamic education.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="font-bold text-[#333333] w-32 flex-shrink-0">Matching Gifts</div>
                  <div>
                    Many employers match charitable contributions. Check with your company to potentially double your
                    impact.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="font-bold text-[#333333] w-32 flex-shrink-0">In-Kind Donations</div>
                  <div>
                    Donate goods or services that support our educational mission, such as books, technology, or
                    professional expertise.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="font-bold text-[#333333] w-32 flex-shrink-0">Volunteer</div>
                  <div>Contribute your time and talents to support our students, teachers, and school events.</div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Make a Donation</h3>

            {/* Mobile Payment Options */}
            <div className="bg-white border-2 border-[#E5D5C5] p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold text-[#B05834] mb-4">Donation Options</h4>
              <p className="text-[#666666] mb-6">Scan the QR codes or use the links below to donate instantly via PayPal, Venmo or Zelle.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#F5E8D8] p-4 rounded-lg mb-4 h-24 flex flex-col justify-between">
                    <Image src="/paypal.png" alt="PayPal" width={90} height={45} className="mx-auto" />
                    <p className="text-[#666666] text-sm">One-time or Monthly</p>
                  </div>
                  <div className="bg-white border-2 border-[#E5D5C5] p-4 rounded-lg mb-3 h-48 flex items-center justify-center">
                    <div className="text-center">
                    <a
                      href="https://www.paypal.com/donate/?hosted_button_id=AJFCNVUGCZEJU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/paypal_qr.png" alt="PayPal QR Code" width={120} height={120} className="mx-auto mb-1.5 mt-5" />
                      </a>
                      <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input type="hidden" name="hosted_button_id" value="AJFCNVUGCZEJU" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                      </form>
                    </div>
                  </div>
                  <p className="text-[#666666] text-sm">Click or scan to donate via PayPal</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#F5E8D8] p-4 rounded-lg mb-4 h-24 flex flex-col justify-between">
                    <Image src="/venmo_blue.png" alt="Venmo" width={80} height={40} className="mx-auto mt-2" />
                    <p className="text-[#666666] text-sm">@cordobaacadmy</p>
                  </div>
                  <div className="bg-white border-2 border-[#E5D5C5] p-4 rounded-lg mb-3 h-48 flex items-center justify-center">
                    <a
                      href="https://account.venmo.com/u/cordobaacadmy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image src="/venmo_qr.jpg" alt="Venmo QR Code" width={160} height={160} className="mx-auto" />
                    </a>
                  </div>
                  <p className="text-[#666666] text-sm">Click or scan to donate via Venmo</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#F5E8D8] p-4 rounded-lg mb-4 h-24 flex flex-col justify-between">
                    <Image src="/zelle.png" alt="Zelle" width={80} height={40} className="mx-auto" />
                    <p className="text-[#666666] text-sm">donate@cordobaacademy.org</p>
                  </div>
                  <div className="bg-white border-2 border-[#E5D5C5] p-4 rounded-lg mb-3 h-48 flex items-center justify-center">
                    <Image src="/zelle_qr.jpg" alt="Zelle QR Code" width={160} height={160} className="mx-auto" />
                  </div>
                  <p className="text-[#666666] text-sm">Scan to donate via Zelle</p>
                </div>
              </div>
            </div>

            {/* <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="donation-fund" className="text-[#333333] font-bold">
                    Select a Fund
                  </Label>
                  <select
                    id="donation-fund"
                    className="w-full mt-1 p-2 border border-[#E5D5C5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B05834]"
                  >
                    <option value="general">General Fund</option>
                    <option value="scholarship">Scholarship Fund</option>
                    <option value="teacher">Teacher Development</option>
                    <option value="facility">Facility Improvements</option>
                  </select>
                </div>

                <div>
                  <Label className="text-[#333333] font-bold">Donation Amount</Label>
                  <RadioGroup defaultValue="$100" className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-1">
                    {donationAmounts.map((amount) => (
                      <div key={amount} className="flex items-center space-x-2">
                        <RadioGroupItem value={amount} id={`amount-${amount}`} />
                        <Label htmlFor={`amount-${amount}`} className="text-[#666666]">
                          {amount}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="text-[#333333] font-bold">
                      First Name
                    </Label>
                    <Input
                      id="first-name"
                      className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="text-[#333333] font-bold">
                      Last Name
                    </Label>
                    <Input
                      id="last-name"
                      className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#333333] font-bold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#333333] font-bold">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="recurring"
                    className="rounded border-[#E5D5C5] text-[#B05834] focus:ring-[#B05834]"
                  />
                  <Label htmlFor="recurring" className="text-[#666666]">
                    Make this a monthly recurring donation
                  </Label>
                </div>

                <Button className="w-full bg-[#B05834] hover:bg-[#8A4526] text-white">Proceed to Payment</Button>

                <p className="text-[#666666] text-sm text-center">
                  Your donation is secure and encrypted. You will receive a tax receipt via email.
                </p>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#F5E8D8] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#B05834]">25%</span>
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Scholarship Support</h3>
              <p className="text-[#666666]">
                of our students receive need-based financial assistance, making Islamic education accessible to all
                families.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#F5E8D8] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#B05834]">100%</span>
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Faculty Development</h3>
              <p className="text-[#666666]">
                of our teachers participate in professional development opportunities to enhance their teaching skills.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#F5E8D8] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#B05834]">15+</span>
              </div>
              <h3 className="font-bold text-[#333333] mb-2">Enrichment Programs</h3>
              <p className="text-[#666666]">
                including Quran competition, STEAM activities, and community service projects funded by donations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Annual Fund */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#F5E8D8] rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-[#B05834]" />
                <h3 className="text-xl font-bold text-[#FF4A00]">Annual Fund</h3>
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image src="/annual-fund.png" alt="Annual Fund" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-[#666666] mb-4">
                Our Annual Fund is the cornerstone of our fundraising efforts, providing essential support for our
                operating budget. Your contribution to the Annual Fund helps bridge the gap between tuition revenue and
                the actual cost of educating each student.
              </p>
              <p className="text-[#666666] mb-6">
                This year, our goal is to raise $250,000 to support teacher salaries, classroom resources, facility
                maintenance, and financial aid. Every gift, regardless of size, makes a difference in the lives of our
                students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Donate to Annual Fund</Button>
                <Link href="/donate/annual-report">
                  <Button
                    variant="outline"
                    className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    View Annual Report
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Why Donors Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] p-6 rounded-lg flex flex-col">
              <p className="text-[#666666] italic mb-4 flex-1">
                "I support Cordoba Academy because I believe in investing in the future of our community. The school
                provides an environment where children can excel academically while developing a strong Islamic
                identity."
              </p>
              <p className="font-bold text-[#333333] mt-auto">Kareem J., Monthly Donor</p>
            </div>
            <div className="bg-[#F5E8D8] p-6 rounded-lg flex flex-col">
              <p className="text-[#666666] italic mb-4 flex-1">
                "As a grandparent, I want to ensure that quality Islamic education is available for generations to come.
                My donations to the scholarship fund help make this education accessible to all families."
              </p>
              <p className="font-bold text-[#333333] mt-auto">Amina & Yusuf S., Scholarship Fund Donors</p>
            </div>
            <div className="bg-[#F5E8D8] p-6 rounded-lg flex flex-col">
              <p className="text-[#666666] italic mb-4 flex-1">
                "I'm a community member without children at the school, but I recognize the importance of supporting
                institutions that build strong Muslim Americans. Cordoba Academy is developing the leaders of tomorrow."
              </p>
              <p className="font-bold text-[#333333] mt-auto">Ibrahim M., Annual Fund Supporter</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Matching */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#B05834] rounded-lg p-8 text-white max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Double Your Impact</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Many employers match charitable contributions made by their employees. Check with your company's HR
            department to see if they offer a matching gift program and potentially double your impact!
          </p>
          <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Check Employer Match</Button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#B05834] mb-4">Questions About Giving?</h2>
          <p className="text-[#666666] mb-6">
            Our team is here to help with any questions about donations, planned giving, or other ways to
            support Cordoba Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            {/* <Link href="/donate/faq">
              <Button
                variant="outline"
                className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
              >
                Donation FAQs
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
