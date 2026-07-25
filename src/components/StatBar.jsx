import Reveal from "./Reveal";
import { stats } from "../data/site";

export default function StatBar({ dark = false }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06}>
          <div className={i > 0 ? `sm:border-l sm:pl-4 ${dark ? "border-paper/15" : "border-ink/10"}` : ""}>
            <p className={`font-mono text-[26px] sm:text-[30px] font-semibold ${dark ? "text-paper" : "text-ink"}`}>
              {s.value}
            </p>
            <p className={`mt-1 text-[12.5px] leading-snug ${dark ? "text-paper/55" : "text-ink/50"}`}>
              {s.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
