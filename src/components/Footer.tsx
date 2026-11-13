import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { RouteId } from '../types';

interface FooterProps {
  onNavigate: (route: RouteId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#15283F] text-[#FAF8F4] border-t border-[#1E3654]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-xl font-bold tracking-tight text-[#FAF8F4] hover:text-[#B97B53] transition-colors cursor-pointer"
              >
                {COMPANY.name}
              </button>
              <p className="font-editorial italic text-lg text-[#FAF8F4]/85 mt-2">
                {COMPANY.tagline}
              </p>
            </div>
            <p className="text-sm text-[#FAF8F4]/75 leading-relaxed max-w-sm">
              Veteran-owned cleaning company serving the Oklahoma City metropolitan area with more than 20 years of experience across residential, commercial, carpet, upholstery, and property make-ready care.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#a46943] transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-[#B97B53]">Services</h2>
            <ul className="space-y-2.5 text-sm text-[#FAF8F4]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Commercial Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Residential Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('carpet-upholstery')}
                  className="hover:text-[#FAF8F4] hover:underline-offset-4 hover:underline cursor-pointer text-left"
                >
                  Carpet &amp; Upholstery Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('make-ready')}
                  className="hover:text-[#FAF8F4] hover:underline-offset-4 hover:underline cursor-pointer text-left"
                >
                  Airbnb &amp; Realty Make-Ready
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FAF8F4] hover:underline-offset-4 hover:underline cursor-pointer text-left"
                >
                  Our Cleaning Process
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-[#B97B53]">Company</h2>
            <ul className="space-y-2.5 text-sm text-[#FAF8F4]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('why-choose-us')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-areas')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Showcase Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  Client Standards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#FAF8F4] hover:underline underline-offset-4 cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-[#B97B53]">Oklahoma City Office</h2>
            <div className="space-y-3 text-sm text-[#FAF8F4]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B97B53] mt-0.5 shrink-0" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {COMPANY.addressLine1}
                  <br />
                  {COMPANY.addressLine2}
                  <br />
                  {COMPANY.cityState}
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B97B53] shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY.phoneHref}
                  className="hover:text-[#FAF8F4] underline-offset-4 hover:underline tabular-nums"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B97B53] shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY.emailHref}
                  className="hover:text-[#FAF8F4] underline-offset-4 hover:underline break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-[#FAF8F4] underline underline-offset-4 hover:text-[#B97B53] cursor-pointer"
                >
                  View Contact Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#FAF8F4]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAF8F4]/70">
          <p>
            {COMPANY.name} · {COMPANY.serviceArea}
          </p>
          <p>{COMPANY.agencyCredit}</p>
        </div>
      </div>
    </footer>
  );
}
