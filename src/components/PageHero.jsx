import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description, crumb }) {
  return (
    <section className="relative overflow-hidden bg-core-500 pt-16 pb-20 sm:pt-20 sm:pb-24">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-50 300 C 100 300, 150 100, 300 100 S 450 320, 620 320 S 780 60, 950 60 S 1100 260, 1260 260"
          fill="none"
          stroke="#F3F5F0"
          strokeWidth="3"
        />
      </svg>
      <div className="container-x relative">
        {crumb && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-[13px] font-mono text-paper/60 mb-6"
          >
            <Link to="/" className="hover:text-paper">Home</Link>
            <ChevronRight size={13} />
            <span className="text-paper/85">{crumb}</span>
          </motion.div>
        )}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-move-light mb-3"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.06] font-semibold text-paper max-w-2xl text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15.5px] sm:text-[17px] leading-relaxed text-paper/70 max-w-xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
