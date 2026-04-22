/**
 * EstimateForm — shared form used in HeroSection and BottomFormSection
 * Design: Dark card (#0d1a2e / near-black), large white inputs with rounded-xl,
 * full-width selects stacked, big blue CTA button with Bebas Neue uppercase text.
 * Matches reference screenshot from Moose Roofing style.
 * Variant: "glass" (hero overlay) | "card" (white card on dark bg)
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

  const cardBg = "rgba(8, 16, 32, 0.82)";
  const cardBorder = "1px solid rgba(255,255,255,0.12)";
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    fontSize: "15px",
    background: "rgba(255,255,255,0.92)",
    border: "1.5px solid rgba(255,255,255,0.7)",
    color: "#111",
    outline: "none",
    fontFamily: "var(--font-body)",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.85)",
    marginBottom: "6px",
    fontFamily: "var(--font-body)",
    letterSpacing: "0.02em",
  };
  const selectWrapStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
  };
  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 42px 14px 18px",
    borderRadius: "10px",
    fontSize: "15px",
    background: "rgba(255,255,255,0.92)",
    border: "1.5px solid rgba(255,255,255,0.7)",
    color: "#111",
    outline: "none",
    fontFamily: "var(--font-body)",
    appearance: "none",
    cursor: "pointer",
    boxSizing: "border-box",
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-14 px-8 rounded-2xl"
        style={{ background: cardBg, border: cardBorder, backdropFilter: "blur(20px)" }}
      >
        <CheckCircle className="mb-4 text-green-400" size={52} />
        <h3
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "var(--font-body)", color: "white" }}
        >
          We'll Be in Touch Soon!
        </h3>
        <p className="text-white/75 text-sm leading-relaxed">
          Thank you for reaching out. A member of our team will contact you within one business day.
        </p>
        <p className="mt-5 font-semibold text-white/90">
          Need immediate help? Call{" "}
          <a href="tel:4022168850" className="underline" style={{ color: "#3D6CC0" }}>
            (402) 216-8850
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl overflow-hidden"
      style={{
        background: cardBg,
        border: cardBorder,
        backdropFilter: "blur(20px)",
        boxShadow: "0 12px 48px rgba(0,0,0,0.55)",
      }}
    >
      {/* Header */}
      <div className="px-7 pt-7 pb-5">
        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "26px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Get Your Free Consultation
        </h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", marginTop: "4px", fontFamily: "var(--font-body)" }}>
          Response within one business day. No obligation.
        </p>
      </div>

      <div className="px-7 pb-7 space-y-4">
        {/* Name row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-two-col">
          <div>
            <label style={labelStyle} htmlFor="firstName">First Name <span style={{ color: "#f87171" }}>*</span></label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">Last Name <span style={{ color: "#f87171" }}>*</span></label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Phone + Email */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-two-col">
          <div>
            <label style={labelStyle} htmlFor="phone">Phone <span style={{ color: "#f87171" }}>*</span></label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(402) 000-0000"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Address — full width */}
        <div>
          <label style={labelStyle} htmlFor="address">Address <span style={{ color: "#f87171" }}>*</span></label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="Street address"
            value={form.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Services Needed — full width */}
        <div>
          <label style={labelStyle} htmlFor="service">Services Needed <span style={{ color: "#f87171" }}>*</span></label>
          <div style={selectWrapStyle}>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              style={selectStyle}
            >
              <option value="">Select services...</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg
              style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        {/* How Did You Find Us — full width */}
        <div>
          <label style={labelStyle} htmlFor="source">How Did You Find Us? <span style={{ color: "#f87171" }}>*</span></label>
          <div style={selectWrapStyle}>
            <select
              id="source"
              name="source"
              value={form.source}
              onChange={handleChange}
              required
              style={selectStyle}
            >
              <option value="">Select one</option>
              {SOURCES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg
              style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        {/* Consents */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "2px" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
            <input
              type="checkbox"
              name="consentMessages"
              checked={form.consentMessages}
              onChange={handleChange}
              style={{ marginTop: "2px", flexShrink: 0, width: "16px", height: "16px", accentColor: "#3D6CC0" }}
            />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
              By checking this box, I consent to receive transactional messages from Royalty Roofing and Siding related to my estimate request. Message frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt out.
            </span>
          </label>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
            <input
              type="checkbox"
              name="consentPrivacy"
              checked={form.consentPrivacy}
              onChange={handleChange}
              required
              style={{ marginTop: "2px", flexShrink: 0, width: "16px", height: "16px", accentColor: "#3D6CC0" }}
            />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
              I have read and agree to the{" "}
              <a
                href="https://royaltyroofing.org/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7aaaf0", textDecoration: "underline" }}
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>

        {/* Submit button — big, blue, Bebas Neue uppercase */}
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            width: "100%",
            padding: "18px 24px",
            background: "#3D6CC0",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "background 0.2s",
            marginTop: "4px",
          }}
          onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad"; }}
          onMouseLeave={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0"; }}
        >
          {status === "loading" ? (
            <><Loader2 size={20} className="animate-spin" /> Sending...</>
          ) : (
            "GET MY FREE INSPECTION"
          )}
        </button>

        {status === "error" && (
          <p style={{ color: "#f87171", fontSize: "13px", textAlign: "center", fontFamily: "var(--font-body)" }}>
            Something went wrong. Please call us at (402) 216-8850.
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
          .px-7 {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </form>
  );
}
