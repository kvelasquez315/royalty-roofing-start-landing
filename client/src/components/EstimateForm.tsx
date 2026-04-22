/**
 * EstimateForm — shared form used in HeroSection and BottomFormSection
 * Variant: "glass" (hero overlay) | "card" (white card on dark bg)
 * Blue submit button (#3D6CC0), rounded-lg (8px), no gold
 */
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

interface EstimateFormProps {
  variant?: "glass" | "card";
}

const SERVICES = [
  "Roof Repair",
  "Roof Replacement",
  "Siding",
  "Gutters",
  "Windows",
  "Doors",
  "Storm Damage",
  "Not Sure",
];

const SOURCES = [
  "Google Search",
  "Friend or Family Referral",
  "Facebook",
  "Instagram",
  "Nextdoor",
  "Yard Sign",
  "Other",
];

export default function EstimateForm({ variant = "card" }: EstimateFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    source: "",
    consentMessages: false,
    consentPrivacy: false,
  });

  const isGlass = variant === "glass";

  const inputClass = isGlass
    ? "w-full px-3 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
    : "w-full px-3 py-2.5 rounded-lg text-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";

  const labelClass = isGlass
    ? "block text-xs font-semibold text-white/80 mb-1"
    : "block text-xs font-semibold text-gray-700 mb-1";

  const selectClass = isGlass
    ? "w-full px-3 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/60 transition-all appearance-none"
    : "w-full px-3 py-2.5 rounded-lg text-sm bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consentPrivacy) {
      alert("Please agree to the Privacy Policy to continue.");
      return;
    }
    setStatus("loading");
    try {
      const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        });
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-12 px-6 rounded-xl"
        style={{
          background: isGlass ? "rgba(6,12,24,0.72)" : "white",
          border: isGlass ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e5e7eb",
          backdropFilter: isGlass ? "blur(16px)" : undefined,
        }}
      >
        <CheckCircle className="mb-4 text-green-400" size={48} />
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: "var(--font-body)", color: isGlass ? "white" : "#0F1B2D" }}
        >
          We'll Be in Touch Soon!
        </h3>
        <p className={isGlass ? "text-white/80 text-sm" : "text-gray-600 text-sm"}>
          Thank you for reaching out. A member of our team will contact you within one business day.
        </p>
        <p className="mt-4 font-semibold" style={{ color: isGlass ? "#fff" : "#3D6CC0" }}>
          Need immediate help? Call{" "}
          <a href="tel:4022168850" className="underline">
            (402) 216-8850
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl overflow-hidden"
      style={{
        background: isGlass ? "rgba(6,12,24,0.72)" : "white",
        border: isGlass ? "1px solid rgba(255,255,255,0.18)" : "1px solid #e5e7eb",
        backdropFilter: isGlass ? "blur(16px)" : undefined,
        boxShadow: isGlass ? "0 8px 32px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* Form header */}
      <div
        className="px-5 pt-5 pb-4"
        style={{ borderBottom: isGlass ? "1px solid rgba(255,255,255,0.1)" : "1px solid #f3f4f6" }}
      >
        <h3
          className="text-lg font-bold"
          style={{
            fontFamily: "var(--font-body)",
            color: isGlass ? "white" : "#0F1B2D",
          }}
        >
          Get Your Free Consultation
        </h3>
        <p className={`text-xs mt-0.5 ${isGlass ? "text-white/60" : "text-gray-500"}`}>
          Response within one business day. No obligation.
        </p>
      </div>

      <div className="px-5 py-4 space-y-3">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass} htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass} htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(402) 000-0000"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className={labelClass} htmlFor="address">Property Address *</label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="Street address, Omaha, NE"
            value={form.address}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Service + Source */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass} htmlFor="service">Services Needed</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select services...</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="source">How Did You Find Us?</label>
            <select
              id="source"
              name="source"
              value={form.source}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select one</option>
              {SOURCES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Consents */}
        <div className="space-y-2 pt-1">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="consentMessages"
              checked={form.consentMessages}
              onChange={handleChange}
              className="mt-0.5 shrink-0 accent-blue-600"
            />
            <span className={`text-xs leading-relaxed ${isGlass ? "text-white/60" : "text-gray-500"}`}>
              By checking this box, I consent to receive transactional messages from Royalty Roofing and Siding related to my estimate request. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
            </span>
          </label>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="consentPrivacy"
              checked={form.consentPrivacy}
              onChange={handleChange}
              required
              className="mt-0.5 shrink-0 accent-blue-600"
            />
            <span className={`text-xs leading-relaxed ${isGlass ? "text-white/60" : "text-gray-500"}`}>
              I have read and agree to the{" "}
              <a
                href="https://royaltyroofing.org/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3D6CC0", textDecoration: "underline" }}
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>

        {/* Submit — blue, rounded-lg */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 font-bold text-base py-3.5 rounded-lg transition-all"
          style={{
            background: "#3D6CC0",
            color: "#ffffff",
            fontFamily: "var(--font-body)",
            border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad"; }}
          onMouseLeave={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0"; }}
        >
          {status === "loading" ? (
            <><Loader2 size={18} className="animate-spin" /> Sending...</>
          ) : (
            "Request My Free Quote"
          )}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-xs text-center">
            Something went wrong. Please call us at (402) 216-8850.
          </p>
        )}
      </div>
    </form>
  );
}
