import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Share2 } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function MiddleSchoolExpansionPage() {
  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Cordoba Academy Announces Middle School Expansion" />

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-[#666666] mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cordoba Academy, Lynnwood</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image src="/middle-school.png" alt="Middle School Expansion" fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none text-[#666666]">
              <p className="font-bold text-lg">
                We're excited to announce our expansion to include 7th and 8th grades starting in the 2025-2026 academic
                year, meeting a critical need in our community.
              </p>

              <p>
                Cordoba Academy is thrilled to announce a significant milestone in our growth journey: the expansion of
                our educational offerings to include 7th and 8th grades, beginning in the 2025-2026 academic year. This
                expansion represents our commitment to providing continuous, high-quality Islamic education for students
                beyond the elementary years.
              </p>

              <h3 className="text-xl font-bold text-[#B05834] mt-6 mb-3">Meeting a Critical Community Need</h3>
              <p>
                As the only Islamic middle school in Lynnwood, our expansion will serve families from Tacoma to
                Marysville, filling a crucial gap in Islamic education options for middle school students in our region.
                This expansion comes in response to the growing demand from our community and the need for an
                educational environment that nurtures both academic excellence and Islamic identity during these
                formative years.
              </p>

              <h3 className="text-xl font-bold text-[#B05834] mt-6 mb-3">Our Middle School Vision</h3>
              <p>
                Our middle school program will build upon the strong foundation established in our K-6 program,
                providing a seamless transition to high school while continuing to nurture students' academic excellence
                and Islamic identity. The program will feature:
              </p>

              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>Partnership with CVA, providing access to state resources and standardized testing</li>
                <li>
                  A custom-designed curriculum by our staff, integrating Islamic values to support students' academic
                  and spiritual growth
                </li>
                <li>
                  Emphasis on leadership, independent thinking, and academic excellence through project-based learning
                  and real-world applications
                </li>
                <li>Small class sizes to ensure personalized attention and student success</li>
                <li>
                  Regular progress assessments using various tools, including BAS for ELA, quarterly math tests, STARS
                  testing, and i-Ready
                </li>
                <li>
                  Innovative teaching methods, incorporating technology to equip students with 21st-century skills
                </li>
                <li>
                  Enrichment activities, including STREAM (Science, Technology, Religion, Engineering, Arts, and Math)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#B05834] mt-6 mb-3">Islamic Studies Focus</h3>
              <p>
                Our Islamic Studies curriculum for middle school students will build upon the foundation established in
                earlier grades, with a focus on:
              </p>

              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>Memorization of hadith on adab and akhlaq</li>
                <li>History of our pious predecessors</li>
                <li>Futuwwa (chivalry), leadership, and responsibilities</li>
                <li>Contemporary challenges facing Muslim youth and Islamic solutions</li>
                <li>Deeper understanding of Islamic principles and their application in daily life</li>
              </ul>

              <h3 className="text-xl font-bold text-[#B05834] mt-6 mb-3">Next Steps</h3>
              <p>
                We are currently in the planning and development phase for our middle school program. In the coming
                months, we will be sharing more details about curriculum, faculty, facilities, and the enrollment
                process. We invite interested families to complete our pre-registration form to express interest and
                stay updated on developments.
              </p>

              <p>
                This expansion marks an exciting new chapter in Cordoba Academy's journey, and we look forward to
                continuing to serve our community by providing an educational environment where students can thrive
                academically, spiritually, and socially.
              </p>
            </div>

            {/* Share Article */}
            <div className="mt-8 pt-6 border-t border-[#E5D5C5]">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#333333]">Share this article:</h4>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#F5E8D8] rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-[#B05834] mb-4">Interested in Our Middle School Program?</h3>
            <p className="text-[#666666] mb-6">
              Complete our pre-registration form to express interest and stay updated on developments for our new
              7th-8th grade program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enrollment">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Pre-Register Now</Button>
              </Link>
              <Link href="/academics/middle-school">
                <Button
                  variant="outline"
                  className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                >
                  Learn More About the Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related News */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#B05834] mb-8">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <div className="text-[#666666] text-sm mb-2">December 10, 2024</div>
                <h3 className="text-lg font-bold text-[#FF4A00] mb-3">Students Excel in Regional Math Competition</h3>
                <p className="text-[#666666] mb-4">
                  Congratulations to our 4th-6th grade math team for their outstanding performance at the regional
                  mathematics competition, bringing home several awards.
                </p>
                <Link href="/news/math-competition-success">
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
              <div className="p-6">
                <div className="text-[#666666] text-sm mb-2">November 25, 2024</div>
                <h3 className="text-lg font-bold text-[#FF4A00] mb-3">
                  Annual Fundraising Dinner Raises Record Amount
                </h3>
                <p className="text-[#666666] mb-4">
                  Thanks to our generous community, our annual fundraising dinner was a tremendous success, raising
                  funds that will support scholarships and facility improvements.
                </p>
                <Link href="/news/fundraising-success">
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
              <div className="p-6">
                <div className="text-[#666666] text-sm mb-2">October 15, 2024</div>
                <h3 className="text-lg font-bold text-[#FF4A00] mb-3">New STEAM Lab Opens at Cordoba Academy</h3>
                <p className="text-[#666666] mb-4">
                  We're excited to announce the opening of our new state-of-the-art STEAM lab, providing students with
                  hands-on learning opportunities in science, technology, engineering, arts, and mathematics.
                </p>
                <Link href="/news/steam-lab-opening">
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
    </div>
  )
}
