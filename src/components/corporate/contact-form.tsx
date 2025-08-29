'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-900">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="focus:ring-brand-500 focus:border-brand-500 w-full rounded-xl border border-neutral-200 px-4 py-3 transition-colors focus:ring-2"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-900">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="focus:ring-brand-500 focus:border-brand-500 w-full rounded-xl border border-neutral-200 px-4 py-3 transition-colors focus:ring-2"
            placeholder="your.email@company.com"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-neutral-900">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="focus:ring-brand-500 focus:border-brand-500 w-full rounded-xl border border-neutral-200 px-4 py-3 transition-colors focus:ring-2"
            placeholder="Your company name"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium text-neutral-900">
            Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="focus:ring-brand-500 focus:border-brand-500 w-full rounded-xl border border-neutral-200 px-4 py-3 transition-colors focus:ring-2"
          >
            <option value="">Select your role</option>
            <option value="ceo">CEO</option>
            <option value="cto">CTO</option>
            <option value="director">Director</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="consultant">Consultant</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-900">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="focus:ring-brand-500 focus:border-brand-500 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 transition-colors focus:ring-2"
            placeholder="Tell us about your project and how we can help..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-green-800">
              Thank you for your message! We&rsquo;ll get back to you within 24 hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-red-800">
              There was an error sending your message. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
