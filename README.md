# Corporate Solutions | Enterprise Software & Services

A clean, professional SaaS UI shell built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates enterprise-friendly design patterns with a focus on trust, accessibility, and performance.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18+ (tested with v20.19.2)
- **npm**: v9+ (tested with v10.8.2)

### Installation

```bash
# Clone the repository
git clone https://github.com/JoshuaShepherd/react-clean-corporate.git
cd react-clean-corporate

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run lint:fix # Fix ESLint issues
npm run format   # Format code with Prettier
```

### Environment Variables

See `.env.example` for available environment variables. Key variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name for branding

## 🚀 Features

- **Professional Design**: Clean, corporate aesthetic with neutral colors and subtle branding
- **Enterprise-Ready**: Built for trust with client logos, testimonials, and case studies
- **Fully Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lighthouse scores of 95+ across all metrics
- **Mobile-First**: Responsive design that works perfectly on all devices
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: Next.js 15 with App Router, Tailwind CSS 3.4

## 📋 Pages

- **Homepage** (`/`) - Hero section with value propositions and social proof
- **Services** (`/services`) - Grid of service offerings with detailed descriptions
- **Case Studies** (`/case-studies`) - Success stories with metrics and outcomes
- **Individual Case Study** (`/case-studies/[slug]`) - Detailed project breakdowns
- **Contact** (`/contact`) - Professional contact form with company information

## 🎨 Design System

### Colors

- **Primary Brand**: Sky Blue (#0ea5e9)
- **Neutrals**: Gray scale from 50-900
- **High Contrast**: Meets WCAG AA standards

### Typography

- **Font**: Inter with system fallbacks
- **Hierarchy**: Clear heading structure (H1-H6)
- **Body Text**: Optimized for readability

### Components

- Modular component library in `src/components/corporate/`
- Consistent spacing using 8pt grid system
- Subtle shadows and rounded corners (12px)

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Fonts**: Next.js Font Optimization (Inter)
- **Icons**: SVG icons for performance
- **Deployment Ready**: Vercel, Netlify, or any Node.js host

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-clean-corporate

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗 Project Structure

```
src/
├── app/
│   ├── (site)/                 # Site route group
│   │   ├── layout.tsx         # Main site layout
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services pages
│   │   ├── case-studies/      # Case study pages
│   │   └── contact/           # Contact page
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
└── components/
    └── corporate/             # Corporate UI components
        ├── top-nav.tsx
        ├── footer.tsx
        ├── hero-minimal.tsx
        ├── value-prop-card.tsx
        ├── stats-row.tsx
        ├── logo-cloud.tsx
        ├── testimonial-card.tsx
        ├── case-study-card.tsx
        ├── contact-form.tsx
        └── faq-accordion.tsx
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Minimal dependencies for fast loading
- **Core Web Vitals**: Optimized for Google's performance standards
- **Image Optimization**: Ready for Next.js Image component
- **Font Loading**: Optimized with `next/font`

## ♿ Accessibility

- **WCAG AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: 4.5:1 minimum contrast ratios

## 🎯 Business Features

### Trust Signals

- Client logo cloud with major enterprise brands
- Customer testimonials with photos and company info
- Detailed case studies with real metrics
- Professional contact information and response times

### Content Structure

- Clear value propositions (6 key benefits)
- Service offerings with process breakdown
- Success stories with quantified results
- FAQ section addressing common concerns

### Lead Generation

- Professional contact form with company/role fields
- Multiple CTA buttons with clear hierarchy
- Alternative contact methods (phone, email, scheduling)
- Resource downloads and proposal requests

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload /out folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Content Management

### Adding New Case Studies

1. Add case study data to `src/app/(site)/case-studies/[slug]/page.tsx`
2. Update the list in `src/app/(site)/case-studies/page.tsx`
3. Add to homepage featured studies if desired

### Updating Content

- **Value Props**: Edit arrays in page components
- **Testimonials**: Update testimonials data
- **Company Info**: Modify contact information in components
- **Logos**: Replace logo placeholder data with real assets

## 🔧 Customization

### Brand Colors

Update `tailwind.config.js` brand color values:

```js
colors: {
  brand: {
    500: '#your-brand-color',
    // ... other shades
  }
}
```

### Typography

Modify font imports in layout files and Tailwind config.

### Components

All components are in `src/components/corporate/` and can be easily customized.

## 📄 Documentation

See `/docs/corporate-style.md` for detailed:

- Design system documentation
- Component usage guidelines
- Content management instructions
- Accessibility best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Create an issue in this repository
- Email: hello@corporatemax.com
- Documentation: `/docs/` folder

---

Built with ❤️ for enterprise teams who value trust, performance, and accessibility.
