import { FaqItem, GalleryItem, ProcessStep, RouteId } from '../types';

export const COMPANY = {
  name: 'Special Cleaning Services',
  tagline: 'A Higher Standard of Clean. A Tradition of Service.',
  phoneDisplay: '(405) 548-5336',
  phoneHref: 'tel:+14055485336',
  email: 'office1@specialcleaningokc.com',
  emailHref: 'mailto:office1@specialcleaningokc.com',
  addressLine1: '1900 N MacArthur Blvd',
  addressLine2: 'Suite 224',
  cityState: 'Oklahoma City, Oklahoma',
  serviceArea: 'Oklahoma City Metro',
  originalUrl: 'https://www.specialcleaningokc.com/',
  agencyCredit: 'Independent website redesign concept by S.Mideros Agency.',
};

export const IMAGES = {
  heroModernResidence: '/images/hero-modern-residence.webp',
  commercialOfficeLobby: '/images/commercial-office-lobby.webp',
  residentialKitchenDetail: '/images/residential-kitchen-detail.webp',
  carpetUpholsteryCare: '/images/carpet-upholstery-care.webp',
  makereadyVacantInterior: '/images/makeready-vacant-interior.webp',
  processDetailCraft: '/images/process-detail-craft.webp',
};

export const ROUTE_TITLES: Record<RouteId, string> = {
  home: 'Special Cleaning Services | Veteran-Owned OKC Metro Cleaning',
  commercial: 'Commercial Cleaning | Special Cleaning Services OKC',
  residential: 'Residential Cleaning | Special Cleaning Services OKC',
  'carpet-upholstery': 'Carpet & Upholstery Cleaning | Special Cleaning Services OKC',
  'make-ready': 'Airbnb & Realty Make-Ready Cleaning | Special Cleaning Services OKC',
  process: 'Our Residential Cleaning Process | Special Cleaning Services OKC',
  'why-choose-us': 'About & Why Choose Us | Special Cleaning Services OKC',
  'service-areas': 'Service Areas — OKC Metro | Special Cleaning Services',
  gallery: 'Environment Showcase | Special Cleaning Services OKC',
  testimonials: 'Client Expectations & Reviews | Special Cleaning Services OKC',
  faqs: 'Frequently Asked Questions | Special Cleaning Services OKC',
  quote: 'Request a Free Quote | Special Cleaning Services OKC',
  contact: 'Contact Us | Special Cleaning Services OKC',
};

export const SERVICE_PILLARS: Array<{
  id: RouteId;
  index: string;
  label: string;
  headline: string;
  summary: string;
  highlights: string[];
  ctaLabel: string;
  image: string;
  imageAlt: string;
}> = [
  {
    id: 'commercial',
    index: '01',
    label: 'Commercial Cleaning',
    headline: 'Professional Spaces Deserve Professional Care.',
    summary:
      'Tailored commercial cleaning packages designed around your facility, daily operations, and workplace priorities—from executive offices to shared business common areas.',
    highlights: [
      'Offices and private workplaces',
      'Commercial properties and lobbies',
      'Business common areas and restrooms',
      'One-time or recurring service plans',
    ],
    ctaLabel: 'Explore Commercial Cleaning',
    image: IMAGES.commercialOfficeLobby,
    imageAlt: 'Spotless contemporary corporate office suite and glass conference room',
  },
  {
    id: 'residential',
    index: '02',
    label: 'Residential Cleaning',
    headline: 'Come Home to Clean. Stay for the Comfort.',
    summary:
      'Thoughtful home care built around your household—whether you need a single thorough visit before welcoming guests or dependable recurring upkeep.',
    highlights: [
      'One-time and recurring home cleaning',
      'Pre-gathering preparation and refreshes',
      'Attention to customer-identified priorities',
      'Guided pre-inspection and post-clean check',
    ],
    ctaLabel: 'Explore Residential Cleaning',
    image: IMAGES.residentialKitchenDetail,
    imageAlt: 'Immaculate sunlit residential kitchen with quartz island and warm wood cabinetry',
  },
  {
    id: 'carpet-upholstery',
    index: '03',
    label: 'Carpet & Upholstery Cleaning',
    headline: 'Freshen the Surfaces You Live and Work On.',
    summary:
      'Dedicated carpet cleaning and upholstery steam cleaning for heavily used residential and commercial rooms where everyday foot traffic and visible wear build up.',
    highlights: [
      'Residential and commercial carpet cleaning',
      'Upholstery steam cleaning for furniture',
      'Focus on high-traffic areas and visible dirt',
      'Needs-based assessment prior to scheduling',
    ],
    ctaLabel: 'Explore Carpet & Upholstery',
    image: IMAGES.carpetUpholsteryCare,
    imageAlt: 'Freshly groomed plush wool carpet and tailored linen sofa in bright living space',
  },
  {
    id: 'make-ready',
    index: '04',
    label: 'Airbnb & Realty Make-Ready',
    headline: 'Every Property Deserves a Fresh Start.',
    summary:
      'Dependable preparation for vacant listings, rental transitions, and short-term rental inquiries—helping realtors, landlords, and property managers present clean, welcoming spaces.',
    highlights: [
      'Short-term rental and Airbnb turnover inquiries',
      'Realty make-ready cleaning before showings',
      'Vacant home and rental transition preparation',
      'Direct coordination with hosts and property managers',
    ],
    ctaLabel: 'Explore Property Make-Ready',
    image: IMAGES.makereadyVacantInterior,
    imageAlt: 'Bright vacant residential interior with polished hardwood floors prepared for new occupants',
  },
];

