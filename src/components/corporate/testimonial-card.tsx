import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
}

export function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <div className="card p-8">
      <blockquote className="mb-6 text-lg leading-relaxed text-neutral-700">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center">
        <div className="flex-shrink-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={`${author.name} avatar`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200">
              <span className="text-lg font-medium text-neutral-600">{author.name.charAt(0)}</span>
            </div>
          )}
        </div>

        <div className="ml-4">
          <div className="font-medium text-neutral-900">{author.name}</div>
          <div className="text-sm text-neutral-600">
            {author.role} at {author.company}
          </div>
        </div>
      </div>
    </div>
  );
}

// Testimonials Grid Container
interface TestimonialsGridProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ title, subtitle, testimonials }: TestimonialsGridProps) {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-title">
      <div className="container-max">
        <div className="mb-16 text-center">
          <h2
            id="testimonials-title"
            className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl"
          >
            {title}
          </h2>
          {subtitle && <p className="mx-auto max-w-3xl text-xl text-neutral-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
}
