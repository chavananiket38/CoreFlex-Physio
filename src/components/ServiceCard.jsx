import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import Reveal from "./Reveal";

const linkable = {
  "home-physiotherapy": "/services/home-physiotherapy",
  "sports-rehabilitation": "/services/sports-rehabilitation",
  "post-surgery-rehab": "/services/post-surgery-rehab",
  "corporate-physiotherapy": "/services/corporate-physiotherapy",
};

export default function ServiceCard({ service, index = 0 }) {
  const to = linkable[service.slug] || "/services";
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        to={to}
        className="group relative flex h-full flex-col rounded-[22px] border border-ink/[0.07] bg-white/60 p-6 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-core-300/50"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-core-50 text-core-500 transition-colors duration-300 group-hover:bg-core-500 group-hover:text-paper">
          <Icon name={service.icon} size={22} />
        </div>
        <h3 className="mt-5 text-[19px] font-semibold text-ink font-display">{service.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{service.short}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {service.items.slice(0, 4).map((it) => (
            <li
              key={it}
              className="rounded-full bg-core-50 px-2.5 py-1 text-[11.5px] font-medium text-core-600"
            >
              {it}
            </li>
          ))}
          {service.items.length > 4 && (
            <li className="rounded-full px-2.5 py-1 text-[11.5px] font-medium text-ink/40">
              +{service.items.length - 4} more
            </li>
          )}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-move">
          Learn more
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
