import { useMemo, useState } from "react";
import { LogoBrand } from "./LogoBrand";
import { SearchInput } from "../atoms/SearchInput";
import { Icon } from "../atoms/Icon";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../atoms/Button";

type NavItem = { label: string; href: string };

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Favorites", href: "/favorite" },
    ],
    []
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop input state (keep as before)
  const [querySearch, setQuerySearch] = useState("");

  const isSearchRoute = location.pathname === "/search";
  const searchQuery = (searchParams.get("query") ?? "")

  const goToSearch = (query: string) => {
    if (!query) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  const setSearchQueryInUrl = (query: string) => {
    if (!query) {
      searchParams.delete("query");
      setSearchParams(searchParams, { replace: true });
      return;
    }
    setSearchParams({ query }, { replace: true });
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5 lg:px-35 h-full">
        <div className="flex items-center gap-6 md:gap-6 w-full md:w-auto">
          <div className="md:hidden w-full">
            {isSearchRoute ? (
              <div className="flex w-full items-center gap-3">
                <Button
                  variant="icon"
                  onClick={() => navigate("/")}
                  aria-label="Back"
                  className="shrink-0"
                >
                  <Icon name="back" className="w-4 h-5" />
                </Button>

                <div className="flex-1 min-w-0">
                  <SearchInput
                    placeholder="Search movie"
                    value={searchQuery}
                    onChange={(e) => setSearchQueryInUrl(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <LogoBrand />
            )}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <LogoBrand />
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-white/80 hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
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
                  goToSearch(querySearch);
                }
              }}
            />
          </div>

          {!isSearchRoute && (
            <>
              <Button
                variant="icon"
                onClick={() => {
                  const q = querySearch.trim();
                  if (q) goToSearch(q);
                  else navigate("/search");
                }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Search"
              >
                <Icon name="search" className="w-6" />
              </Button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Menu"
              >
                <Icon name="menu" />
              </button>
            </>
          )}
        </div>
      </div>

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
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};
