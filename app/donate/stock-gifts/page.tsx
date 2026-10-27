import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, Landmark, Percent, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Stock Donations',
  description:
    'Learn how donating appreciated stock can support Cordoba Academy while creating tax-efficient giving opportunities.',
};

const benefits = [
  {
    title: 'Tax-efficient giving',
    description:
      'Donating appreciated securities may allow you to avoid capital gains tax while making a meaningful contribution.',
    icon: Percent,
  },
  {
    title: 'Direct impact',
    description:
      "Your gift supports scholarships, classroom resources, and campus programs that strengthen our students' educational experience.",
    icon: Gift,
  },
  {
    title: 'Simple process',
    description:
      'We can guide you through the transfer process and share details about the best way to direct your gift.',
    icon: ShieldCheck,
  },
];

const steps = [
  'Contact our team to confirm that a stock donation is the right fit for your giving goals.',
  "Provide your broker or financial advisor with Cordoba Academy's transfer instructions and security details.",
  'Complete the transfer and notify our team so we can confirm the gift and direct it to the appropriate fund.',
  'Receive acknowledgment for your contribution and speak with us about any questions regarding tax reporting or donor recognition.',
];

export default function StockGiftsPage() {
  return (
    <div className="bg-brand-secondary">
      <PageHero
        title="Donate with Stocks"
        subtitle="A tax-smart way to support Islamic education and community growth"
      >
        <div className="mt-8 flex justify-center">
          <Link href="/donate">
            <Button className="bg-white text-brand-primary hover:bg-brand-accent px-8">
              Back to Donations
            </Button>
          </Link>
        </div>
      </PageHero>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-accent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-3">
                  Why donate securities?
                </p>
                <h2 className="text-3xl font-bold text-brand-primary mb-4">
                  Support Cordoba Academy with appreciated assets
                </h2>
                <p className="text-brand-text-muted leading-relaxed mb-4">
                  Donating appreciated stock is a meaningful way to support
                  education and community-building at Cordoba Academy. It can be
                  an efficient way to give while also aligning with your
                  financial planning goals.
                </p>
                <p className="text-brand-text-muted leading-relaxed">
                  We encourage donors to contact us before initiating a transfer
                  so we can help you understand the process, confirm the most
                  appropriate fund, and provide acknowledgment details.
                </p>
              </div>

              <div className="bg-brand-accent rounded-2xl p-6 border border-[#ead8c4]">
                <div className="flex items-center gap-3 mb-5">
                  <Landmark className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-2xl font-bold text-brand-text-dark">
                    Potential advantages
                  </h3>
                </div>
                <ul className="space-y-4 text-brand-text-muted">
                  <li className="flex gap-3 items-start">
                    <ArrowRight className="h-5 w-5 text-brand-primary mt-1" />
                    <span>
                      May provide tax advantages compared with selling the asset
                      and donating cash.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <ArrowRight className="h-5 w-5 text-brand-primary mt-1" />
                    <span>
                      Helps fund scholarships, operations, and educational
                      programs that directly benefit students.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <ArrowRight className="h-5 w-5 text-brand-primary mt-1" />
                    <span>
                      Creates a streamlined way to make a larger, lasting impact
                      through one strategic gift.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-brand-accent shadow-sm"
              >
                <div className="bg-brand-accent rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-text-dark mb-3">
                  {title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl p-6 md:p-8 border border-brand-accent shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-3">
                How it works
              </p>
              <h2 className="text-3xl font-bold text-brand-primary">
                A simple step-by-step process
              </h2>
            </div>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 items-start rounded-xl bg-brand-secondary border border-[#f0dcc3] p-4"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-brand-text-muted leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-brand-primary rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need help getting started?
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                We would be happy to speak with you about your stock donation,
                answer questions, and help direct your gift to the area of
                greatest need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-brand-primary hover:bg-brand-accent">
                    Contact Our Team
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button className="bg-white text-brand-primary hover:bg-brand-accent px-8">
                    Return to Giving
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
