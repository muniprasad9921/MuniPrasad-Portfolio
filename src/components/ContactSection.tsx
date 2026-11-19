import { type FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<FormState | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!form.subject.trim()) nextErrors.subject = 'Please add a short subject.';
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Please share a few details about your project (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmittedRecord({ ...form });
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 450);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  const mailtoFallbackHref = submittedRecord
    ? `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
        submittedRecord.subject
      )}&body=${encodeURIComponent(
        `Hi Muni,\n\n${submittedRecord.message}\n\nBest regards,\n${submittedRecord.name} (${submittedRecord.email})`
      )}`
    : `mailto:${CONTACT_INFO.email}`;

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#0A0A0D] border-t border-white/[0.06]"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Executive CTA & Direct Connection Channels */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-sm font-medium text-[#D4AF37] mb-3">
                Contact &amp; Collaboration
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-[#F4F2EC] mb-5">
                Let&apos;s Build Something Amazing Together.
              </h2>
              <p className="text-[15px] leading-[1.72] text-[#A8A59E] max-w-md">
                Available for senior product design leadership, end-to-end UX revamps,
                scalable Figma design systems, and bespoke AI workflow automation systems.
              </p>
            </div>

            {/* Direct WhatsApp Primary Quick-Connect */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#EBD07E] text-[#060607] text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD07E]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-white/15 hover:border-[#D4AF37]/50 text-sm font-medium text-[#F4F2EC] hover:text-[#EBD07E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channels Directory */}
            <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group py-4 flex items-center justify-between gap-4 text-sm hover:text-[#EBD07E] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#8D8A82]">Direct Email</p>
                    <p className="text-[#F4F2EC] group-hover:text-[#EBD07E] font-medium truncate">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8D8A82] group-hover:text-[#D4AF37] shrink-0" />
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-4 flex items-center justify-between gap-4 text-sm hover:text-[#EBD07E] transition-colors"
              >
                <div>
                  <p className="text-xs text-[#8D8A82]">Professional Network</p>
                  <p className="text-[#F4F2EC] group-hover:text-[#EBD07E] font-medium">
                    LinkedIn — Muni Prasad
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8D8A82] group-hover:text-[#D4AF37] shrink-0" />
              </a>

              <a
                href={CONTACT_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-4 flex items-center justify-between gap-4 text-sm hover:text-[#EBD07E] transition-colors"
              >
                <div>
                  <p className="text-xs text-[#8D8A82]">Design Showcase</p>
                  <p className="text-[#F4F2EC] group-hover:text-[#EBD07E] font-medium">
                    Behance Portfolio
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8D8A82] group-hover:text-[#D4AF37] shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111115] border border-white/[0.08] p-6 sm:p-9">
              {submittedRecord ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 space-y-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#EBD07E]">
                    <Check className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-semibold text-[#F4F2EC] mb-2">
                      Message Received, {submittedRecord.name}.
                    </h3>
                    <p className="text-sm leading-relaxed text-[#B5B2AA] max-w-lg">
                      Thank you for reaching out regarding{' '}
                      <span className="text-[#F4F2EC] font-medium">
                        &ldquo;{submittedRecord.subject}&rdquo;
                      </span>
                      . I typically respond within one business day to schedule a discovery
                      conversation.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmittedRecord(null)}
                      className="px-5 py-2.5 rounded-md bg-[#D4AF37] hover:bg-[#EBD07E] text-[#060607] text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={mailtoFallbackHref}
                      className="px-5 py-2.5 rounded-md border border-white/15 hover:border-[#D4AF37]/50 text-sm font-medium text-[#F4F2EC] hover:text-[#EBD07E] transition-colors"
                    >
                      Open in Mail App
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F4F2EC] mb-1">
                      Start a Conversation
                    </h3>
                    <p className="text-xs text-[#9C9991]">
                      Share your product goals, timeline, or automation requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#C8C5BC] mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        className="w-full h-12 px-4 rounded-lg bg-[#0A0A0D] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm text-[#F4F2EC] placeholder:text-[#68655E] transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-[#E07A5F]">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#C8C5BC] mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className="w-full h-12 px-4 rounded-lg bg-[#0A0A0D] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm text-[#F4F2EC] placeholder:text-[#68655E] transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#E07A5F]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-[#C8C5BC] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="e.g., Enterprise SaaS Redesign or Voice AI Lead Automation"
                      value={form.subject}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, subject: e.target.value }));
                        if (errors.subject)
                          setErrors((prev) => ({ ...prev, subject: undefined }));
                      }}
                      className="w-full h-12 px-4 rounded-lg bg-[#0A0A0D] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm text-[#F4F2EC] placeholder:text-[#68655E] transition-colors"
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-[#E07A5F]">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#C8C5BC] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your product challenge, workflow goals, and desired timeline..."
                      value={form.message}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message)
                          setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      className="w-full p-4 rounded-lg bg-[#0A0A0D] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm text-[#F4F2EC] placeholder:text-[#68655E] transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-[#E07A5F]">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#8D8A82]">
                      Direct response from Muni Prasad within 24 hours.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#EBD07E] disabled:opacity-60 text-[#060607] text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD07E]"
                    >
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
