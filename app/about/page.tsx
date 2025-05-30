import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, BookOpen, Heart, Users, Star, X } from "lucide-react";
import PageHero from "@/components/page-hero";

export default function AboutPage() {
  // Leadership team
  const leadershipTeam = [
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
  ];

  // Board members
  const boardMembers = [
    {
      name: "Shehzad Qureshi",
      title: "Treasurer",
      image: "/avatar_male.png",
      bio: "Br. Shehzad holds a degree in Finance from Central Washingto University and has an extensive background in leadership and management. He previously served as a Senior Program Manager at Microsoft before transitioning into a senior management role with the City of Seattle, where he continues to make a meaningful impact.\n\nAs a member of one of the pioneering Muslim families in the Puget Sound region, Br. Shehzad has played a vital role in establishing some of the area's first Masaajid, including SeaTac Masjid, Northgate Masjid and later Masjid Umar al-Farooq in Mountlake Terrace. His lifelong commitment to strengthening the Muslim community extends beyond places of worship. He is deeply passionate about creating a nurturing Islamic environment for the next generation while also ensuring that the needs of our aging community are met.\n\nWith Islamic education at the heart of his vision, Br. Shehzad has been an active supporter of institutions like the Islamic School of Seattle and numerous other community initiatives throughout Seattle's history. His extensive experience, leadership, and dedication make him a valuable asset to Cordoba Academy's Board, helping to shape a future where education and faith go hand in hand.",
      link: "/about/board/shehzad-qureshi",
    },
    {
      name: "Faisal Ahmad",
      title: "Board Chair & Islamic Studies Operations Director",
      image: "/faisal_ahmad.jpg",
      bio: "Br. Faisal was raised in North Seattle and earned a Bachelor's degree in Computer Science from Central Washington University and has built a successful career in Change, Process & Project Management. Beyond his professional expertise, he has been a dedicated activist in the Seattle Muslim community since 1995, working tirelessly to uplift and educate the next generation.\n\nHis contributions began with the Muslim Students Association (MSA) and the development of the renowned Islamic Quiz of Seattle, a cherished program that has inspired and engaged youth for years. He had the privilege of consulting with many Islamic Scholars across North America and internationally to help initiate and develop youth, educational, and mentorship programs in order to serve the Muslim community in the region.\n\nBr. Faisal's passion for Islamic education extends to his own family, having helped establish and run a homeschool family co-op before going on to co-found Cordoba Academy. His vision and dedication continue to shape the academy's mission, ensuring that young Muslims have access to a well-rounded education that fosters academic excellence, strong Islamic values, and instills in them confidence in ther Muslim identity.",
      link: "/about/board/faisal-ahmad",
    },
    {
      name: "Arif Samad",
      title: "Board Vice Chair",
      image: "/avatar_male.png",
      bio: "Born and raised in Seattle, Br. Arif has had the unique privilege of witnessing the growth and evolution of the Muslim community in the region. From the Islamic School of Seattle to Umar al-Farooq Masjid, he and his family have played an integral role in shaping and strengthening the local Muslim community.\n\nA University of Washington Husky, Br. Arif earned a degree in Mechanical Engineering and began his career at Boeing, contributing to the development of the 747 aircraft. He later transitioned into Technology Consulting with Accenture in Washington, D.C., where he was actively involved in the ADAMS Masjid Northern Virginia Muslim community, service as a Cub Scouts Den Leader and leading fundraising and team-building activities, such as camping and the Pinewood Derby.\n\nSince returning to Seattle in 2010, Br. Arif has dedicated himself to education and innovation. He has served as an Analytics Certification instructor at the University of Washington's Continuing Education program and co-launched 'Minipreneurs', a design-thinking workshop that empowers children to develop and build IoT (Internet of Things) solutions for real-world challenges.\nCurrently serving as Director of Azure Data & AI Technical Strategy at Microsoft, Br. Arif is deeply passionate about STEM education and is committed to creating learning and leadership opportunities for Muslim youth. His dedication to empowering the next generation aligns with Cordoba Academy's mission, ensuring that young Muslims develop into strong, confident, and innovative leaders of tommorrow.",
      link: "/about/board/arif-samad",
    },
    {
      name: "Abdulkadir Sheikh (Imam Bazi)",
      title: "Religious Director & Principal",
      image: "/imam_bazi.jpg",
      bio: "Imam Bazi is a dedicated Islamic scholar, educator, and community leader who has been serving the greater Seattle area for over 15 years. His journey in both secular and Islamic education reflects his deep commitment to learning, teaching, and nurturing the next generation of Muslim Americans.\n\nA native Washingtonian, Imam Bazi began his academic journey at Green River College, where he pursued studies in Public Relations. However, his thirst for spiritual knowledge led him to Tarim, Yemen, where he studied at the esteemed Dar Al-Mustafa. There, he refined his memorization of the Holy Quran and further advanced his studies in the Higher Islamic sciences under world renowned scholars, while specializing in Tazkiyat ul-Nafs.\n\nUpon returning to Washington, he dedicated himself to serving the Muslim community, taking on roles as an Imam in various masajid. His leadership was instrumental in establishing and strengthening many local Islamic centers. Alongside his religious service, he also built a professional career as a Lead Supply Chain Analyst at Swedish Medical Center, demonstrating his ability to balance both professional and religious responsibilities with excellence.\n\nDespite his success in the corporate world, Imam Bazi's true passion lay in education and mentorship. He eventually left his profession to fully dedicate himself to Cordoba Academy, where he now serves as the principal. His vision is to instill a strong foundation of faith, knowledge, and character in students, ensuring they grow into confident Muslim leaders of tomorrow.\n\nFluent in Arabic, English, and Somali, Imam Bazi has been a guiding force in religious education and spiritual development within the Seattle Muslim community. His passion for tarbiyah, mentoring and educating youth, drives his work, as he strives to make Islamic knowledge accessible, engaging, and relevant to young minds. Known for his approachable and warm nature, he has touched the hearts of many, making learning a joyful and meaningful experience.\n\nUnder his leadership, Cordoba Academy continues to thrive as a place where faith and education go hand in hand, nurturing students to become thoughtful, empowered members of the Muslim community.",
      link: "/about/board/abdulkadir-sheikh",
    },
  ];

  // Faculty & Staff Highlights
  const facultyHighlights = [
    {
      name: "Amina Ahmed",
      title: "Vice Principal & Curriculum Supervisor",
      image: "/avatar_female.png",
      bio: "Sr. Amina was born in Canada and spent her formative years in Indonesia before returning to North America to pursue higher education. She earned her Bachelor's degree in Business Commerce and Administration from the University of British Columbia in Vancouver, BC. As an undergraduate student, she was deeply committed to community service, actively volunteering in various local initiatives, while maintaining her Muslim values and seeking a deeper connection to Allah.\n\nAfter becoming a mother, Sr. Amina devoted herself to homeschooling her children, driven by a deep commitment to staying connected to Islamic scholarship. She made it a priority to teach her children the Qur'an and instill in them a strong spiritual foundation, while also ensuring they received a high-quality, well-rounded education. Recognizing that children flourish in a nurturing and connected environment, she went on to establish a homeschooling co-op to support other families seeking the same balance of academic excellence and faith-based learning.\n\nIn 2015, she became one of the founders of Cordoba Academy, taking on the roles of Vice Principal and teacher and eventually receiving her certification in Early Childhood Development. She has been instrumental in shaping the school's curriculum, culture, and vision, laying the foundation for the inclusive, values-driven environment that defines Cordoba Academy today. Through her dedicated leadership and guidance, the school has grown into a thriving educational institution committed to academic excellence.",
      link: "/about/faculty/amina-ahmed",
    },
    {
      name: "Melinda Mahmud",
      title: "Senior Administration Manager",
      image: "/melinda_mahmud.jpg",
      bio: "Sr. Melinda brings a strong background in business operations, project management, and organizational leadership, with a deep commitment to creating an efficient and supportive environment for students, staff, and families. Her experience spans both corporate and educational settings, including roles as a Business Manager at the Islamic School of Seattle and as a Business Operations Specialist at Boeing, where she honed her skills in fostering collaboration and driving continuous improvement.\n\nSr. Melinda holds a Bachelor of Arts in Sociology with a minor in South Asian Languages from the University of Washington and an Associate of Arts in Nutrition from Shoreline Community College. She also earned a Project Management Certification from Seattle University and is a licensed aesthetician.\n\nWith a focus on aligning operations with the school's values and mission, Sr. Melinda ensures that every aspect of the environment is organized, collaborative, and supportive. Her goal is to create a space where students, staff, and families feel empowered and connected. By streamlining processes and enhancing day-to-day operations, she helps provide a nurturing atmosphere where education thrives, personal growth is encouraged, and the school community flourishes.",
      link: "/about/faculty/melinda-mahmud",
    },
    {
      name: "Saima Rizvi",
      title: "KG & 1st Grade Learning Coach",
      image: "/saima_rizvi.jpg",
      bio: "With over 15 years of teaching experience across the U.S. and overseas, Sr. Saima brings a wealth of knowledge, compassion, and creativity to her classroom. She holds a Bachelor's degree in Biochemistry from Karachi University and has complemented her academic background with extensive professional development in early childhood education.\n\nSr. Saima is certified in Early Childhood Education and has completed specialized training in areas such as positive reinforcement and redirection, emotional intelligence, and Montessori program assistance. Her educational journey reflects a deep commitment to nurturing the whole child—intellectually, emotionally, and creatively.\n\nHer teaching career has spanned esteemed institutions including the Multinational School in Riyadh, Ar Rowaad, Woodinville Montessori, and Precious Hearts Preschool. Currently, she is a valued educator at Cordoba Academy, where she continues to inspire young learners with her engaging and nurturing approach.\n\nTeaching at Cordoba allows Sr. Saima to serve the Muslim community in a meaningful way. She believes that being part of early childhood education is a privilege that paves the way for building a strong foundation. It allows her to nurture high-achieving young individuals who will, inshaAllah, become future leaders of the Muslim Ummah.\n\nIn addition to her role in education, Sr. Saima is also the founder of Greetings By Hand Co. LLC, a small business that reflects her artistic flair and entrepreneurial spirit.",
      link: "/about/faculty/saima-rizvi",
    },
    {
      name: "Qura Peera",
      title: "KG, 1st Grade & Islamic Studies Learning Coach",
      image: "/qura_peera.jpg",
      bio: "Sr. Qura has a deep passion for the Quran and has dedicated her time to both learning and teaching it, spending 10+ years nurturing young learners in their faith and education. She loves the authenticity of children, believing that the best place to witness their natural curiosity and joy is in a classroom full of Kindergarteners and First Graders. For her Cordoba Academy is more than just a school, it's a community. She finds the building charming and deeply values the dedicated people who help it grow, making it a truly special place to teach and learn.",
      link: "/about/faculty/qura-peera",
    },
    {
      name: "Fouzia Nadeem",
      title: "2nd Grade Learning Coach",
      image: "/avatar_female.png",
      bio: "Sr. Fouzia graduated with a Master's in English Literature from Zakariah University and continued her studies to achieve a teaching diploma from Allama Iqbal University. With a deep passion for education and community service, she spent two years working with an NGO, training new teachers in rural areas of Pakistan. Her five years of experience in public schools, combined with three years of teaching at an Islamic school in Kent, Washington, have given her a well-rounded perspective on the American education system.\n\nShe has also been an active volunteer, contributing her time and expertise to various public schools alongside Cordoba Academy.\n\nFor Sr. Fouzia, the most rewarding part of teaching is witnessing her students progress, achievements, and confidence grow. She finds great fulfillment in teaching in a Muslim environment, where she can nurture both the academic and spiritual development of her students.",
      link: "/about/faculty/fouzia_nadeem",
    },
    {
      name: "Hana Khan",
      title: "3rd Grade ELA Learning Coach",
      image: "/hana_khan.jpg",
      bio: "Sr. Hana holds a Bachelor's degree in Psychology Studies from Western Connecticut State University and has also pursued advanced Islamic studies, working toward an Aalima degree in New York. With over seven years of experience working with children, she has always been passionate about nurturing young minds and helping them grow with confidence and compassion.\n\nHer greatest joy comes from seeing her students every day—their curiosity, energy, and smiles continue to inspire her. Teaching at Cordoba Academy is especially meaningful for her, as it allows her to integrate Islamic values into her daily instruction and help children develop both academically and spiritually in a supportive, faith-centered environment.",
      link: "/about/faculty/hana_khan",
    },
    {
      name: "Sadia Rizvi",
      title: "3rd Grade Math & Science Learning Coach",
      image: "/sadia_rizvi.jpg",
      bio: "Sr. Sadia is a dedicated educator with 14+ years of experience teaching elementary students with the Advanced British curriculum in Saudi Arabia. She holds a Bachelor of Education (B.Ed.) from Jamia Millia Islamia University, Delhi, and has a strong passion for nurturing young minds. Sr. Sadia finds immense joy in witnessing the progress of her students, guiding them as they grow academically and personally. She is committed to creating a positive and engaging learning environment where students feel supported and inspired to reach their full potential.\n\nAt Cordoba Academy, Sr. Sadia values the collaborative, supportive, and faith-centered atmosphere. She appreciates the school's dedication to both academic excellence and Islamic values, as well as the strong partnership between staff, administration, and families, making it a truly enriching place to teach.",
      link: "/about/faculty/sadia-rizvi",
    },
    {
      name: "Shae Talalelei",
      title: "4th Grade ELA & Science Learning Coach",
      image: "/shae.jpg",
      bio: "Sr. Shae, our in-house published author of Navigating Autism: One Child's Journey, is a dedicated educator with a Master's in Social Work from Seattle University. A certified Registered Behavior Technician (RBT) with specialized training in ADHD and Autism Learning Disabilities, she brings extensive expertise in differentiated instruction, ensuring every student thrives in an inclusive and supportive environment. Passionate about helping children discover their unique learning styles, Shae believes that with the right support, every child can succeed.\n\nHer goal is to empower students by identifying strategies that align with their strengths and inspiring a lifelong love for learning.\n\nAt Cordoba Academy, she cherishes the warmth, collaboration, and shared commitment to student success. For her, Cordoba is more than a school, it's a community that uplifts, supports, and celebrates every achievement, big or small.",
      link: "/about/faculty/shae-talalelei",
    },
    {
      name: "Imaan Kedir",
      title: "4th Grade Math Learning Coach",
      image: "/avatar_female.png",
      bio: "Sr. Iman earned her Bachelor's degree in Architecture from the University of Washington, where her academic journey was enriched by her active involvement in the Muslim Student Association. Starting as a member and later serving as an officer, she played a key role in organizing general meetings, coordinating weekly classes with local resident shuyook, including Shaykh Qasim and Shaykh Umair and managing the Islamic House. This space served as a campus hub for Jumu'ah prayers, Ramadan iftars, and community events.\n\nA lifelong learner, Sr. Iman believes that teaching is the natural extension of learning, an opportunity to bring knowledge to life. Raised in a large family and vibrant Muslim community, she has always enjoyed tutoring friends and relatives in a variety of subjects, from technology and math to psychology and English. She thrives on the challenge of helping others understand complex topics and is passionate about finding creative, accessible ways to explain ideas. She also continues to pursue technological certifications to stay engaged with the ever-evolving digital world.\n\nTeaching at Cordoba is, for Sr. Iman, a meaningful and fulfilling experience. She is continually inspired by the ambition and energy of the students and values the opportunity to nurture not only their academic growth but also their character and confidence as young Muslims. For her, being part of their journey is both a privilege and a powerful reminder of the impact educators can have in shaping the future.",
      link: "/about/faculty/imaan",
    },
    {
      name: "Rahima Sabit",
      title: "3rd & 4th Grade Quran Instructor",
      image: "/rahima.jpg",
      bio: "Sr. Rahima is originally from East Turkestan. She earned her Bachelors degree in Chemistry from Nanjing University and went on to serve as a lecturer of Chemistry at Xinjiang Medical University before moving to the United States to pursue graduate studies. After starting a family, Sr. Rahima obtained an Associate degree in Accounting and worked part-time in the field. Her passion for Islamic knowledge later led her to begin studying Arabic, Quran, and Islamic Studies.\n\nShe now teaches Quran at Cordoba Academy, where she shares her love for the Quran with her students. Sr. Rahima brings a strong academic background and a deep dedication to faith-based education, nurturing students with both knowledge and heart.",
      link: "/about/faculty/rahima",
    },
    {
      name: "Madiha Asghar",
      title: "5th Grade Math & Science Learning Coach",
      image: "/madiha_asghar.jpg",
      bio: "Sr. Madiha is a certified Early Childhood Educator with extensive teaching experience. Her ECE training has provided her with expertise in classroom management, developmentally appropriate practices, curriculum development, child assessments using CDC milestones, and conducting parent-teacher conferences. She holds a Bachelor of Science degree and is currently balancing her studies while pursuing a second bachelor's degree at WSU.\n\nWith a deep passion for teaching preschool and elementary-age students, Sr. Madiha believes that learning is a lifelong journey, and she finds joy in growing alongside her students every day. For her, teaching is more than just a profession, it's a calling and a passion.\n\nFor more than five years, Sr. Madiha has been part of Cordoba Academy's mission to inspire and educate the next generation. She finds fulfillment in working at a school that empowers students with strong Islamic values, a love for learning, and the confidence to excel in both academics and character.",
      link: "/about/faculty/madiha_asghar",
    },
    {
      name: "Afshan Qureshi",
      title: "5th Grade Quran Instructor",
      image: "/avatar_female.png",
      bio: "NO BIO AVAILABLE",
      link: "/about/faculty/afshan_qureshi",
    },
    // {
    //   name: "Aisha Ahmad",
    //   title: "5th Grade Quran Instructor",
    //   image: "/aisha_ahmad.jpg",
    //   bio: "NO BIO AVAILABLE",
    //   link: "/about/faculty/aisha_ahmad",
    // },
    {
      name: "Farzana Ahmed",
      title: "5th & 6th Grade ELA & SS Learning Coach",
      image: "/farzana.jpg",
      bio: "Sr. Farzana is a dedicated educator with a Bachelor of Education from Ontario Tech University and over 10 years of teaching experience. Sr. Farzana is passionate about making learning engaging and meaningful. As a certified Minecraft educator, she thrives on designing fun and dynamic lesson plans that seamlessly incorporate Islamic teachings, inspiring students to think critically about history and literature. She takes pride in turning students' initial disinterest in history into a lasting passion.\n\nSr. Farzana loves being part of Cordoba Academy's supportive and close-knit team, describing it as working alongside her best friends. She appreciates the school's deep commitment to raising future leaders and values the strong partnership it fosters between teachers and parents as it takes a village to raise a child.",
      link: "/about/faculty/farzana",
    },
    {
      name: "Saima Samad",
      title: "6th Grade Math Learning Coach",
      image: "/saima_samad.jpg",
      bio: "Sr. Saima Samad holds a B.S. in Applied Mathematics from UMBC, along with certifications in Software Testing from the University of Washington and LEAP Management Training. With a background in quality assurance and software testing for companies like Oracle and Microsoft, she brings a detail-oriented, analytical, and problem-solving approach to the classroom, helping students develop critical thinking skills and a strong foundation in math and technology.\n\nHer passion for education led her to Fairfax County Public Schools as a substitute teacher across all grades and subjects, as well as a math and English tutor at Huntington Learning Center. She finds immense joy in helping students unlock their full potential and takes pride in seeing them strive, grow, and succeed.\n\nAt Cordoba Academy, she is inspired by the positive, encouraging, and supportive atmosphere, where students and teachers alike flourish together. She is honored to be part of a school that not only fosters academic excellence and personal growth but also nurtures faith and a strong Islamic identity in its students.",
      link: "/about/faculty/saima_samad",
    },
    // {
    //   name: "Faizan Samad",
    //   title: "6th Grade Science Learning Coach",
    //   image: "/avatar_male.png",
    //   bio: "NO BIO AVAILABLE",
    //   link: "/about/faculty/faizan_samad",
    // },
    // {
    //   name: "Dr Tahira",
    //   title: "Title",
    //   image: "/avatar_female.png",
    //   bio: "Dr. Tahira brings decades of expertise in applied and computational mathematics to the classroom. With a Ph.D. in Applied/Computational Mathematics from Quaid-i-Azam University and post-doctoral research from Swansea University in the UK, Dr. Haroon has made significant contributions in fluid mechanics, numerical analysis, and mathematical modeling. She has held prominent positions in academia, including Head of the Department of Mathematics at COMSATS Institute of Information Technology in Pakistan, where he supervised graduate students and taught courses ranging from numerical computations and linear algebra to fluid mechanics and magneto-hydrodynamics.\nDr. Tahira is also an accomplished researcher with a history of innovation, she developed new mathematical methods such as the Reduction to First Order (RFO) and Exponential Transform Method (ETM) for solving complex differential equations. She has received numerous accolades, including the Best Teacher Award from AIOU & UNESCO and the Women Role Model Award in 2016.\nA dedicated educator and mentor, Dr. Haroon is passionate about making mathematics engaging, accessible, and deeply meaningful for students at all levels.",
    //   link: "/about/faculty/tahira",
    // },
    {
      name: "Mahwish Nadeem",
      title: "Art Instructor",
      image: "/mahwish.jpg",
      bio: "Sr. Mahwish holds a Master's degree in Defense and Diplomatic Science and has a diverse background, ranging from working with international organizations to caring for newborns as a hearing technician and an EKG (Electrocardiogram) Technician. Her varied experiences have given her a unique perspective on global issues, cultural diversity, and community engagement, allowing her to create an inclusive and globally aware learning environment. Sr. Mahwish also has two years of teaching experience at Brighten Academy, where she has refined her classroom management, differentiated instruction, and student-centered teaching strategies.\n\nShe finds teaching to be an inspiring and enriching journey, where she not only guides students but also learns from their unique perspectives.\nAt Cordoba Academy, Sr. Mahwish values being part of a team that blends both worldly and Islamic knowledge, fostering an environment of mutual respect, trust, and collaboration—one where students and educators grow together in both faith and learning.",
      link: "/about/faculty/mahwish",
    },
  ];

  return (
    <div className="bg-[#FFF2E6]">
      {/* Hero Section */}
      <PageHero
        title="About Us"
        subtitle="Learn about our school, mission, and community"
      />

      {/* Our Story */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-[#666666] mb-4">
                  Cordoba Academy was founded in 2010 by a group of dedicated
                  parents and community members who shared a vision for an
                  educational institution that would provide academic excellence
                  while nurturing Islamic identity and values.
                </p>
                <p className="text-[#666666] mb-4">
                  Starting with just 25 students in a small rented facility, the
                  school has grown steadily over the years, expanding its
                  programs and campus to meet the needs of our growing
                  community. Today, Cordoba Academy serves over 200 students
                  from preschool through 6th grade, with plans to expand to
                  include 7th and 8th grades in the 2025-2026 academic year.
                </p>
                <p className="text-[#666666]">
                  Our name draws inspiration from the city of Cordoba, Spain,
                  which was a center of learning, innovation, and peaceful
                  coexistence during the Islamic Golden Age. Like its namesake,
                  our school strives to be a place where knowledge, faith, and
                  character flourish together.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/timeline.png"
                  alt="Cordoba Academy History"
                  height={350}
                  width={350}
                  className="object-cover"
                />
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
                  <h2 className="text-2xl font-bold text-[#333333]">
                    Our Mission
                  </h2>
                </div>
                <p className="text-[#666666] mb-4">
                  To provide an exceptional educational experience that nurtures
                  academic excellence, Islamic identity, and character
                  development in a safe, supportive environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Deliver a rigorous academic curriculum
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Foster a strong Islamic identity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Develop moral character and leadership
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Create a safe, nurturing environment
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F5E8D8] p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="h-8 w-8 text-[#B05834]" />
                  <h2 className="text-2xl font-bold text-[#333333]">
                    Our Vision
                  </h2>
                </div>
                <p className="text-[#666666] mb-4">
                  To be a leading Islamic educational institution that empowers
                  students to excel academically, embody Islamic values, and
                  contribute positively to society.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Graduate well-rounded Muslim leaders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Set the standard for Islamic education
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Build a vibrant, diverse community
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B05834] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">
                      Inspire lifelong learning and service
                    </span>
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
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">
              Core Values
            </h2>
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
                    We strive for excellence in all aspects of education,
                    continuously improving our programs and practices to provide
                    the highest quality learning experience.
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
                    We foster a culture of kindness, empathy, and respect,
                    treating each member of our community with dignity and care.
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
                    We build strong partnerships between home, school, and the
                    broader community to support student success and well-being.
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
                    We uphold the highest standards of honesty, ethics, and
                    accountability in all our actions and decisions.
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
                    We embrace a growth mindset, encouraging continuous
                    learning, resilience, and personal development for students
                    and staff.
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
                    We cultivate God-consciousness and spiritual awareness,
                    guiding students to develop a meaningful relationship with
                    Allah.
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
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="bg-[#F5E8D8] rounded-lg overflow-hidden"
              >
                <div className="relative h-60">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#333333] text-xl mb-1">
                    {leader.name}
                  </h3>
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
        <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">
          Board of Directors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#333333]">{member.name}</h3>
                  <p className="text-[#666666] text-sm">{member.title}</p>
                </div>
              </div>

              <p className="text-[#666666] mb-4">{member.bio.split("\n")[0]}</p>

              <div className="mt-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                    >
                      Read Full Bio
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto py-8 [&>button[data-state]]:h-10 [&>button[data-state]]:w-10 [&>button[data-state]_svg]:h-8 [&>button[data-state]_svg]:w-8">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#B05834] mb-4">
                        {member.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#333333]">
                          {member.name}
                        </h3>
                        <p className="text-[#666666]">{member.title}</p>
                      </div>
                    </div>
                    <div className="text-[#666666] whitespace-pre-line">
                      {member.bio}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty & Staff Highlights */}
      <div className="bg-[#F5E8D8] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B05834] mb-8">
            Faculty & Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyHighlights.map((faculty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#333333]">{faculty.name}</h3>
                    <p className="text-[#666666] text-sm">{faculty.title}</p>
                  </div>
                </div>

                <p className="text-[#666666] mb-4">
                  {faculty.bio.split("\n")[0]}
                </p>

                <div className="mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-[#B05834] text-[#B05834] hover:bg-[#B05834] hover:text-white"
                      >
                        Read Full Bio
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto py-8 [&>button[data-state]]:h-10 [&>button[data-state]]:w-10 [&>button[data-state]_svg]:h-8 [&>button[data-state]_svg]:w-8">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#B05834] mb-4">
                          {faculty.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full overflow-hidden">
                            <Image
                              src={faculty.image || "/placeholder.svg"}
                              alt={faculty.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-[#333333]">
                            {faculty.name}
                          </h3>
                          <p className="text-[#666666]">{faculty.title}</p>
                        </div>
                      </div>
                      <div className="text-[#666666] whitespace-pre-line">
                        {faculty.bio}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/about/faculty">
              <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">
                View All Faculty & Staff
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Employment Opportunities */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#B05834] mb-6">
              Employment Opportunities
            </h2>
            <p className="text-[#666666] mb-6">
              Cordoba Academy is always seeking talented, dedicated individuals
              who are passionate about Islamic education and committed to
              excellence. We offer a supportive, collaborative work environment
              and opportunities for professional growth and development.
            </p>
            <div className="bg-[#F5E8D8] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-[#FF4A00] mb-4">
                Current Openings
              </h3>
              <ul className="space-y-4">
                <li className="border-b border-[#E5D5C5] pb-4">
                  <h4 className="font-bold text-[#333333] mb-1">
                    Middle School Math & Science Teacher
                  </h4>
                  <p className="text-[#666666] mb-2">
                    Full-time position starting August 2025 for our new middle
                    school program.
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
                  <h4 className="font-bold text-[#333333] mb-1">
                    Elementary Teacher Assistant
                  </h4>
                  <p className="text-[#666666] mb-2">
                    Part-time position available immediately.
                  </p>
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
                  <h4 className="font-bold text-[#333333] mb-1">
                    Substitute Teachers
                  </h4>
                  <p className="text-[#666666] mb-2">
                    Ongoing need for substitute teachers at all grade levels.
                  </p>
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
              If you don't see a position that matches your qualifications but
              are interested in joining our team, please submit your resume and
              cover letter for future consideration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about/careers">
                <Button className="bg-[#B05834] hover:bg-[#8A4526] text-white">
                  View All Job Openings
                </Button>
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
              The best way to experience Cordoba Academy is to visit our campus.
              Schedule a tour to see our facilities, meet our staff, and learn
              more about our programs.
            </p>
            <Link href="/enrollment/tour">
              <Button className="bg-white text-[#B05834] hover:bg-[#F5E8D8]">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
