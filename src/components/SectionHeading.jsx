import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-3">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] font-semibold text-balance ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-[15.5px] sm:text-[16.5px] leading-relaxed ${
              light ? "text-paper/70" : "text-ink/65"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
