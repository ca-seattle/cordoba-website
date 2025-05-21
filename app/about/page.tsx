import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Heart, Users, Star } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function AboutPage() {
  // Leadership team
  const leadershipTeam = [
    {
      name: "Sr. Aisha Johnson",
      title: "Principal",
      image: "/principal.png",
      bio: "Sr. Aisha brings over 15 years of experience in Islamic education to her role as Principal. She holds a Master's degree in Educational Leadership from the University of Washington and is passionate about creating an environment where students can excel academically while developing a strong Islamic identity. Under her leadership, Cordoba Academy has expanded its programs and enhanced its curriculum to meet the needs of our growing community.",
      link: "/about/leadership/aisha-johnson",
    },
    {
      name: "Br. Yusuf Rahman",
      title: "Vice Principal",
      image: "/vice-principal.png",
      bio: "Br. Yusuf oversees curriculum development and teacher training at Cordoba Academy. With a background in both Islamic studies and educational psychology, he works to ensure our academic programs are rigorous, engaging, and aligned with Islamic values. He is dedicated to supporting teachers in implementing best practices and creating positive learning experiences for all students.",
      link: "/about/leadership/yusuf-rahman",
    },
    {
      name: "Sr. Fatima Zaidi",
      title: "Islamic Studies Director",
      image: "/islamic-studies-director.png",
      bio: "Sr. Fatima leads our Islamic Studies program, bringing her extensive knowledge of Quran, Hadith, and Islamic history to enrich our curriculum. She holds an Ijazah in Quran recitation and has studied Islamic sciences with scholars in both the United States and abroad. Her approach to Islamic education emphasizes practical application and character development alongside traditional knowledge.",
      link: "/about/leadership/fatima-zaidi",
    },
  ]

  // Board members
  const boardMembers = [
    {
      name: "Dr. Ibrahim Khan",
      title: "Board Chair",
      image: "/board-chair.png",
      bio: "Dr. Ibrahim is a respected community leader and physician who has served on the board since the school's founding. His vision and strategic leadership have been instrumental in the school's growth and development. As Board Chair, he works closely with school administration to ensure Cordoba Academy fulfills its mission and maintains financial sustainability.",
      link: "/about/board/ibrahim-khan",
    },
    {
      name: "Sr. Maryam Ali",
      title: "Board Vice Chair",
      image: "/board-vice-chair.png",
      bio: "Sr. Maryam brings her expertise in nonprofit management and community organizing to her role on the board. She is passionate about expanding access to quality Islamic education and has led several successful fundraising campaigns for the school. Her focus on community engagement has strengthened relationships between the school and the broader Muslim community.",
      link: "/about/board/maryam-ali",
    },
    {
      name: "Br. Omar Suleiman",
      title: "Treasurer",
      image: "/board-treasurer.png",
      bio: "Br. Omar is a certified public accountant with extensive experience in financial management for educational institutions. He oversees the school's financial operations and ensures responsible stewardship of resources. His expertise has been valuable in developing sustainable financial models that support the school's growth while keeping tuition affordable for families.",
      link: "/about/board/omar-suleiman",
    },
    {
      name: "Sr. Khadija Washington",
      title: "Secretary",
      image: "/board-secretary.png",
      bio: "Sr. Khadija is an attorney specializing in education law and policy. She provides legal guidance to the board and ensures compliance with regulatory requirements. Her commitment to educational equity and excellence drives her work to develop policies that support student success and school improvement.",
      link: "/about/board/khadija-washington",
    },
    {
      name: "Br. Ahmed Hassan",
      title: "Board Member",
      image: "/board-member-1.png",
      bio: "Br. Ahmed is an educational technology specialist who advises the board on integrating technology into the curriculum. His forward-thinking approach has helped modernize the school's infrastructure and expand digital learning opportunities for students. He is particularly interested in preparing students for future careers in STEM fields.",
      link: "/about/board/ahmed-hassan",
    },
    {
      name: "Sr. Zaynab Rodriguez",
      title: "Board Member",
      image: "/board-member-2.png",
      bio: "Sr. Zaynab is a former educator with experience in curriculum development and assessment. She chairs the Academic Excellence Committee and works closely with school leadership to evaluate and enhance educational programs. Her expertise in educational best practices has contributed to the continuous improvement of teaching and learning at Cordoba Academy.",
      link: "/about/board/zaynab-rodriguez",
    },
  ]

  // Faculty & Staff Highlights
  const facultyHighlights = [
    {
      name: "Br. Muhammad Abdullah",
      title: "Lead Quran Teacher",
      image: "/quran-teacher.png",
      bio: "Br. Muhammad is a hafiz of the Quran with ijazah in multiple qira'at. His engaging teaching style and personalized approach have helped many students develop a deep connection with the Quran. He leads our Quran memorization program and provides tajweed instruction for students at all levels.",
      link: "/about/faculty/muhammad-abdullah",
    },
    {
      name: "Sr. Amina Brooks",
      title: "Elementary Lead Teacher",
      image: "/elementary-teacher.png",
      bio: "Sr. Amina brings over 12 years of teaching experience to her role as Elementary Lead Teacher. She holds a Master's in Elementary Education and specializes in differentiated instruction to meet the needs of diverse learners. Her classroom is known for its warm, supportive atmosphere and innovative learning activities.",
      link: "/about/faculty/amina-brooks",
    },
    {
      name: "Br. Khalid Mahmood",
      title: "STEAM Coordinator",
      image: "/steam-coordinator.png",
      bio: "Br. Khalid leads our STEAM (Science, Technology, Engineering, Arts, and Mathematics) program, bringing his background in engineering and education to create hands-on learning experiences. He is passionate about fostering critical thinking and problem-solving skills through project-based learning and real-world applications.",
      link: "/about/faculty/khalid-mahmood",
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="About Us" subtitle="Learn about our school, mission, and community" />

      {/* Our Story */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-[#666666] mb-4">
                  Cordoba Academy was founded in 2010 by a group of dedicated parents and community members who shared a
                  vision for an educational institution that would provide academic excellence while nurturing Islamic
                  identity and values.
                </p>
                <p className="text-[#666666] mb-4">
                  Starting with just 25 students in a small rented facility, the school has grown steadily over the
                  years, expanding its programs and campus to meet the needs of our growing community. Today, Cordoba
                  Academy serves over 200 students from preschool through 6th grade, with plans to expand to include 7th
                  and 8th grades in the 2025-2026 academic year.
                </p>
                <p className="text-[#666666]">
                  Our name draws inspiration from the city of Cordoba, Spain, which was a center of learning,
                  innovation, and peaceful coexistence during the Islamic Golden Age. Like its namesake, our school
                  strives to be a place where knowledge, faith, and character flourish together.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image src="/school-history.png" alt="Cordoba Academy History" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F5E8D8] p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="h-8 w-8 text-[#B05834]" />
                  <h2 className="text-2xl font-bold text-[#333333]">Our Mission</h2>
                </div>
                <p className="text-[#666666] mb-4">
                  To provide an exceptional educational experience that nurtures academic excellence, Islamic identity,
                  and character development in a safe, supportive environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Deliver a rigorous academic curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Foster a strong Islamic identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Develop moral character and leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Create a safe, nurturing environment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F5E8D8] p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="h-8 w-8 text-[#B05834]" />
                  <h2 className="text-2xl font-bold text-[#333333]">Our Vision</h2>
                </div>
                <p className="text-[#666666] mb-4">
                  To be a leading Islamic educational institution that empowers students to excel academically, embody
                  Islamic values, and contribute positively to society.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Graduate well-rounded Muslim leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Set the standard for Islamic education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Build a vibrant, diverse community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Inspire lifelong learning and service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666]">
                    We strive for excellence in all aspects of education, continuously improving our programs and
                    practices to provide the highest quality learning experience.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white rounded-full p-2">
                    <Heart className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <CardTitle>Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666]">
                    We foster a culture of kindness, empathy, and respect, treating each member of our community with
                    dignity and care.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white rounded-full p-2">
                    <Users className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666]">
                    We build strong partnerships between home, school, and the broader community to support student
                    success and well-being.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666]">
                    We uphold the highest standards of honesty, ethics, and accountability in all our actions and
                    decisions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white rounded-full p-2">
                    <Star className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <CardTitle>Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666]">
                    We embrace a growth mindset, encouraging continuous learning, resilience, and personal development
                    for students and staff.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-[#F5E8D8] border-none">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-[#B05834]" />
                  </div>
                  <CardTitle>Taqwa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#666666]">
                    We cultivate God-consciousness and spiritual awareness, guiding students to develop a meaningful
                    relationship with Allah.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-[#F5E8D8] rounded-lg overflow-hidden">
                <div className="relative h-60">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#333333] text-xl mb-1">{leader.name}</h3>
                  <p className="text-[#666666] italic mb-3">{leader.title}</p>
                  <p className="text-[#666666] mb-4">{leader.bio}</p>
                  <Link href={leader.link}>
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read Full Bio
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Board of Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#333333]">{member.name}</h3>
                  <p className="text-[#666666] text-sm">{member.title}</p>
                </div>
              </div>
              <p className="text-[#666666] mb-4">{member.bio}</p>
              <Link href={member.link}>
                <Button
                  variant="outline"
                  className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                >
                  Read Full Bio
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty & Staff Highlights */}
      <div className="bg-[#F5E8D8] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Faculty & Staff Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyHighlights.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#333333] text-xl mb-1">{faculty.name}</h3>
                  <p className="text-[#666666] italic mb-3">{faculty.title}</p>
                  <p className="text-[#666666] mb-4">{faculty.bio}</p>
                  <Link href={faculty.link}>
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read Full Bio
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about/faculty">
              <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">View All Faculty & Staff</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Employment Opportunities */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Employment Opportunities</h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy is always seeking talented, dedicated individuals who are passionate about Islamic
              education and committed to excellence. We offer a supportive, collaborative work environment and
              opportunities for professional growth and development.
            </p>
            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Current Openings</h3>
              <ul className="space-y-4">
                <li className="border-b border-[#E5D5C5] pb-4">
                  <h4 className="font-bold text-[#333333] mb-1">Middle School Math & Science Teacher</h4>
                  <p className="text-[#666666] mb-2">
                    Full-time position starting August 2025 for our new middle school program.
                  </p>
                  <Link href="/about/careers/middle-school-teacher">
                    <Button
                      variant="outline"
                      className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </li>
                <li className="border-b border-[#E5D5C5] pb-4">
                  <h4 className="font-bold text-[#333333] mb-1">Elementary Teacher Assistant</h4>
                  <p className="text-[#666666] mb-2">Part-time position available immediately.</p>
                  <Link href="/about/careers/teacher-assistant">
                    <Button
                      variant="outline"
                      className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </li>
                <li>
                  <h4 className="font-bold text-[#333333] mb-1">Substitute Teachers</h4>
                  <p className="text-[#666666] mb-2">Ongoing need for substitute teachers at all grade levels.</p>
                  <Link href="/about/careers/substitute-teacher">
                    <Button
                      variant="outline"
                      className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-[#666666] mb-6">
              If you don't see a position that matches your qualifications but are interested in joining our team,
              please submit your resume and cover letter for future consideration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about/careers">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">View All Job Openings</Button>
              </Link>
              <Link href="/about/careers/apply">
                <Button
                  variant="outline"
                  className="border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                >
                  Submit Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
            <p className="mb-6">
              The best way to experience Cordoba Academy is to visit our campus. Schedule a tour to see our facilities,
              meet our staff, and learn more about our programs.
            </p>
            <Link href="/enrollment/tour">
              <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">Schedule a Tour</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
