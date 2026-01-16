import { Outlet } from "react-router-dom";
import { Navbar } from "./shared/ui/molecules/NavBar";
import { useEffect, useState } from "react";
import { Footer } from "./shared/ui/organisms/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">

      <header className={
        "fixed left-0 top-0 w-full z-9999 transition-all duration-300 " +
        (scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent border-b border-transparent")
      }>
        <Navbar/>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


