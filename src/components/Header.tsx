import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { RouteId } from '../types';

interface HeaderProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
}

const SERVICE_MENU_ITEMS: Array<{ id: RouteId; label: string; summary: string }> = [
  {
    id: 'commercial',
    label: 'Commercial Cleaning',
    summary: 'Tailored office, workplace, and business common-area care',
  },
  {
    id: 'residential',
    label: 'Residential Cleaning',
    summary: 'One-time and recurring home cleaning with pre & post inspection',
  },
  {
    id: 'carpet-upholstery',
    label: 'Carpet & Upholstery',
    summary: 'Carpet cleaning and upholstery steam cleaning for lived-in spaces',
  },
  {
    id: 'make-ready',
    label: 'Airbnb & Realty Make-Ready',
    summary: 'Property preparation for new occupants, listings, and turnovers',
  },
];

const SECONDARY_LINKS: Array<{ id: RouteId; label: string }> = [
  { id: 'gallery', label: 'Showcase' },
  { id: 'testimonials', label: 'Reviews & Standards' },
  { id: 'faqs', label: 'FAQs' },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServiceActive =
    currentRoute === 'commercial' ||
    currentRoute === 'residential' ||
    currentRoute === 'carpet-upholstery' ||
    currentRoute === 'make-ready';

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navigateAndClose = (route: RouteId) => {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E8E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => navigateAndClose('home')}
          className="text-left text-base sm:text-lg font-bold tracking-tight text-[#15283F] whitespace-nowrap shrink-0 hover:text-[#B97B53] transition-colors cursor-pointer"
        >
          {COMPANY.name}
        </button>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#303942]">
          <button
            type="button"
            onClick={() => navigateAndClose('home')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'home' ? 'text-[#15283F] font-semibold' : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            Home
            {currentRoute === 'home' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B97B53]" aria-hidden="true" />
            )}
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`relative py-1 inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isServiceActive ? 'text-[#15283F] font-semibold' : 'text-[#303942] hover:text-[#15283F]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
              {isServiceActive && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B97B53]" aria-hidden="true" />
              )}
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-80 bg-[#FFFFFF] border border-[#E8E8E3] shadow-lg p-2 z-50"
              >
                <div className="px-3 py-2 border-b border-[#E8E8E3] mb-1">
                  <p className="text-xs font-medium text-[#303942]/75">Select a service area</p>
                </div>
                {SERVICE_MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitem"
                    onClick={() => navigateAndClose(item.id)}
                    className={`w-full text-left px-3 py-2.5 transition-colors cursor-pointer block ${
                      currentRoute === item.id
                        ? 'bg-[#FAF8F4] text-[#15283F]'
                        : 'hover:bg-[#FAF8F4] text-[#303942]'
                    }`}
                  >
                    <span className="block text-sm font-semibold text-[#15283F]">{item.label}</span>
                    <span className="block text-xs text-[#303942]/80 mt-0.5 leading-snug">{item.summary}</span>
                  </button>
                ))}
                <div className="mt-1 pt-2 border-t border-[#E8E8E3] px-3 py-2 flex items-center justify-between gap-4 text-xs">
                  {SECONDARY_LINKS.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => navigateAndClose(link.id)}
                      className="text-[#303942] hover:text-[#B97B53] font-medium whitespace-nowrap cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigateAndClose('process')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'process' ? 'text-[#15283F] font-semibold' : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            Our Process
            {currentRoute === 'process' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B97B53]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('why-choose-us')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'why-choose-us' ? 'text-[#15283F] font-semibold' : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            About
            {currentRoute === 'why-choose-us' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B97B53]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('service-areas')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'service-areas' ? 'text-[#15283F] font-semibold' : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            Service Areas
            {currentRoute === 'service-areas' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B97B53]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('contact')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'contact' ? 'text-[#15283F] font-semibold' : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            Contact
            {currentRoute === 'contact' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B97B53]" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Zone 3: Primary CTA (+ Phone CTA on XL screens & Mobile Trigger) */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={COMPANY.phoneHref}
            className="hidden xl:inline-flex items-center gap-1.5 text-sm font-medium text-[#15283F] hover:text-[#965A35] transition-colors whitespace-nowrap shrink-0 tabular-nums"
          >
            <Phone className="w-3.5 h-3.5 text-[#B97B53]" aria-hidden="true" />
            <span>Call {COMPANY.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => navigateAndClose('quote')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#FAF8F4] bg-[#15283F] hover:bg-[#1E3654] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Free Quote
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#E8E8E3] bg-[#FFFFFF] text-[#15283F] hover:border-[#15283F] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-t border-[#E8E8E3] max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="px-4 py-5 space-y-6">
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => navigateAndClose('quote')}
                className="w-full py-3.5 px-4 text-sm font-semibold text-[#FAF8F4] bg-[#15283F] text-center cursor-pointer"
              >
                Request a Free Quote
              </button>
              <a
                href={COMPANY.phoneHref}
                className="w-full py-3 px-4 text-sm font-semibold text-[#15283F] bg-[#FAF8F4] border border-[#E8E8E3] flex items-center justify-center gap-2 tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
                <span>Call {COMPANY.phoneDisplay}</span>
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#965A35] mb-2 px-1">Cleaning Services</p>
              <div className="border-t border-[#E8E8E3]">
                {SERVICE_MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateAndClose(item.id)}
                    className={`w-full text-left py-3 px-1 border-b border-[#E8E8E3] text-sm font-medium flex items-center justify-between cursor-pointer ${
                      currentRoute === item.id ? 'text-[#965A35] font-semibold' : 'text-[#15283F]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#965A35] mb-2 px-1">Company & Information</p>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: 'home', label: 'Home' },
                    { id: 'process', label: 'Our Process' },
                    { id: 'why-choose-us', label: 'About Us' },
                    { id: 'service-areas', label: 'Service Areas' },
                    { id: 'gallery', label: 'Showcase' },
                    { id: 'testimonials', label: 'Reviews' },
                    { id: 'faqs', label: 'FAQs' },
                    { id: 'contact', label: 'Contact' },
                  ] as Array<{ id: RouteId; label: string }>
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateAndClose(item.id)}
                    className={`text-left py-2.5 px-3 border text-sm font-medium cursor-pointer ${
                      currentRoute === item.id
                        ? 'border-[#15283F] bg-[#FAF8F4] text-[#15283F]'
                        : 'border-[#E8E8E3] text-[#303942]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
