import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { COMPANY, IMAGES, SERVICE_PILLARS } from '../data/siteData';
import { EditorialImage } from '../components/EditorialImage';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { QuoteServiceChoice, RouteId } from '../types';

interface HomePageProps {
  onNavigate: (route: RouteId, prefill?: { service?: QuoteServiceChoice; location?: string }) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [coverageInput, setCoverageInput] = useState('');

  const commercial = SERVICE_PILLARS[0];
  const residential = SERVICE_PILLARS[1];
  const carpet = SERVICE_PILLARS[2];
  const makeReady = SERVICE_PILLARS[3];

  const handleCoverageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('quote', { location: coverageInput.trim() || 'Oklahoma City' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('service-pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* B. CINEMATIC HERO */}
      <section className="bg-[#FAF8F4] pt-8 pb-14 sm:pt-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Hero Copy */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2 lg:py-6">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#965A35] tracking-wide mb-5">
                  Veteran-Owned <span aria-hidden="true">·</span> 20+ Years of Experience{' '}
                  <span aria-hidden="true">·</span> Oklahoma City Metro
                </p>

                <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#15283F] leading-[1.08] text-balance">
                  Dependable Cleaning for the Places That Matter Most.
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#303942] leading-relaxed max-w-xl">
                  Professional residential, commercial, carpet, and property make-ready cleaning throughout the Oklahoma City Metro area.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('quote')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Request My Free Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#15283F] bg-[#FFFFFF] border border-[#E8E8E3] hover:border-[#15283F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Explore Our Services
                  </button>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#E8E8E3] flex flex-wrap items-center justify-between gap-4 text-xs text-[#303942]/80">
                <span>Published company history: Over 20 years serving Oklahoma City</span>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#15283F] hover:text-[#965A35] tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B97B53]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Hero Architectural Photograph */}
            <div className="lg:col-span-6">
              <EditorialImage
                src={IMAGES.heroModernResidence}
                alt="Sunlit modern residential living room and open kitchen with spotless oak flooring and stone island"
                priority
                containerClassName="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] border border-[#E8E8E3]"
                caption="Residential, Commercial & Property Preparation · Oklahoma City Metro"
              />
            </div>
          </div>

          {/* Audience Orientation Strip (4-Column Full-Width Row Below Split) */}
          <div className="mt-10 pt-8 border-t border-[#E8E8E3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-semibold text-[#965A35] mb-1">For Homeowners</p>
              <p className="text-sm font-semibold text-[#15283F]">One-Time &amp; Recurring Homes</p>
              <p className="text-xs text-[#303942]/80 mt-1">
                Pre-inspection, trouble-spot focus, and post-clean review.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#965A35] mb-1">For Businesses</p>
              <p className="text-sm font-semibold text-[#15283F]">Offices &amp; Commercial Suites</p>
              <p className="text-xs text-[#303942]/80 mt-1">
                Tailored cleaning packages aligned with your workplace schedule.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#965A35] mb-1">For Property Teams</p>
              <p className="text-sm font-semibold text-[#15283F]">Airbnb &amp; Realty Make-Ready</p>
              <p className="text-xs text-[#303942]/80 mt-1">
                Fresh starts for listings, vacant units, and rental transitions.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#965A35] mb-1">Specialty Care</p>
              <p className="text-sm font-semibold text-[#15283F]">Carpet &amp; Upholstery Steam</p>
              <p className="text-xs text-[#303942]/80 mt-1">
                Refreshed fibers and furniture for lived-in residential and work spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. VETERAN-OWNED EDITORIAL DIFFERENCE */}
      <section className="bg-[#FFFFFF] border-y border-[#E8E8E3] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="font-editorial italic text-2xl sm:text-3xl text-[#15283F] leading-snug">
                &ldquo;A Higher Standard of Clean. A Tradition of Service.&rdquo;
              </p>
              <div className="w-16 h-px bg-[#B97B53] my-6" aria-hidden="true" />
              <p className="text-sm text-[#303942]/85 leading-relaxed">
                Veteran-owned and rooted in the Oklahoma City Metro, Special Cleaning Services brings a disciplined standard of reliability, accountability, and respect into every home and workplace we enter.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15283F] leading-tight text-balance">
                Built on Service. Driven by Detail.
              </h2>
              <p className="text-base text-[#303942] leading-relaxed">
                Consistent cleaning is not about rushing through a checklist—it is about showing up when promised, paying close attention to trouble spots, and respecting the spaces people rely on every day.
              </p>
              <p className="text-base text-[#303942] leading-relaxed">
                With more than 20 years of published local experience, our company serves Oklahoma City homeowners, commercial facilities, and property managers with straightforward communication and careful workmanship.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('why-choose-us')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#15283F] hover:text-[#965A35] transition-colors cursor-pointer"
                >
                  <span>Read About Our Company</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('testimonials')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#303942] hover:text-[#15283F] underline underline-offset-4 transition-colors cursor-pointer"
                >
                  <span>Service Standards &amp; Reviews</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. FOUR VISUALLY DISTINCT SERVICE PILLARS */}
      <section id="service-pillars" className="py-16 sm:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#965A35] tracking-wide mb-3">
              Four Dedicated Service Pillars
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15283F] text-balance">
              Tailored Care Across Homes, Workplaces, Surfaces &amp; Property Transitions.
            </h2>
          </div>

