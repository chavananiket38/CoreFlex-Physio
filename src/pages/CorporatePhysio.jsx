import { ArrowRight, Monitor, ClipboardCheck, Users, ShieldAlert, TrendingDown, Smile } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import IconFeatureGrid from "../components/IconFeatureGrid";
import InquiryForm from "../components/InquiryForm";
import { clinic } from "../data/site";

const offerings = [
  { icon: Monitor, title: "Desk Posture Screening", desc: "Individual posture and workstation checks to catch problems before they become pain." },
  { icon: ClipboardCheck, title: "On-site Ergonomic Assessment", desc: "A physiotherapist reviews your office setup and recommends practical fixes." },
  { icon: Users, title: "Workplace Stretch Sessions", desc: "Guided group sessions that fit into a lunch break or between meetings." },
  { icon: ShieldAlert, title: "Injury Prevention Workshops", desc: "Practical education on reducing repetitive strain and desk-related injury risk." },
];

const benefits = [
  { icon: TrendingDown, title: "Fewer sick days", desc: "Addressing musculoskeletal discomfort early reduces pain-related absenteeism." },
  { icon: Smile, title: "Better employee wellbeing", desc: "Teams feel genuinely cared for when wellness is built into the workplace." },
  { icon: ClipboardCheck, title: "Practical, not preachy", desc: "Real fixes for real desks — not generic slides nobody applies." },
];

export default function CorporatePhysio() {
  return (
    <>
      <SEO
        title="Corporate Physiotherapy & Workplace Wellness"
        description="On-site ergonomic assessments, desk posture screening and workplace wellness sessions for teams — corporate physiotherapy from CoreFlex, Viman Nagar, Pune."
        path="/services/corporate-physiotherapy"
      />
      <PageHero
        crumb="Corporate Physiotherapy"
        eyebrow="Corporate Wellness"
        title="Ergonomics & injury prevention for your team"
        description="Desk-related pain is one of the most common — and most preventable — causes of discomfort at work. We bring physiotherapy expertise directly to your workplace."
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="What we offer" title="Corporate wellness programmes" />
          <div className="mt-10">
            <IconFeatureGrid items={offerings} columns={4} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-x">
          <SectionHeading eyebrow="Why companies work with us" title="A healthier team, measurably" />
          <div className="mt-10">
            <IconFeatureGrid items={benefits} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper" id="book">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <p className="eyebrow mb-3">For HR & office managers</p>
            <h2 className="text-[28px] sm:text-[34px] font-semibold text-ink text-balance">
              Bring physiotherapy expertise to your workplace
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              Share your team size and what you're looking for — we'll put together a proposal tailored to your office.
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
