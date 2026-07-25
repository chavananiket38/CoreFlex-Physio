import { ArrowRight, Bone, Activity, Bandage, LinkIcon, ShieldCheck, CalendarCheck } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import IconFeatureGrid from "../components/IconFeatureGrid";
import InquiryForm from "../components/InquiryForm";
import { clinic } from "../data/site";

const surgeries = [
  { icon: Bone, title: "Total Knee Replacement", desc: "Structured early mobilisation and strengthening for a confident walking pattern." },
  { icon: Bone, title: "Hip Replacement", desc: "Precaution-aware rehabilitation to restore safe, pain-free movement." },
  { icon: Activity, title: "Spine Surgery", desc: "Core stability and posture-focused recovery following spinal procedures." },
  { icon: Bandage, title: "Fracture Rehabilitation", desc: "Progressive loading and mobility work once your surgeon clears movement." },
  { icon: LinkIcon, title: "Ligament Reconstruction", desc: "Phase-appropriate strengthening protocol matched to your surgery timeline." },
];

const why = [
  { icon: ShieldCheck, title: "Surgeon-aware protocols", desc: "We work within the precautions and timelines set by your surgical team." },
  { icon: CalendarCheck, title: "Early, safe mobilisation", desc: "Starting the right movement early reduces stiffness and speeds recovery." },
  { icon: Activity, title: "Progress tracked weekly", desc: "Session-by-session adjustments based on your actual healing, not a fixed script." },
];

export default function PostSurgeryRehab() {
  return (
    <>
      <SEO
        title="Post-Surgery Rehabilitation"
        description="Structured post-surgical physiotherapy for total knee replacement, hip replacement, spine surgery, fracture and ligament reconstruction recovery at CoreFlex, Viman Nagar, Pune."
        path="/services/post-surgery-rehab"
      />
      <PageHero
        crumb="Post-Surgery Rehab"
        eyebrow="Post-Surgery Rehabilitation"
        title="Structured recovery from day one after surgery"
        description="The first weeks after surgery set the tone for your entire recovery. We work closely within your surgeon's protocol to get you moving safely, early, and with confidence."
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="What we rehabilitate" title="Post-surgical recovery we support" />
          <div className="mt-10">
            <IconFeatureGrid items={surgeries} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-x">
          <SectionHeading eyebrow="Why it matters" title="Why structured rehab changes your recovery timeline" />
          <div className="mt-10">
            <IconFeatureGrid items={why} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper" id="book">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <p className="eyebrow mb-3">Book your first session</p>
            <h2 className="text-[28px] sm:text-[34px] font-semibold text-ink text-balance">
              Bring your discharge summary to your first visit
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              It helps us understand your surgery, any precautions, and build a plan that fits your surgeon's timeline exactly. Home visits are available if travel is difficult after surgery.
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