          {/* PILLAR 01: COMMERCIAL CLEANING (Deep Naval Split) */}
          <article className="bg-[#15283F] text-[#FAF8F4] grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between gap-8">
              <div>
                <p className="text-xs font-semibold text-[#B97B53] tabular-nums mb-3">
                  {commercial.index} · {commercial.label}
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF8F4] leading-tight text-balance">
                  {commercial.headline}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#FAF8F4]/80 leading-relaxed">
                  {commercial.summary}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#FAF8F4]/90">
                  {commercial.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#B97B53] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors cursor-pointer"
                >
                  <span>{commercial.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <EditorialImage
                src={commercial.image}
                alt={commercial.imageAlt}
                containerClassName="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]"
              />
            </div>
          </article>

          {/* PILLAR 02: RESIDENTIAL CLEANING (Left Photo + Asymmetric White Editorial) */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <EditorialImage
                src={residential.image}
                alt={residential.imageAlt}
                containerClassName="aspect-[4/3] border border-[#E8E8E3]"
              />
            </div>
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold text-[#965A35] tabular-nums">
                {residential.index} · {residential.label}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15283F] leading-tight text-balance">
                {residential.headline}
              </h3>
              <p className="text-base text-[#303942] leading-relaxed">{residential.summary}</p>
              <ul className="space-y-2.5 text-sm text-[#303942] pt-2 border-t border-[#E8E8E3]">
                {residential.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>{residential.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>

          {/* PILLAR 03: CARPET & UPHOLSTERY (Soft Stone Banded Composition) */}
          <article className="bg-[#E8E8E3]/55 border border-[#E8E8E3] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
              <p className="text-xs font-semibold text-[#965A35] tabular-nums">
                {carpet.index} · {carpet.label}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15283F] leading-tight text-balance">
                {carpet.headline}
              </h3>
              <p className="text-base text-[#303942] leading-relaxed">{carpet.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {carpet.highlights.map((item) => (
                  <div key={item} className="bg-[#FFFFFF] border border-[#E8E8E3] p-3.5 text-xs font-medium text-[#15283F]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('carpet-upholstery')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>{carpet.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <EditorialImage
                src={carpet.image}
                alt={carpet.imageAlt}
                containerClassName="aspect-[4/3] border border-[#E8E8E3]"
              />
            </div>
          </article>

          {/* PILLAR 04: AIRBNB & REALTY MAKE-READY (Clean White Architectural Frame) */}
          <article className="bg-[#FFFFFF] border border-[#E8E8E3] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <EditorialImage
                src={makeReady.image}
                alt={makeReady.imageAlt}
                containerClassName="aspect-[4/3]"
              />
            </div>
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-semibold text-[#965A35] tabular-nums">
                {makeReady.index} · {makeReady.label}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15283F] leading-tight text-balance">
                {makeReady.headline}
              </h3>
              <p className="text-base text-[#303942] leading-relaxed">{makeReady.summary}</p>
              <ul className="space-y-2 text-sm text-[#303942]">
                {makeReady.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('make-ready')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>{makeReady.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { service: 'Airbnb / Realty Make-Ready' })}
                  className="text-sm font-semibold text-[#965A35] hover:text-[#15283F] underline underline-offset-4 cursor-pointer"
                >
                  Discuss a Property Inquiry
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SIGNATURE FEATURE: RESIDENTIAL CLEANING PROCESS */}
      <ProcessTimeline onNavigate={onNavigate} compact />

      {/* OKLAHOMA CITY METRO COVERAGE + QUOTE CTA */}
      <section className="py-16 sm:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Service Area Inquiry */}
            <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#E8E8E3] p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#965A35] mb-3">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Oklahoma City Metro Coverage</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15283F] text-balance">
                  Proudly Serving the Oklahoma City Metro.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#303942] leading-relaxed">
                  Oklahoma City is our home base. Not sure whether we serve your neighborhood? Enter your city or ZIP code below to start a quote inquiry, or call our office directly to confirm availability.
                </p>
              </div>

              <form onSubmit={handleCoverageSubmit} className="space-y-3">
                <label htmlFor="home-coverage-zip" className="block text-xs font-semibold text-[#15283F]">
                  Confirm Availability for Your Neighborhood
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="home-coverage-zip"
                    type="text"
                    value={coverageInput}
                    onChange={(e) => setCoverageInput(e.target.value)}
                    placeholder="Enter city or ZIP code (e.g. Oklahoma City)"
                    className="flex-1 px-4 py-3 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Check &amp; Quote
                  </button>
                </div>
              </form>
            </div>

            {/* Direct Quote & Phone Action Card */}
            <div className="lg:col-span-6 bg-[#15283F] text-[#FAF8F4] p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <p className="text-xs font-semibold text-[#B97B53] mb-3">
                  Simplified Quote Experience
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                  Ready to Discuss Your Home, Office, Carpets, or Rental Property?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#FAF8F4]/80 leading-relaxed">
                  Use our Quick Quote for a fast introduction or step through our guided 5-step form to share room counts, priorities, and timing preferences.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors cursor-pointer"
                >
                  <span>Request My Free Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold border border-[#FAF8F4]/30 text-[#FAF8F4] hover:border-[#FAF8F4] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
