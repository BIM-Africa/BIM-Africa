import Link from "next/link";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-[#ff1f00]">404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-white/80">This page may have moved or is no longer available. Explore BIM Africa&apos;s services or contact our team for help.</p>
        <nav aria-label="Helpful pages" className="mt-8 flex flex-wrap gap-6">
          <Link className="underline underline-offset-4" href="/">Home</Link>
          <Link className="underline underline-offset-4" href="/service">Our services</Link>
          <Link className="underline underline-offset-4" href="/blog">Blog</Link>
          <Link className="underline underline-offset-4" href="/contactus">Contact us</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
