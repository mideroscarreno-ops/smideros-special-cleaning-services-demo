import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { IMAGES, RESIDENTIAL_PROCESS_STEPS } from '../data/siteData';
import { EditorialImage } from './EditorialImage';
import { RouteId } from '../types';

interface ProcessTimelineProps {
  onNavigate?: (route: RouteId) => void;
  compact?: boolean;
}

export function ProcessTimeline({ onNavigate, compact = false }: ProcessTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = RESIDENTIAL_PROCESS_STEPS[activeIndex];

  return (
    <section
      aria-labelledby="residential-process-heading"
      className="bg-[#FFFFFF] border-y border-[#E8E8E3] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold text-[#965A35] tracking-wide mb-3">
              Published Residential Approach · Pre-Inspection to Final Check
            </p>
            <h2
              id="residential-process-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#15283F] leading-[1.12] text-balance"
            >
              Thoughtful From the First Look to the Final Check.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-[#303942]/85 leading-relaxed">
              Every home has its own trouble spots and delicate belongings. Our published residential workflow keeps each visit deliberate from arrival through final re-inspection.
            </p>
          </div>
        </div>

        {/* Interactive 4-Step Timeline Selector + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Step List (All 4 steps always visible in DOM for instant reading + keyboard selection) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3">
            {RESIDENTIAL_PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`w-full text-left p-5 sm:p-6 border transition-colors cursor-pointer flex items-start gap-5 ${
                    isActive
                      ? 'bg-[#FAF8F4] border-[#15283F]'
                      : 'bg-[#FFFFFF] border-[#E8E8E3] hover:border-[#B97B53]'
                  }`}
                >
                  <span
                    className={`text-2xl sm:text-3xl font-editorial font-semibold tabular-nums shrink-0 leading-none pt-0.5 ${
                      isActive ? 'text-[#B97B53]' : 'text-[#15283F]/45'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#15283F]">{step.title}</h3>
                      <span className="text-xs font-medium text-[#303942]/70">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#303942] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Step Editorial Feature + Photo */}
          <div className="lg:col-span-5 flex flex-col border border-[#E8E8E3] bg-[#FAF8F4]">
            <EditorialImage
              src={IMAGES.processDetailCraft}
              alt="Neatly folded microfiber cloths beside a gleaming marble counter and brass faucet representing pre-inspection and post-clean detail"
              containerClassName="aspect-[4/3] w-full"
            />
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#965A35] tabular-nums">
                  <span>Step {activeStep.number} of 04</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStep.title}</span>
                </div>
                <p className="font-editorial italic text-2xl text-[#15283F] mt-3 leading-snug">
                  &ldquo;{activeStep.detailNote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-[#E8E8E3] space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#303942]/85 leading-relaxed">
                  <Check className="w-4 h-4 text-[#965A35] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-[#15283F]">Scope Accuracy Note:</strong>{' '}
                    Pre-inspection, moving delicate items where appropriate, and re-inspection are described specifically on our residential cleaning page. For commercial, carpet, upholstery, and make-ready projects, scope and expectations are confirmed directly with you during the quote process.
                  </span>
                </div>

                {onNavigate && (
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate(compact ? 'process' : 'quote')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#15283F] hover:text-[#965A35] transition-colors cursor-pointer"
                    >
                      <span>{compact ? 'Read full process overview' : 'Request a residential quote'}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
