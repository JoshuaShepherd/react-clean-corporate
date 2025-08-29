import Link from 'next/link';
import { ValuePropsGrid } from '@/components/corporate/value-prop-card';

const services = [
  {
    title: 'Strategic Consulting',
    description:
      'Expert guidance for digital transformation, technology strategy, and business process optimization.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Custom Development',
    description:
      'Tailored software solutions built with enterprise-grade architecture and modern technologies.',
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
    title: 'System Integration',
    description:
      'Seamless integration of existing systems with modern platforms and third-party services.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Cloud Migration',
    description:
      'Safe and efficient migration to cloud platforms with zero downtime and enhanced security.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
  },
  {
    title: 'DevOps & Automation',
    description:
      'Streamline your development lifecycle with CI/CD pipelines and infrastructure automation.',
    icon: (
      <svg className="text-brand-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'Support & Maintenance',
    description: '24/7 monitoring, maintenance, and support to ensure your systems run smoothly.',
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
];

export default function ServicesPage() {
  return (
    <div id="main-content">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              Enterprise Services & Solutions
            </h1>
            <p className="text-xl leading-relaxed text-neutral-600">
              From strategy to implementation, we provide comprehensive solutions that help
              enterprises modernize, scale, and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ValuePropsGrid
        title="Our Core Services"
        subtitle="Expert solutions tailored to your business needs"
        valueProps={services}
      />

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Our Proven Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-neutral-600">
              A structured approach that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your current systems, processes, and business objectives.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive roadmap aligned with your goals and budget.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the solution with regular updates and quality checkpoints.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing maintenance and optimization to ensure long-term success.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-100 text-brand-600 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{process.title}</h3>
                <p className="text-neutral-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-xl text-neutral-300">
              Let&rsquo;s discuss how our services can help you achieve your goals.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
