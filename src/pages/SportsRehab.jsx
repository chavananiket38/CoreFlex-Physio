import { Link } from "react-router-dom";
import { ArrowRight, Activity, Zap, TrendingUp, ShieldCheck, Timer, Trophy } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import IconFeatureGrid from "../components/IconFeatureGrid";
import InquiryForm from "../components/InquiryForm";
import { clinic } from "../data/site";

const conditions = [
  { icon: Activity, title: "ACL Rehabilitation", desc: "Structured strength and stability programme through every phase of ACL recovery." },
  { icon: Activity, title: "PCL Rehabilitation", desc: "Progressive loading protocols to safely restore knee function." },
  { icon: Zap, title: "Ankle Injuries", desc: "Sprains and instability treated with proprioception and strength retraining." },
  { icon: ShieldCheck, title: "Shoulder Injuries", desc: "Rotator cuff and overhead-athlete injuries managed with sport-specific drills." },
  { icon: Timer, title: "Runner's Knee", desc: "Biomechanical assessment and gait correction to get you running pain-free." },
  { icon: TrendingUp, title: "Sports Massage", desc: "Recovery-focused soft tissue work to reduce soreness and improve performance." },
];

const phases = [
  { phase: "Phase 1", title: "Protect & Reduce Pain", desc: "Manage swelling and pain while protecting the healing tissue." },
  { phase: "Phase 2", title: "Restore Movement", desc: "Regain full range of motion and basic strength." },
  { phase: "Phase 3", title: "Build Strength", desc: "Progressive loading to rebuild strength, power and control." },
  { phase: "Phase 4", title: "Return to Sport", desc: "Sport-specific drills and testing before full return to play." },
];

export default function SportsRehab() {
  return (
    <>
      <SEO
        title="Sports Rehabilitation & Injury Recovery"
        description="ACL & PCL rehabilitation, ankle and shoulder injury recovery, runner's knee treatment and sports massage at CoreFlex Physiotherapy Clinic, Viman Nagar, Pune."
        path="/services/sports-rehabilitation"
      />
      <PageHero
        crumb="Sports Rehabilitation"
        eyebrow="Sports Rehabilitation"
        title="Return-to-play programmes built around your sport"
        description="Whether you're a weekend runner or a competitive athlete, recovery is planned around the specific movements your sport demands — not a generic timeline."
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="What we treat" title="Sports injuries we commonly rehabilitate" />
          <div className="mt-10">
            <IconFeatureGrid items={conditions} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our framework"
            title="A phased approach to getting back in the game"
            description="Every injury moves through the same broad phases — we simply adjust the pace and drills to your sport and severity."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.08}>
                <div className="h-full rounded-[20px] border border-ink/[0.07] bg-white/60 p-6 shadow-card">
                  <span className="eyebrow">{p.phase}</span>
                  <h3 className="mt-3 font-display text-[16.5px] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-core-500">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <Reveal>
            <Trophy size={30} className="text-move-light mb-4" />
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-paper text-balance max-w-xl">
              Getting back to your sport is the goal — not just being pain-free
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/70 max-w-lg">
              We test strength, control and confidence before clearing you to return, so you go back stronger — not just "okay for now."
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn-accent whitespace-nowrap">
              Book Assessment <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper" id="book">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <p className="eyebrow mb-3">Book your assessment</p>
            <h2 className="text-[28px] sm:text-[34px] font-semibold text-ink text-balance">
              Start your return-to-sport plan today
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              Tell us about your injury and sport — we'll get back to you to confirm your assessment slot.
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
