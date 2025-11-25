import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { PhoneMockup } from './PhoneMockup';

interface FeatureSection {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: string[];
}

const FEATURES: FeatureSection[] = [
  {
    id: 'learn',
    badge: 'Learn',
    badgeColor: '#3B82F6', // blue
    title: 'AI Tutor That Guides, Not Tells',
    description:
      'Experience personalized Socratic teaching that adapts to your pace. Our AI tutor asks the right questions to help you discover solutions yourself.',
    features: [
      'Conversational learning with voice support',
      'Step-by-step guidance through problems',
      'Never feel embarrassed to ask questions',
      'Available 24/7, unlimited practice',
    ],
  },
  {
    id: 'practice',
    badge: 'Practice',
    badgeColor: '#10B981', // green
    title: 'Master Concepts With Structured Practice',
    description:
      'Follow a personalized learning path designed to build strong foundations. Track your progress with visual tools and celebrate every milestone.',
    features: [
      'Adaptive difficulty that grows with you',
      'Interactive math visualizations',
      'Progress tracking and streaks',
      'Hints when you\'re stuck, not before',
    ],
  },
  {
    id: 'olevel',
    badge: 'O-Level Prep',
    badgeColor: '#EC4899', // pink
    title: 'Exam-Ready With Real Past Papers',
    description:
      'Practice with actual O-Level exam questions from past years. Get familiar with exam formats and build confidence for the real thing.',
    features: [
      'Curated past paper questions (2019-2023)',
      'Topic-wise or full paper practice',
      'Detailed worked solutions',
      'Track weak areas for revision',
    ],
  },
];

export const ProductShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px',
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="demo"
      className="relative z-10 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: `1px solid ${theme.colors.border}` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center pt-12 sm:pt-16 pb-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            See It In Action
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Three powerful modes designed to take you from learning to mastery
          </p>
        </div>

        {/* Scrollytelling container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left column - scrollable text sections */}
          <div className="lg:w-1/2 space-y-0">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="min-h-[70vh] lg:min-h-[80vh] flex items-center py-8 lg:py-16"
              >
                <div
                  className="transition-opacity duration-500"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.3,
                  }}
                >
                  {/* Badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      backgroundColor: feature.badgeColor + '20',
                      color: feature.badgeColor,
                    }}
                  >
                    {feature.badge}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base md:text-lg mb-6"
                    style={{ color: theme.colors.textSecondary, lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            backgroundColor: feature.badgeColor + '20',
                            color: feature.badgeColor,
                          }}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span
                          className="text-sm md:text-base"
                          style={{ color: theme.colors.textSecondary }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - sticky phone mockup */}
          <div className="hidden lg:block lg:w-1/2">
            <div
              className="sticky top-[15vh]"
              style={{ height: 'fit-content' }}
            >
              <PhoneMockup activeIndex={activeIndex} />

              {/* Navigation dots */}
              <div className="flex justify-center gap-3 mt-8">
                {FEATURES.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      sectionRefs.current[index]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }}
                    className="group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeIndex === index
                          ? feature.badgeColor + '20'
                          : 'transparent',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor:
                          activeIndex === index
                            ? feature.badgeColor
                            : theme.colors.textMuted,
                        transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />
                    <span
                      className="text-xs font-medium transition-all duration-300"
                      style={{
                        color:
                          activeIndex === index
                            ? feature.badgeColor
                            : theme.colors.textMuted,
                        opacity: activeIndex === index ? 1 : 0,
                        width: activeIndex === index ? 'auto' : 0,
                        overflow: 'hidden',
                      }}
                    >
                      {feature.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Show phone mockup inline with each section */}
          <div className="lg:hidden fixed bottom-4 right-4 z-20">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: FEATURES[activeIndex].badgeColor,
                boxShadow: theme.shadows.lg,
              }}
            >
              <span className="text-white text-xs font-semibold">
                {activeIndex + 1}/3
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
