import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cordoba Academy, your local Islamic school in Lynnwood, serving Seattle & Mountlake Terrace areas. Contact us for enrollment information, campus visits, or general inquiries.",
  openGraph: {
    title: "Contact Cordoba Academy | Islamic School in Seattle Area",
    description:
      "Reach out to Cordoba Academy in Lynnwood. We serve the Seattle, Lynnwood & Mountlake Terrace communities with excellence in Islamic education.",
    images: ["/logo-full.png"],
  },
  keywords: [
    "Contact Islamic School Seattle",
    "Cordoba Academy Contact",
    "Islamic School Lynnwood Contact",
    "Muslim School Information Seattle",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-brand-secondary">
      {/* Hero Section */}
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            {/* Contact Information */}
            <div className="max-w-2xl">
              <div className="bg-white rounded-lg p-8 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-brand-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-brand-text-muted mb-6">
                  We're here to answer any questions you may have about Cordoba
                  Academy. Please feel free to reach out using the contact
                  information below or the form on this page.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent rounded-full p-3 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text-dark mb-1">
                        Address
                      </h3>
                      <p className="text-brand-text-muted">3210 200th Pl SW</p>
                      <p className="text-brand-text-muted">
                        Lynnwood, WA 98036
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent rounded-full p-3 flex-shrink-0">
                      <Phone className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text-dark mb-1">
                        Phone
                      </h3>
                      <p className="text-brand-text-muted">(425) 954-3687</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent rounded-full p-3 flex-shrink-0">
                      <Mail className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text-dark mb-1">
                        Email
                      </h3>
                      <p className="text-brand-text-muted">
                        info@cordobaacademy.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-accent rounded-full p-3 flex-shrink-0">
                      <Clock className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text-dark mb-1">
                        Office Hours
                      </h3>
                      <p className="text-brand-text-muted">
                        Monday - Friday: 8:00 AM - 4:00 PM
                      </p>
                      <p className="text-brand-text-muted">
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-[#F5E8D8] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#FF4A00] mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      Admissions
                    </h4>
                    <p className="text-[#666666]">
                      admissions@cordoba-academy.org
                    </p>
                    <p className="text-[#666666]">(425) 775-3578 ext. 1</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      Development & Donations
                    </h4>
                    <p className="text-[#666666]">
                      development@cordoba-academy.org
                    </p>
                    <p className="text-[#666666]">(425) 775-3578 ext. 2</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      Principal's Office
                    </h4>
                    <p className="text-[#666666]">
                      principal@cordoba-academy.org
                    </p>
                    <p className="text-[#666666]">(425) 775-3578 ext. 3</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            {/* <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#B05834] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="first-name"
                      className="text-[#333333] font-medium"
                    >
                      First Name*
                    </Label>
                    <Input
                      id="first-name"
                      required
                      className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="last-name"
                      className="text-[#333333] font-medium"
                    >
                      Last Name*
                    </Label>
                    <Input
                      id="last-name"
                      required
                      className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#333333] font-medium">
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#333333] font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="text-[#333333] font-medium"
                  >
                    Subject*
                  </Label>
                  <select
                    id="subject"
                    required
                    className="w-full mt-1 p-2 border border-[#E5D5C5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B05834]"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Information</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="employment">Employment Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-[#333333] font-medium"
                  >
                    Message*
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-1 border-[#E5D5C5] focus:ring-[#B05834] focus:border-[#B05834]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="rounded border-[#E5D5C5] text-[#B05834] focus:ring-[#B05834]"
                  />
                  <Label htmlFor="newsletter" className="text-[#666666]">
                    Subscribe to our newsletter for updates and announcements
                  </Label>
                </div>

                <Button className="w-full bg-[#B05834] hover:bg-[#8A4526] text-white">
                  Send Message
                </Button>

                <p className="text-[#666666] text-sm text-center">
                  We'll respond to your inquiry within 1-2 business days.
                </p>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">
            Find Us
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Replace with actual map or iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.1822430471148!2d-122.27966708681231!3d47.81668577108978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490053cd7800b0f%3A0xbb1b3599b5e638b4!2sCordoba%20Academy!5e0!3m2!1sen!2sus!4v1747860129881!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen="true"
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="bg-brand-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
            <p className="mb-6">
              We invite you to visit Cordoba Academy and experience our vibrant
              learning community firsthand. Schedule a tour to see our
              facilities, meet our staff, and learn more about our programs.
            </p>
            <Link href="/enrollment/tour">
              <Button className="bg-white text-brand-primary hover:bg-brand-accent">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-brand-text-dark mb-2">
                What are your school hours?
              </h3>
              <p className="text-brand-text-muted">
                Our school day runs from 8:30 AM to 3:30 PM, Monday through
                Thursday and 8:30 AM to 11:30 AM, Friday.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-brand-text-dark mb-2">
                How can I apply for admission?
              </h3>
              <p className="text-brand-text-muted">
                You can begin the application process by visiting our Enrollment
                page or contacting our Admissions Office directly. We recommend
                scheduling a tour before applying.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-brand-text-dark mb-2">
                Do you offer financial aid?
              </h3>
              <p className="text-brand-text-muted">
                Yes, we offer need-based financial aid to eligible families. You
                can learn more about our financial aid program on our Enrollment
                page or by contacting our Admissions Office.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/faq">
              <Button
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              >
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
