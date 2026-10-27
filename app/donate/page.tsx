import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heart, BookOpen, Building, Gift, Calendar } from 'lucide-react';
import PageHero from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Islamic education in the Seattle area. Your donations help Cordoba Academy provide quality education to students in Seattle, Lynnwood & Mountlake Terrace communities.',
  openGraph: {
    title: 'Support Cordoba Academy | Donate to Islamic Education',
    description:
      'Make a difference in Islamic education. Your support helps us provide quality education to students in Seattle, Lynnwood & Mountlake Terrace.',
    images: ['/logo-full.png'],
  },
  keywords: [
    'Donate Islamic School Seattle',
    'Support Muslim Education',
    'Islamic School Donation Lynnwood',
    'Support Cordoba Academy',
  ],
};

export default function DonatePage() {
  const donationOptions = [
    {
      title: 'General Fund',
      description:
        'Support our overall mission and operations, allowing us to allocate funds where they are most needed.',
      icon: Heart,
      highlight: 'Flexible support for daily operations and student needs',
    },
    {
      title: 'Scholarship Fund',
      description:
        'Help make Islamic education accessible to deserving families through Zakat and Sadaqah eligible scholarships.',
      icon: BookOpen,
      highlight: 'Expands access to quality Islamic education',
    },
    {
      title: 'Facility Operations',
      description:
        'Support our monthly operating expenses and investment in a lasting campus for our students.',
      icon: Building,
      highlight: 'Helps sustain our campus and educational environment',
    },
  ];

  const givingMethods = [
    {
      title: 'One-time Gift',
      description:
        'Make an immediate contribution to support student programs, faculty, and campus needs.',
      action: 'Give Now',
      href: '#payment-options',
    },
    {
      title: 'Monthly Giving',
      description:
        'Create consistent support that sustains our programs throughout the year.',
      action: 'Set Up Monthly',
      href: '#payment-options',
    },
    {
      title: 'Stock Donations',
      description:
        'Give appreciated securities to make a tax-efficient gift that directly supports our mission.',
      action: 'Learn More',
      href: '/donate/stock-gifts',
      featured: true,
    },
    {
      title: 'Matching Gifts',
      description:
        'Many employers multiply the impact of your donation. Check whether your company matches gifts.',
      action: 'Check Match',
      href: '/contact',
    },
  ];

  return (
    <div className="bg-brand-secondary">
      <PageHero
        title="Support Our Mission"
        subtitle="Your generosity strengthens faith, learning, and community for our students"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#payment-options">
            <Button className="bg-white text-brand-primary hover:bg-brand-accent px-8">
              Give Online
            </Button>
          </Link>
          <Link href="/donate/stock-gifts">
            <Button className="bg-white text-brand-primary hover:bg-brand-accent px-8">
              Learn About Stock Gifts
            </Button>
          </Link>
        </div>
      </PageHero>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-accent mb-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-3">
                Make a Difference Today
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
                Choose the way you want to give
              </h2>
            </div>

            <p className="text-brand-text-muted text-lg leading-relaxed text-center max-w-4xl mx-auto mb-10">
              Your support enables Cordoba Academy to provide an exceptional
              educational experience that nurtures academic excellence, Islamic
              identity, and character development. As a 501(c)(3) nonprofit
              organization, your contributions are tax-deductible to the extent
              allowed by law.
            </p>

            <div className="bg-brand-accent rounded-2xl p-6 md:p-8 mb-10 border border-[#ead8c4]">
              <div className="max-w-4xl mx-auto">
                <p className="text-brand-text-muted mb-6 leading-relaxed text-lg">
                  We appeal today to ask for your support in our mission to
                  provide educational resources to as many Muslim students as
                  possible. Your donation will help us create a safe space for
                  Muslim youth to foster their identity and provide impactful
                  educational programs including summer camps, field trips, and
                  professional workshops fostering community engagement.
                </p>
                <div className="border-l-4 border-brand-accent-orange pl-6 py-2 mb-6">
                  <p className="text-brand-text-dark font-bold italic text-lg">
                    "The believer&apos;s shade on the Day of Resurrection will
                    be his charity."
                  </p>
                  <p className="text-brand-text-muted text-sm mt-2">
                    — Prophet Muhammad ﷺ (Al-Tirmidhi)
                  </p>
                </div>
                <p className="text-brand-text-muted leading-relaxed">
                  Your tax-deductible donation will go directly towards our
                  programs and initiatives. We value every contribution, no
                  matter how big or small, and we assure you that it will be put
                  to good use in serving our community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {donationOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="bg-brand-accent rounded-xl p-6 border border-[#ead8c4] h-full"
                  >
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-5 shadow-sm">
                      <Icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text-dark mb-3">
                      {option.title}
                    </h3>
                    <p className="text-brand-text-muted leading-relaxed mb-4">
                      {option.description}
                    </p>
                    <p className="text-sm font-medium text-brand-primary">
                      {option.highlight}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-brand-secondary rounded-2xl p-6 md:p-8 border border-[#f0dcc3]">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="h-8 w-8 text-brand-primary" />
                <h3 className="text-2xl font-bold text-brand-primary">
                  Ways to give
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {givingMethods.map((method) => (
                  <div
                    key={method.title}
                    className={`rounded-xl border p-5 ${
                      method.featured
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-white border-[#ead8c4] text-brand-text-dark'
                    }`}
                  >
                    <h4 className="text-xl font-bold mb-3">{method.title}</h4>
                    <p
                      className={`leading-relaxed mb-5 ${
                        method.featured
                          ? 'text-white/90'
                          : 'text-brand-text-muted'
                      }`}
                    >
                      {method.description}
                    </p>
                    <Link
                      href={method.href}
                      className={`inline-flex items-center font-semibold ${
                        method.featured ? 'text-white' : 'text-brand-primary'
                      }`}
                    >
                      {method.action}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-accent rounded-2xl p-6 md:p-8 mb-10 border border-[#ead8c4]">
            <div className="max-w-3xl mx-auto text-center mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-3">
                Giving with stocks
              </p>
              <h2 className="text-3xl font-bold text-brand-text-dark">
                A tax-efficient way to support Cordoba Academy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#ead8c4]">
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  Tax Benefits
                </div>
                <p className="text-brand-text-muted">
                  Donating appreciated securities may help reduce capital gains
                  tax while making a meaningful contribution.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#ead8c4]">
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  Simple Process
                </div>
                <p className="text-brand-text-muted">
                  Transfer your securities directly and we will work with you to
                  direct the gift toward the fund that matters most.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#ead8c4]">
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  Lasting Impact
                </div>
                <p className="text-brand-text-muted">
                  Your gift strengthens classrooms, scholarships, and a
                  nurturing environment rooted in Islamic education.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/donate/stock-gifts">
                <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white px-8">
                  Learn How Stock Giving Works
                </Button>
              </Link>
            </div>
          </div>

          <div
            id="payment-options"
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-accent mb-10"
          >
            <div className="max-w-2xl mx-auto text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-3">
                Give online
              </p>
              <h2 className="text-3xl font-bold text-brand-primary">
                Choose your preferred payment method
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-brand-accent rounded-xl p-5 border border-[#ead8c4]">
                <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                  <Image
                    src="/paypal.png"
                    alt="PayPal"
                    width={120}
                    height={56}
                    className="mx-auto"
                  />
                </div>
                <div className="bg-white border-2 border-brand-accent p-4 rounded-lg mb-4 h-48 flex items-center justify-center">
                  <Link
                    href="https://www.paypal.com/donate/?hosted_button_id=AJFCNVUGCZEJU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/paypal_qr.png"
                      alt="PayPal QR Code"
                      width={120}
                      height={120}
                      className="mx-auto"
                    />
                  </Link>
                </div>
                <p className="text-brand-text-muted text-sm">
                  One-time or monthly giving
                </p>
              </div>

              <div className="text-center bg-brand-accent rounded-xl p-5 border border-[#ead8c4]">
                <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                  <Image
                    src="/venmo_blue.png"
                    alt="Venmo"
                    width={100}
                    height={44}
                    className="mx-auto"
                  />
                </div>
                <div className="bg-white border-2 border-brand-accent p-4 rounded-lg mb-4 h-48 flex items-center justify-center">
                  <Link
                    href="https://account.venmo.com/u/cordobaacadmy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/venmo_qr.jpg"
                      alt="Venmo QR Code"
                      width={160}
                      height={160}
                      className="mx-auto"
                    />
                  </Link>
                </div>
                <p className="text-brand-text-muted text-sm">@cordobaacadmy</p>
              </div>

              <div className="text-center bg-brand-accent rounded-xl p-5 border border-[#ead8c4]">
                <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                  <Image
                    src="/zelle.png"
                    alt="Zelle"
                    width={100}
                    height={44}
                    className="mx-auto"
                  />
                </div>
                <div className="bg-white border-2 border-brand-accent p-4 rounded-lg mb-4 h-48 flex items-center justify-center">
                  <Image
                    src="/zelle_qr.jpg"
                    alt="Zelle QR Code"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <p className="text-brand-text-muted text-sm">
                  donate@cordobaacademy.org
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white py-10">
            <h2 className="text-3xl font-bold text-center text-brand-primary mb-8">
              Your impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-brand-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-primary">
                    25%
                  </span>
                </div>
                <h3 className="font-bold text-brand-text-dark mb-2">
                  Scholarship Support
                </h3>
                <p className="text-brand-text-muted">
                  of our students receive need-based financial assistance,
                  making Islamic education accessible to all families.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-primary">
                    100%
                  </span>
                </div>
                <h3 className="font-bold text-brand-text-dark mb-2">
                  Faculty Development
                </h3>
                <p className="text-brand-text-muted">
                  of our teachers participate in professional development
                  opportunities to enhance their teaching skills.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-primary">
                    15+
                  </span>
                </div>
                <h3 className="font-bold text-brand-text-dark mb-2">
                  Enrichment Programs
                </h3>
                <p className="text-brand-text-muted">
                  including Quran competition, STEAM activities, and community
                  service projects funded by donations.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-0 py-10">
            <div className="bg-brand-primary rounded-2xl p-8 text-white text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Double Your Impact</h2>
              <p className="mb-6 max-w-2xl mx-auto text-white/90">
                Many employers match charitable contributions made by their
                employees. Check with your company&apos;s HR department to see
                if they offer a matching gift program and potentially double
                your impact.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-brand-primary hover:bg-brand-accent">
                  Check Employer Match
                </Button>
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-0 py-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">
                Questions About Giving?
              </h2>
              <p className="text-brand-text-muted mb-6">
                Our team is here to help with any questions about donations,
                planned giving, stock gifts, or other ways to support Cordoba
                Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/donate/stock-gifts">
                  <Button
                    variant="outline"
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white w-full sm:w-auto"
                  >
                    Learn About Stock Gifts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
