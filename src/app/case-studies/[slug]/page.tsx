import { notFound } from 'next/navigation';
import Link from 'next/link';
import { StatsRow } from '@/components/corporate/stats-row';

// This would typically come from a CMS or database
const caseStudies = {
  'techcorp-digital-transformation': {
    title: 'Digital Transformation at Scale',
    client: 'TechCorp Solutions',
    category: 'Digital Transformation',
    duration: '12 months',
    team: '15 specialists',
    overview:
      'TechCorp Solutions, a Fortune 500 technology company, needed to modernize their legacy systems that were limiting growth and innovation. With over 50,000 employees worldwide, they required a comprehensive digital transformation without disrupting daily operations.',
    challenge: {
      title: 'The Challenge',
      content:
        'TechCorp was operating on a patchwork of legacy systems that were over 15 years old. These systems were:\n\n• Slowing down development cycles by 70%\n• Creating data silos across departments\n• Limiting scalability for new markets\n• Costing $12M annually in maintenance\n• Creating security vulnerabilities',
    },
    solution: {
      title: 'Our Solution',
      content:
        'We developed a comprehensive 3-phase modernization strategy:\n\n**Phase 1: Assessment & Planning (3 months)**\n• Complete system audit and dependency mapping\n• Risk assessment and mitigation planning\n• Technology stack evaluation and selection\n• Team training and change management preparation\n\n**Phase 2: Core Migration (6 months)**\n• Cloud-native architecture implementation\n• Microservices decomposition of monolithic applications\n• Real-time data integration and API development\n• Security hardening and compliance implementation\n\n**Phase 3: Optimization & Scaling (3 months)**\n• Performance tuning and load testing\n• Advanced monitoring and alerting setup\n• Staff training and documentation\n• Continuous improvement processes',
    },
    results: {
      title: 'Results Achieved',
      content: 'The transformation delivered exceptional results across all key metrics:',
      stats: [
        { value: '400%', label: 'Performance Improvement' },
        { value: '60%', label: 'Cost Reduction' },
        { value: '50%', label: 'Faster Time to Market' },
        { value: '95%', label: 'User Satisfaction' },
      ],
    },
    impact:
      'Within 12 months, TechCorp not only modernized their entire technology stack but also established a foundation for future innovation. The new system handles 10x the transaction volume while reducing operational costs by 60%. Most importantly, development teams can now deploy new features in days instead of months.',
    testimonial: {
      quote:
        "CorporateMax didn't just modernize our systems—they transformed our entire approach to technology. The results have exceeded every expectation.",
      author: 'John Smith, CTO at TechCorp Solutions',
    },
  },
  'global-industries-automation': {
    title: 'Enterprise Automation Success',
    client: 'Global Industries',
    category: 'Process Automation',
    duration: '8 months',
    team: '12 specialists',
    overview:
      'Global Industries, a manufacturing giant with operations in 40 countries, needed to automate complex manual processes that were creating bottlenecks and inefficiencies across their supply chain.',
    challenge: {
      title: 'The Challenge',
      content:
        'Global Industries faced significant operational challenges:\n\n• Manual processes taking 80% of staff time\n• High error rates in data entry and processing\n• Inability to scale operations efficiently\n• Lack of real-time visibility across operations\n• Compliance issues with international regulations',
    },
    solution: {
      title: 'Our Solution',
      content:
        'We implemented an intelligent automation platform:\n\n**Robotic Process Automation (RPA)**\n• Automated 200+ manual processes\n• Implemented AI-powered decision making\n• Created intelligent document processing\n• Built exception handling workflows\n\n**Integration & Orchestration**\n• Connected 15+ disparate systems\n• Real-time data synchronization\n• API-first architecture\n• Cloud-based orchestration platform',
    },
    results: {
      title: 'Exceptional Results',
      content: 'The automation initiative delivered transformative results:',
      stats: [
        { value: '80%', label: 'Time Saved' },
        { value: '95%', label: 'Error Reduction' },
        { value: '$2.5M', label: 'Annual Savings' },
        { value: '340%', label: 'ROI Achieved' },
      ],
    },
    impact:
      "The automation platform has become the backbone of Global Industries' operations, enabling them to scale rapidly into new markets while maintaining operational excellence.",
    testimonial: {
      quote:
        "The level of automation CorporateMax delivered has revolutionized our operations. We're now more efficient and accurate than ever before.",
      author: 'Maria Garcia, COO at Global Industries',
    },
  },
  'innovation-labs-scaling': {
    title: 'Scaling Development Operations',
    client: 'Innovation Labs',
    category: 'Platform Engineering',
    duration: '6 months',
    team: '18 specialists',
    overview:
      'Innovation Labs, a fast-growing tech startup, needed to scale their development operations to support 10x growth while maintaining code quality and deployment speed.',
    challenge: {
      title: 'The Challenge',
      content:
        'Rapid growth created significant challenges:\n\n• Development bottlenecks limiting feature delivery\n• Manual deployment processes causing delays\n• Lack of standardization across teams\n• Difficulty onboarding new developers\n• Quality issues affecting customer satisfaction',
    },
    solution: {
      title: 'Our Solution',
      content:
        'We built a comprehensive development platform:\n\n**DevOps Platform**\n• Automated CI/CD pipelines\n• Infrastructure as Code\n• Automated testing and quality gates\n• Container orchestration with Kubernetes\n\n**Developer Experience**\n• Self-service development environments\n• Standardized tooling and workflows\n• Comprehensive monitoring and observability\n• Documentation and training programs',
    },
    results: {
      title: 'Transformative Outcomes',
      content: 'The platform enabled unprecedented scaling:',
      stats: [
        { value: '10x', label: 'Faster Deployments' },
        { value: '250%', label: 'Developer Productivity' },
        { value: '99%', label: 'Uptime Achieved' },
        { value: '98%', label: 'Developer Satisfaction' },
      ],
    },
    impact:
      'Innovation Labs successfully scaled from 20 to 200 developers without sacrificing quality or speed, enabling them to capture new market opportunities and maintain their competitive edge.',
    testimonial: {
      quote:
        'CorporateMax gave us the platform we needed to scale rapidly while maintaining the agility that made us successful in the first place.',
      author: 'Alex Thompson, VP of Engineering at Innovation Labs',
    },
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div id="main-content">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 py-4" aria-label="Breadcrumb">
        <div className="container-max">
          <ol className="flex space-x-2 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-500 text-neutral-500 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-neutral-400">/</li>
            <li>
              <Link
                href="/case-studies"
                className="hover:text-brand-500 text-neutral-500 transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <li className="text-neutral-400">/</li>
            <li className="text-neutral-900">{caseStudy.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="bg-brand-100 text-brand-800 rounded-full px-3 py-1 text-sm font-medium uppercase tracking-wider">
                {caseStudy.category}
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-600">{caseStudy.client}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              {caseStudy.title}
            </h1>

            <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
              <div>
                <dt className="mb-1 font-medium text-neutral-900">Duration</dt>
                <dd className="text-neutral-600">{caseStudy.duration}</dd>
              </div>
              <div>
                <dt className="mb-1 font-medium text-neutral-900">Team Size</dt>
                <dd className="text-neutral-600">{caseStudy.team}</dd>
              </div>
              <div>
                <dt className="mb-1 font-medium text-neutral-900">Industry</dt>
                <dd className="text-neutral-600">{caseStudy.category}</dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">Overview</h2>
            <p className="text-xl leading-relaxed text-neutral-700">{caseStudy.overview}</p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">
              {caseStudy.challenge.title}
            </h2>
            <div className="prose max-w-none">
              {caseStudy.challenge.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">{caseStudy.solution.title}</h2>
            <div className="prose max-w-none">
              {caseStudy.solution.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <StatsRow
        stats={caseStudy.results.stats}
        title={caseStudy.results.title}
        subtitle={caseStudy.results.content}
      />

      {/* Impact & Testimonial */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">Impact</h2>
            <p className="mb-12 text-xl leading-relaxed text-neutral-700">{caseStudy.impact}</p>

            <div className="card p-8">
              <blockquote className="mb-6 text-2xl leading-relaxed text-neutral-700">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <cite className="font-medium text-neutral-600">— {caseStudy.testimonial.author}</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready for Similar Results?</h2>
            <p className="mb-8 text-xl text-neutral-300">
              Let&rsquo;s discuss how we can help transform your operations.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
                Start Your Project
              </Link>
              <Link href="/case-studies" className="btn-secondary px-8 py-4 text-lg">
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
