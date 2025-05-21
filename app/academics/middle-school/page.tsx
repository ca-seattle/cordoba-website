import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Clock, Calendar, Award } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function MiddleSchoolPage() {
  // Core subjects
  const coreSubjects = [
    {
      title: "Language Arts",
      description:
        "Developing critical reading, writing, and communication skills through literature analysis, creative writing, and research projects.",
      icon: BookOpen,
    },
    {
      title: "Mathematics",
      description:
        "Building problem-solving abilities through pre-algebra, algebra, and geometry, with opportunities for advanced math placement.",
      icon: BookOpen,
    },
    {
      title: "Science",
      description:
        "Exploring life, earth, and physical sciences through hands-on experiments, research, and STEAM-based learning.",
      icon: BookOpen,
    },
    {
      title: "Social Studies",
      description:
        "Examining world history, geography, and civics with an emphasis on Islamic contributions to civilization.",
      icon: BookOpen,
    },
    {
      title: "Islamic Studies",
      description:
        "Deepening understanding of Islamic principles, history, and contemporary applications through engaging discussions and projects.",
      icon: BookOpen,
    },
    {
      title: "Quran & Arabic",
      description:
        "Advancing Quran memorization, tajweed, and Arabic language skills through daily practice and personalized instruction.",
      icon: BookOpen,
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Middle School Program" subtitle="Grades 7-8" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Program Overview</h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy's Middle School program serves students in grades 7-8, providing a seamless transition
              from elementary to high school. Our program is designed to nurture academic excellence and Islamic
              identity during these formative years, preparing students for success in high school and beyond.
            </p>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/middle-school-classroom.png" alt="Middle School Classroom" fill className="object-cover" />
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Small class sizes ensuring personalized attention and student success
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Integration of Islamic values across all subject areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Project-based learning emphasizing critical thinking and real-world applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Regular progress assessments using various tools, including standardized testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Partnership with CVA, providing access to state resources and standardized testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Enrichment activities, including STREAM (Science, Technology, Religion, Engineering, Arts, and Math)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Focus on leadership development, character building, and community service
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Curriculum</h3>
            <p className="text-[#666666] mb-6">
              Our middle school curriculum is designed to challenge students academically while nurturing their Islamic
              identity. We offer a comprehensive program that prepares students for success in high school and beyond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {coreSubjects.map((subject, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-[#F5E8D8] rounded-full p-2">
                      <subject.icon className="h-5 w-5 text-[#B05834]" />
                    </div>
                    <div>
                      <CardTitle>{subject.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#666666]">{subject.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Electives & Enrichment</h3>
              <p className="text-[#666666] mb-4">
                In addition to core subjects, students participate in various electives and enrichment activities that
                enhance their learning experience and develop their talents and interests.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Art & Design</h4>
                  <p className="text-[#666666] text-sm">
                    Exploring various art forms and design principles through hands-on projects.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Technology</h4>
                  <p className="text-[#666666] text-sm">
                    Developing digital literacy, coding skills, and responsible technology use.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Physical Education</h4>
                  <p className="text-[#666666] text-sm">
                    Promoting physical fitness, teamwork, and healthy lifestyle choices.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Leadership & Service</h4>
                  <p className="text-[#666666] text-sm">
                    Building leadership skills through community service projects and mentoring opportunities.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">A Day in Middle School</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">8:30 AM - Morning Assembly</h4>
                  <p className="text-[#666666]">
                    Students begin the day with morning du'a, announcements, and a brief Islamic reminder.
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
                  <h4 className="font-bold text-[#333333] mb-1">8:45 AM - 10:15 AM - Core Subjects</h4>
                  <p className="text-[#666666]">
                    Students engage in core academic subjects with integrated Islamic perspectives.
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
                  <h4 className="font-bold text-[#333333] mb-1">10:15 AM - 10:30 AM - Morning Break</h4>
                  <p className="text-[#666666]">Students enjoy a short break for snacks and socialization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">10:30 AM - 12:00 PM - Core Subjects</h4>
                  <p className="text-[#666666]">
                    Continuation of core academic subjects with project-based learning activities.
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
                  <h4 className="font-bold text-[#333333] mb-1">12:00 PM - 12:45 PM - Lunch & Prayer</h4>
                  <p className="text-[#666666]">
                    Students have lunch followed by Dhuhr prayer and a brief Islamic reminder.
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
                  <h4 className="font-bold text-[#333333] mb-1">12:45 PM - 2:15 PM - Quran & Islamic Studies</h4>
                  <p className="text-[#666666]">Focused time for Quran memorization, tajweed, and Islamic studies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">2:15 PM - 3:15 PM - Electives & Enrichment</h4>
                  <p className="text-[#666666]">
                    Students participate in various electives and enrichment activities based on their interests.
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
                  <h4 className="font-bold text-[#333333] mb-1">3:15 PM - 3:30 PM - Closing Circle</h4>
                  <p className="text-[#666666]">
                    Students reflect on the day's learning, complete homework assignments, and prepare for dismissal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="h-8 w-8 text-[#B05834]" />
                <h3 className="text-xl font-bold text-[#FF4A00]">2025-2026 Academic Year</h3>
              </div>
              <p className="text-[#666666] mb-4">
                We are excited to launch our Middle School program for the 2025-2026 academic year. As the only Islamic
                middle school in Lynnwood, our program will serve families from Tacoma to Marysville, filling a crucial
                gap in Islamic education options for middle school students in our region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enrollment">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">
                    Pre-Register for 2025-2026
                  </Button>
                </Link>
                <Link href="/news/middle-school-expansion">
                  <Button
                    variant="outline"
                    className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
                  >
                    Learn More About the Expansion
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Meet Our Middle School Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/teacher-1.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Br. Ahmad Hassan</h3>
                <p className="text-[#666666] italic mb-3">Middle School Lead Teacher</p>
                <p className="text-[#666666] mb-4">
                  Br. Ahmad brings over 10 years of experience in Islamic education and holds a Master's degree in
                  Education with specialization in STEM curriculum development.
                </p>
                <Link href="/about/faculty/ahmad-hassan">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Read Bio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/teacher-2.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Fatima Khan</h3>
                <p className="text-[#666666] italic mb-3">Language Arts & Social Studies</p>
                <p className="text-[#666666] mb-4">
                  Sr. Fatima is passionate about integrating Islamic perspectives into humanities education and has
                  extensive experience teaching middle and high school students.
                </p>
                <Link href="/about/faculty/fatima-khan">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Read Bio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/teacher-3.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Br. Omar Suleiman</h3>
                <p className="text-[#666666] italic mb-3">Islamic Studies & Quran</p>
                <p className="text-[#666666] mb-4">
                  Br. Omar is a hafiz of the Quran with ijazah in multiple qira'at and holds a degree in Islamic
                  Studies. He specializes in making Islamic learning engaging for youth.
                </p>
                <Link href="/about/faculty/omar-suleiman">
                  <Button
                    variant="outline"
                    className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                  >
                    Read Bio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Outcomes */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B05834] mb-6 text-center">Student Outcomes</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Award className="h-8 w-8 text-[#FF4A00]" />
              <h3 className="text-xl font-bold text-[#333333]">Preparing for Success</h3>
            </div>
            <p className="text-[#666666] mb-6">
              Our Middle School program is designed to prepare students for success in high school and beyond. By the
              time they graduate from 8th grade, our students will have:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Academic Excellence</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Mastered core academic subjects at or above grade level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Developed critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Built strong study habits and organizational skills</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Islamic Identity</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Strengthened their relationship with Allah and the Quran</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Developed a deep understanding of Islamic principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Built confidence in their Muslim identity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Character & Leadership</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Demonstrated strong moral character and ethical decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Developed leadership skills through service and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Built resilience and perseverance in facing challenges</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Social & Emotional Growth</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Developed strong communication and collaboration skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Built healthy relationships with peers and adults</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Demonstrated empathy and respect for diversity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Middle School Program</h2>
            <p className="mb-6">
              We invite you to be part of our inaugural Middle School class for the 2025-2026 academic year. Space is
              limited, so we encourage interested families to pre-register early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enrollment">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8] w-full sm:w-auto">
                  Pre-Register Now
                </Button>
              </Link>
              <Link href="/enrollment/tour">
                <Button className="bg-[#FF4A00] hover:bg-[#FF4A00]/80 text-white w-full sm:w-auto">
                  Schedule a Tour
                </Button>
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
            <h3 className="font-bold text-[#333333] mb-2">What is the class size for middle school?</h3>
            <p className="text-[#666666]">
              We maintain small class sizes of 15-18 students to ensure personalized attention and optimal learning
              conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">
              How does the middle school program prepare students for high school?
            </h3>
            <p className="text-[#666666]">
              Our curriculum is designed to exceed state standards and develop the academic skills, study habits, and
              character traits needed for success in high school. We focus on critical thinking, time management, and
              independent learning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">
              Are there extracurricular activities for middle school students?
            </h3>
            <p className="text-[#666666]">
              Yes, we offer various extracurricular activities including sports, academic competitions, student
              leadership council, and community service opportunities. These activities are designed to develop
              well-rounded students with diverse interests and skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">
              What technology resources are available to middle school students?
            </h3>
            <p className="text-[#666666]">
              Our middle school students have access to Chromebooks, a STEAM lab, and various educational technology
              tools. We integrate technology across the curriculum while teaching responsible digital citizenship.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
