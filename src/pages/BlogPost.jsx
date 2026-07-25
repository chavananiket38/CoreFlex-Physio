import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { blogPosts, doctor, clinic } from "../data/site";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) return <Navigate to="/blog" replace />;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: doctor.name },
    publisher: { "@type": "Organization", name: clinic.name },
    datePublished: post.date,
  };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} schema={schema} />

      <section className="bg-core-500 pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[13.5px] font-medium text-paper/70 hover:text-paper mb-6">
              <ArrowLeft size={15} /> Back to blog
            </Link>
            <span className="eyebrow !text-move-light">{post.category}</span>
            <h1 className="mt-3 text-[30px] sm:text-[42px] leading-[1.12] font-semibold text-paper max-w-2xl text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-[13px] font-mono text-paper/60">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-14">
          <Reveal>
            <article className="max-w-2xl">
              {post.content.map((para, i) => (
                <p key={i} className="text-[16px] leading-[1.75] text-ink/75 mb-6">
                  {para}
                </p>
              ))}
            </article>

            <div className="mt-10 pt-8 border-t border-ink/10 flex items-center gap-4">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-card"
              />
              <div>
                <p className="font-display text-[15px] font-semibold text-ink">{doctor.name}</p>
                <p className="font-mono text-[12px] text-core-500">{doctor.suffix}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal className="card rounded-[22px] p-7 text-center">
              <h3 className="font-display text-[17px] font-semibold text-ink">Have a similar concern?</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">
                Book an assessment and get a recovery plan built around your specific condition.
              </p>
              <Link to="/contact" className="btn-accent w-full mt-5">
                Book Appointment <ArrowRight size={15} />
              </Link>
            </Reveal>

            {related.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow mb-4">More articles</p>
                <div className="flex flex-col gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="block rounded-2xl border border-ink/[0.07] bg-white/60 p-5 hover:border-core-300 transition-colors"
                    >
                      <p className="font-display text-[14.5px] font-semibold text-ink leading-snug">{r.title}</p>
                      <p className="mt-1.5 font-mono text-[11px] text-ink/40">{r.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
