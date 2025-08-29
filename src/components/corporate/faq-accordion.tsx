'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-neutral-900 pr-4">
            {faq.question}
          </h3>
          <div className="flex-shrink-0">
            <svg
              className={`w-5 h-5 text-neutral-500 transform transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 bg-white">
          <div className="text-neutral-600 leading-relaxed">
            {faq.answer}
          </div>
        </div>
      )}
    </div>
  );
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

// FAQ Section Container
interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
}

export function FAQSection({ title, subtitle, faqs }: FAQSectionProps) {
  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="faq-title">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              id="faq-title"
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-neutral-600">
                {subtitle}
              </p>
            )}
          </div>
          
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
