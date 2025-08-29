import Link from 'next/link';

const allCaseStudies = [
  {
    slug: 'techcorp-digital-transformation',
    title: 'Digital Transformation at Scale',
    excerpt: 'How TechCorp modernized their legacy systems and improved performance by 400%.',
    client: 'TechCorp Solutions',
    category: 'Digital Transformation',
    results: [
      { metric: 'Performance Gain', value: '400%' },
      { metric: 'Cost Reduction', value: '60%' },
      { metric: 'Time to Market', value: '50%' },
      { metric: 'User Satisfaction', value: '95%' },
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
      { metric: 'Cost Savings', value: '$2.5M' },
      { metric: 'ROI', value: '340%' },
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
      { metric: 'Downtime Reduction', value: '99%' },
      { metric: 'Developer Satisfaction', value: '98%' },
    ],
  },
  {
    slug: 'fintech-security-upgrade',
    title: 'Financial Services Security Modernization',
    excerpt: 'Implementing zero-trust architecture for a leading fintech company.',
    client: 'SecureFinance Corp',
    category: 'Security & Compliance',
    results: [
      { metric: 'Security Score', value: '100%' },
      { metric: 'Compliance Rate', value: '100%' },
      { metric: 'Incident Reduction', value: '90%' },
      { metric: 'Audit Time', value: '70%' },
    ],
  },
  {
    slug: 'healthcare-integration',
    title: 'Healthcare System Integration',
    excerpt: 'Connecting disparate systems for improved patient care and operational efficiency.',
    client: 'MedTech Partners',
    category: 'System Integration',
    results: [
      { metric: 'Data Accuracy', value: '99.5%' },
      { metric: 'Processing Speed', value: '500%' },
      { metric: 'Patient Satisfaction', value: '92%' },
      { metric: 'Administrative Time', value: '60%' },
    ],
  },
  {
    slug: 'retail-cloud-migration',
    title: 'Retail Giant Cloud Migration',
    excerpt:
      'Migrating mission-critical e-commerce infrastructure to the cloud with zero downtime.',
    client: 'MegaRetail Inc',
    category: 'Cloud Migration',
    results: [
      { metric: 'Uptime', value: '100%' },
      { metric: 'Performance Gain', value: '300%' },
      { metric: 'Cost Reduction', value: '45%' },
      { metric: 'Scalability', value: '∞' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div id="main-content">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl leading-relaxed text-neutral-600">
              Real results from real clients. Discover how we&rsquo;ve helped organizations across
              industries transform their operations and achieve remarkable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-brand-500 mb-2 text-4xl font-bold">500+</div>
              <div className="text-neutral-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-brand-500 mb-2 text-4xl font-bold">98%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-brand-500 mb-2 text-4xl font-bold">$2.1B</div>
              <div className="text-neutral-600">Client Value Created</div>
            </div>
            <div>
              <div className="text-brand-500 mb-2 text-4xl font-bold">24/7</div>
              <div className="text-neutral-600">Support Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allCaseStudies.map(caseStudy => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="card group block"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-brand-600 text-sm font-medium uppercase tracking-wider">
                      {caseStudy.category}
                    </span>
                    <span className="text-sm text-neutral-500">{caseStudy.client}</span>
                  </div>

                  <h3 className="group-hover:text-brand-600 mb-3 text-xl font-semibold text-neutral-900 transition-colors">
                    {caseStudy.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-neutral-600">{caseStudy.excerpt}</p>

                  {caseStudy.results && caseStudy.results.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 border-t border-neutral-100 pt-4">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-brand-500 mb-1 text-2xl font-bold">
                            {result.value}
                          </div>
                          <div className="text-xs uppercase tracking-wide text-neutral-500">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Write Your Success Story?
            </h2>
            <p className="mb-8 text-xl text-neutral-300">
              Join the ranks of successful companies that have transformed their operations with our
              help.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
