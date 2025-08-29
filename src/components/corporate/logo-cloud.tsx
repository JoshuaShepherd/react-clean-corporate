import Image from 'next/image';

interface Logo {
  name: string;
  src?: string;
  width?: number;
  height?: number;
}

interface LogoCloudProps {
  title?: string;
  logos: Logo[];
}

export function LogoCloud({ title = 'Trusted by leading organizations', logos }: LogoCloudProps) {
  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="logo-cloud-title">
      <div className="container-max">
        {title && (
          <div className="mb-12 text-center">
            <h2
              id="logo-cloud-title"
              className="text-lg font-medium uppercase tracking-wider text-neutral-500"
            >
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width || 120}
                  height={logo.height || 60}
                  className="max-h-12 w-auto object-contain"
                />
              ) : (
                // Placeholder for logos without images
                <div className="rounded bg-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600">
                  {logo.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
