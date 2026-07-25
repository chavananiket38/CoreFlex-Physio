import Icon from "./Icon";
import Reveal from "./Reveal";
import { advancedTreatments } from "../data/site";

export default function TreatmentPills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
      {advancedTreatments.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.03}>
          <div className="flex flex-col items-center text-center gap-2.5 rounded-2xl border border-ink/[0.07] bg-white/60 px-4 py-6 transition-colors hover:border-core-300 hover:bg-core-50">
            <Icon name={t.icon} size={22} className="text-core-500" />
            <span className="text-[13px] font-medium leading-snug text-ink/80">{t.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
