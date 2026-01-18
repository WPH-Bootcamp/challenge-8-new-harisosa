import { useMemo, useState } from "react";
import { LogoBrand } from "./LogoBrand";
import { SearchInput } from "../atoms/SearchInput";
import { Icon } from "../atoms/Icon";
import { useNavigate } from "react-router-dom";

type NavItem = { label: string; href: string };

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Favorites", href: "/favorite" },
    ],
    []
  );

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [querySearch, setQuerySearch] = useState("");

  const goToSearch = () => {
    const q = querySearch.trim();
    if (!q) return;
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5 lg:px-35 h-full">
        <div className="flex items-center gap-6">
          <LogoBrand />

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">

          <div className="hidden w-[320px] md:block">
            <SearchInput
              placeholder="Search movie"
              value={querySearch}
              onChange={(e) => setQuerySearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  goToSearch();
                }
              }}
            />

          </div>

          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 21l-4.3-4.3" />
              <circle cx="11" cy="11" r="7" />
            </svg>
          </button>

          {/* Mobile: menu icon */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/60"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="mx-auto mt-16 w-[92%] max-w-md rounded-2xl bg-black/90 p-4 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold">Search</div>
              <button
                type="button"
                className="rounded-full px-3 py-1 text-white/80 hover:text-white"
                onClick={() => setIsSearchOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>

            <div className="mt-3">
              <SearchInput
                placeholder="Search Movie"
                autoFocus
                onChange={(e) => setQuerySearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/60"
          onClick={() => setIsMenuOpen(false)}
        >
          <aside
            className="h-full w-full bg-black/95 p-6 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile menu"
          >
            <div className="mb-6 flex items-center justify-between">
              <LogoBrand />
              <button
                type="button"
                className="rounded-full px-3 py-1 text-white/80 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};
