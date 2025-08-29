import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">CorporateMax</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                Professional enterprise solutions built for scale and trust.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services" 
                  className="text-neutral-300 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-neutral-300 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
                >
                  Implementation
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-neutral-300 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/case-studies" 
                  className="text-neutral-300 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-neutral-300 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-neutral-300 text-sm">
                hello@corporatemax.com
              </p>
              <p className="text-neutral-300 text-sm">
                1-800-CORPORATE
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} CorporateMax. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
