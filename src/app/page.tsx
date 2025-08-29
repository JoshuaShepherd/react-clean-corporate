import { HeroMinimal } from '@/components/corporate/hero-minimal';
import { ValuePropsGrid } from '@/components/corporate/value-prop-card';
import { StatsRow } from '@/components/corporate/stats-row';
import { LogoCloud } from '@/components/corporate/logo-cloud';
import { TestimonialsGrid } from '@/components/corporate/testimonial-card';
import { CaseStudiesGrid } from '@/components/corporate/case-study-card';

// Sample data (in a real app, this would come from a CMS or API)
const valueProps = [
  {
    title: 'Enterprise Security',
    description:
      'Bank-grade security with end-to-end encryption, compliance with SOC2 and GDPR standards.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: 'Scalable Infrastructure',
    description:
      'Built to grow with your business from startup to enterprise scale with 99.9% uptime.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: '24/7 Expert Support',
    description:
      'Dedicated support team with enterprise SLA and average response time under 2 hours.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 6v6l4 2"
        />
      </svg>
    ),
  },
  {
    title: 'API-First Platform',
    description: 'Comprehensive REST and GraphQL APIs with extensive documentation and SDKs.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Advanced Analytics',
    description: 'Real-time insights and reporting with customizable dashboards and data exports.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Seamless Integration',
    description:
      'Connect with 500+ tools and platforms through pre-built integrations and webhooks.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '2M+', label: 'Users' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '<2h', label: 'Support Response' },
];

const logos = [
  { name: 'Microsoft' },
  { name: 'Google' },
  { name: 'Amazon' },
  { name: 'Salesforce' },
  { name: 'IBM' },
  { name: 'Oracle' },
  { name: 'SAP' },
  { name: 'Adobe' },
];

const testimonials = [
  {
    quote:
      'CorporateMax transformed our operations completely. The implementation was seamless and the results exceeded our expectations.',
    author: {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
    },
  },
  {
    quote:
      'The level of support and expertise provided by CorporateMax is unmatched. They truly understand enterprise needs.',
    author: {
      name: 'Michael Chen',
      role: 'Head of Operations',
      company: 'Global Industries',
    },
  },
  {
    quote:
      "We've seen a 300% improvement in efficiency since implementing CorporateMax's solutions. Highly recommended.",
    author: {
      name: 'Emily Rodriguez',
      role: 'VP of Technology',
      company: 'Innovation Labs',
    },
  },
];

const featuredCaseStudies = [
  {
    slug: 'techcorp-digital-transformation',
    title: 'Digital Transformation at Scale',
    excerpt: 'How TechCorp modernized their legacy systems and improved performance by 400%.',
    client: 'TechCorp Solutions',
    category: 'Digital Transformation',
    results: [
      { metric: 'Performance Gain', value: '400%' },
      { metric: 'Cost Reduction', value: '60%' },
    ],
  },
  {
    slug: 'global-industries-automation',
    title: 'Enterprise Automation Success',
    excerpt: 'Streamlining operations for a Fortune 500 company with intelligent automation.',
    client: 'Global Industries',
    category: 'Process Automation',
    results: [
      { metric: 'Time Saved', value: '80%' },
      { metric: 'Error Reduction', value: '95%' },
    ],
  },
  {
    slug: 'innovation-labs-scaling',
    title: 'Scaling Development Operations',
    excerpt: 'Building a scalable development platform for rapid growth and innovation.',
    client: 'Innovation Labs',
    category: 'Platform Engineering',
    results: [
      { metric: 'Deploy Speed', value: '10x' },
      { metric: 'Team Productivity', value: '250%' },
    ],
  },
];

export default function HomePage() {
  return (
    <div id="main-content">
      <HeroMinimal
        title="Enterprise Solutions Built for Trust"
        subtitle="Professional software solutions that scale with your business. From consulting to implementation, we deliver results that matter."
        primaryCta={{
          text: 'Get Started Today',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Services',
          href: '/services',
        }}
      />

      <LogoCloud logos={logos} />

      <ValuePropsGrid
        title="Why Choose CorporateMax"
        subtitle="Built on decades of enterprise experience, our solutions deliver measurable results"
        valueProps={valueProps}
      />

      <StatsRow
        stats={stats}
        title="Trusted by Industry Leaders"
        subtitle="Join thousands of companies that trust CorporateMax for their critical operations"
      />

      <TestimonialsGrid
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from the companies we've helped transform"
        testimonials={testimonials}
      />

      <CaseStudiesGrid
        title="Proven Results"
        subtitle="Real stories from real clients who achieved extraordinary outcomes"
        caseStudies={featuredCaseStudies}
      />
    </div>
  );
}
