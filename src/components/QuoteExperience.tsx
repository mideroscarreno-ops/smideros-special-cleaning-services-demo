import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  Edit3,
  Info,
  Mail,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { QuoteServiceChoice } from '../types';

interface QuoteExperienceProps {
  initialService?: QuoteServiceChoice;
  initialCityOrZip?: string;
}

type PathwayMode = 'quick' | 'detailed';

const SERVICE_OPTIONS: Array<{ value: QuoteServiceChoice; subtitle: string }> = [
  { value: 'Commercial Cleaning', subtitle: 'Offices, workplaces & common areas' },
  { value: 'Residential Cleaning', subtitle: 'One-time or recurring home care' },
  { value: 'Carpet Cleaning', subtitle: 'Heavily used rooms & traffic areas' },
  { value: 'Upholstery Cleaning', subtitle: 'Sofas, chairs & fabric pieces' },
  { value: 'Airbnb / Realty Make-Ready', subtitle: 'Turnovers, listings & vacant properties' },
  { value: 'Not Sure Yet', subtitle: 'Tell us what you need & we can advise' },
];

const DETAILED_STEPS = [
  { num: 1, label: 'Service' },
  { num: 2, label: 'Space' },
  { num: 3, label: 'Location' },
  { num: 4, label: 'Contact' },
  { num: 5, label: 'Review' },
];

function isValidContactValue(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const digits = trimmed.replace(/\D/g, '');
  return emailPattern.test(trimmed) || digits.length >= 7;
}

