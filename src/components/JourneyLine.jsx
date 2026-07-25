import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { journey } from "../data/site";

export default function JourneyLine() {
  return (
    <div className="relative">
      {/* Desktop connecting line */}
      <div className="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px]">
        <svg width="100%" height="4" preserveAspectRatio="none" viewBox="0 0 100 4">
          <motion.line
            x1="0" y1="2" x2="100" y2="2"
            stroke="#E1592E"
            strokeWidth="2"
            strokeDasharray="0.5 3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
        {journey.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.07} className="relative flex flex-col items-start lg:items-center lg:text-center">
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-move bg-paper font-mono text-[15px] font-semibold text-move z-10">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 font-display text-[15.5px] font-semibold text-ink">{step.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink/55">{step.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
