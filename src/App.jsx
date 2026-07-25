import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import StickyBookBar from "./components/StickyBookBar";
import useScrollToTop from "./hooks/useScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const HomePhysiotherapy = lazy(() => import("./pages/HomePhysiotherapy"));
const SportsRehab = lazy(() => import("./pages/SportsRehab"));
const PostSurgeryRehab = lazy(() => import("./pages/PostSurgeryRehab"));
const CorporatePhysio = lazy(() => import("./pages/CorporatePhysio"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-core-200 border-t-core-500" />
    </div>
  );
}

export default function App() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/home-physiotherapy" element={<HomePhysiotherapy />} />
            <Route path="/services/sports-rehabilitation" element={<SportsRehab />} />
            <Route path="/services/post-surgery-rehab" element={<PostSurgeryRehab />} />
            <Route path="/services/corporate-physiotherapy" element={<CorporatePhysio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyBookBar />
    </div>
  );
}
