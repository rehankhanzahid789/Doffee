import { useState } from "react";
import { PinIcon, MailIcon, ClockIcon } from "../components/icons/Icons";
import FormField from "../components/FormField";
import { useOrder } from "../context/OrderContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { openMaintenance } = useOrder();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Tell us a little about what you need.";
    setErrors(next);
    if (Object.keys(next).length === 0) openMaintenance();
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="mb-12 max-w-xl">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-orange-dark">
          Contact
        </p>
        <h1 className="font-display text-4xl font-semibold text-brown-dark sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-brown-dark/65">
          Questions, catering requests, or just want to say hi — we read everything.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="flex items-start gap-3.5 rounded-2xl border border-line/60 bg-white/50 p-5">
            <PinIcon size={20} className="mt-0.5 shrink-0 text-orange-dark" />
            <div>
              <p className="font-semibold text-brown-dark">Address</p>
              <p className="text-sm text-brown-dark/65">14 Blossom Street, F-7 Markaz, Islamabad</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5 rounded-2xl border border-line/60 bg-white/50 p-5">
            <MailIcon size={20} className="mt-0.5 shrink-0 text-orange-dark" />
            <div>
              <p className="font-semibold text-brown-dark">Email</p>
              <p className="text-sm text-brown-dark/65">hello@doffee.co</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5 rounded-2xl border border-line/60 bg-white/50 p-5">
            <ClockIcon size={20} className="mt-0.5 shrink-0 text-orange-dark" />
            <div>
              <p className="font-semibold text-brown-dark">Hours</p>
              <p className="text-sm text-brown-dark/65">Mon–Sun, 8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-line/60 bg-white/60 p-6 sm:p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <FormField
              label="Name"
              value={form.name}
              onChange={handleChange("name")}
              error={errors.name}
              placeholder="Your name"
            />
            <FormField
              label="Email"
              type="email"
              Icon={MailIcon}
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
              placeholder="you@email.com"
            />
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brown-dark">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="How can we help?"
                className={`w-full rounded-2xl border bg-white/70 px-4 py-3 text-[15px] text-brown-darker placeholder:text-brown/35 focus:border-brown focus:outline-none ${
                  errors.message ? "border-red-400" : "border-line"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-[13px] text-red-600">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brown py-3.5 text-[15px] font-semibold text-cream transition hover:bg-brown-dark active:scale-[0.98]"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
