import { ArrowRight, Check, Info, Phone } from 'lucide-react';
import { COMPANY, IMAGES } from '../data/siteData';
import { EditorialImage } from '../components/EditorialImage';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { QuoteServiceChoice, RouteId } from '../types';

interface ServiceDetailPageProps {
  serviceRoute: 'commercial' | 'residential' | 'carpet-upholstery' | 'make-ready';
  onNavigate: (route: RouteId, prefill?: { service?: QuoteServiceChoice }) => void;
}

export function ServiceDetailPage({ serviceRoute, onNavigate }: ServiceDetailPageProps) {
  if (serviceRoute === 'commercial') {
    return (
      <div className="bg-[#FAF8F4]">
        {/* Hero */}
        <section className="py-12 sm:py-20 border-b border-[#E8E8E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold text-[#965A35] tracking-wide">
                Commercial Cleaning · Oklahoma City Metro
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] leading-[1.1] text-balance">
                A Cleaner Workplace Makes a Stronger Impression.
              </h1>
              <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
                Special Cleaning Services offers tailored commercial cleaning packages for offices, workplaces, and commercial properties. Whether you need a one-time reset, make-ready support, or a recurring arrangement, your cleaning plan is aligned with your business needs.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { service: 'Commercial Cleaning' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>Request a Commercial Cleaning Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold border border-[#E8E8E3] bg-[#FFFFFF] text-[#15283F] hover:border-[#15283F] tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <EditorialImage
                src={IMAGES.commercialOfficeLobby}
                alt="Spotless contemporary corporate office suite and glass conference room"
                priority
                containerClassName="aspect-[4/3] border border-[#E8E8E3]"
              />
            </div>
          </div>
        </section>

        {/* Scope Builder Section */}
        <section className="py-16 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-5">
                <p className="text-xs font-semibold text-[#965A35]">Tailored Commercial Scope</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15283F] text-balance">
                  Let&rsquo;s Build the Right Cleaning Scope.
                </h2>
                <p className="text-base text-[#303942] leading-relaxed">
                  Every workplace operates differently. Instead of forcing your facility into a rigid checklist, we review your facility details with you and build a practical scope around what your team and visitors use most.
                </p>
                <div className="bg-[#FAF8F4] border border-[#E8E8E3] p-5 flex items-start gap-3">
                  <Info className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-[#303942] leading-relaxed">
                    <strong className="font-semibold text-[#15283F]">Scope Confirmation:</strong>{' '}
                    Topics listed here represent common areas customers discuss during an inquiry—they are not automatically included in every package. Final tasks, frequency, and pricing are confirmed directly during the quote process.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Facility Type & Layout',
                    desc: 'Share whether you operate a private office suite, multi-room workplace, or shared commercial property.',
                  },
                  {
                    title: 'Approximate Size',
                    desc: 'Provide rough square footage or room count if known to help estimate visit planning.',
                  },
                  {
                    title: 'Desired Frequency',
                    desc: 'Discuss one-time commercial work, make-ready preparation, or an ongoing recurring schedule.',
                  },
                  {
                    title: 'Restrooms & Common Areas',
                    desc: 'Identify lobbies, breakrooms, conference spaces, and restrooms requiring consistent upkeep.',
                  },
                  {
                    title: 'Floors & High-Use Surfaces',
                    desc: 'Note high-traffic walkways, hard floors, carpets, or glass surfaces that see daily wear.',
                  },
                  {
                    title: 'Preferred Service Times & Priorities',
                    desc: 'Let us know your operating hours, access preferences, and any special facility priorities.',
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-[#E8E8E3] bg-[#FAF8F4] p-5">
                    <h3 className="text-base font-bold text-[#15283F]">{item.title}</h3>
                    <p className="text-sm text-[#303942]/85 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (serviceRoute === 'residential') {
    return (
      <div className="bg-[#FAF8F4]">
        {/* Hero */}
        <section className="py-12 sm:py-20 border-b border-[#E8E8E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold text-[#965A35] tracking-wide">
                Residential Cleaning · Oklahoma City Metro
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] leading-[1.1] text-balance">
                A Fresh Home. More Time for Living.
              </h1>
              <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
                Whether you are preparing your home for guests, catching up on general upkeep, or establishing reliable ongoing care, Special Cleaning Services listens to your priorities and treats your home with genuine respect.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { service: 'Residential Cleaning' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>Request a Home Cleaning Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold border border-[#E8E8E3] bg-[#FFFFFF] text-[#15283F] hover:border-[#15283F] tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <EditorialImage
                src={IMAGES.residentialKitchenDetail}
                alt="Immaculate modern kitchen with quartz island and warm wood cabinetry"
                priority
                containerClassName="aspect-[4/3] border border-[#E8E8E3]"
              />
            </div>
          </div>
        </section>

        {/* One-Time vs Recurring Comparison */}
        <section className="py-16 sm:py-20 bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-semibold text-[#965A35] mb-2">Flexible Arrangements</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#15283F]">
                Choose the Arrangement That Fits Your Household.
              </h2>
              <p className="text-sm sm:text-base text-[#303942] mt-3 leading-relaxed">
                Exact room scope and scheduling cadence are confirmed directly with you during your quote—never locked into rigid presets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFFFF] border border-[#E8E8E3] p-8 space-y-4">
                <p className="text-xs font-semibold text-[#965A35]">01 · Single Visit</p>
                <h3 className="text-2xl font-bold text-[#15283F]">One-Time Cleaning</h3>
                <p className="text-sm sm:text-base text-[#303942] leading-relaxed">
                  Designed for customers preparing for a special occasion, welcoming out-of-town guests, or giving their home a thorough seasonal refresh.
                </p>
                <ul className="space-y-2 pt-2 border-t border-[#E8E8E3] text-sm text-[#303942]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Focus on customer-identified priorities and trouble spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Ideal before gatherings or after busy seasons</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#15283F] text-[#FAF8F4] p-8 space-y-4">
                <p className="text-xs font-semibold text-[#B97B53]">02 · Ongoing Care</p>
                <h3 className="text-2xl font-bold text-[#FAF8F4]">Recurring Cleaning</h3>
                <p className="text-sm sm:text-base text-[#FAF8F4]/85 leading-relaxed">
                  Built for busy households seeking consistent, dependable maintenance so your home stays comfortable week after week.
                </p>
                <ul className="space-y-2 pt-2 border-t border-[#FAF8F4]/15 text-sm text-[#FAF8F4]/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B97B53] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Cadence and focus areas tailored during consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B97B53] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Consistent team approach grounded in pre- &amp; post-inspection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Published Residential Process */}
        <ProcessTimeline onNavigate={onNavigate} />
      </div>
    );
  }

  if (serviceRoute === 'carpet-upholstery') {
    return (
      <div className="bg-[#FAF8F4]">
        <section className="py-12 sm:py-20 border-b border-[#E8E8E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold text-[#965A35] tracking-wide">
                Carpet &amp; Upholstery Cleaning · Oklahoma City Metro
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] leading-[1.1] text-balance">
                Bring New Life to the Surfaces Around You.
              </h1>
              <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
                We provide dedicated carpet cleaning and upholstery steam cleaning for homes and appropriate commercial spaces—addressing everyday foot traffic, visible dirt, and heavily used furniture with careful customer communication.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { service: 'Carpet Cleaning' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>Request a Carpet Cleaning Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { service: 'Upholstery Cleaning' })}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold border border-[#E8E8E3] bg-[#FFFFFF] text-[#15283F] hover:border-[#15283F] cursor-pointer"
                >
                  <span>Inquire About Upholstery</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <EditorialImage
                src={IMAGES.carpetUpholsteryCare}
                alt="Freshly groomed neutral wool carpet and tailored linen sofa in sunlit living room"
                priority
                containerClassName="aspect-[4/3] border border-[#E8E8E3]"
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold text-[#965A35]">Preparing Your Inquiry</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15283F] text-balance">
                What Should You Tell Us Before Your Cleaning?
              </h2>
              <p className="text-base text-[#303942] leading-relaxed">
                Because carpets and upholstery vary widely in material, age, and wear, sharing a few quick details helps our team assess your needs honestly before scheduling—without overpromising on fabric behavior or stain outcomes.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  num: '01',
                  label: 'Carpet or Upholstery Type',
                  detail: 'Let us know whether we are caring for residential carpet, commercial carpeting, sofas, sectionals, or armchairs.',
                },
                {
                  num: '02',
                  label: 'Number of Rooms or Items',
                  detail: 'Share an approximate room count, hallway/stairs, or number of upholstered pieces.',
                },
                {
                  num: '03',
                  label: 'Main Concerns',
                  detail: 'Describe high-traffic lanes, visible dirt, or specific spots you would like us to evaluate.',
                },
                {
                  num: '04',
                  label: 'Approximate Size, If Known',
                  detail: 'Rough room dimensions or square footage helps—never required if you do not have exact measurements.',
                },
                {
                  num: '05',
                  label: 'City or ZIP Code',
                  detail: 'Include your neighborhood or ZIP code so we can confirm scheduling availability in the OKC Metro.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="border border-[#E8E8E3] bg-[#FAF8F4] p-5 flex items-start gap-4"
                >
                  <span className="font-editorial text-2xl font-semibold text-[#B97B53] tabular-nums leading-none">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#15283F]">{item.label}</h3>
                    <p className="text-sm text-[#303942]/85 mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // MAKE-READY PAGE
  return (
    <div className="bg-[#FAF8F4]">
      <section className="py-12 sm:py-20 border-b border-[#E8E8E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold text-[#965A35] tracking-wide">
              Airbnb &amp; Realty Make-Ready · Oklahoma City Metro
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] leading-[1.1] text-balance">
              Make Every Property Ready for What&rsquo;s Next.
            </h1>
            <p className="text-base sm:text-lg text-[#303942] leading-relaxed">
              Designed for Airbnb hosts, realtors, property managers, landlords, and homeowners preparing a property for new occupants, listings, or rental transitions.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('quote', { service: 'Airbnb / Realty Make-Ready' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
              >
                <span>Discuss Your Property</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold border border-[#E8E8E3] bg-[#FFFFFF] text-[#15283F] hover:border-[#15283F] tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              src={IMAGES.makereadyVacantInterior}
              alt="Sunlit vacant residential property interior prepared for new occupants"
              priority
              containerClassName="aspect-[4/3] border border-[#E8E8E3]"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Guest Turnover Cleaning',
                desc: 'Inquire about preparing short-term rentals and Airbnb properties between stays.',
              },
              {
                title: 'Rental Transitions',
                desc: 'Thorough cleaning support as tenants move out and new residents prepare to move in.',
              },
              {
                title: 'Vacant Properties',
                desc: 'Reset empty residential or commercial spaces so floors, kitchens, and baths look fresh.',
              },
              {
                title: 'Real Estate Preparation',
                desc: 'Make-ready cleaning ahead of listing photos, open houses, or final property handoffs.',
              },
            ].map((card) => (
              <div key={card.title} className="border border-[#E8E8E3] bg-[#FAF8F4] p-6">
                <h2 className="text-lg font-bold text-[#15283F]">{card.title}</h2>
                <p className="text-sm text-[#303942]/85 mt-2 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#E8E8E3] p-6 sm:p-8 space-y-4">
            <p className="text-xs font-semibold text-[#965A35]">Direct Coordination</p>
            <h2 className="text-2xl font-bold text-[#15283F]">How Property Inquiries Work</h2>
            <p className="text-sm text-[#303942] leading-relaxed">
              Every property transition has unique timing and access details. We confirm scheduling availability, property condition, and exact cleaning scope directly with hosts, realtors, and property managers.
            </p>
            <p className="text-xs text-[#303942]/80 leading-relaxed pt-2 border-t border-[#E8E8E3]">
              Note: Specialized logistics such as linen exchange, supply restocking, key management, guest messaging, or automated calendar integrations are not included as standard offerings—please discuss any specific property needs directly with our team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
