import Link from 'next/link';
import Image from 'next/image';

interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  category: string;
  image?: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export function CaseStudyCard({
  slug,
  title,
  excerpt,
  client,
  category,
  image,
  results,
}: CaseStudy) {
  return (
    <Link href={`/case-studies/${slug}`} className="card group block">
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-xl bg-neutral-100">
          <Image
            src={image}
            alt={`${title} case study`}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-brand-600 text-sm font-medium uppercase tracking-wider">
            {category}
          </span>
          <span className="text-sm text-neutral-500">{client}</span>
        </div>

        <h3 className="group-hover:text-brand-600 mb-3 text-xl font-semibold text-neutral-900 transition-colors">
          {title}
        </h3>

        <p className="mb-4 leading-relaxed text-neutral-600">{excerpt}</p>

        {results && results.length > 0 && (
          <div className="grid grid-cols-2 gap-4 border-t border-neutral-100 pt-4">
            {results.slice(0, 2).map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-brand-500 mb-1 text-2xl font-bold">{result.value}</div>
                <div className="text-xs uppercase tracking-wide text-neutral-500">
                  {result.metric}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

// Case Studies Grid Container
interface CaseStudiesGridProps {
  title: string;
  subtitle?: string;
  caseStudies: CaseStudy[];
}

export function CaseStudiesGrid({ title, subtitle, caseStudies }: CaseStudiesGridProps) {
  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="case-studies-title">
      <div className="container-max">
        <div className="mb-16 text-center">
          <h2
            id="case-studies-title"
            className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl"
          >
            {title}
          </h2>
          {subtitle && <p className="mx-auto max-w-3xl text-xl text-neutral-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map(caseStudy => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
