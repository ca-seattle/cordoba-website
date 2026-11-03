import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Building2,
  Gift,
  Landmark,
  Mail,
  Percent,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Stock Donations',
  description:
    'Donate appreciated stock to Cordoba Academy. View brokerage transfer instructions, DTC details, and tax-efficient giving guidance.',
};

const benefits = [
  {
    title: 'Avoid capital gains tax',
    description:
      'For eligible appreciated securities held more than one year, donating shares directly may let you avoid capital gains tax that would result from selling them.',
    icon: Percent,
  },
  {
    title: 'Charitable deduction',
    description:
      'You may potentially receive a charitable income tax deduction generally based on the eligible fair market value of the donated securities, subject to IRS rules and limitations.',
    icon: ShieldCheck,
  },
  {
    title: 'Greater impact',
    description:
      'By transferring the full value of the securities, more of what you have built can support scholarships, programs, and Cordoba Academy students.',
    icon: Gift,
  },
];

const brokerageDetails = [
  { label: 'Organization', value: 'Cordoba Academy' },
  { label: 'Legal Name', value: 'Cordoba Academy' },
  { label: '501(c)(3) EIN', value: '47-4297945' },
  { label: 'Receiving Brokerage', value: 'Fidelity Investments' },
  { label: 'DTC Number', value: '0226' },
  { label: 'Account Number', value: 'Z40426085' },
  { label: 'Account Name', value: 'Cordoba Academy' },
  {
    label: 'Address',
    value: '3210 200th Pl SW, Lynnwood, WA 98036',
  },
];

const steps = [
  {
    title: 'Start with your brokerage',
    description:
      'Initiate the gift through the financial institution where your investments are held — including Fidelity, Charles Schwab, Vanguard, Merrill, E*TRADE, and others.',
  },
  {
    title: 'Request a DTC transfer',
    description:
      'Tell your brokerage that you would like to make a “charitable gift of securities via DTC transfer,” then provide Cordoba Academy’s receiving instructions below.',
  },
  {
    title: 'Complete any required forms',
    description:
      'Your brokerage may require you to complete its own charitable gift or securities transfer authorization form before the transfer can proceed.',
  },
  {
    title: 'Notify Cordoba Academy',
    description:
      'After initiating the transfer, email us with your name, contact information, the security being donated, approximate number of shares, and expected transfer date so we can identify and acknowledge your gift.',
  },
];

export default function StockGiftsPage() {
  return (
    <div className="bg-brand-secondary">
      <PageHero
        title="Donate with Stocks"
        subtitle="Turn your investments into an investment in our students"
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
                  Cordoba Academy gratefully accepts gifts of publicly traded
                  stocks and other eligible securities. For donors who own
                  appreciated investments, giving stock directly can be a
                  tax-efficient way to support our students, programs, and
                  future growth.
                </p>
                <p className="text-brand-text-muted leading-relaxed">
                  If your investments have increased substantially in value,
                  donating the shares directly — rather than selling them and
                  donating the proceeds — may provide important tax benefits.
                </p>
              </div>

              <div className="bg-brand-accent rounded-2xl p-6 border border-[#ead8c4]">
                <div className="flex items-center gap-3 mb-5">
                  <Landmark className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-2xl font-bold text-brand-text-dark">
                    A simple example
                  </h3>
                </div>
                <p className="text-brand-text-muted leading-relaxed mb-4">
                  Imagine you purchased shares several years ago for $4,000 and
                  those shares are now worth $10,000. Selling them would create
                  a $6,000 capital gain that may be subject to capital gains
                  tax.
                </p>
                <p className="text-brand-text-muted leading-relaxed">
                  Instead, donating the shares directly may allow you to avoid
                  recognizing that gain while potentially qualifying for a
                  charitable deduction based on the eligible fair market value —
                  so more of the value you have built can go toward Cordoba
                  Academy.
                </p>
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
                How to donate securities
              </h2>
            </div>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 items-start rounded-xl bg-brand-secondary border border-[#f0dcc3] p-4"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-text-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="text-brand-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 md:p-8 border border-brand-accent shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-brand-accent rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <Building2 className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-2">
                  Receiving instructions
                </p>
                <h2 className="text-3xl font-bold text-brand-primary mb-2">
                  Cordoba Academy brokerage information
                </h2>
                <p className="text-brand-text-muted leading-relaxed">
                  Share these details with your brokerage to complete a
                  charitable gift of securities via DTC transfer.
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brokerageDetails.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl bg-brand-secondary border border-[#f0dcc3] p-4"
                >
                  <dt className="text-sm font-semibold uppercase tracking-wide text-brand-primary mb-1">
                    {label}
                  </dt>
                  <dd className="text-lg font-semibold text-brand-text-dark break-words">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="bg-white rounded-2xl p-6 md:p-8 border border-brand-accent shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-brand-accent rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-2">
                  Already initiated?
                </p>
                <h2 className="text-3xl font-bold text-brand-primary mb-3">
                  Notify Cordoba of your stock gift
                </h2>
                <p className="text-brand-text-muted leading-relaxed mb-4">
                  Securities can sometimes arrive without enough donor
                  information for us to identify the gift. After you initiate
                  the transfer, please email{' '}
                  <a
                    href="mailto:donate@cordobaacademy.org?subject=Stock%20Gift%20Notification"
                    className="text-brand-primary font-semibold underline underline-offset-2"
                  >
                    donate@cordobaacademy.org
                  </a>{' '}
                  with your name, contact information, the security being
                  donated, approximate number of shares, and expected transfer
                  date.
                </p>
                <ul className="space-y-2 text-brand-text-muted mb-6">
                  <li className="flex gap-3 items-start">
                    <ArrowRight className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Please do not include your personal brokerage account
                      number.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <ArrowRight className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Once your gift is received and identified, we will provide
                      an appropriate charitable contribution acknowledgment.
                    </span>
                  </li>
                </ul>
                <a href="mailto:donate@cordobaacademy.org?subject=Stock%20Gift%20Notification">
                  <Button className="bg-brand-primary text-white hover:bg-brand-primary/90">
                    Email Stock Gift Details
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <section className="bg-brand-primary rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Questions?</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                If you need help providing these receiving instructions to your
                financial institution, or want to confirm that a stock donation
                is the right fit for your giving goals, we are happy to help.
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

          <p className="text-sm text-brand-text-muted text-center leading-relaxed max-w-3xl mx-auto">
            The information on this page is provided for general informational
            purposes only and should not be considered tax, legal, or investment
            advice. Tax treatment depends on individual circumstances and
            applicable law. Please consult your tax, legal, or financial advisor
            regarding your situation.
          </p>
        </div>
      </div>
    </div>
  );
}
