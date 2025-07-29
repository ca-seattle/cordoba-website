import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Clock, Calendar, Heart } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function PreschoolPage() {
  // Learning areas
  const learningAreas = [
    {
      title: "Language & Literacy",
      description:
        "Developing communication skills, vocabulary, and early reading readiness through stories, songs, and play.",
      icon: BookOpen,
    },
    {
      title: "Mathematics",
      description:
        "Building number sense, pattern recognition, and spatial awareness through hands-on activities and games.",
      icon: BookOpen,
    },
    {
      title: "Science & Discovery",
      description: "Exploring the natural world through sensory experiences, observation, and simple experiments.",
      icon: BookOpen,
    },
    {
      title: "Islamic Studies",
      description:
        "Introducing Islamic concepts, stories of the prophets, and basic duas through age-appropriate activities.",
      icon: BookOpen,
    },
    {
      title: "Arabic & Quran",
      description:
        "Building familiarity with Arabic letters and sounds, and memorizing short surahs through repetition and movement.",
      icon: BookOpen,
    },
    {
      title: "Social-Emotional Development",
      description: "Developing self-regulation, empathy, and social skills through guided play and group activities.",
      icon: Heart,
    },
  ]

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero title="Preschool Program" subtitle="Ages 3-5" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">Program Overview</h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy's Preschool Program provides a nurturing, play-based learning environment for children
              ages 3-5. Our program is designed to foster a love of learning while developing foundational academic,
              social, and Islamic skills that prepare children for success in kindergarten and beyond.
            </p>

            <div className="relative h-60 rounded-lg overflow-hidden mb-8">
              <Image src="/preschool-classroom.png" alt="Preschool Classroom" fill className="object-cover" />
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Play-based learning that develops the whole child—intellectually, socially, emotionally, physically,
                    and spiritually
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Low student-to-teacher ratios ensuring personalized attention and care
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Warm, nurturing environment that helps children feel safe and valued
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Integration of Islamic values and teachings throughout daily activities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Hands-on, multi-sensory learning experiences that engage children's natural curiosity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">
                    Regular communication with parents to ensure a strong home-school partnership
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-6">Curriculum</h3>
            <p className="text-[#666666] mb-6">
              Our preschool curriculum is designed to meet the developmental needs of young children while introducing
              them to Islamic values and teachings. Through a balance of teacher-directed and child-initiated
              activities, children develop the skills and knowledge they need for kindergarten readiness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {learningAreas.map((area, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-[#F5E8D8] rounded-full p-2">
                      <area.icon className="h-5 w-5 text-[#B05834]" />
                    </div>
                    <div>
                      <CardTitle>{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#666666]">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Learning Centers</h3>
              <p className="text-[#666666] mb-4">
                Our classroom is organized into learning centers that allow children to explore, create, and learn
                through play. These centers include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Blocks & Building</h4>
                  <p className="text-[#666666] text-sm">
                    Developing spatial awareness, problem-solving, and early engineering skills.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Dramatic Play</h4>
                  <p className="text-[#666666] text-sm">
                    Fostering creativity, language development, and social skills through pretend play.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Art & Creativity</h4>
                  <p className="text-[#666666] text-sm">
                    Expressing ideas and developing fine motor skills through various art materials.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Library & Listening</h4>
                  <p className="text-[#666666] text-sm">
                    Building language and literacy skills through books, storytelling, and listening activities.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Science & Discovery</h4>
                  <p className="text-[#666666] text-sm">
                    Exploring natural materials, simple experiments, and observation tools.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#333333] mb-2">Sensory Play</h4>
                  <p className="text-[#666666] text-sm">
                    Engaging multiple senses through sand, water, and other sensory materials.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#FF4A00] mb-4">A Day in Preschool</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-20 flex-shrink-0">
                  <div className="bg-[#F5E8D8] rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#B05834]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">8:30 AM - Arrival & Welcome</h4>
                  <p className="text-[#666666]">
                    Children are greeted by teachers, put away belongings, and engage in quiet morning activities.
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
                  <h4 className="font-bold text-[#333333] mb-1">8:45 AM - Morning Circle</h4>
                  <p className="text-[#666666]">
                    Children gather for morning du'a, attendance, calendar activities, and introduction to the day's
                    theme.
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
                  <h4 className="font-bold text-[#333333] mb-1">9:15 AM - Learning Centers</h4>
                  <p className="text-[#666666]">
                    Children choose from various learning centers for exploration and play-based learning.
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
                  <h4 className="font-bold text-[#333333] mb-1">10:15 AM - Snack & Outdoor Play</h4>
                  <p className="text-[#666666]">
                    Children enjoy a healthy snack followed by outdoor play and physical activities.
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
                  <h4 className="font-bold text-[#333333] mb-1">11:00 AM - Islamic Learning</h4>
                  <p className="text-[#666666]">
                    Children engage in age-appropriate Islamic activities, including Quran memorization, stories of the
                    prophets, and basic Islamic concepts.
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
                  <h4 className="font-bold text-[#333333] mb-1">11:45 AM - Story Time</h4>
                  <p className="text-[#666666]">
                    Children gather for interactive read-alouds and discussions related to the day's theme.
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
                  <h4 className="font-bold text-[#333333] mb-1">12:00 PM - Lunch & Prayer</h4>
                  <p className="text-[#666666]">
                    Children eat lunch together, followed by Dhuhr prayer observation and practice.
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
                  <h4 className="font-bold text-[#333333] mb-1">12:45 PM - Rest Time</h4>
                  <p className="text-[#666666]">
                    Children rest or engage in quiet activities, allowing for necessary downtime.
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
                  <h4 className="font-bold text-[#333333] mb-1">1:45 PM - Afternoon Activities</h4>
                  <p className="text-[#666666]">
                    Children participate in art, music, movement, or other enrichment activities.
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
                  <h4 className="font-bold text-[#333333] mb-1">2:45 PM - Closing Circle</h4>
                  <p className="text-[#666666]">
                    Children review the day's learning, share experiences, and prepare for dismissal.
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
                  <h4 className="font-bold text-[#333333] mb-1">3:00 PM - Dismissal</h4>
                  <p className="text-[#666666]">
                    Children are picked up by parents or transition to after-school care.
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
                Our preschool program offers flexible scheduling options to meet the needs of families:
              </p>
              <ul className="space-y-2 text-[#666666] mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span>5 Half Days (8:30 AM - 12:30 PM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span>5 Full Days (8:30 AM - 3:00 PM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span>3 Full Days (Monday, Wednesday, Friday)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                  <span>2 Full Days (Tuesday, Thursday)</span>
                </li>
              </ul>
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
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Meet Our Preschool Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F5E8D8] rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src="/preschool-lead.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Nadia Rahman</h3>
                <p className="text-[#666666] italic mb-3">Preschool Lead Teacher</p>
                <p className="text-[#666666] mb-4">
                  Sr. Nadia has over 8 years of experience in early childhood education. She holds a degree in Child
                  Development and is passionate about creating engaging, play-based learning experiences that nurture
                  young children's natural curiosity.
                </p>
                <Link href="/about/faculty/nadia-rahman">
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
                <Image src="/preschool-assistant.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Aisha Johnson</h3>
                <p className="text-[#666666] italic mb-3">Preschool Assistant Teacher</p>
                <p className="text-[#666666] mb-4">
                  Sr. Aisha brings warmth and creativity to the preschool classroom. With a background in early
                  childhood education, she specializes in creating nurturing environments where children feel safe to
                  explore and learn.
                </p>
                <Link href="/about/faculty/aisha-johnson">
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
                <Image src="/preschool-islamic.png" alt="Teacher" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#333333] text-xl mb-1">Sr. Fatima Ali</h3>
                <p className="text-[#666666] italic mb-3">Islamic Studies & Arabic</p>
                <p className="text-[#666666] mb-4">
                  Sr. Fatima specializes in introducing young children to Islamic concepts and Arabic language through
                  songs, stories, and interactive activities. Her gentle approach helps children develop a love for
                  their faith from an early age.
                </p>
                <Link href="/about/faculty/fatima-ali">
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

      {/* Kindergarten Readiness */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#B05834] mb-6 text-center">Kindergarten Readiness</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-[#666666] mb-6">
              Our preschool program is designed to prepare children for a successful transition to kindergarten. By the
              end of their preschool experience, children will have developed:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Academic Readiness</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Recognition of letters and their sounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Counting, number recognition, and basic math concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Understanding of basic scientific concepts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Social-Emotional Skills</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Ability to follow directions and classroom routines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Cooperation and positive interaction with peers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Self-regulation and emotional awareness</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Physical Development</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Fine motor skills for writing and self-help tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Gross motor coordination and body awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Self-care skills like handwashing and managing belongings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5E8D8] p-4 rounded-lg">
                <h4 className="font-bold text-[#333333] mb-2">Islamic Foundation</h4>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Memorization of short surahs and daily duas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Recognition of Arabic letters and basic vocabulary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span>Understanding of basic Islamic concepts and practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Testimonials */}
      <div className="bg-[#F5E8D8] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Parent Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-[#666666] italic mb-4">
                "The preschool program at Cordoba Academy has been a wonderful experience for our daughter. She has
                grown so much academically and socially, and loves learning about Islam in such a nurturing
                environment."
              </p>
              <p className="font-bold text-[#333333]">Parents of 4-year-old</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-[#666666] italic mb-4">
                "We've been amazed at how much our son has learned in preschool. The teachers are caring and attentive,
                and the play-based approach has helped him develop a love for learning while building important skills."
              </p>
              <p className="font-bold text-[#333333]">Parents of 3-year-old</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-[#666666] italic mb-4">
                "Choosing Cordoba Academy for preschool was one of the best decisions we've made for our child's
                education. The balance of academic, social, and Islamic learning has provided a strong foundation for
                kindergarten and beyond."
              </p>
              <p className="font-bold text-[#333333]">Parents of 5-year-old</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#B05834] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Preschool Program</h2>
            <p className="mb-6">
              We invite you to explore our Preschool Program and discover the Cordoba Academy difference. Space is
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
            <h3 className="font-bold text-[#333333] mb-2">What are the age requirements for preschool?</h3>
            <p className="text-[#666666]">
              Children must be 3 years old by August 31st to enroll in our preschool program. They must also be fully
              potty-trained.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">What is the student-to-teacher ratio in preschool?</h3>
            <p className="text-[#666666]">
              We maintain a low student-to-teacher ratio of 8:1 to ensure personalized attention and care for each
              child.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-[#333333] mb-2">Do children need to be potty-trained?</h3>
            <p className="text-[#666666]">
              Yes, all children must be fully potty-trained before starting our preschool program. We understand that
              occasional accidents happen and are prepared to assist children as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
