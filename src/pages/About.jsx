import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Stethoscope, HandHeart, Target } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StatBar from "../components/StatBar";
import WhyChoose from "../components/WhyChoose";
import { doctor, clinic, stats } from "../data/site";

const pillars = [
  {
    icon: GraduationCap,
    title: "Master's-qualified",
    desc: "MPT (Orthopaedics) — advanced training specifically in musculoskeletal assessment and rehabilitation.",
  },
  {
    icon: Stethoscope,
    title: "Assessment-first",
    desc: "No generic protocols. Every plan follows a detailed clinical evaluation of your specific condition.",
  },
  {
    icon: HandHeart,
    title: "One-to-one care",
    desc: "Undivided attention for the full session — not shared between multiple patients at once.",
  },
  {
    icon: Target,
    title: "Outcome-focused",
    desc: "Treatment built around the specific movements you want back — stairs, sport, sleep, work.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Meet Your Physiotherapist"
        description="Meet Dr. Vaishnavi Shimpi, MPT (Orthopaedics), founder of CoreFlex Physiotherapy Clinic in Viman Nagar, Pune. Learn about our patient-centred, evidence-based approach to physiotherapy."
        path="/about"
      />
      <PageHero
        crumb="About"
        eyebrow="About CoreFlex"
        title="Physiotherapy that treats the person, not just the report"
        description="A clinic built on thorough assessment, hands-on treatment and honest communication — led by an orthopaedic physiotherapy specialist."
      />

      {/* Doctor profile */}
      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-5 rounded-blob bg-core-100/70 blur-2xl" />
              <div className="relative rounded-blob overflow-hidden border-4 border-white shadow-lift aspect-[4/5]">
                <img
                  src={doctor.photo}
                  alt={`${doctor.name} — Founder, CoreFlex Physiotherapy Clinic`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h2 className="font-display text-2xl font-semibold text-ink">{doctor.name}</h2>
              <p className="font-mono text-[13px] text-core-500 mt-1">{doctor.suffix}</p>
              <p className="text-[13.5px] text-ink/50 mt-1">Founder &amp; Lead Physiotherapist, CoreFlex</p>
            </div>
          </Reveal>

          <div>
            <p className="eyebrow mb-3">Meet Your Physiotherapist</p>
            <h2 className="text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-ink text-balance mb-6">
              A clinic founded on one belief: recovery should be personal
            </h2>
            {doctor.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-[15.5px] leading-relaxed text-ink/65 mb-5">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <blockquote className="mt-6 rounded-[20px] border-l-4 border-move bg-move/[0.05] px-6 py-5">
                <p className="font-display text-[17px] sm:text-[19px] leading-snug text-ink text-balance">
                  {doctor.philosophy}
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {doctor.credentials.map((c) => (
                  <span key={c} className="rounded-full bg-core-50 px-3.5 py-1.5 text-[12.5px] font-medium text-core-600">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad bg-white/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our approach"
            title="What makes treatment at CoreFlex different"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="h-full rounded-[20px] border border-ink/[0.07] bg-white/60 p-6 shadow-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-core-50 text-core-500">
                    <p.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-[16.5px] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad bg-core-500">
        <div className="container-x">
          <StatBar dark />
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <SectionHeading eyebrow="Why patients choose us" title="Care that's easy to trust" />
          <WhyChoose />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white/50">
        <div className="container-x">
          <Reveal className="rounded-[26px] card !bg-core-50/60 px-8 py-12 sm:px-14 sm:py-14 text-center">
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-ink text-balance">
              Have questions before booking?
            </h2>
            <p className="mt-3 text-[15px] text-ink/60 max-w-md mx-auto">
              Call us directly or send a message on WhatsApp — we're happy to guide you before your first visit.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Book Appointment <ArrowRight size={16} />
              </Link>
              <a href={`tel:+${clinic.phoneRaw}`} className="btn-ghost">
                {clinic.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
