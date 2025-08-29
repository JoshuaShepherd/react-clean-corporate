interface ValuePropCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function ValuePropCard({ title, description, icon }: ValuePropCardProps) {
  return (
    <div className="card p-8 text-center group">
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-200">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-neutral-900 mb-4">
        {title}
      </h3>
      
      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Value Props Grid Container
interface ValuePropsGridProps {
  title: string;
  subtitle?: string;
  valueProps: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

export function ValuePropsGrid({ title, subtitle, valueProps }: ValuePropsGridProps) {
  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="value-props-title">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 
            id="value-props-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropCard 
              key={index}
              title={prop.title}
              description={prop.description}
              icon={prop.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
