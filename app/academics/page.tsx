import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Calendar, Award, CheckCircle } from "lucide-react";
import PageHero from "@/components/page-hero";

export default function AcademicsPage() {
  return (
    <div className="bg-brand-secondary">
      {/* Hero Section */}
      <PageHero
        title="Academics"
        subtitle="Excellence in Islamic education from preschool through 8th grade"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">
              Our Academic Programs
            </h2>
            <p className="text-brand-text-muted mb-6">
              Cordoba Academy offers a comprehensive educational experience that
              nurtures academic excellence, Islamic identity, and character
              development. Our programs are designed to meet the developmental
              needs of students at each stage of their educational journey. Our
              K-8 academics are guided by traditional Muslim Scholars and
              Certified Educators, ensuring every subject is practically
              integrated with Islamic values and principles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-brand-accent p-4 rounded-lg">
                <h4 className="font-bold text-brand-primary mb-2">
                  Islamic Studies Faculty
                </h4>
                <p className="text-brand-text-muted">
                  Our Islamic Studies faculty members hold "sanad" (unbroken
                  chain of transmission) accreditation to teach Islamic
                  Sciences, bringing years of experience as educators and
                  community leaders. We utilize the globally established Safar
                  Academy Islamic studies curriculum, along with resources
                  approved by local Ulema.
                </p>
              </div>
              <div className="bg-brand-accent p-4 rounded-lg">
                <h4 className="font-bold text-brand-primary mb-2">
                  K-8 Primary Studies
                </h4>
                <p className="text-brand-text-muted">
                  We partner with state-accredited Columbia Virtual Academy
                  (CVA), who provide weekly checks with WA State certified
                  teachers to ensure we meet WA State standards as defined by
                  the State Board of Education.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/holistic_model.png"
                  alt="Cordoba Academy Holistic Learning Model"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="bg-brand-accent p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-accent-orange mb-4">
                Our Educational Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brand-text-dark mb-2">
                    Academic Excellence
                  </h4>
                  <p className="text-brand-text-muted mb-4">
                    We provide a rigorous, well-rounded education that exceeds
                    state standards and prepares students for future academic
                    success. Our approach includes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">
                        Research-based curriculum and teaching methods
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">
                        Differentiated instruction to meet diverse learning
                        needs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">
                        Regular assessment and progress monitoring to ensure
                        student growth
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-text-dark mb-2">
                    Islamic Integration
                  </h4>
                  <p className="text-brand-text-muted mb-4">
                    We integrate Islamic values and teachings throughout the
                    curriculum, helping students develop a strong Muslim
                    identity. Our approach includes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">
                        Quran memorization, tajweed, and understanding of
                        Islamic principles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">
                        Strong focus on cultivating love for Allah and His
                        Messenger through the Sunnah, Seerah, and Shama'il
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">
                        Character development based on Islamic values and ethics
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Programs Tabs */}
            <div id="programs">
              <Tabs defaultValue="preschool" className="mb-8">
                <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto">
                  <TabsTrigger value="preschool" className="py-3">
                    Early Learning
                  </TabsTrigger>
                  <TabsTrigger value="elementary" className="py-3">
                    K-5 Program
                  </TabsTrigger>
                  <TabsTrigger value="middle-school" className="py-3">
                    6th-8th Grade
                  </TabsTrigger>
                  <TabsTrigger value="after-school" className="py-3">
                    After-School
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="preschool" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-brand-accent-orange mb-4">
                        Early Childhood Learning (Ages 3-5)
                      </h3>
                      <p className="text-brand-text-muted mb-4">
                        Our play-based early childhood learning program nurtures
                        a love of learning in a safe, nurturing environment.
                        Through a blend of structured and play-based activities,
                        we develop foundational academic, social, and Islamic
                        skills that prepare children for success in kindergarten
                        and beyond.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Daily Islamic routines and teachings integrated
                            throughout activities, including azkar, dua, and
                            Quran recitation
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Experienced, caring educators providing personalized
                            attention through low student-to-teacher ratios
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Focus on social, emotional, and cognitive growth to
                            develop the whole child
                          </span>
                        </li>
                      </ul>
                      {/* <Link href="/academics/preschool">
                      <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Learn More</Button>
                    </Link> */}
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/preschool_program.jpg"
                        alt="Preschool Program"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="elementary" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-brand-accent-orange mb-4">
                        K-5 Program
                      </h3>
                      <p className="text-brand-text-muted mb-4">
                        Our elementary program offers a comprehensive curriculum
                        covering Islamic Studies, the Quran, English Language
                        Arts, Math, Science, and Social Studies. Through our
                        partnership with CVA, we provide access to state
                        resources and standardized testing, while our
                        custom-designed curriculum incorporates Islamic values
                        to best support our students' academic and spiritual
                        growth. With small class sizes ensuring personalized
                        attention, we emphasize critical thinking, creativity,
                        and leadership, fostering strong character development.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Daily Islamic routines and manners, including azkar,
                            dua, and Quran recitation, to build lasting Islamic
                            habits
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Regular progress assessments using BAS for ELA,
                            quarterly math tests, STARS testing, and i-Ready
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Innovative teaching methods integrating technology
                            for 21st-century skills
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Enrichment activities including STREAM (Science,
                            Technology, Religion, Engineering, Arts, and Math)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Strong focus on cultivating love for Allah and His
                            Messenger through the Sunnah, Seerah, and Shama'il
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Memorization of 40 hadith on adab and akhlaq,
                            history of pious predecessors, and futuwwa
                            (chivalry)
                          </span>
                        </li>
                      </ul>
                      {/* <Link href="/academics/elementary">
                      <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Learn More</Button>
                    </Link> */}
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/elementary_program.jpeg"
                        alt="Elementary Program"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="middle-school" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-brand-accent-orange mb-4">
                        6th-8th Grade Program
                      </h3>
                      <p className="text-brand-text-muted mb-4">
                        Meeting a critical community need, Cordoba Academy will
                        be the only Islamic middle school in Lynnwood, serving
                        families from Tacoma to Marysville. Through our
                        partnership with CVA, we provide access to state
                        resources and standardized testing, while our
                        custom-designed curriculum integrates Islamic values to
                        support students' academic and spiritual growth. With
                        small class sizes ensuring personalized attention, we
                        emphasize leadership, independent thinking, and academic
                        excellence through project-based learning and real-world
                        applications.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Regular progress assessments using BAS for ELA,
                            quarterly math tests, STARS testing, and i-Ready
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Innovative teaching methods incorporating technology
                            for 21st-century skills
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Enrichment activities including STREAM (Science,
                            Technology, Religion, Engineering, Arts, and Math)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Strong focus on cultivating love for Allah and His
                            Messenger through the Sunnah, Seerah, and Shama'il
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Memorization of hadith on adab and akhlaq, history
                            of pious predecessors, and futuwwa (chivalry)
                          </span>
                        </li>
                      </ul>
                      {/* <Link href="/academics/middle-school">
                      <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Learn More</Button>
                    </Link> */}
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/middle_school_program.jpg"
                        alt="Middle School Program"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="after-school" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-brand-accent-orange mb-4">
                        After-School Programs
                      </h3>
                      <p className="text-brand-text-muted mb-4">
                        Our after-school program focuses specifically on Quran
                        recitation and memorization, providing students with
                        dedicated time and instruction to strengthen their
                        connection with the Holy Quran. This program offers
                        personalized guidance to help students develop proper
                        tajweed and build their memorization skills.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Individualized Quran recitation and memorization
                            instruction
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Focus on proper tajweed and pronunciation techniques
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Supervised by qualified Quran teachers in a
                            supportive environment
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">
                            Progress tracking and regular assessments of
                            memorization goals
                          </span>
                        </li>
                      </ul>
                      {/* <Link href="/academics/after-school">
                      <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Learn More</Button>
                    </Link> */}
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/after-school.jpg"
                        alt="After-School Programs"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-bold text-brand-accent-orange mb-6">
                Curriculum Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-brand-primary">
                      Core Academics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-brand-text-muted">Language Arts</li>
                      <li className="text-brand-text-muted">Mathematics</li>
                      <li className="text-brand-text-muted">Science</li>
                      <li className="text-brand-text-muted">Social Studies</li>
                      <li className="text-brand-text-muted">Technology</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-brand-primary">
                      Islamic Studies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-brand-text-muted">
                        Quran Memorization
                      </li>
                      <li className="text-brand-text-muted">Tajweed</li>
                      <li className="text-brand-text-muted">Islamic Studies</li>
                      <li className="text-brand-text-muted">Arabic Language</li>
                      <li className="text-brand-text-muted">
                        Character Education
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-brand-primary">
                      Enrichment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-brand-text-muted">Art & Design</li>
                      <li className="text-brand-text-muted">
                        Physical Education
                      </li>
                      <li className="text-brand-text-muted">
                        STEAM Activities
                      </li>
                      <li className="text-brand-text-muted">
                        Community Service
                      </li>
                      <li className="text-brand-text-muted">Field Trips</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-brand-accent p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-xl font-bold text-brand-accent-orange">
                    Student Assessment
                  </h3>
                </div>
                <p className="text-brand-text-muted mb-4">
                  We use a variety of assessment methods to monitor student
                  progress and ensure academic growth. These include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted">
                      Regular formative assessments to guide instruction and
                      identify areas for support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted">
                      Standardized testing to measure academic achievement and
                      growth over time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted">
                      Project-based assessments that demonstrate application of
                      knowledge and skills
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted">
                      Quarterly report cards and parent-teacher conferences to
                      communicate progress
                    </span>
                  </li>
                </ul>
                <p className="text-brand-text-muted">
                  Assessment results are used to inform instruction, provide
                  targeted support, and celebrate student achievements. We
                  believe in recognizing growth and effort as well as academic
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-8">
            Our Faculty
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-brand-text-muted text-center mb-8">
              Our dedicated teachers are the heart of Cordoba Academy. They
              bring expertise in their subject areas, passion for Islamic
              education, and commitment to nurturing each student's potential.
              All faculty members hold appropriate credentials and participate
              in ongoing professional development to enhance their teaching
              skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-accent p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-xl font-bold text-brand-accent-orange">
                    Qualified Educators
                  </h3>
                </div>
                <p className="text-brand-text-muted">
                  Our teachers hold degrees in education or their subject areas,
                  with many having advanced degrees and specialized training.
                  They bring diverse experiences and perspectives to enrich the
                  learning environment.
                </p>
              </div>
              <div className="bg-brand-accent p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-xl font-bold text-brand-accent-orange">
                    Islamic Knowledge
                  </h3>
                </div>
                <p className="text-brand-text-muted">
                  Our Islamic Studies teachers have formal training in Islamic
                  sciences, with many holding ijazahs in Quran recitation and
                  memorization. They model Islamic values and inspire students
                  to develop a strong connection with their faith.
                </p>
              </div>
              <div className="bg-brand-accent p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-xl font-bold text-brand-accent-orange">
                    Ongoing Development
                  </h3>
                </div>
                <p className="text-brand-text-muted">
                  Our faculty participate in regular professional development to
                  stay current with best practices in education. This commitment
                  to continuous learning ensures that our students receive the
                  highest quality instruction.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/about#faculty">
                <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">
                  Meet Our Faculty
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Summer Programs */}
      {/* <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">Summer Programs</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#FF4A00] mb-4">Summer Camp</h3>
                <p className="text-[#666666] mb-4">
                  Our summer camp program provides a perfect blend of fun, learning, and Islamic values during the
                  summer months. Weekly themed camps offer a variety of activities to keep children engaged, active, and
                  growing.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Ages 5-12, grouped by age</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Weekly themed sessions from June to August</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">Half-day and full-day options available</span>
                  </li>
                </ul>
                <Link href="/programs/summer-camp">
                  <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">Learn More</Button>
                </Link>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image src="/summer-camp.jpg" alt="Summer Camp" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-brand-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Experience Cordoba Academy
            </h2>
            <p className="mb-6">
              The best way to understand our academic programs is to see them in
              action. Schedule a tour to visit our classrooms, meet our
              teachers, and learn more about our approach to Islamic education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link href="/enrollment/tour">
                <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8] w-full sm:w-auto">Schedule a Tour</Button>
              </Link> */}
              <Link href="/enrollment">
                <Button className="bg-brand-accent-orange hover:bg-brand-accent-orange/80 text-white w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-brand-primary mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-brand-text-dark mb-2">
              What is your approach to Islamic education?
            </h3>
            <p className="text-brand-text-muted">
              We take an integrated approach to Islamic education, weaving
              Islamic values and teachings throughout all aspects of the
              curriculum. Students receive dedicated instruction in Quran,
              Islamic Studies, and Arabic, while also exploring Islamic
              perspectives in subjects like science, social studies, and
              language arts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-brand-text-dark mb-2">
              How do you accommodate different learning styles?
            </h3>
            <p className="text-brand-text-muted">
              Our teachers use a variety of instructional strategies to meet the
              needs of diverse learners. This includes hands-on activities,
              visual aids, collaborative projects, and technology integration.
              We also provide additional support for students who need extra
              help and enrichment opportunities for those who are ready for more
              challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-brand-text-dark mb-2">
              How do you measure student progress?
            </h3>
            <p className="text-brand-text-muted">
              We use a combination of formative and summative assessments to
              monitor student progress. This includes daily observations,
              quizzes, tests, projects, and standardized assessments. Progress
              is communicated to parents through quarterly report cards,
              parent-teacher conferences, and regular updates via our school
              communication platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-brand-text-dark mb-2">
              What support do you provide for students with learning
              differences?
            </h3>
            <p className="text-brand-text-muted">
              We strive to meet the needs of all learners and provide reasonable
              accommodations for students with learning differences. Our
              teachers use differentiated instruction and work closely with
              parents to develop strategies for student success. For students
              who need additional support, we may recommend outside resources or
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
