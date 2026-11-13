export type RouteId =
  | 'home'
  | 'commercial'
  | 'residential'
  | 'carpet-upholstery'
  | 'make-ready'
  | 'process'
  | 'why-choose-us'
  | 'service-areas'
  | 'gallery'
  | 'testimonials'
  | 'faqs'
  | 'quote'
  | 'contact';

export type QuoteServiceChoice =
  | 'Commercial Cleaning'
  | 'Residential Cleaning'
  | 'Carpet Cleaning'
  | 'Upholstery Cleaning'
  | 'Airbnb / Realty Make-Ready'
  | 'Not Sure Yet';

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Services' | 'Process' | 'Quotes & Coverage';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}
