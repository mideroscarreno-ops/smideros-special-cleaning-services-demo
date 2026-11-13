import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { QuoteServiceChoice, RouteId } from '../types';

interface ProcessPageProps {
  onNavigate: (route: RouteId, prefill?: { service?: QuoteServiceChoice }) => void;
}

export function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div className="bg-[#FAF8F4]">
      <section className="py-12 sm:py-16 border-b border-[#E8E8E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xs font-semibold text-[#965A35] tracking-wide mb-3">
            Our Approach to Care
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#15283F] leading-[1.1] text-balance">
            How We Approach Homes, Businesses &amp; Specialty Spaces.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#303942] leading-relaxed max-w-2xl">
            Good cleaning starts with clear communication before a cloth touches a surface. Below is Special Cleaning Services&rsquo; published residential inspection workflow, alongside how we confirm scope for commercial, carpet, upholstery, and make-ready inquiries.
          </p>
        </div>
      </section>

      <ProcessTimeline onNavigate={onNavigate} />

      {/* Scope Confirmation for Other Services */}
      <section className="py-16 sm:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#965A35] mb-2">Clear Communication Across Every Service</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15283F]">
              Scope Confirmation for Commercial, Carpet &amp; Make-Ready Projects.
            </h2>
            <p className="text-sm sm:text-base text-[#303942] mt-3 leading-relaxed">
              While the 4-step pre-inspection and re-inspection routine above is published specifically for residential home cleaning, every non-residential or specialty request follows straightforward scope confirmation with our team before scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Facilities',
                body: 'Facility type, approximate square footage, preferred hours, restrooms, common areas, and frequency are reviewed directly during the quote so your package reflects real workplace needs.',
                service: 'Commercial Cleaning' as QuoteServiceChoice,
              },
              {
                title: 'Carpets & Upholstery',
                body: 'We ask for room counts, furniture types, fabric notes if known, and main traffic concerns upfront so expectations are realistic before service begins.',
                service: 'Carpet Cleaning' as QuoteServiceChoice,
              },
              {
                title: 'Airbnb & Realty Make-Ready',
                body: 'Hosts, realtors, and property managers share property type, transition timing, and priority areas directly so availability and scope are confirmed clearly.',
                service: 'Airbnb / Realty Make-Ready' as QuoteServiceChoice,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#FFFFFF] border border-[#E8E8E3] p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div>
                  <MessageSquare className="w-5 h-5 text-[#B97B53] mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#15283F]">{item.title}</h3>
                  <p className="text-sm text-[#303942]/85 mt-2.5 leading-relaxed">{item.body}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { service: item.service })}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#15283F] hover:text-[#965A35] cursor-pointer"
                >
                  <span>Discuss {item.title}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#15283F] text-[#FAF8F4] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Have Questions About What Is Included?</h2>
              <p className="text-sm text-[#FAF8F4]/80 mt-1">
                Speak directly with our Oklahoma City team to review your space and priorities.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="px-5 py-3 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold border border-[#FAF8F4]/30 text-[#FAF8F4] hover:border-[#FAF8F4] tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
