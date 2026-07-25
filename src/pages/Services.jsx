import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import TreatmentPills from "../components/TreatmentPills";
import PricingTable from "../components/PricingTable";
import { serviceCategories, clinic } from "../data/site";

export default function Services() {
  return (
    <>
      <SEO
        title="Physiotherapy Services"
        description="Orthopaedic physiotherapy, sports rehabilitation, post-surgery rehab, neurological rehabilitation, home physiotherapy and corporate wellness — all under one roof at CoreFlex, Viman Nagar, Pune."
        path="/services"
      />
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Physiotherapy for every stage of recovery"
        description="From first pain to full return-to-activity — orthopaedic, sports, post-surgical and neurological rehabilitation, delivered one-to-one."
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Modalities"
            title="Advanced treatments & modern equipment"
            description="The right tool for the right condition — never applied by default."
          />
          <div className="mt-10">
            <TreatmentPills />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="Pay per session, or save with a structured package built for your recovery timeline."
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="section-pad bg-core-800">
        <div className="container-x">
          <Reveal className="rounded-[28px] bg-core-500 px-8 py-14 sm:px-16 sm:py-16 text-center">
            <h2 className="text-[26px] sm:text-[36px] font-semibold text-paper text-balance max-w-xl mx-auto">
              Not sure which service is right for you?
            </h2>
            <p className="mt-3 text-[15px] text-paper/70 max-w-md mx-auto">
              Tell us what's bothering you — we'll recommend the right treatment path during your assessment.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Book Assessment <ArrowRight size={16} />
              </Link>
              <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper/10">
                {clinic.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
