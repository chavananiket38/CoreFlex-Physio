import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Star,
  BadgeCheck,
  Home as HomeIcon,
  ArrowUpRight,
} from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import TreatmentPills from "../components/TreatmentPills";
import WhyChoose from "../components/WhyChoose";
import JourneyLine from "../components/JourneyLine";
import PricingTable from "../components/PricingTable";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import StatBar from "../components/StatBar";
import GalleryTile from "../components/GalleryTile";
import {
  clinic,
  doctor,
  serviceCategories,
  faqs,
  blogPosts,
  gallery,
  reviewSummary,
  whatsappLink,
  defaultWhatsappMessage,
} from "../data/site";

const conditions = [
  "Neck Pain",
  "Back Pain",
  "Sports Injuries",
  "Frozen Shoulder",
  "Knee Pain",
  "Home Physiotherapy",
];

export default function Home() {
  return (
    <>
      <SEO
        title="Orthopaedic & Sports Physiotherapy in Viman Nagar, Pune"
        description="CoreFlex Physiotherapy Clinic — expert orthopaedic, sports & post-surgery rehabilitation in Viman Nagar, Pune. Led by Dr. Vaishnavi Shimpi, MPT (Orthopaedics). Book your assessment today."
        path="/"
      />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-paper pt-14 sm:pt-20 pb-20 sm:pb-28">
        {/* background motion-line motif */}
        <svg
          className="pointer-events-none absolute -top-10 left-0 w-full opacity-[0.08]"
          height="420"
          viewBox="0 0 1400 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 340 C 60 340, 120 120, 280 120 S 460 360, 640 360 S 800 60, 980 60 S 1160 300, 1400 260"
            fill="none"
            stroke="#1C4D46"
            strokeWidth="3"
          />
        </svg>

        <div className="container-x relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-core-500/15 bg-core-50 px-4 py-1.5 mb-6"
            >
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-move text-move" />
                ))}
              </span>
              <span className="font-mono text-[12px] font-medium text-core-600">
                {reviewSummary.rating.toFixed(1)} rated · {reviewSummary.count}+ reviews
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.04] font-semibold text-ink text-balance"
            >
              Move Better.
              <br />
              <span className="text-core-500">Live Pain Free.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-6 max-w-lg text-[16px] sm:text-[17.5px] leading-relaxed text-ink/65"
            >
              Expert orthopaedic physiotherapy & rehabilitation in Viman Nagar, Pune — one-to-one care, evidence-based treatment, and a plan built around your recovery, not a generic protocol.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {conditions.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-ink/75"
                >
                  <BadgeCheck size={14} className="text-core-500" /> {c}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="btn-accent">
                Book Appointment <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:+${clinic.phoneRaw}`}
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-core-50 text-core-500">
                  <Phone size={17} />
                </span>
                {clinic.phoneDisplay}
              </a>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-blob bg-core-100/70 blur-2xl" />
            <div className="relative rounded-blob overflow-hidden border-4 border-white shadow-lift aspect-[4/5]">
              <img
                src={doctor.photo}
                alt="Dr. Vaishnavi Shimpi, MPT Orthopaedics — CoreFlex Physiotherapy Clinic"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-8 top-8 card !rounded-2xl px-4 py-3"
            >
              <p className="font-display text-[13.5px] font-semibold text-ink">{doctor.name}</p>
              <p className="font-mono text-[10.5px] text-core-500">MPT (Orthopaedics)</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-2 sm:-right-6 bottom-10 card !rounded-2xl px-4 py-3 flex items-center gap-2"
            >
              <HomeIcon size={16} className="text-move" />
              <p className="text-[12.5px] font-semibold text-ink">Home Visits Available</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="container-x mt-16 sm:mt-20">
          <StatBar />
        </div>
      </section>

      {/* ---------------- ABOUT TEASER ---------------- */}
      <section className="section-pad bg-white/50">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3">About CoreFlex</p>
            <h2 className="text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-ink text-balance">
              Personalized care from a Master's-qualified orthopaedic physiotherapist
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink/65">
              {doctor.bio[0]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {doctor.credentials.map((c) => (
                <span key={c} className="rounded-full bg-core-50 px-3.5 py-1.5 text-[12.5px] font-medium text-core-600">
                  {c}
                </span>
              ))}
            </div>
            <Link to="/about" className="btn-ghost mt-8">
              Meet Your Physiotherapist <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="card rounded-[26px] p-8 sm:p-10">
              <p className="font-display text-[20px] sm:text-[23px] leading-snug text-ink text-balance">
                {doctor.philosophy}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-card"
                />
                <div>
                  <p className="text-[14px] font-semibold text-ink">{doctor.name}</p>
                  <p className="font-mono text-[11.5px] text-core-500">Founder, CoreFlex Physiotherapy</p>
                </div>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="What we treat"
              title="Comprehensive physiotherapy, under one roof"
              description="From everyday aches to post-surgical recovery — every plan starts with a proper assessment, not a guess."
            />
            <Reveal delay={0.1}>
              <Link to="/services" className="btn-ghost shrink-0">
                View All Services <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ADVANCED TREATMENTS ---------------- */}
      <section className="section-pad bg-white/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Modalities"
            title="Advanced treatments & modern equipment"
            description="Every technique is chosen because it fits your condition — not applied by default."
          />
          <div className="mt-10">
            <TreatmentPills />
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <SectionHeading eyebrow="Why CoreFlex" title="Care built around you, not a waiting room" />
          <WhyChoose />
        </div>
      </section>

      {/* ---------------- JOURNEY ---------------- */}
      <section className="section-pad bg-core-500">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title="Your recovery, mapped out from day one"
            light
            align="center"
          />
          <div className="mt-14">
            <JourneyLine />
          </div>
        </div>
      </section>

      {/* ---------------- PRICING ---------------- */}
      <section className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeading
            eyebrow="Consultation & packages"
            title="Simple, transparent pricing"
            description="Pay per session, or save with a structured package built for your recovery timeline."
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ---------------- GALLERY TEASER ---------------- */}
      <section className="section-pad bg-white/50">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionHeading eyebrow="Inside CoreFlex" title="A calm, modern space to recover in" />
            <Reveal delay={0.1}>
              <Link to="/gallery" className="btn-ghost shrink-0">
                View Gallery <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.slice(0, 3).map((g, i) => (
              <GalleryTile key={g.id} item={g} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BLOG TEASER ---------------- */}
      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionHeading eyebrow="From the clinic" title="Recovery guides & physio insights" />
            <Reveal delay={0.1}>
              <Link to="/blog" className="btn-ghost shrink-0">
                Read the Blog <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-[20px] border border-ink/[0.07] bg-white/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="eyebrow">{post.category}</span>
                  <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug text-ink group-hover:text-core-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55 flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-move">
                    Read more <ArrowUpRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section-pad bg-white/50">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-12">
          <SectionHeading eyebrow="FAQs" title="Common questions, answered" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="section-pad bg-core-800">
        <div className="container-x">
          <div className="rounded-[28px] bg-core-500 px-8 py-14 sm:px-16 sm:py-16 text-center relative overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.1]"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M-50 200 C 100 200, 150 40, 300 40 S 450 250, 620 250 S 780 20, 950 20 S 1100 180, 1260 180"
                fill="none"
                stroke="#F3F5F0"
                strokeWidth="3"
              />
            </svg>
            <Reveal className="relative">
              <h2 className="text-[28px] sm:text-[40px] font-semibold text-paper text-balance max-w-2xl mx-auto">
                Ready to move without pain again?
              </h2>
              <p className="mt-4 text-[15.5px] text-paper/70 max-w-lg mx-auto">
                Book a detailed assessment with Dr. Vaishnavi Shimpi and get a clear, personalized recovery plan.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-accent">
                  Book Appointment <ArrowRight size={16} />
                </Link>
                <a
                  href={whatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
