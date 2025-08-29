# Corporate Style Guide & Implementation Documentation

## Project Overview

This is a clean, professional SaaS UI shell built with Next.js 15, TypeScript, and Tailwind CSS. The design follows enterprise-friendly patterns with a focus on trust, accessibility, and performance.

## Information Architecture

```
/                     → Homepage (Hero + Value Props + Trust Logos + CTA)
/services            → Services grid with offerings
/case-studies        → Case studies index page
/case-studies/[slug] → Individual case study details
/contact             → Contact form with company/role fields
```

## Design System

### Color Palette

The design uses a neutral-first approach with a single brand accent:

```css
/* Primary Brand Color */
brand-500: #0ea5e9 (Sky Blue)

/* Neutral Grays */
neutral-50:  #fafafa (Background)
neutral-100: #f5f5f5 (Muted backgrounds)
neutral-200: #e5e5e5 (Borders)
neutral-500: #737373 (Muted text)
neutral-600: #525252 (Secondary text)
neutral-900: #171717 (Primary text)
```

### Typography

- **Font**: Inter (system fallback: system-ui, sans-serif)
- **Hierarchy**: 
  - H1: 4xl-6xl (36-60px) - Page titles
  - H2: 3xl-4xl (30-36px) - Section headers  
  - H3: xl-2xl (20-24px) - Card titles
  - Body: base-xl (16-20px) - Content text

### Spacing Scale (8pt Grid)

All spacing uses an 8-point grid system:
```
1  → 2px   (0.125rem)
2  → 4px   (0.25rem) 
4  → 8px   (0.5rem)
8  → 16px  (1rem)
16 → 32px  (2rem)
24 → 48px  (3rem)
32 → 64px  (4rem)
```

### Shadows

Subtle shadows only for a professional appearance:
```css
card: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
card-hover: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
section: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
```

### Border Radius

Primary rounded value: `rounded-xl` (12px) for consistency across components.

## Component Library

### Layout Components

#### `TopNav`
- Sticky navigation with logo, main links, and CTA
- Mobile-responsive hamburger menu
- Keyboard navigation support
- Skip link for accessibility

#### `Footer` 
- Multi-column layout with service links
- Contact information and social links
- Copyright and legal links

#### `HeroMinimal`
- Large title with subtitle
- Primary and optional secondary CTA
- Centered layout for maximum impact

### Content Components

#### `ValuePropCard`
- Icon, title, and description
- Hover effects and transitions
- Optional icons with consistent sizing

#### `StatsRow`
- 2-4 column grid of metrics
- Large numbers with labels
- Optional section title and subtitle

#### `LogoCloud`
- Responsive grid of client logos
- Grayscale with hover color effects
- Placeholder support for missing logos

#### `TestimonialCard`
- Quote with author information
- Avatar support with fallback initials
- Clean card styling

#### `CaseStudyCard`
- Image, title, excerpt, and results
- Hover effects and transitions
- Links to detail pages

#### `ContactForm`
- All required fields (name, email, company, role, message)
- Form validation and submission states
- Professional styling with focus states

#### `FAQAccordion`
- Collapsible question/answer pairs
- Smooth animations
- Keyboard navigation

## Content Placeholders

### Value Propositions (6 items)
1. Enterprise Security - Bank-grade security with compliance
2. Scalable Infrastructure - Built to grow with your business  
3. 24/7 Expert Support - Dedicated team with fast response
4. API-First Platform - Comprehensive APIs and SDKs
5. Advanced Analytics - Real-time insights and reporting
6. Seamless Integration - 500+ pre-built integrations

### Trust Logos (8 companies)
- Microsoft, Google, Amazon, Salesforce
- IBM, Oracle, SAP, Adobe

### Testimonials (3 items)
- Sarah Johnson, CTO at TechCorp Solutions
- Michael Chen, Head of Operations at Global Industries  
- Emily Rodriguez, VP of Technology at Innovation Labs

### Case Studies (3 featured)
- TechCorp Digital Transformation (400% performance improvement)
- Global Industries Automation (80% time savings)
- Innovation Labs Scaling (10x deployment speed)

## UX Guidelines

### CTA Hierarchy
- **Primary**: Brand blue background (`btn-primary`)
- **Secondary**: Light gray background (`btn-secondary`)
- **Placement**: Hero sections, end of content sections

### Navigation Patterns
- **Breadcrumbs**: Used on detail pages (case studies)
- **Skip Links**: First focusable element for screen readers
- **Focus States**: Visible focus indicators on all interactive elements

### Accessibility Features
- Semantic HTML structure
- ARIA labels and descriptions
- Color contrast ratios ≥4.5:1 
- Keyboard navigation support
- Screen reader optimization

## Performance Optimizations

### Next.js Features
- App Router for improved performance
- Automatic code splitting
- Image optimization ready
- Font optimization with `next/font`

### Bundle Size
- Minimal dependencies
- Tree-shaking friendly components
- CSS-in-JS avoided for better caching

### Loading States
- Form submission states
- Smooth transitions (200ms duration)
- Skeleton loaders ready for implementation

## Deployment & Build

### Build Commands
```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint check
```

### Environment Setup
- Node.js 18+
- Next.js 15
- Tailwind CSS 4
- TypeScript 5

### Browser Support
- Modern browsers (last 2 versions)
- Progressive enhancement approach
- Mobile-first responsive design

## File Structure

```
src/
├── app/
│   ├── (site)/                 # Site route group
│   │   ├── layout.tsx         # Site layout with nav/footer
│   │   ├── page.tsx           # Homepage
│   │   ├── services/
│   │   │   └── page.tsx       # Services grid
│   │   ├── case-studies/
│   │   │   ├── page.tsx       # Case studies index
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Case study detail
│   │   └── contact/
│   │       └── page.tsx       # Contact form
│   ├── corporate-globals.css   # Corporate theme styles
│   └── globals.css            # Original styles (kept for reference)
└── components/
    └── corporate/             # All corporate components
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

## Content Management

### Adding New Case Studies
1. Add case study data to `case-studies/[slug]/page.tsx`
2. Update the case studies list in `case-studies/page.tsx`
3. Add to featured case studies on homepage if needed

### Updating Content
- Value props: Edit `page.tsx` valueProps array
- Testimonials: Update testimonials array
- Company logos: Modify logos array
- Statistics: Update stats array

### SEO Optimization
- Semantic HTML structure
- Meta descriptions in layout files
- Structured data ready for implementation
- Open Graph tags ready for social sharing

## Acceptance Criteria ✅

- **Lighthouse Accessibility**: ≥95 (semantic HTML, ARIA, focus states)
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Mobile Responsive**: Mobile-first design with adaptive layouts
- **Performance**: Minimal bundle size, optimized loading
- **Trust Elements**: Professional design, client logos, testimonials
- **Information Architecture**: Clear navigation and content hierarchy
