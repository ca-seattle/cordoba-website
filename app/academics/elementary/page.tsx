import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Clock, Calendar, Award } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function ElementaryPage() {
  // Core subjects
  const coreSubjects = [
    {
      title: "Language Arts",
      description:
        "Developing strong reading, writing, speaking, and listening skills through a balanced literacy approach.",
      icon: BookOpen,
    },
    {
      title: "Mathematics",
      description:
        "Building number sense, problem-solving abilities, and mathematical reasoning through hands-on activities and real-world applications.",
      icon: BookOpen,
    },
    {
      title: "Science",
      description: "Exploring the natural world through inquiry-based learning, experiments, and STEAM activities.",
      icon: BookOpen,
    },
    {
      title: "Social Studies",
      description:
        "Learning about history, geography, and cultures with an emphasis on Islamic contributions to civilization.",
      icon: BookOpen,
    },
    {
      title: "Islamic Studies",
      description:
        "Developing knowledge of Islamic principles, history, and practices through engaging lessons and activities.",
      icon: BookOpen,
    },
    {
      title: "Quran & Arabic",
      description:
        "Building Quran memorization, tajweed, and Arabic language skills through daily practice and personalized instruction.",
      icon: BookOpen,
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Elementary Program" subtitle="Kindergarten through 6th Grade" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Program Overview</h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy's Elementary Program serves students in Kindergarten through 6th grade, providing a
              rigorous academic curriculum integrated with Islamic values and character development. Our program is
              designed to nurture the whole child—intellectually, spiritually, socially, and emotionally.
            </p>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/elementary-classroom.png" alt="Elementary Classroom" fill className="object-cover" />
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
                    Hands-on, inquiry-based learning that encourages critical thinking and problem-solving
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Regular assessment and progress monitoring to ensure student growth
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Differentiated instruction to meet the needs of diverse learners
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Character development and social-emotional learning integrated throughout the day
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Enrichment opportunities including art, physical education, and technology
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Curriculum</h3>
            <p className="text-[#666666] mb-6">
              Our elementary curriculum is designed to exceed state standards while integrating Islamic perspectives and
              values. We use a combination of research-based curricula and teacher-developed materials to provide a
              comprehensive, engaging learning experience.
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
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Enrichment & Specials</h3>
              <p className="text-[#666666] mb-4">
                In addition to core subjects, students participate in various enrichment activities that enhance their
                learning experience and develop their talents and interests.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Art & Design</h4>
                  <p className="text-[#666666] text-sm">
                    Exploring various art forms and design principles through hands-on projects.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Physical Education</h4>
                  <p className="text-[#666666] text-sm">
                    Developing physical fitness, motor skills, and teamwork through structured activities and games.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Technology</h4>
                  <p className="text-[#666666] text-sm">
                    Building digital literacy and responsible technology use through integrated projects.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Library</h4>
                  <p className="text-[#666666] text-sm">
                    Fostering a love of reading and research skills through weekly library visits.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">A Day in Elementary</h3>
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
                    Students begin the day with morning du'a, the Pledge of Allegiance, and announcements.
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
                  <h4 className="font-bold text-[#333333] mb-1">8:45 AM - 10:30 AM - Core Academics</h4>
                  <p className="text-[#666666]">
                    Students engage in language arts and mathematics instruction with integrated Islamic perspectives.
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
                  <h4 className="font-bold text-[#333333] mb-1">10:30 AM - 10:45 AM - Morning Break</h4>
                  <p className="text-[#666666]">Students enjoy a short break for snacks and physical activity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">10:45 AM - 12:00 PM - Science/Social Studies</h4>
                  <p className="text-[#666666]">
                    Students explore science and social studies concepts through hands-on activities and projects.
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
                  <p className="text-[#666666]">
                    Students receive instruction in Quran memorization, tajweed, and Islamic studies.
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
                  <h4 className="font-bold text-[#333333] mb-1">2:15 PM - 3:15 PM - Enrichment & Specials</h4>
                  <p className="text-[#666666]">
                    Students participate in art, physical education, technology, or library activities.
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
                <h3 className="text-xl font-bold text-[#FF4A00]">2024-2025 Academic Year</h3>
              </div>
              <p className="text-[#666666] mb-4">
                Our elementary program is currently accepting applications for the 2024-2025 academic year. We encourage
                interested families to schedule a tour and submit an application early, as spaces fill quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enrollment">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white w-full sm:w-auto">
                    Apply for 2024-2025
                  </Button>
                </Link>
                <Link href="/enrollment/tour">
                  <Button
                    variant="outline"
                    className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white w-full sm:w-auto"
                  >
                    Schedule a Tour
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
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Meet Our Elementary Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/elementary-teacher.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Amina Brooks</h3>
                <p className="text-[#666666] italic mb-3">Elementary Lead Teacher</p>
                <p className="text-[#666666] mb-4">
                  Sr. Amina brings over 12 years of teaching experience to her role as Elementary Lead Teacher. She
                  holds a Master's in Elementary Education and specializes in differentiated instruction to meet the
                  needs of diverse learners.
                </p>
                <Link href="/about/faculty/amina-brooks">
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
                <Image src="/quran-teacher.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Br. Muhammad Abdullah</h3>
                <p className="text-[#666666] italic mb-3">Quran & Islamic Studies</p>
                <p className="text-[#666666] mb-4">
                  Br. Muhammad is a hafiz of the Quran with ijazah in multiple qira'at. His engaging teaching style and
                  personalized approach have helped many students develop a deep connection with the Quran.
                </p>
                <Link href="/about/faculty/muhammad-abdullah">
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
                <Image src="/steam-coordinator.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Br. Khalid Mahmood</h3>
                <p className="text-[#666666] italic mb-3">STEAM Coordinator</p>
                <p className="text-[#666666] mb-4">
                  Br. Khalid leads our STEAM program, bringing his background in engineering and education to create
                  hands-on learning experiences. He is passionate about fostering critical thinking and problem-solving
                  skills.
                </p>
                <Link href="/about/faculty/khalid-mahmood">
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
              Our Elementary Program is designed to prepare students for success in middle school and beyond. By the
              time they complete 6th grade, our students will have:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Academic Excellence</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Mastered grade-level standards in all core subjects</span>
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
                    <span>Memorized designated surahs and duas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Developed understanding of Islamic principles and practices</span>
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
            <h2 className="text-3xl font-bold mb-4">Join Our Elementary Program</h2>
            <p className="mb-6">
              We invite you to explore our Elementary Program and discover the Cordoba Academy difference. Space is
              limited, so we encourage interested families to apply early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enrollment">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8] w-full sm:w-auto">Apply Now</Button>
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
            <h3 className="font-bold text-[#333333] mb-2">What is the class size for elementary grades?</h3>
            <p className="text-[#666666]">
              We maintain small class sizes of 16-18 students to ensure personalized attention and optimal learning
              conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">
              How do you accommodate students with different learning needs?
            </h3>
            <p className="text-[#666666]">
              Our teachers use differentiated instruction to meet the needs of diverse learners. We provide additional
              support for students who need extra help and enrichment opportunities for those who are ready for more
              challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">How much homework do elementary students receive?</h3>
            <p className="text-[#666666]">
              Homework is grade-appropriate and designed to reinforce classroom learning. Kindergarten and 1st grade
              students receive minimal homework, while upper elementary students may have 30-60 minutes of homework per
              night, including Quran practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