export function QuoteExperience({ initialService, initialCityOrZip }: QuoteExperienceProps) {
  const [mode, setMode] = useState<PathwayMode>('quick');

  // Quick Quote State
  const [quickFirstName, setQuickFirstName] = useState('');
  const [quickContact, setQuickContact] = useState('');
  const [quickService, setQuickService] = useState<QuoteServiceChoice>(
    initialService ?? 'Residential Cleaning'
  );
  const [quickLocation, setQuickLocation] = useState(initialCityOrZip ?? '');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickError, setQuickError] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  // Detailed Quote State
  const [step, setStep] = useState<number>(1);
  const [detailedService, setDetailedService] = useState<QuoteServiceChoice>(
    initialService ?? 'Residential Cleaning'
  );

  // Step 2 Conditional Space State
  const [resHomeType, setResHomeType] = useState('Single-Family Home');
  const [resBedrooms, setResBedrooms] = useState('');
  const [resBathrooms, setResBathrooms] = useState('');
  const [resSqFt, setResSqFt] = useState('');
  const [resFrequency, setResFrequency] = useState('One-Time Cleaning');
  const [resPriorities, setResPriorities] = useState('');

  const [commBusinessType, setCommBusinessType] = useState('');
  const [commSqFt, setCommSqFt] = useState('');
  const [commFrequency, setCommFrequency] = useState('Recurring Cleaning');
  const [commTimes, setCommTimes] = useState('');
  const [commRequirements, setCommRequirements] = useState('');

  const [carpetRooms, setCarpetRooms] = useState('');
  const [carpetType, setCarpetType] = useState('');
  const [carpetConcerns, setCarpetConcerns] = useState('');

  const [upholsteryFurniture, setUpholsteryFurniture] = useState('');
  const [upholsteryPieces, setUpholsteryPieces] = useState('');
  const [upholsteryFabric, setUpholsteryFabric] = useState('');

  const [makeReadyPropertyType, setMakeReadyPropertyType] = useState('Single-Family Residence');
  const [makeReadySetting, setMakeReadySetting] = useState('Residential');
  const [makeReadyPurpose, setMakeReadyPurpose] = useState('Move-Out / Move-In');
  const [makeReadyTimeframe, setMakeReadyTimeframe] = useState('');

  const [unsureSetting, setUnsureSetting] = useState('Home / Residence');
  const [unsureNotes, setUnsureNotes] = useState('');

  // Step 3 Location
  const [locCity, setLocCity] = useState('Oklahoma City');
  const [locZip, setLocZip] = useState('');
  const [locAddress, setLocAddress] = useState('');

  // Step 4 Contact
  const [fullName, setFullName] = useState('');
  const [contactValue, setContactValue] = useState('');
  const [preferredMethod, setPreferredMethod] = useState<'Phone' | 'Email' | 'Either'>('Either');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const [stepError, setStepError] = useState('');
  const [detailedSubmitted, setDetailedSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setQuickService(initialService);
      setDetailedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialCityOrZip) {
      setQuickLocation(initialCityOrZip);
      const isZipOnly = /^\d{5}$/.test(initialCityOrZip.trim());
      if (isZipOnly) {
        setLocZip(initialCityOrZip.trim());
      } else {
        setLocCity(initialCityOrZip);
      }
    }
  }, [initialCityOrZip]);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickFirstName.trim()) {
      setQuickError('Please enter your first name.');
      return;
    }
    if (!isValidContactValue(quickContact)) {
      setQuickError('Please provide a valid email address or phone number.');
      return;
    }
    if (!quickLocation.trim()) {
      setQuickError('Please enter your city or ZIP code so availability can be reviewed.');
      return;
    }
    setQuickError('');
    setQuickSubmitted(true);
  };

  const validateAndAdvance = () => {
    setStepError('');

    if (step === 2) {
      if (detailedService === 'Commercial Cleaning' && !commBusinessType.trim()) {
        setStepError('Please share your business or facility type.');
        return;
      }
      if (detailedService === 'Upholstery Cleaning' && !upholsteryFurniture.trim()) {
        setStepError('Please specify the furniture type (for example, sofa or armchair).');
        return;
      }
    }

    if (step === 3) {
      if (!locCity.trim()) {
        setStepError('Please enter your city.');
        return;
      }
      if (!/^\d{5}(-\d{4})?$/.test(locZip.trim())) {
        setStepError('Please enter a valid 5-digit ZIP code.');
        return;
      }
    }

    if (step === 4) {
      if (!fullName.trim()) {
        setStepError('Please enter your full name.');
        return;
      }
      if (!isValidContactValue(contactValue)) {
        setStepError('Please enter a valid email address or phone number.');
        return;
      }
    }

    setStep((prev) => Math.min(5, prev + 1));
  };

  const buildSpaceSummaryLines = (): Array<{ label: string; value: string }> => {
    switch (detailedService) {
      case 'Residential Cleaning':
        return [
          { label: 'Home Type', value: resHomeType },
          { label: 'Bedrooms', value: resBedrooms || 'Not specified' },
          { label: 'Bathrooms', value: resBathrooms || 'Not specified' },
          { label: 'Approx. Sq. Ft.', value: resSqFt || 'Not specified' },
          { label: 'Arrangement', value: resFrequency },
          { label: 'Main Priorities', value: resPriorities || 'None noted' },
        ];
      case 'Commercial Cleaning':
        return [
          { label: 'Business Type', value: commBusinessType || 'Not specified' },
          { label: 'Approx. Sq. Ft.', value: commSqFt || 'Not specified' },
          { label: 'Desired Frequency', value: commFrequency },
          { label: 'Preferred Times', value: commTimes || 'Flexible / To be discussed' },
          { label: 'Special Requirements', value: commRequirements || 'None noted' },
        ];
      case 'Carpet Cleaning':
        return [
          { label: 'Rooms / Areas', value: carpetRooms || 'Not specified' },
          { label: 'Carpet Type', value: carpetType || 'Unknown / Not specified' },
          { label: 'Main Concerns', value: carpetConcerns || 'General refresh' },
        ];
      case 'Upholstery Cleaning':
        return [
          { label: 'Furniture Type', value: upholsteryFurniture || 'Not specified' },
          { label: 'Number of Pieces', value: upholsteryPieces || 'Not specified' },
          { label: 'Fabric Information', value: upholsteryFabric || 'Unknown / Not specified' },
        ];
      case 'Airbnb / Realty Make-Ready':
        return [
          { label: 'Property Type', value: makeReadyPropertyType },
          { label: 'Category', value: makeReadySetting },
          { label: 'Transition Need', value: makeReadyPurpose },
          { label: 'Preferred Timeframe', value: makeReadyTimeframe || 'To be confirmed' },
        ];
      case 'Not Sure Yet':
        return [
          { label: 'Property Setting', value: unsureSetting },
          { label: 'Description', value: unsureNotes || 'Requesting general guidance' },
        ];
    }
  };

  const formatPlainTextSummary = (isQuick: boolean): string => {
    if (isQuick) {
      return [
        'Special Cleaning Services — Quote Inquiry Summary',
        `Service: ${quickService}`,
        `First Name: ${quickFirstName}`,
        `Contact: ${quickContact}`,
        `City / ZIP: ${quickLocation}`,
        quickMessage ? `Notes: ${quickMessage}` : 'Notes: None',
      ].join('\n');
    }

    const spaceLines = buildSpaceSummaryLines()
      .map((item) => `${item.label}: ${item.value}`)
      .join('\n');

    return [
      'Special Cleaning Services — Detailed Quote Summary',
      `Service: ${detailedService}`,
      spaceLines,
      `Location: ${locCity}, OK ${locZip}${locAddress ? ` (${locAddress})` : ''}`,
      `Full Name: ${fullName}`,
      `Contact: ${contactValue} (Preferred: ${preferredMethod})`,
      additionalDetails ? `Additional Details: ${additionalDetails}` : 'Additional Details: None',
    ].join('\n');
  };

  const handleCopySummary = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const resetAll = () => {
    setQuickSubmitted(false);
    setDetailedSubmitted(false);
    setStep(1);
    setStepError('');
    setQuickError('');
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E8E8E3]">
      {/* Honest Demonstration Banner */}
      <div className="bg-[#FAF8F4] border-b border-[#E8E8E3] px-5 sm:px-8 py-3.5 flex items-start gap-3">
        <Info className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-xs text-[#303942] leading-relaxed">
          <strong className="font-semibold text-[#15283F]">Interactive Redesign Demonstration:</strong>{' '}
          This guided quote flow illustrates the improved customer inquiry experience. No external form backend is connected—after reviewing your summary, use the direct phone or email links to contact {COMPANY.name} directly.
        </p>
      </div>

      {/* Pathway Mode Switcher */}
      <div className="px-5 sm:px-8 pt-6 pb-5 border-b border-[#E8E8E3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#15283F]">Choose Your Quote Pathway</h2>
          <p className="text-xs sm:text-sm text-[#303942]/80 mt-1">
            Scope, pricing, and availability are always confirmed directly by our team—no automated estimates or instant bindings.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Quote pathway selector"
          className="inline-flex p-1 bg-[#FAF8F4] border border-[#E8E8E3] shrink-0 self-start sm:self-auto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'quick'}
            onClick={() => setMode('quick')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              mode === 'quick'
                ? 'bg-[#15283F] text-[#FAF8F4]'
                : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            Quick Quote
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'detailed'}
            onClick={() => setMode('detailed')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              mode === 'detailed'
                ? 'bg-[#15283F] text-[#FAF8F4]'
                : 'text-[#303942] hover:text-[#15283F]'
            }`}
          >
            Detailed Quote (5 Steps)
          </button>
        </div>
      </div>

      {/* QUICK QUOTE PATHWAY */}
      {mode === 'quick' && (
        <div className="p-5 sm:p-8">
          {quickSubmitted ? (
            <DemoSummaryCard
              title="Quick Quote Preview Prepared"
              summaryText={formatPlainTextSummary(true)}
              copied={copied}
              onCopy={() => handleCopySummary(formatPlainTextSummary(true))}
              onReset={resetAll}
              subject={`Quote Inquiry: ${quickService} (${quickLocation})`}
            />
          ) : (
            <form onSubmit={handleQuickSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quick-first-name" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                    First Name <span className="text-[#965A35]">*</span>
                  </label>
                  <input
                    id="quick-first-name"
                    type="text"
                    required
                    value={quickFirstName}
                    onChange={(e) => setQuickFirstName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F] text-[#15283F]"
                  />
                </div>

                <div>
                  <label htmlFor="quick-contact" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                    Email or Phone <span className="text-[#965A35]">*</span>
                  </label>
                  <input
                    id="quick-contact"
                    type="text"
                    required
                    value={quickContact}
                    onChange={(e) => setQuickContact(e.target.value)}
                    placeholder="(405) 555-0100 or name@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F] text-[#15283F]"
                  />
                </div>

                <div>
                  <label htmlFor="quick-service" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                    Service Type <span className="text-[#965A35]">*</span>
                  </label>
                  <select
                    id="quick-service"
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value as QuoteServiceChoice)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F] text-[#15283F]"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.value}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quick-location" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                    City or ZIP Code <span className="text-[#965A35]">*</span>
                  </label>
                  <input
                    id="quick-location"
                    type="text"
                    required
                    value={quickLocation}
                    onChange={(e) => setQuickLocation(e.target.value)}
                    placeholder="Oklahoma City or ZIP code"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F] text-[#15283F]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quick-message" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                  Short Message <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                </label>
                <textarea
                  id="quick-message"
                  rows={3}
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  placeholder="Share brief notes about your home, workplace, carpet, or property transition..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3] focus:border-[#15283F] text-[#15283F]"
                />
              </div>

              {quickError && (
                <p role="alert" className="text-sm font-medium text-[#9B2C2C] bg-[#FFF5F5] border border-[#FEB2B2] px-4 py-2.5">
                  {quickError}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                >
                  <span>Request My Free Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setMode('detailed')}
                  className="text-sm font-medium text-[#15283F] underline underline-offset-4 hover:text-[#965A35] cursor-pointer text-left sm:text-right"
                >
                  Prefer to share room &amp; space details? Switch to Detailed Quote
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* DETAILED 5-STEP QUOTE PATHWAY */}
      {mode === 'detailed' && (
        <div className="p-5 sm:p-8">
          {detailedSubmitted ? (
            <DemoSummaryCard
              title="Detailed Quote Preview Prepared"
              summaryText={formatPlainTextSummary(false)}
              copied={copied}
              onCopy={() => handleCopySummary(formatPlainTextSummary(false))}
              onReset={resetAll}
              subject={`Detailed Quote Inquiry: ${detailedService} — ${locCity}`}
            />
          ) : (
            <div className="space-y-8">
              {/* Progress Indicator */}
              <nav aria-label="Detailed quote progress">
                <ol className="grid grid-cols-5 gap-2">
                  {DETAILED_STEPS.map((item) => {
                    const isCurrent = step === item.num;
                    const isCompleted = step > item.num;
                    return (
                      <li key={item.num}>
                        <button
                          type="button"
                          disabled={item.num > step}
                          onClick={() => {
                            if (item.num < step) {
                              setStepError('');
                              setStep(item.num);
                            }
                          }}
                          className={`w-full text-left border-t-2 pt-2.5 pb-1 transition-colors ${
                            isCurrent
                              ? 'border-[#B97B53] text-[#15283F]'
                              : isCompleted
                              ? 'border-[#15283F] text-[#15283F] cursor-pointer hover:text-[#965A35]'
                              : 'border-[#E8E8E3] text-[#303942]/50 cursor-not-allowed'
                          }`}
                        >
                          <span className="block text-[11px] font-semibold tabular-nums">
                            0{item.num}
                          </span>
                          <span className="block text-xs sm:text-sm font-semibold truncate">
                            {item.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              {/* STEP 1: SERVICE */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-[#15283F]">Step 1 — Choose your service</h3>
                    <p className="text-sm text-[#303942]/80 mt-1">
                      Select the primary cleaning need you would like to discuss.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SERVICE_OPTIONS.map((opt) => {
                      const active = detailedService === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setDetailedService(opt.value)}
                          aria-pressed={active}
                          className={`p-4 text-left border transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#FAF8F4] border-[#15283F]'
                              : 'bg-[#FFFFFF] border-[#E8E8E3] hover:border-[#B97B53]'
                          }`}
                        >
                          <span className="block text-sm font-bold text-[#15283F]">{opt.value}</span>
                          <span className="block text-xs text-[#303942]/80 mt-1">{opt.subtitle}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: CONDITIONAL SPACE QUESTIONS */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-[#15283F]">
                      Step 2 — Tell us about your space ({detailedService})
                    </h3>
                    <p className="text-sm text-[#303942]/80 mt-1">
                      Share what you know today. Approximate sizes and counts are always welcome—exact measurements are never required.
                    </p>
                  </div>

                  {detailedService === 'Residential Cleaning' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="res-home-type" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Home Type
                        </label>
                        <select
                          id="res-home-type"
                          value={resHomeType}
                          onChange={(e) => setResHomeType(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>Single-Family Home</option>
                          <option>Townhome / Duplex</option>
                          <option>Apartment / Condo</option>
                          <option>Other Residence</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="res-freq" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          One-Time or Recurring Cleaning
                        </label>
                        <select
                          id="res-freq"
                          value={resFrequency}
                          onChange={(e) => setResFrequency(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>One-Time Cleaning</option>
                          <option>Recurring Cleaning (Discuss Cadence)</option>
                          <option>Unsure — Want Advice</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="res-beds" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Number of Bedrooms <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="res-beds"
                          type="text"
                          value={resBedrooms}
                          onChange={(e) => setResBedrooms(e.target.value)}
                          placeholder="e.g. 3 bedrooms"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div>
                        <label htmlFor="res-baths" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Number of Bathrooms <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="res-baths"
                          type="text"
                          value={resBathrooms}
                          onChange={(e) => setResBathrooms(e.target.value)}
                          placeholder="e.g. 2.5 baths"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="res-sqft" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Approximate Square Footage <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="res-sqft"
                          type="text"
                          value={resSqFt}
                          onChange={(e) => setResSqFt(e.target.value)}
                          placeholder="e.g. ~2,100 sq ft (leave blank if unsure)"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="res-priorities" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Main Priorities <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <textarea
                          id="res-priorities"
                          rows={2}
                          value={resPriorities}
                          onChange={(e) => setResPriorities(e.target.value)}
                          placeholder="Kitchen, bathrooms, trouble spots, upcoming guests, or delicate items..."
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                    </div>
                  )}

                  {detailedService === 'Commercial Cleaning' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="comm-type" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Business / Facility Type <span className="text-[#965A35]">*</span>
                        </label>
                        <input
                          id="comm-type"
                          type="text"
                          value={commBusinessType}
                          onChange={(e) => setCommBusinessType(e.target.value)}
                          placeholder="e.g. Office suite, commercial building"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div>
                        <label htmlFor="comm-freq" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Desired Frequency
                        </label>
                        <select
                          id="comm-freq"
                          value={commFrequency}
                          onChange={(e) => setCommFrequency(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>Recurring Cleaning</option>
                          <option>One-Time Cleaning / Make-Ready</option>
                          <option>To Be Discussed</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="comm-sqft" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Approximate Square Footage <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="comm-sqft"
                          type="text"
                          value={commSqFt}
                          onChange={(e) => setCommSqFt(e.target.value)}
                          placeholder="e.g. ~3,500 sq ft"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div>
                        <label htmlFor="comm-times" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Preferred Cleaning Times <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="comm-times"
                          type="text"
                          value={commTimes}
                          onChange={(e) => setCommTimes(e.target.value)}
                          placeholder="e.g. After business hours, daytime"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="comm-req" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Special Requirements <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <textarea
                          id="comm-req"
                          rows={2}
                          value={commRequirements}
                          onChange={(e) => setCommRequirements(e.target.value)}
                          placeholder="Restrooms, common areas, floors, or priorities to discuss during quote..."
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                    </div>
                  )}

                  {detailedService === 'Carpet Cleaning' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="carpet-rooms" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Number of Rooms or Areas <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="carpet-rooms"
                          type="text"
                          value={carpetRooms}
                          onChange={(e) => setCarpetRooms(e.target.value)}
                          placeholder="e.g. 3 bedrooms and hallway"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div>
                        <label htmlFor="carpet-type" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Carpet Type, If Known <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="carpet-type"
                          type="text"
                          value={carpetType}
                          onChange={(e) => setCarpetType(e.target.value)}
                          placeholder="e.g. Low-pile residential, commercial"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="carpet-concerns" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Main Concerns <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <textarea
                          id="carpet-concerns"
                          rows={2}
                          value={carpetConcerns}
                          onChange={(e) => setCarpetConcerns(e.target.value)}
                          placeholder="High-traffic walkways, visible dirt, or specific spots to assess..."
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                    </div>
                  )}

                  {detailedService === 'Upholstery Cleaning' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="uph-furniture" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Furniture Type <span className="text-[#965A35]">*</span>
                        </label>
                        <input
                          id="uph-furniture"
                          type="text"
                          value={upholsteryFurniture}
                          onChange={(e) => setUpholsteryFurniture(e.target.value)}
                          placeholder="e.g. Sectional sofa, dining chairs"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div>
                        <label htmlFor="uph-pieces" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Number of Pieces <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="uph-pieces"
                          type="text"
                          value={upholsteryPieces}
                          onChange={(e) => setUpholsteryPieces(e.target.value)}
                          placeholder="e.g. 1 sofa, 2 armchairs"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="uph-fabric" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Fabric Information, If Known <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="uph-fabric"
                          type="text"
                          value={upholsteryFabric}
                          onChange={(e) => setUpholsteryFabric(e.target.value)}
                          placeholder="e.g. Microfiber, linen, synthetic blend, or tag code if visible"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                    </div>
                  )}

                  {detailedService === 'Airbnb / Realty Make-Ready' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="mr-prop-type" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Property Type
                        </label>
                        <select
                          id="mr-prop-type"
                          value={makeReadyPropertyType}
                          onChange={(e) => setMakeReadyPropertyType(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>Single-Family Residence</option>
                          <option>Short-Term Rental / Airbnb</option>
                          <option>Apartment / Condo Unit</option>
                          <option>Commercial Suite</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="mr-setting" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Residential or Commercial
                        </label>
                        <select
                          id="mr-setting"
                          value={makeReadySetting}
                          onChange={(e) => setMakeReadySetting(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>Residential</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="mr-purpose" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Transition Type
                        </label>
                        <select
                          id="mr-purpose"
                          value={makeReadyPurpose}
                          onChange={(e) => setMakeReadyPurpose(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>Move-Out / Move-In</option>
                          <option>Rental Turnover</option>
                          <option>Realty Listing Preparation</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="mr-time" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Preferred Timeframe <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <input
                          id="mr-time"
                          type="text"
                          value={makeReadyTimeframe}
                          onChange={(e) => setMakeReadyTimeframe(e.target.value)}
                          placeholder="e.g. Next week before listing photos"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                    </div>
                  )}

                  {detailedService === 'Not Sure Yet' && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="unsure-setting" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          Property Setting
                        </label>
                        <select
                          id="unsure-setting"
                          value={unsureSetting}
                          onChange={(e) => setUnsureSetting(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        >
                          <option>Home / Residence</option>
                          <option>Commercial / Office</option>
                          <option>Rental or Vacant Property</option>
                          <option>Carpets or Furniture Only</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="unsure-notes" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                          What would you like help with? <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                        </label>
                        <textarea
                          id="unsure-notes"
                          rows={3}
                          value={unsureNotes}
                          onChange={(e) => setUnsureNotes(e.target.value)}
                          placeholder="Tell us about your space and we can recommend the right service scope..."
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3: LOCATION */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-[#15283F]">Step 3 — Location</h3>
                    <p className="text-sm text-[#303942]/80 mt-1">
                      Special Cleaning Services serves the Oklahoma City Metro area. Service availability for your specific address is confirmed by our team.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="loc-city" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                        City <span className="text-[#965A35]">*</span>
                      </label>
                      <input
                        id="loc-city"
                        type="text"
                        required
                        value={locCity}
                        onChange={(e) => setLocCity(e.target.value)}
                        placeholder="Oklahoma City"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                      />
                    </div>
                    <div>
                      <label htmlFor="loc-zip" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                        ZIP Code <span className="text-[#965A35]">*</span>
                      </label>
                      <input
                        id="loc-zip"
                        type="text"
                        inputMode="numeric"
                        required
                        value={locZip}
                        onChange={(e) => setLocZip(e.target.value)}
                        placeholder="e.g. 73127"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3] tabular-nums"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="loc-address" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                        Street Address <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                      </label>
                      <input
                        id="loc-address"
                        type="text"
                        value={locAddress}
                        onChange={(e) => setLocAddress(e.target.value)}
                        placeholder="Street address (optional for initial inquiry)"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT */}
              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-[#15283F]">Step 4 — Contact Details</h3>
                    <p className="text-sm text-[#303942]/80 mt-1">
                      Tell us how you prefer to be reached when reviewing scope and availability.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fullname" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                        Full Name <span className="text-[#965A35]">*</span>
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-value" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                        Email or Phone <span className="text-[#965A35]">*</span>
                      </label>
                      <input
                        id="contact-value"
                        type="text"
                        required
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        placeholder="(405) 555-0100 or name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <span className="block text-sm font-semibold text-[#15283F] mb-2">
                        Preferred Contact Method
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(['Phone', 'Email', 'Either'] as const).map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPreferredMethod(method)}
                            className={`px-4 py-2 text-sm font-medium border cursor-pointer transition-colors ${
                              preferredMethod === method
                                ? 'bg-[#15283F] text-[#FAF8F4] border-[#15283F]'
                                : 'bg-[#FAF8F4] text-[#303942] border-[#E8E8E3] hover:border-[#15283F]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-notes" className="block text-sm font-semibold text-[#15283F] mb-1.5">
                        Additional Details <span className="text-xs font-normal text-[#303942]/70">(Optional)</span>
                      </label>
                      <textarea
                        id="contact-notes"
                        rows={2}
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        placeholder="Any access instructions, questions, or timing preferences..."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#E8E8E3]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: REVIEW */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#15283F]">Step 5 — Review Your Inquiry</h3>
                    <p className="text-sm text-[#303942]/80 mt-1">
                      Confirm your entries below. Special Cleaning Services will review the inquiry and confirm scope, pricing, and availability.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-[#E8E8E3] bg-[#FAF8F4] p-4 space-y-2">
                      <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-2">
                        <span className="text-xs font-semibold text-[#965A35]">01 · Selected Service</span>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#15283F] hover:text-[#965A35] cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm font-bold text-[#15283F] pt-1">{detailedService}</p>
                    </div>

                    <div className="border border-[#E8E8E3] bg-[#FAF8F4] p-4 space-y-2">
                      <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-2">
                        <span className="text-xs font-semibold text-[#965A35]">03 · Location</span>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#15283F] hover:text-[#965A35] cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm text-[#15283F] pt-1">
                        {locCity}, OK <span className="tabular-nums">{locZip}</span>
                      </p>
                      {locAddress && <p className="text-xs text-[#303942]/80">{locAddress}</p>}
                    </div>

                    <div className="border border-[#E8E8E3] bg-[#FAF8F4] p-4 space-y-2">
                      <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-2">
                        <span className="text-xs font-semibold text-[#965A35]">02 · Space Details</span>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#15283F] hover:text-[#965A35] cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <dl className="space-y-1 pt-1 text-xs">
                        {buildSpaceSummaryLines().map((row) => (
                          <div key={row.label} className="flex justify-between gap-3">
                            <dt className="text-[#303942]/75">{row.label}:</dt>
                            <dd className="font-medium text-[#15283F] text-right">{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="border border-[#E8E8E3] bg-[#FAF8F4] p-4 space-y-2">
                      <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-2">
                        <span className="text-xs font-semibold text-[#965A35]">04 · Contact</span>
                        <button
                          type="button"
                          onClick={() => setStep(4)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#15283F] hover:text-[#965A35] cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-[#15283F] pt-1">{fullName}</p>
                      <p className="text-xs text-[#303942]">
                        {contactValue} · Preferred: {preferredMethod}
                      </p>
                      {additionalDetails && (
                        <p className="text-xs text-[#303942]/80 pt-1">{additionalDetails}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {stepError && (
                <p role="alert" className="text-sm font-medium text-[#9B2C2C] bg-[#FFF5F5] border border-[#FEB2B2] px-4 py-2.5">
                  {stepError}
                </p>
              )}

              {/* Step Footer Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8E8E3]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setStepError('');
                      setStep((prev) => prev - 1);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#15283F] border border-[#E8E8E3] hover:border-[#15283F] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={validateAndAdvance}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setDetailedSubmitted(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#B97B53] text-[#FFFFFF] hover:bg-[#965A35] transition-colors cursor-pointer"
                  >
                    <span>Request My Cleaning Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface DemoSummaryCardProps {
  title: string;
  summaryText: string;
  copied: boolean;
  onCopy: () => void;
  onReset: () => void;
  subject: string;
}

function DemoSummaryCard({
  title,
  summaryText,
  copied,
  onCopy,
  onReset,
  subject,
}: DemoSummaryCardProps) {
  const mailtoUrl = `${COMPANY.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    summaryText
  )}`;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-[#FAF8F4] border border-[#15283F]/20 p-5">
        <CheckCircle2 className="w-5 h-5 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-[#15283F]">{title}</h3>
          <p className="text-sm text-[#303942] leading-relaxed">
            <strong>Demonstration Notice:</strong> Because this is an independent redesign concept with no connected backend server, your inquiry was <strong>not</strong> sent or booked automatically. To reach {COMPANY.name} directly, use the email or phone actions below with your prepared summary.
          </p>
        </div>
      </div>

      <div className="bg-[#FAF8F4] border border-[#E8E8E3] p-5">
        <div className="flex items-center justify-between gap-4 mb-3 pb-2 border-b border-[#E8E8E3]">
          <span className="text-xs font-semibold text-[#965A35]">Prepared Inquiry Summary</span>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15283F] hover:text-[#965A35] cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{copied ? 'Copied to clipboard' : 'Copy Summary'}</span>
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-xs sm:text-sm font-sans text-[#303942] leading-relaxed">
          {summaryText}
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={mailtoUrl}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#15283F] text-[#FAF8F4] hover:bg-[#1E3654] transition-colors"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>Send via Email ({COMPANY.email})</span>
        </a>
        <a
          href={COMPANY.phoneHref}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#FAF8F4] text-[#15283F] border border-[#E8E8E3] hover:border-[#15283F] transition-colors tabular-nums"
        >
          <Phone className="w-4 h-4 text-[#B97B53]" aria-hidden="true" />
          <span>Call {COMPANY.phoneDisplay}</span>
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[#303942] hover:text-[#15283F] cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          <span>Start New Preview</span>
        </button>
      </div>
    </div>
  );
}
