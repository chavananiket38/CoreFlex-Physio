import { Link } from "react-router-dom";
import {
  ArrowRight,
  UserRound,
  Bandage,
  BedDouble,
  Brain,
  Bone,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import IconFeatureGrid from "../components/IconFeatureGrid";
import InquiryForm from "../components/InquiryForm";
import FAQAccordion from "../components/FAQAccordion";
import { clinic } from "../data/site";

const who = [
  { icon: UserRound, title: "Senior Citizens", desc: "Gentle, safe rehabilitation for age-related mobility and balance concerns." },
  { icon: Bandage, title: "Post Surgery", desc: "Structured recovery at home following joint replacement, fracture or spine surgery." },
  { icon: BedDouble, title: "Bedridden Patients", desc: "Positioning, chest physiotherapy and passive movement to prevent complications." },
  { icon: Brain, title: "Stroke Patients", desc: "Neuro-rehabilitation focused on regaining movement, balance and independence." },
  { icon: Bone, title: "Orthopaedic Conditions", desc: "Back pain, joint pain and posture issues treated without the need to travel." },
];

const process = [
  { title: "Book a slot", desc: "Call or WhatsApp us with your address and condition details." },
  { title: "We visit you", desc: "Our physiotherapist arrives with portable equipment for assessment and treatment." },
  { title: "Ongoing care", desc: "A consistent visit schedule with progress reviewed and adjusted each session." },
];

export default function HomePhysiotherapy() {
  return (
    <>
      <SEO
        title="Home Physiotherapy in Viman Nagar, Pune"
        description="Physiotherapy at your doorstep in Viman Nagar, Pune. CoreFlex offers home visits for senior citizens, post-surgery patients, bedridden and stroke patients."
        path="/services/home-physiotherapy"
      />
      <PageHero
        crumb="Home Physiotherapy"
        eyebrow="Home Physiotherapy"
        title="Expert physiotherapy, delivered to your doorstep"
        description="For patients who find it difficult to travel, we bring the same one-to-one, evidence-based treatment home — with portable equipment and a consistent physiotherapist."
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="Who this is for" title="Home visits designed for real situations" />
          <div className="mt-10">
            <IconFeatureGrid items={who} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-ink text-balance mb-8">
              Booking a home visit is simple
            </h2>
            <div className="flex flex-col gap-6">
              {process.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-core-500 font-mono text-[13px] font-semibold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink/60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card rounded-[24px] p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={20} className="text-move" />
                <p className="text-[14.5px] font-semibold text-ink">Service area</p>
              </div>
              <p className="text-[14px] leading-relaxed text-ink/60">
                Home visits are currently available across Viman Nagar and surrounding areas in Pune. Call us to confirm coverage for your location before booking.
              </p>
              <div className="flex items-center gap-3 mt-6 mb-5">
                <Clock size={20} className="text-move" />
                <p className="text-[14.5px] font-semibold text-ink">Visit timing</p>
              </div>
              <p className="text-[14px] leading-relaxed text-ink/60">
                Home visits can be scheduled Monday–Saturday. Sunday visits are available on request for urgent cases.
              </p>
              <div className="flex items-center gap-3 mt-6 mb-5">
                <ShieldCheck size={20} className="text-move" />
                <p className="text-[14.5px] font-semibold text-ink">What to expect</p>
              </div>
              <p className="text-[14px] leading-relaxed text-ink/60">
                Home visit charges vary by location and are confirmed at the time of booking — just call or WhatsApp us with your address.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <SectionHeading eyebrow="FAQs" title="Home physiotherapy — common questions" />
          <FAQAccordion
            items={[
              { q: "Which areas do you cover for home visits?", a: "We currently serve Viman Nagar and nearby areas in Pune. Call us with your address to confirm coverage." },
              { q: "Do you bring your own equipment?", a: "Yes — our physiotherapists carry portable equipment needed for assessment and treatment during home visits." },
              { q: "How much does a home visit cost?", a: "Home visit charges depend on your location and the type of care needed. We'll confirm the exact charge when you book." },
              { q: "Can you visit on the same day?", a: "We try our best to accommodate same-day requests, subject to availability — call us directly for urgent cases." },
            ]}
          />
        </div>
      </section>

      <section className="section-pad bg-white/50" id="book">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <p className="eyebrow mb-3">Book a home visit</p>
            <h2 className="text-[28px] sm:text-[34px] font-semibold text-ink text-balance">
              Get physiotherapy care at home, starting this week
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              Fill the form and select "Home Visit" — we'll call to confirm your slot and coverage.
            </p>
            <a href={`tel:+${clinic.phoneRaw}`} className="btn-ghost mt-7">
              Or call {clinic.phoneDisplay} <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card rounded-[26px] p-6 sm:p-8">
              <InquiryForm compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
