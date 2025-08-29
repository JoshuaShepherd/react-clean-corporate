import Link from 'next/link';

interface HeroMinimalProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function HeroMinimal({ title, subtitle, primaryCta, secondaryCta }: HeroMinimalProps) {
  return (
    <section className="section-padding bg-white" aria-labelledby="hero-title">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight"
          >
            {title}
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryCta.href} className="btn-primary text-lg px-8 py-4">
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary text-lg px-8 py-4">
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
