import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHero from "@/components/page-hero"

export default function FAQPage() {
  // General FAQs
  const generalFAQs = [
    {
      question: "What is Cordoba Academy's educational philosophy?",
      answer:
        "Cordoba Academy provides an exceptional educational experience that nurtures academic excellence, Islamic identity, and character development in a safe, supportive environment. We believe in educating the whole child—intellectually, spiritually, socially, and emotionally—and preparing students to be successful, contributing members of society who embody Islamic values.",
    },
    {
      question: "What grades does Cordoba Academy serve?",
      answer:
        "Currently, Cordoba Academy serves students from preschool (ages 3-5) through 6th grade. We are excited to announce our expansion to include 7th and 8th grades starting in the 2025-2026 academic year.",
    },
    {
      question: "What are your school hours?",
      answer:
        "Our school day runs from 8:30 AM to 3:30 PM, Monday through Friday. Before-school care is available from 7:30 AM, and after-school care is available until 5:30 PM for an additional fee.",
    },
    {
      question: "Is Cordoba Academy accredited?",
      answer:
        "Yes, Cordoba Academy is accredited by the Northwest Association of Independent Schools (NWAIS), which ensures that we meet high standards for educational quality and continuous school improvement.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "We maintain small class sizes to ensure personalized attention and optimal learning conditions. Our student-to-teacher ratios are: Preschool: 8:1, Kindergarten: 12:1, Elementary (1st-6th): 16:1, and our upcoming Middle School (7th-8th) will maintain a 15:1 ratio.",
    },
    {
      question: "Do you provide transportation services?",
      answer:
        "We do not currently provide transportation services. Families are responsible for arranging transportation to and from school. Many families organize carpools, which we are happy to help facilitate.",
    },
    {
      question: "What security measures are in place at the school?",
      answer:
        "The safety and security of our students is our top priority. Our campus features secure entry systems, surveillance cameras, and regular safety drills. All visitors must check in at the front office and wear visitor badges while on campus. We also have comprehensive emergency response plans in place.",
    },
  ]

  // Academics FAQs
  const academicsFAQs = [
    {
      question: "What curriculum does Cordoba Academy use?",
      answer:
        "We use a combination of research-based curricula and teacher-developed materials that exceed state standards while integrating Islamic perspectives. Our core curriculum includes Singapore Math, Lucy Calkins Reading and Writing Workshop, FOSS Science, and a comprehensive Islamic Studies and Arabic language program.",
    },
    {
      question: "How do you integrate Islamic education into the curriculum?",
      answer:
        "Islamic education is integrated throughout our curriculum in several ways: 1) Dedicated classes in Quran, Islamic Studies, and Arabic, 2) Integration of Islamic perspectives in core subjects like science, social studies, and language arts, 3) Daily prayers and Islamic practices incorporated into the school day, and 4) Character education based on Islamic values and ethics.",
    },
    {
      question: "How do you accommodate students with different learning needs?",
      answer:
        "We recognize that students learn in different ways and at different paces. Our teachers use differentiated instruction to meet the needs of diverse learners. We provide additional support for students who need extra help and enrichment opportunities for those who are ready for more challenges. For students with significant learning differences, we work with families to develop appropriate accommodations and may recommend additional resources or services.",
    },
    {
      question: "How do you assess student progress?",
      answer:
        "We use a variety of assessment methods to monitor student progress, including formative assessments, project-based assessments, and standardized testing. Progress is communicated to parents through quarterly report cards, parent-teacher conferences, and regular updates via our school communication platform.",
    },
    {
      question: "Do you offer Arabic language instruction?",
      answer:
        "Yes, Arabic language instruction is an integral part of our curriculum. Students receive regular Arabic classes appropriate for their age and proficiency level, focusing on reading, writing, speaking, and listening skills. Our goal is for students to develop functional Arabic language skills that support their understanding of the Quran and Islamic texts.",
    },
    {
      question: "What extracurricular activities do you offer?",
      answer:
        "We offer a variety of extracurricular activities that enhance our academic program and provide opportunities for students to explore their interests and develop new skills. These include Quran Club, STEAM Club, Art Club, Sports, Student Council, and Community Service projects. Our after-school program also includes enrichment activities and homework help.",
    },
    {
      question: "How much homework do students receive?",
      answer:
        "Homework is grade-appropriate and designed to reinforce classroom learning. Kindergarten and 1st grade students receive minimal homework, while upper elementary students may have 30-60 minutes of homework per night, including Quran practice. Middle school students can expect 60-90 minutes of homework per night. We strive to balance academic rigor with family time and other activities.",
    },
  ]

  // Admissions FAQs
  const admissionsFAQs = [
    {
      question: "What is the admissions process?",
      answer:
        "Our admissions process includes the following steps: 1) Submit an application with required documents, 2) Schedule a student assessment, 3) Family interview, 4) Admissions decision, and 5) Enrollment and registration. We encourage families to begin the process early, as spaces fill quickly, especially for certain grade levels.",
    },
    {
      question: "What are the age requirements for enrollment?",
      answer:
        "Children must be the following ages by August 31st to enroll in the respective programs: Preschool: 3 years old and fully potty-trained, Kindergarten: 5 years old, 1st Grade: 6 years old. For other grades, age-appropriate placement is determined based on previous schooling and assessment results.",
    },
    {
      question: "Do you accept mid-year transfers?",
      answer:
        "Yes, we accept mid-year transfers based on space availability. The same application process applies, and we work closely with families to ensure a smooth transition for students joining us during the school year.",
    },
    {
      question: "What documents are required for application?",
      answer:
        "Required documents include: completed application form, birth certificate, immunization records, previous school records (if applicable), and application fee. Additional documents may be requested during the admissions process.",
    },
    {
      question: "What is the tuition for the 2024-2025 school year?",
      answer:
        "Tuition for the 2024-2025 school year is as follows: Preschool (5 half days): $7,500/year, Preschool (5 full days): $9,500/year, K-6 Program: $9,800/year. Additional fees include a one-time application fee for new students ($100), annual registration fee ($300), and materials fee ($250). Sibling discounts and flexible payment plans are available.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer need-based financial aid to eligible families. Our goal is to make quality Islamic education accessible to all families. Financial aid applications are reviewed separately from admission applications and do not affect admission decisions. Families interested in financial aid should complete the financial aid application as part of the enrollment process.",
    },
    {
      question: "Is there a waitlist for certain grades?",
      answer:
        "Yes, some grades may have waitlists, particularly preschool and kindergarten. We encourage families to apply early, even if the desired grade is currently full. Waitlisted students are considered for admission as spaces become available, based on the date of completed application and other factors.",
    },
  ]

  // Parent Involvement FAQs
  const parentFAQs = [
    {
      question: "How can parents get involved at Cordoba Academy?",
      answer:
        "There are many ways for parents to get involved, including: 1) Joining the Parent Association, 2) Volunteering in classrooms or for school events, 3) Chaperoning field trips, 4) Serving on school committees, 5) Supporting fundraising efforts, and 6) Sharing expertise through guest presentations or career day. We value parent involvement and believe it strengthens our school community.",
    },
    {
      question: "What is the Parent Association?",
      answer:
        "The Parent Association (PA) is a volunteer organization that supports the school through community building, volunteer coordination, fundraising, and parent education. All parents are automatically members of the PA and are encouraged to participate in meetings and activities. The PA plays a vital role in enhancing the educational experience for all students.",
    },
    {
      question: "Are there volunteer requirements for parents?",
      answer:
        "While volunteering is not required, it is strongly encouraged. We ask each family to consider contributing 20 hours of volunteer time per year. There are many ways to fulfill these hours, including classroom help, event support, committee work, and at-home projects. We understand that families have different capacities for volunteering and appreciate any level of involvement.",
    },
    {
      question: "How does the school communicate with parents?",
      answer:
        "We use multiple channels to ensure effective communication with parents: 1) School Cues platform for announcements, grades, and attendance, 2) Weekly newsletter with important updates and upcoming events, 3) Email communications for time-sensitive information, 4) Parent-teacher conferences held twice per year, 5) Class-specific communication from teachers, and 6) Social media updates on school activities and achievements.",
    },
    {
      question: "Are there parent education opportunities?",
      answer:
        "Yes, we offer parent education workshops throughout the year on topics such as supporting your child's academic success, Islamic parenting, digital citizenship, and child development. These workshops are designed to strengthen the home-school partnership and provide parents with tools and resources to support their children's growth and learning.",
    },
    {
      question: "How can parents access their child's academic information?",
      answer:
        "Parents can access their child's academic information through our School Cues platform, which provides real-time updates on grades, assignments, attendance, and behavior. Login credentials are provided at the beginning of the school year, and technical support is available if needed.",
    },
    {
      question: "What if I have a concern about my child's experience?",
      answer:
        "We encourage open communication between parents and teachers. If you have a concern, please first discuss it with your child's teacher. If the concern persists, you may schedule a meeting with the appropriate administrator (Principal or Vice Principal). We are committed to addressing parent concerns promptly and finding constructive solutions that support student success.",
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about Cordoba Academy" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <Tabs defaultValue="general" className="mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto mb-8">
                <TabsTrigger value="general" className="py-3">
                  General
                </TabsTrigger>
                <TabsTrigger value="academics" className="py-3">
                  Academics
                </TabsTrigger>
                <TabsTrigger value="admissions" className="py-3">
                  Admissions
                </TabsTrigger>
                <TabsTrigger value="parents" className="py-3">
                  Parent Involvement
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <div className="space-y-6">
                  {generalFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-[#E5D5C5] pb-6">
                      <h3 className="font-bold text-[#B05834] text-lg mb-2">{faq.question}</h3>
                      <p className="text-[#666666]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="academics">
                <div className="space-y-6">
                  {academicsFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-[#E5D5C5] pb-6">
                      <h3 className="font-bold text-[#B05834] text-lg mb-2">{faq.question}</h3>
                      <p className="text-[#666666]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="admissions">
                <div className="space-y-6">
                  {admissionsFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-[#E5D5C5] pb-6">
                      <h3 className="font-bold text-[#B05834] text-lg mb-2">{faq.question}</h3>
                      <p className="text-[#666666]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="parents">
                <div className="space-y-6">
                  {parentFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-[#E5D5C5] pb-6">
                      <h3 className="font-bold text-[#B05834] text-lg mb-2">{faq.question}</h3>
                      <p className="text-[#666666]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Still Have Questions?</h3>
              <p className="text-[#666666] mb-6">
                If you didn't find the answer to your question, please don't hesitate to contact us. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">Contact Us</Button>
                </Link>
                <Link href="/enrollment/inquire">
                  <Button
                    variant="outline"
                    className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
                  >
                    Request Information
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="font-bold text-[#333333] text-xl mb-3">Parent Handbook</h3>
              <p className="text-[#666666] mb-4">
                Our comprehensive Parent Handbook provides detailed information about school policies, procedures, and
                expectations.
              </p>
              <Link href="/resources/parent-handbook">
                <Button
                  variant="outline"
                  className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                >
                  Download Handbook
                </Button>
              </Link>
            </div>
            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="font-bold text-[#333333] text-xl mb-3">Academic Calendar</h3>
              <p className="text-[#666666] mb-4">
                View our academic calendar for important dates, including holidays, parent-teacher conferences, and
                special events.
              </p>
              <Link href="/events/calendar">
                <Button
                  variant="outline"
                  className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                >
                  View Calendar
                </Button>
              </Link>
            </div>
            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <h3 className="font-bold text-[#333333] text-xl mb-3">Admissions Guide</h3>
              <p className="text-[#666666] mb-4">
                Our Admissions Guide provides step-by-step information about the application process, requirements, and
                timeline.
              </p>
              <Link href="/enrollment/guide">
                <Button
                  variant="outline"
                  className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                >
                  View Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#B05834] mb-4">Experience Cordoba Academy</h2>
          <p className="text-[#666666] mb-6">
            The best way to learn about our school is to visit our campus. Schedule a tour to see our classrooms, meet
            our teachers, and experience our vibrant learning community firsthand.
          </p>
          <Link href="/enrollment/tour">
            <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Schedule a Tour</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
