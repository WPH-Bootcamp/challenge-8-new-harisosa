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

      <header
        className=
          {` fixed left-0 top-0 w-full z-50 h-16 lg:h-22.5 transition-all duration-300
        border-b border-white/10
          ${scrolled
            ? "bg-black/60 lg:backdrop-blur-md lg:shadow-[0_8px_30px_rgba(0,0,0,0.35)] "
            : "lg:bg-transparent lg:border-transparent"}`
        }
      >
        <Navbar/>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


