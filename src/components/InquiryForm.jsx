import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Phone, Stethoscope, MessageSquare, Home as HomeIcon, Building2 } from "lucide-react";
import { serviceCategories, whatsappLink, clinic } from "../data/site";

const visitTypes = [
  { id: "clinic", label: "Clinic Visit", icon: Building2 },
  { id: "home", label: "Home Visit", icon: HomeIcon },
];

export default function InquiryForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    visitType: "clinic",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.service) errs.service = "Please select what you need help with";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hi CoreFlex, I'd like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Looking for: ${form.service}`,
      `Preferred: ${form.visitType === "home" ? "Home Visit" : "Clinic Visit"}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center rounded-[22px] border border-core-200 bg-core-50 p-10"
      >
        <CheckCircle2 size={40} className="text-core-500 mb-3" />
        <h3 className="font-display text-xl font-semibold text-ink">Request sent to WhatsApp</h3>
        <p className="mt-2 text-[14.5px] text-ink/60 max-w-sm">
          We've opened WhatsApp with your details filled in — just hit send and our team will confirm your slot shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", service: "", visitType: "clinic", message: "" });
          }}
          className="mt-5 text-[13.5px] font-semibold text-move underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink/70">
            <User size={14} /> Full name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={`w-full rounded-xl border bg-white/70 px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-core-500 ${
              errors.name ? "border-move" : "border-ink/12"
            }`}
          />
          {errors.name && <p className="mt-1 text-[12.5px] text-move">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink/70">
            <Phone size={14} /> Mobile number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="98765 43210"
            className={`w-full rounded-xl border bg-white/70 px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-core-500 ${
              errors.phone ? "border-move" : "border-ink/12"
            }`}
          />
          {errors.phone && <p className="mt-1 text-[12.5px] text-move">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink/70">
          <Stethoscope size={14} /> What do you need help with?
        </label>
        <select
          value={form.service}
          onChange={update("service")}
          className={`w-full rounded-xl border bg-white/70 px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-core-500 ${
            errors.service ? "border-move" : "border-ink/12"
          }`}
        >
          <option value="">Select a service</option>
          {serviceCategories.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="General Consultation">General Consultation</option>
        </select>
        {errors.service && <p className="mt-1 text-[12.5px] text-move">{errors.service}</p>}
      </div>

      <div>
        <label className="mb-2 block text-[13px] font-semibold text-ink/70">Preferred visit type</label>
        <div className="grid grid-cols-2 gap-3">
          {visitTypes.map((v) => (
            <button
              type="button"
              key={v.id}
              onClick={() => setForm((f) => ({ ...f, visitType: v.id }))}
              className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-[14px] font-medium transition-colors ${
                form.visitType === v.id
                  ? "border-core-500 bg-core-500 text-paper"
                  : "border-ink/12 bg-white/60 text-ink/70"
              }`}
            >
              <v.icon size={16} /> {v.label}
            </button>
          ))}
        </div>
      </div>

      {!compact && (
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink/70">
            <MessageSquare size={14} /> Tell us a bit more (optional)
          </label>
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={3}
            placeholder="E.g. lower back pain for 2 weeks, worse when sitting..."
            className="w-full resize-none rounded-xl border border-ink/12 bg-white/70 px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-core-500"
          />
        </div>
      )}

      <button type="submit" className="btn-accent w-full !py-4">
        Send via WhatsApp <Send size={16} />
      </button>
      <p className="text-center text-[12px] text-ink/45">
        Or call us directly at{" "}
        <a href={`tel:+${clinic.phoneRaw}`} className="font-semibold text-core-600">
          {clinic.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
