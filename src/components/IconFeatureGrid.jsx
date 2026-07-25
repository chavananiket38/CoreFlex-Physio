import Reveal from "./Reveal";

export default function IconFeatureGrid({ items, columns = 3 }) {
  const colClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-5`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06}>
          <div className="h-full rounded-[20px] border border-ink/[0.07] bg-white/60 p-6 shadow-card">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-core-50 text-core-500">
              <item.icon size={20} />
            </div>
            <h3 className="mt-4 font-display text-[16.5px] font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
