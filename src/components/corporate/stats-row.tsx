interface StatsRowProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
  title?: string;
  subtitle?: string;
}

export function StatsRow({ stats, title, subtitle }: StatsRowProps) {
  return (
    <section className="section-padding bg-white" aria-labelledby={title ? "stats-title" : undefined}>
      <div className="container-max">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 
                id="stats-title"
                className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
