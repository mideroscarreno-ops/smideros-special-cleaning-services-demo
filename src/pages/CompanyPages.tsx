import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Info,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY, FAQS, GALLERY_ITEMS, IMAGES } from '../data/siteData';
import { EditorialImage } from '../components/EditorialImage';
import { QuoteExperience } from '../components/QuoteExperience';
import { QuoteServiceChoice, RouteId } from '../types';

interface SecondaryPageProps {
  onNavigate: (route: RouteId, prefill?: { service?: QuoteServiceChoice; location?: string }) => void;
}

/* -------------------------------------------------------------------------- */
/* 1. WHY CHOOSE US / ABOUT PAGE                                              */
/* -------------------------------------------------------------------------- */
export function AboutPage({ onNavigate }: SecondaryPageProps) {
  return (
    <div className="bg-[#FAF8F4]">
      <section className="py-12 sm:py-20 border-b border-[#E8E8E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold text-[#965A35] tracking-wide">
              About Special Cleaning Services · Veteran-Owned
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] leading-[1.1] text-balance">
              A Commitment to Service That Shows in Every Detail.
            </h1>
            <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
              Special Cleaning Services is a veteran-owned cleaning company rooted in Oklahoma City, bringing more than 20 years of published experience to residential homes, commercial workplaces, carpet and upholstery care, and property make-ready preparation.
            </p>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              src={IMAGES.heroModernResidence}
              alt="Sunlit modern Oklahoma City residential living area maintained with attention to detail"
              priority
              containerClassName="aspect-[16/10] border border-[#E8E8E3]"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Veteran-Owned Accountability',
                body: 'Our identity is grounded in reliability, discipline, and personal pride in workmanship—treating every home, office, and property transition with respect.',
              },
              {
                num: '02',
                title: '20+ Years of Local Experience',
                body: 'As published by the company, Special Cleaning Services brings over two decades of hands-on cleaning knowledge serving the Oklahoma City Metro.',
              },
              {
                num: '03',
                title: 'Built for Three Distinct Audiences',
                body: 'We serve homeowners, business owners and facility managers, as well as realtors, landlords, and Airbnb hosts—plus specialty carpet and upholstery care.',
              },
            ].map((pillar) => (
              <div key={pillar.num} className="border border-[#E8E8E3] bg-[#FAF8F4] p-7 space-y-3">
                <span className="font-editorial text-3xl font-semibold text-[#B97B53] tabular-nums block">
                  {pillar.num}
                </span>
                <h2 className="text-xl font-bold text-[#15283F]">{pillar.title}</h2>
                <p className="text-sm text-[#303942] leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#15283F] text-[#FAF8F4] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="text-xs font-semibold text-[#B97B53]">Dependability &amp; Customer Care</p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Straightforward Quotes. Consistent Execution.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF8F4]/80 leading-relaxed">
                From residential pre-inspection and post-clean review to tailored commercial cleaning scopes, our focus stays on long-term customer relationships across the Oklahoma City Metro.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="px-6 py-3.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. SERVICE AREAS PAGE                                                      */
/* -------------------------------------------------------------------------- */
export function ServiceAreasPage({ onNavigate }: SecondaryPageProps) {
  const [cityOrZip, setCityOrZip] = useState('');
  const [checkedValue, setCheckedValue] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cityOrZip.trim()) return;
    setCheckedValue(cityOrZip.trim());
  };

  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#965A35]">Coverage &amp; Availability</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] text-balance">
            Proudly Serving the Oklahoma City Metro.
          </h1>
          <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
            Oklahoma City is our primary confirmed service hub. Because exact neighborhood routing can depend on service type and scheduling, please confirm coverage for your address directly with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Interactive Availability Inquiry */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8E8E3] p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#15283F]">Check Your City or ZIP Code</h2>
              <p className="text-sm text-[#303942]/85 mt-2">
                Not sure whether we serve your neighborhood? Enter your city or ZIP code below to carry it into a quote request, or call us directly to confirm availability for your address.
              </p>
            </div>

            <form onSubmit={handleCheck} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="area-check-input" className="sr-only">
                  City or ZIP Code
                </label>
                <input
                  id="area-check-input"
                  type="text"
                  value={cityOrZip}
                  onChange={(e) => setCityOrZip(e.target.value)}
                  placeholder="Enter your city or 5-digit ZIP code"
                  className="flex-1 px-4 py-3 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Confirm Next Steps
                </button>
              </div>
            </form>

            {checkedValue && (
              <div className="bg-[#FAF8F4] border border-[#15283F]/25 p-5 space-y-4">
                <p className="text-sm text-[#15283F] leading-relaxed">
                  <strong>Location noted: {checkedValue}.</strong> Because Special Cleaning Services confirms specific neighborhood availability directly by schedule and service type, please include <strong>{checkedValue}</strong> in a quote inquiry or call{' '}
                  <a href={COMPANY.phoneHref} className="underline font-semibold tabular-nums">
                    {COMPANY.phoneDisplay}
                  </a>{' '}
                  to confirm coverage for your address.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { location: checkedValue })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] cursor-pointer"
                >
                  <span>Continue to Quote with &ldquo;{checkedValue}&rdquo;</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {/* Primary Location Card */}
          <div className="lg:col-span-5 bg-[#15283F] text-[#FAF8F4] p-6 sm:p-10 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B97B53]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Primary Confirmed Base</span>
              </div>
              <h2 className="text-2xl font-bold">Oklahoma City, Oklahoma</h2>
              <p className="text-sm text-[#FAF8F4]/80 leading-relaxed">
                Office Location:
                <br />
                {COMPANY.addressLine1}, {COMPANY.addressLine2}
                <br />
                {COMPANY.cityState}
              </p>
              <p className="text-xs text-[#FAF8F4]/70 leading-relaxed pt-2 border-t border-[#FAF8F4]/15">
                We intentionally avoid publishing unverified city lists or automated radius maps so customers receive accurate confirmation straight from our team.
              </p>
            </div>

            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {COMPANY.phoneDisplay} to Confirm</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. GALLERY / SHOWCASE PAGE                                                 */
/* -------------------------------------------------------------------------- */
export function GalleryPage({ onNavigate }: SecondaryPageProps) {
  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#965A35]">Service Environment Showcase</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] text-balance">
            Spaces We Help Care For Across the OKC Metro.
          </h1>
          <p className="text-base text-[#303942] leading-relaxed">
            An architectural look at the types of homes, offices, carpet and upholstery rooms, and vacant make-ready properties Special Cleaning Services serves.
          </p>
          <div className="bg-[#FFFFFF] border border-[#E8E8E3] p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-[#303942] leading-relaxed">
              <strong className="font-semibold text-[#15283F]">Visual Transparency:</strong>{' '}
              The architectural photography below illustrates the service environments covered by this redesign concept and is not presented as completed client before-and-after documentation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <article key={item.id} className="bg-[#FFFFFF] border border-[#E8E8E3] flex flex-col">
              <EditorialImage
                src={item.image}
                alt={item.alt}
                containerClassName="aspect-[4/3]"
              />
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#965A35]">{item.category}</p>
                  <h2 className="text-lg font-bold text-[#15283F] mt-1">{item.title}</h2>
                  <p className="text-sm text-[#303942]/85 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] cursor-pointer"
          >
            <span>Request a Quote for Your Space</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. TESTIMONIALS / CLIENT STANDARDS PAGE                                    */
/* -------------------------------------------------------------------------- */
export function TestimonialsPage({ onNavigate }: SecondaryPageProps) {
  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#965A35]">Trust &amp; Service Standards</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] text-balance">
            Built on Consistency, Dependability &amp; Customer Care.
          </h1>
          <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
            Special Cleaning Services emphasizes veteran ownership, over 20 years of experience, and attentive follow-through across Oklahoma City homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8E8E3] p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-[#15283F]">
              <ShieldCheck className="w-5 h-5 text-[#B97B53]" aria-hidden="true" />
              <h2 className="text-2xl font-bold">What Customers Can Expect</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-[#303942] leading-relaxed">
              <p>
                <strong className="text-[#15283F]">Clear Scope Alignment:</strong> Every commercial, carpet, upholstery, and make-ready inquiry begins by confirming what spaces matter most to you before work begins.
              </p>
              <p>
                <strong className="text-[#15283F]">Residential Inspection Care:</strong> For residential cleanings, the published workflow pairs a pre-inspection for trouble spots with careful handling around delicate belongings and a final re-inspection upon completion.
              </p>
              <p>
                <strong className="text-[#15283F]">Veteran-Owned Dependability:</strong> Straightforward communication, direct local phone access at{' '}
                <a href={COMPANY.phoneHref} className="font-semibold text-[#15283F] underline tabular-nums">
                  {COMPANY.phoneDisplay}
                </a>
                , and more than two decades of published OKC Metro presence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#15283F] text-[#FAF8F4] p-8 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-[#B97B53]">Authentic Review Policy</p>
              <h2 className="text-xl font-bold">Verifying Public Customer Reviews</h2>
              <p className="text-sm text-[#FAF8F4]/80 leading-relaxed">
                To keep this redesign concept 100% factual and trustworthy, we do not publish fabricated customer quotes, invented names, or unverified star-rating counts.
              </p>
              <p className="text-sm text-[#FAF8F4]/80 leading-relaxed">
                To read verified public customer reviews or request local references directly, please visit the company&rsquo;s official website or contact their office.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={COMPANY.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors"
              >
                Visit Official Website
              </a>
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="px-5 py-3 text-sm font-semibold border border-[#FAF8F4]/30 text-[#FAF8F4] hover:border-[#FAF8F4] cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. FAQS PAGE                                                               */
/* -------------------------------------------------------------------------- */
export function FaqsPage({ onNavigate }: SecondaryPageProps) {
  const [filter, setFilter] = useState<'All' | 'Services' | 'Process' | 'Quotes & Coverage'>('All');
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const visibleFaqs = filter === 'All' ? FAQS : FAQS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold text-[#965A35]">Frequently Asked Questions</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] text-balance">
            Clear Answers Before You Book.
          </h1>
          <p className="text-base text-[#303942] leading-relaxed max-w-2xl">
            Everything below reflects Special Cleaning Services&rsquo; published service offerings. For specific pricing, scheduling availability, or custom requests, please confirm directly with our team.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
          {(['All', 'Services', 'Process', 'Quotes & Coverage'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold border transition-colors whitespace-nowrap cursor-pointer ${
                filter === cat
                  ? 'bg-[#15283F] text-[#FAF8F4] border-[#15283F]'
                  : 'bg-[#FFFFFF] text-[#303942] border-[#E8E8E3] hover:border-[#15283F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#E8E8E3] bg-[#FFFFFF]">
          {visibleFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-[#E8E8E3]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F4] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#15283F]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B97B53] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#303942] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-[#FFFFFF] border border-[#E8E8E3] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-[#15283F]">Still have a specific question?</h2>
            <p className="text-sm text-[#303942]/85 mt-1">
              Call {COMPANY.phoneDisplay} or start a quote inquiry to confirm details for your property.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="px-5 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] whitespace-nowrap cursor-pointer"
          >
            Request a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. REQUEST A QUOTE PAGE                                                    */
/* -------------------------------------------------------------------------- */
interface QuotePageProps {
  initialService?: QuoteServiceChoice;
  initialCityOrZip?: string;
}

export function QuotePage({ initialService, initialCityOrZip }: QuotePageProps) {
  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#965A35]">Free Estimate Inquiry</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] text-balance">
            Request Your Cleaning Quote.
          </h1>
          <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
            Whether you prefer a brief Quick Quote or want to walk through room counts and priorities step by step, our guided experience makes sharing your needs simple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <QuoteExperience
              initialService={initialService}
              initialCityOrZip={initialCityOrZip}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#15283F] text-[#FAF8F4] p-7 space-y-5">
              <h2 className="text-xl font-bold">Prefer to Speak Directly?</h2>
              <p className="text-sm text-[#FAF8F4]/80 leading-relaxed">
                Reach Special Cleaning Services directly by phone or email to discuss scope, availability, and scheduling across the Oklahoma City Metro.
              </p>
              <div className="space-y-3 pt-2 border-t border-[#FAF8F4]/15 text-sm">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2.5 text-[#FAF8F4] hover:text-[#B97B53] font-semibold tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-2.5 text-[#FAF8F4] hover:text-[#B97B53] break-all"
                >
                  <Mail className="w-4 h-4 text-[#B97B53] shrink-0" aria-hidden="true" />
                  <span>{COMPANY.email}</span>
                </a>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E8E8E3] p-6 space-y-3">
              <h3 className="text-base font-bold text-[#15283F]">What Happens Next</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#303942] leading-relaxed">
                <li>1. Share your service type, space notes, and city or ZIP code.</li>
                <li>2. Our team reviews your cleaning priorities and neighborhood availability.</li>
                <li>3. Scope, pricing, and scheduling are confirmed with you directly.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. CONTACT PAGE                                                            */
/* -------------------------------------------------------------------------- */
export function ContactPage({ onNavigate }: SecondaryPageProps) {
  const [areaQuery, setAreaQuery] = useState('');

  const handleAreaJump = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('quote', { location: areaQuery.trim() || 'Oklahoma City' });
  };

  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#965A35]">Contact Information</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] text-balance">
            Get in Touch With Special Cleaning Services.
          </h1>
          <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
            Serving homeowners, commercial facilities, and property managers across the Oklahoma City Metro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Verified Contact Details */}
          <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#E8E8E3] p-8 sm:p-10 space-y-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#965A35] mb-1">Business Name</p>
                <h2 className="text-2xl font-bold text-[#15283F]">{COMPANY.name}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E8E8E3]">
                <div>
                  <p className="text-xs font-semibold text-[#303942]/75 mb-1.5">Phone</p>
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center gap-2 text-lg font-bold text-[#15283F] hover:text-[#965A35] tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                    <span>{COMPANY.phoneDisplay}</span>
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#303942]/75 mb-1.5">Email</p>
                  <a
                    href={COMPANY.emailHref}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#15283F] hover:text-[#965A35] break-all"
                  >
                    <Mail className="w-4 h-4 text-[#B97B53] shrink-0" aria-hidden="true" />
                    <span>{COMPANY.email}</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E8E3]">
                <p className="text-xs font-semibold text-[#303942]/75 mb-1.5">Published Address</p>
                <address className="not-italic text-base text-[#15283F] leading-relaxed flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B97B53] mt-1 shrink-0" aria-hidden="true" />
                  <span>
                    {COMPANY.addressLine1}
                    <br />
                    {COMPANY.addressLine2}
                    <br />
                    {COMPANY.cityState}
                  </span>
                </address>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={COMPANY.phoneHref}
                className="px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors tabular-nums"
              >
                Call {COMPANY.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="px-6 py-3.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

          {/* Service Area Inquiry & Next Steps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#15283F] text-[#FAF8F4] p-8 sm:p-10 space-y-5">
              <p className="text-xs font-semibold text-[#B97B53]">Service-Area Inquiry</p>
              <h2 className="text-2xl font-bold">Confirm Availability for Your Address</h2>
              <p className="text-sm text-[#FAF8F4]/80 leading-relaxed">
                Not sure whether your neighborhood is within our active Oklahoma City Metro schedule? Enter your city or ZIP code to start a quote inquiry, or call us directly.
              </p>
              <form onSubmit={handleAreaJump} className="flex flex-col sm:flex-row gap-2 pt-1">
                <label htmlFor="contact-area-input" className="sr-only">
                  City or ZIP code
                </label>
                <input
                  id="contact-area-input"
                  type="text"
                  value={areaQuery}
                  onChange={(e) => setAreaQuery(e.target.value)}
                  placeholder="City or ZIP code"
                  className="flex-1 px-4 py-3 text-sm bg-[#FFFFFF] text-[#15283F]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] whitespace-nowrap cursor-pointer"
                >
                  Start Quote Inquiry
                </button>
              </form>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E8E8E3] p-8 space-y-3">
              <h2 className="text-lg font-bold text-[#15283F]">Next Steps When You Reach Out</h2>
              <p className="text-sm text-[#303942] leading-relaxed">
                Share the type of cleaning you need—residential, commercial, carpet, upholstery, or property make-ready—along with your location and preferred timing. Our team will confirm coverage, clarify scope, and provide a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
