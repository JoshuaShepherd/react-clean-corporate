import { ContactForm } from '@/components/corporate/contact-form';
import { FAQSection } from '@/components/corporate/faq-accordion';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      "Project timelines vary based on complexity and scope. Simple integrations may take 4-6 weeks, while comprehensive digital transformations typically require 6-12 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: 'Do you work with companies of all sizes?',
    answer:
      'Yes, we work with organizations ranging from growing startups to Fortune 500 enterprises. Our solutions are tailored to match your specific scale, budget, and requirements.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We work with a wide range of modern technologies including cloud platforms (AWS, Azure, GCP), modern web frameworks, microservices, AI/ML, and enterprise integration tools. We select the best technology stack for each project.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Absolutely. We offer comprehensive support packages including 24/7 monitoring, maintenance, updates, and technical support. We believe in long-term partnerships with our clients.',
  },
  {
    question: 'How do you ensure project security and compliance?',
    answer:
      'Security is built into every project from day one. We follow industry best practices, implement security by design, and ensure compliance with relevant standards like SOC2, GDPR, HIPAA, and others as required.',
  },
  {
    question: 'What makes CorporateMax different from other consulting firms?',
    answer:
      "Our focus on trust-first relationships, deep enterprise experience, and commitment to measurable results sets us apart. We don't just deliver projects—we ensure long-term success and provide ongoing strategic guidance.",
  },
];

export default function ContactPage() {
  return (
    <div id="main-content">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              Let&rsquo;s Start a Conversation
            </h1>
            <p className="text-xl leading-relaxed text-neutral-600">
              Ready to transform your business? We&rsquo;d love to hear about your challenges and
              explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-neutral-900">Get in Touch</h2>
              <p className="mb-8 text-neutral-600">
                Fill out the form below and we&rsquo;ll get back to you within 24 hours. For urgent
                matters, feel free to call us directly.
              </p>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-neutral-900">Contact Information</h2>
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <svg
                      className="text-brand-600 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9.5 10.5a11.031 11.031 0 002.925 2.925l1.113-.732a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-neutral-900">Phone</h3>
                    <p className="text-neutral-600">1-800-CORPORATE</p>
                    <p className="text-sm text-neutral-500">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <svg
                      className="text-brand-600 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-neutral-900">Email</h3>
                    <p className="text-neutral-600">hello@corporatemax.com</p>
                    <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <svg
                      className="text-brand-600 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-neutral-900">Headquarters</h3>
                    <p className="text-neutral-600">
                      123 Enterprise Plaza
                      <br />
                      Suite 4500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-brand-50 rounded-xl p-6">
                  <h3 className="text-brand-900 mb-2 font-semibold">Quick Response Guaranteed</h3>
                  <p className="text-brand-800 text-sm">
                    We understand that time is critical in business. Our team typically responds to
                    all inquiries within 2-4 hours during business hours, and within 24 hours on
                    weekends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and process"
        faqs={faqs}
      />

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900">Other Ways to Connect</h2>
            <p className="text-xl text-neutral-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="bg-brand-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <svg
                  className="text-brand-600 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">Schedule a Call</h3>
              <p className="mb-4 text-neutral-600">
                Book a 30-minute consultation to discuss your project
              </p>
              <button className="btn-secondary">Schedule Call</button>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-brand-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <svg
                  className="text-brand-600 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">Request Proposal</h3>
              <p className="mb-4 text-neutral-600">
                Get a detailed proposal for your specific requirements
              </p>
              <button className="btn-secondary">Request Proposal</button>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-brand-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <svg
                  className="text-brand-600 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">Download Resources</h3>
              <p className="mb-4 text-neutral-600">
                Access our whitepapers and implementation guides
              </p>
              <button className="btn-secondary">Browse Resources</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
