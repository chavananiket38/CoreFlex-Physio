import { Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import GalleryTile from "../components/GalleryTile";
import { gallery, clinic } from "../data/site";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Take a look inside CoreFlex Physiotherapy Clinic — reception, treatment rooms, exercise area and electrotherapy setup in Viman Nagar, Pune."
        path="/gallery"
      />
      <PageHero
        crumb="Gallery"
        eyebrow="Inside CoreFlex"
        title="A calm, modern space designed for recovery"
        description="From our reception to our dedicated exercise area — every corner of CoreFlex is built for focused, one-to-one treatment."
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {gallery.map((g, i) => (
              <GalleryTile key={g.id} item={g} index={i} large={i === 0} />
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-col items-center text-center rounded-[24px] card !bg-core-50/60 px-8 py-10">
            <Instagram size={26} className="text-core-500 mb-3" />
            <p className="font-display text-lg font-semibold text-ink">See more on Instagram</p>
            <p className="mt-1 text-[14px] text-ink/55 max-w-sm">
              Follow {clinic.instagramHandle} for real clinic moments, patient wins and physiotherapy tips.
            </p>
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-5"
            >
              Visit Instagram <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-ink text-balance">
              Prefer to see it in person?
            </h2>
            <p className="mt-3 text-[15px] text-ink/60 max-w-md mx-auto">
              Book an assessment and experience the clinic for yourself.
            </p>
            <Link to="/contact" className="btn-accent mt-6">
              Book Appointment <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
