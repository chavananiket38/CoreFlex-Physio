import { Phone, Mail, MapPin, Clock, Instagram, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import InquiryForm from "../components/InquiryForm";
import { clinic, whatsappLink } from "../data/site";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact & Book Appointment"
        description="Book your physiotherapy appointment at CoreFlex Physiotherapy Clinic, Viman Nagar, Pune. Call, WhatsApp, or fill our enquiry form — we usually confirm within hours."
        path="/contact"
      />
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Book your appointment"
        description="Call, WhatsApp, or fill the form below — our team confirms most appointments within a few hours."
      />

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12">
          {/* Left: details */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="card rounded-[22px] p-6 sm:p-7 flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-core-50 text-core-500">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Visit the clinic</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink/60">
                    {clinic.addressLines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                  <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[13px] font-semibold text-move">
                    Get directions →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card rounded-[22px] p-6 sm:p-7 flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-core-50 text-core-500">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Call or WhatsApp</p>
                  <a href={`tel:+${clinic.phoneRaw}`} className="mt-1 block text-[15px] font-semibold text-ink">
                    {clinic.phoneDisplay}
                  </a>
                  <a
                    href={whatsappLink("Hi CoreFlex, I'd like to book an appointment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[13px] font-semibold text-move"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card rounded-[22px] p-6 sm:p-7 flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-core-50 text-core-500">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Email</p>
                  <a href={`mailto:${clinic.email}`} className="mt-1 block text-[14.5px] text-ink/70">
                    {clinic.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card rounded-[22px] p-6 sm:p-7 flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-core-50 text-core-500">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Clinic hours</p>
                  {clinic.hours.map((h) => (
                    <p key={h.day} className="mt-1 text-[13.5px] text-ink/60">{h.day}: {h.time}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-[22px] p-6 sm:p-7 flex gap-4 hover:border-core-300 transition-colors"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-core-50 text-core-500">
                  <Instagram size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Follow along</p>
                  <p className="mt-1 text-[14.5px] text-ink/60">{clinic.instagramHandle}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="rounded-[22px] border border-move/25 bg-move/[0.06] p-6 sm:p-7 flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-move/15 text-move">
                  <AlertCircle size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Need urgent care?</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink/60">
                    For acute pain or a recent injury that needs prompt attention, call us directly and mention it's urgent — we'll prioritise the earliest available slot.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form + map */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="card rounded-[26px] p-6 sm:p-8">
                <p className="eyebrow mb-2">Enquiry form</p>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-6">
                  Tell us what you need
                </h2>
                <InquiryForm />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-[22px] overflow-hidden border border-ink/[0.08] shadow-card h-[300px]">
                <iframe
                  title="CoreFlex Physiotherapy Clinic location"
                  src={clinic.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
