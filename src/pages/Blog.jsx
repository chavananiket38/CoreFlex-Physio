import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/site";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog — Physiotherapy Insights & Recovery Guides"
        description="Practical physiotherapy guides from CoreFlex — recovery timelines, post-surgery rehab tips, sports injury advice and desk-posture fixes."
        path="/blog"
      />
      <PageHero
        crumb="Blog"
        eyebrow="From the clinic"
        title="Recovery guides & physiotherapy insights"
        description="Practical, honest explanations of what recovery actually looks like — written by the physiotherapist treating you."
      />

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-[22px] border border-ink/[0.07] bg-white/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="eyebrow">{post.category}</span>
                <h2 className="mt-3 font-display text-[19px] leading-snug font-semibold text-ink group-hover:text-core-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/55 flex-1">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-[12px] font-mono text-ink/40">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={13} /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-move">
                  Read article <ArrowUpRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
