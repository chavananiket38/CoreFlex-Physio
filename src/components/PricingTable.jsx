import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { consultation, packages } from "../data/site";

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-6">
      <Reveal>
        <div className="h-full flex flex-col rounded-[22px] bg-core-500 p-7 sm:p-8 text-paper">
          <p className="eyebrow !text-move-light mb-2">First visit</p>
          <h3 className="font-display text-xl font-semibold">Physiotherapy Consultation</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-mono text-4xl font-semibold">₹{consultation.price}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2.5">
            {consultation.includes.map((it) => (
              <li key={it} className="flex items-center gap-2.5 text-[14px] text-paper/85">
                <Check size={16} className="shrink-0 text-move-light" /> {it}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-accent mt-7">
            Book Consultation
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {packages.map((p, i) => {
          const perSession = Math.round(p.price / p.sessions);
          const popular = i === 1;
          return (
            <Reveal key={p.sessions} delay={i * 0.08} className="h-full">
              <div
                className={`relative h-full flex flex-col rounded-[22px] p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1.5 ${
                  popular
                    ? "border-move bg-white shadow-lift"
                    : "border-ink/[0.08] bg-white/60 shadow-card"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-move px-3 py-1 text-[10.5px] font-mono font-semibold uppercase tracking-wide text-paper">
                    Most chosen
                  </span>
                )}
                <p className="font-mono text-[13px] text-ink/50">Session Package</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{p.sessions} Sessions</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-mono text-3xl font-semibold text-ink">₹{p.price.toLocaleString("en-IN")}</span>
                </div>
                <p className="mt-1 text-[13px] text-ink/45">≈ ₹{perSession.toLocaleString("en-IN")} / session</p>
                <Link
                  to="/contact"
                  className={`mt-6 rounded-full py-3 text-center text-[13.5px] font-semibold transition-colors ${
                    popular ? "bg-move text-paper hover:bg-move-dark" : "border border-core-500/25 text-core-600 hover:bg-core-500 hover:text-paper"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
