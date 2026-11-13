import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ROUTE_TITLES } from './data/siteData';
import {
  AboutPage,
  ContactPage,
  FaqsPage,
  GalleryPage,
  QuotePage,
  ServiceAreasPage,
  TestimonialsPage,
} from './pages/CompanyPages';
import { HomePage } from './pages/HomePage';
import { ProcessPage } from './pages/ProcessPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { QuoteServiceChoice, RouteId } from './types';

const VALID_ROUTES = new Set<RouteId>([
  'home',
  'commercial',
  'residential',
  'carpet-upholstery',
  'make-ready',
  'process',
  'why-choose-us',
  'service-areas',
  'gallery',
  'testimonials',
  'faqs',
  'quote',
  'contact',
]);

function readRouteFromHash(): RouteId {
  const raw = window.location.hash.replace(/^#/, '') as RouteId;
  return VALID_ROUTES.has(raw) ? raw : 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteId>(() => readRouteFromHash());
  const [quotePrefill, setQuotePrefill] = useState<{
    service?: QuoteServiceChoice;
    location?: string;
  }>({});

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(readRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = ROUTE_TITLES[currentRoute];
  }, [currentRoute]);

  const navigate = (
    route: RouteId,
    prefill?: { service?: QuoteServiceChoice; location?: string }
  ) => {
    if (prefill) {
      setQuotePrefill(prefill);
    }
    const targetHash = route === 'home' ? '' : `#${route}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#303942]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#15283F] focus:text-[#FAF8F4] focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Header currentRoute={currentRoute} onNavigate={(route) => navigate(route)} />

      <main id="main-content" className="flex-1">
        {currentRoute === 'home' && <HomePage onNavigate={navigate} />}

        {(currentRoute === 'commercial' ||
          currentRoute === 'residential' ||
          currentRoute === 'carpet-upholstery' ||
          currentRoute === 'make-ready') && (
          <ServiceDetailPage serviceRoute={currentRoute} onNavigate={navigate} />
        )}

        {currentRoute === 'process' && <ProcessPage onNavigate={navigate} />}
        {currentRoute === 'why-choose-us' && <AboutPage onNavigate={navigate} />}
        {currentRoute === 'service-areas' && <ServiceAreasPage onNavigate={navigate} />}
        {currentRoute === 'gallery' && <GalleryPage onNavigate={navigate} />}
        {currentRoute === 'testimonials' && <TestimonialsPage onNavigate={navigate} />}
        {currentRoute === 'faqs' && <FaqsPage onNavigate={navigate} />}
        {currentRoute === 'quote' && (
          <QuotePage
            initialService={quotePrefill.service}
            initialCityOrZip={quotePrefill.location}
          />
        )}
        {currentRoute === 'contact' && <ContactPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={(route) => navigate(route)} />
    </div>
  );
}
