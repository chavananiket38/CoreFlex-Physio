import { ImagePlus } from "lucide-react";
import Reveal from "./Reveal";

const patterns = [
  "M-10 70 C 30 70, 30 20, 60 20 S 90 90, 130 90",
  "M-10 30 C 20 90, 60 90, 70 40 S 110 10, 140 60",
  "M-10 50 C 20 10, 50 10, 60 50 S 100 90, 140 40",
];

export default function GalleryTile({ item, index = 0, large = false }) {
  return (
    <Reveal delay={(index % 6) * 0.05} className={large ? "sm:row-span-2" : ""}>
      <div
        className={`group relative overflow-hidden rounded-[20px] border border-ink/[0.07] bg-gradient-to-br from-core-100 via-paper to-core-50 ${
          large ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35] transition-transform duration-700 group-hover:scale-110"
          viewBox="0 0 130 100"
          preserveAspectRatio="none"
        >
          <path d={patterns[index % patterns.length]} fill="none" stroke="#1C4D46" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-core-500 backdrop-blur-sm">
            <ImagePlus size={19} />
          </div>
          <p className="font-display text-[15px] font-semibold text-core-700">{item.title}</p>
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-core-500/70">{item.tag}</span>
        </div>
      </div>
    </Reveal>
  );
}
