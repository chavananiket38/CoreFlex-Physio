import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials, reviewSummary, clinic } from "../data/site";

export default function Testimonials({ dark = false }) {
  return (
    <section className={`section-pad ${dark ? "bg-core-800" : "bg-paper"}`}>
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Patient stories"
            title="What our patients say"
            light={dark}
          />
          <Reveal delay={0.1}>
            <a
              href={clinic.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3.5 ${
                dark ? "border-paper/15 bg-paper/5" : "border-ink/10 bg-white/60"
              }`}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-move text-move" />
                ))}
              </div>
              <div className="leading-tight">
                <p className={`text-[14px] font-semibold ${dark ? "text-paper" : "text-ink"}`}>
                  {reviewSummary.rating.toFixed(1)} / 5.0
                </p>
                <p className={`text-[11.5px] font-mono ${dark ? "text-paper/50" : "text-ink/45"}`}>
                  {reviewSummary.count}+ reviews on {reviewSummary.source}
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.06} className="h-full">
              <div
                className={`h-full flex flex-col rounded-[20px] p-6 ${
                  dark
                    ? "bg-paper/[0.06] border border-paper/10"
                    : "bg-white/70 border border-ink/[0.06] shadow-card"
                }`}
              >
                <Quote size={22} className="text-move mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} size={13} className="fill-move text-move" />
                  ))}
                </div>
                <p
                  className={`text-[14.5px] leading-relaxed flex-1 ${
                    dark ? "text-paper/80" : "text-ink/75"
                  }`}
                >
                  "{t.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-dashed border-ink/10 flex items-center justify-between">
                  <span className={`text-[13.5px] font-semibold ${dark ? "text-paper" : "text-ink"}`}>
                    {t.author}
                  </span>
                  <span className={`text-[11px] font-mono uppercase tracking-wide ${dark ? "text-paper/40" : "text-ink/40"}`}>
                    {t.source}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
