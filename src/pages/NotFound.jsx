import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="section-pad bg-paper min-h-[60vh] flex items-center">
        <div className="container-x text-center">
          <Reveal>
            <p className="font-mono text-move text-sm mb-3">404</p>
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-ink text-balance">
              This page took a wrong turn
            </h1>
            <p className="mt-4 text-[15px] text-ink/60 max-w-md mx-auto">
              The page you're looking for doesn't exist or may have moved. Let's get you back on track.
            </p>
            <Link to="/" className="btn-primary mt-8">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