export const RESIDENTIAL_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand the Space',
    subtitle: 'Priority alignment before arrival',
    description:
      'We begin by discussing your home’s layout, household priorities, and any specific rooms or details you want emphasized during the visit.',
    detailNote: 'Clear expectations keep every visit focused on what matters most to your household.',
  },
  {
    number: '02',
    title: 'Pre-Inspect',
    subtitle: 'Identify trouble spots early',
    description:
      'Before cleaning begins, we conduct a pre-inspection walk-through to note trouble spots, high-traffic zones, and surfaces needing extra care.',
    detailNote: 'Published as part of Special Cleaning Services’ residential cleaning workflow.',
  },
  {
    number: '03',
    title: 'Clean With Care',
    subtitle: 'Disciplined execution & respect for belongings',
    description:
      'Our team performs the agreed residential cleaning service thoroughly, taking care when moving delicate items where appropriate.',
    detailNote: 'Consistent workmanship grounded in more than 20 years of local service experience.',
  },
  {
    number: '04',
    title: 'Re-Inspect',
    subtitle: 'Final verification before conclusion',
    description:
      'Upon completion, we re-inspect the cleaned spaces to confirm trouble spots were addressed and the work meets expectations before concluding.',
    detailNote: 'A straightforward final check that reflects pride in workmanship.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'services-available',
    category: 'Services',
    question: 'What cleaning services are available?',
    answer:
      'Special Cleaning Services provides commercial cleaning, residential cleaning, carpet cleaning, upholstery steam cleaning, and Airbnb or realty make-ready cleaning across the Oklahoma City Metro.',
  },
  {
    id: 'res-and-comm',
    category: 'Services',
    question: 'Do you provide both residential and commercial cleaning?',
    answer:
      'Yes. We serve homeowners as well as business owners, offices, workplaces, and property managers with tailored scopes suited to each environment.',
  },
  {
    id: 'one-time',
    category: 'Services',
    question: 'Are one-time cleanings available?',
    answer:
      'Yes. One-time cleanings are available for households preparing for guests, seasonal refreshes, move-in or move-out transitions, and single commercial visits.',
  },
  {
    id: 'recurring',
    category: 'Services',
    question: 'Can recurring cleaning be arranged?',
    answer:
      'Yes. Both residential and commercial customers can arrange recurring cleaning plans. Preferred scheduling cadence and scope are discussed and confirmed directly during your quote consultation.',
  },
  {
    id: 'residential-process',
    category: 'Process',
    question: 'What does the residential cleaning process involve?',
    answer:
      'As published on the company’s residential cleaning page, the residential approach involves pre-inspection to identify trouble spots, taking care around delicate items when moving them as appropriate, thorough cleaning, and a final re-inspection after the cleaning is complete.',
  },
  {
    id: 'carpets-upholstery',
    category: 'Services',
    question: 'Do you clean carpets and upholstery?',
    answer:
      'Yes. We offer carpet cleaning and upholstery steam cleaning. Because surfaces and fabrics vary, we ask customers to share room count, furniture types, and main concerns during the quote request so our team can review suitability and expectations.',
  },
  {
    id: 'make-ready',
    category: 'Services',
    question: 'Is Airbnb or realty make-ready cleaning available?',
    answer:
      'Yes. We accept inquiries for Airbnb turnover cleaning, realty make-ready preparation, and rental transitions. Scheduling availability and exact property scope are confirmed directly with our team.',
  },
  {
    id: 'quotes-prepared',
    category: 'Quotes & Coverage',
    question: 'How are quotes prepared?',
    answer:
      'Every space is different, so quotes are customized based on the service type, property size or room count, frequency, and specific priorities you share. Contact us or submit a quote inquiry and our team will review details and confirm scope, pricing, and availability.',
  },
  {
    id: 'areas-served',
    category: 'Quotes & Coverage',
    question: 'What areas do you serve?',
    answer:
      'Special Cleaning Services is based in Oklahoma City and serves the Oklahoma City Metro area. Because neighborhood coverage can depend on schedule and service type, please share your city or ZIP code or call (405) 548-5336 to confirm availability for your address.',
  },
  {
    id: 'how-to-contact',
    category: 'Quotes & Coverage',
    question: 'How can customers contact the company?',
    answer:
      'You can call Special Cleaning Services directly at (405) 548-5336, email office1@specialcleaningokc.com, or visit our office address at 1900 N MacArthur Blvd, Suite 224, Oklahoma City, Oklahoma.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'living-architecture',
    title: 'Bright Residential Living Spaces',
    category: 'Residential Environments',
    description:
      'Architectural illustration of sunlit living rooms, hardwood floors, and open gathering spaces maintained through one-time or recurring residential care.',
    image: IMAGES.heroModernResidence,
    alt: 'Architectural showcase of a bright modern residential living room and open kitchen',
  },
  {
    id: 'executive-workspace',
    title: 'Contemporary Offices & Boardrooms',
    category: 'Commercial Environments',
    description:
      'Representative commercial suite featuring clean glass partitions, polished floor surfaces, and organized conference areas.',
    image: IMAGES.commercialOfficeLobby,
    alt: 'Contemporary office suite and glass conference room interior',
  },
  {
    id: 'kitchen-surfaces',
    title: 'Kitchens, Islands & High-Use Surfaces',
    category: 'Residential Care',
    description:
      'Detailed kitchen environments where clear countertops, cabinetry, and fixtures receive attentive care.',
    image: IMAGES.residentialKitchenDetail,
    alt: 'Modern kitchen island with quartz countertop and wood cabinetry',
  },
  {
    id: 'textile-upholstery',
    title: 'Carpet & Upholstered Living Areas',
    category: 'Specialty Surface Care',
    description:
      'Textured rugs and upholstered seating cared for through dedicated carpet cleaning and upholstery steam cleaning.',
    image: IMAGES.carpetUpholsteryCare,
    alt: 'Clean woven carpet and tailored cream linen sofa in modern living room',
  },
  {
    id: 'make-ready-residence',
    title: 'Vacant & Make-Ready Transitions',
    category: 'Property Preparation',
    description:
      'Empty residential spaces prepared for showings, move-ins, or new occupants across the Oklahoma City Metro.',
    image: IMAGES.makereadyVacantInterior,
    alt: 'Vacant sunlit living space with hardwood floors prepared for new occupants',
  },
  {
    id: 'inspection-detail',
    title: 'Meticulous Pre- & Post-Clean Detail',
    category: 'Process & Workmanship',
    description:
      'Visual study of careful preparation, ordered tools, and detailed surface inspection.',
    image: IMAGES.processDetailCraft,
    alt: 'Neatly folded microfiber cloths beside gleaming marble countertop and brass faucet',
  },
];
