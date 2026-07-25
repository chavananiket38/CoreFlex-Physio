import { BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { whyChooseUs } from "../data/site";

export default function WhyChoose() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {whyChooseUs.map((item, i) => (
        <Reveal key={item} delay={i * 0.04}>
          <div className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/60 px-5 py-4">
            <BadgeCheck size={19} className="shrink-0 text-move" />
            <span className="text-[14.5px] font-medium text-ink/85">{item}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
