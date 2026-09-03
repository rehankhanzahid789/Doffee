import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/doffee-06.png";
import { MenuIcon, CloseIcon } from "./icons/Icons";
import { useOrder } from "../context/OrderContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors hover:text-orange-dark ${
      isActive ? "text-brown" : "text-brown/70"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line/70 bg-cream/95 py-2.5 shadow-[0_2px_16px_rgba(94,49,21,0.06)] backdrop-blur"
          : "border-transparent bg-cream py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center" aria-label="doffee — home">
          <img
            src={logo}
            alt="doffee. donut and coffee bliss"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link to="/login" className="text-[15px] font-medium text-brown/70 transition-colors hover:text-orange-dark">
            Login
          </Link>
          <button
            type="button"
            onClick={() => navigate("/order")}
            className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[15px] font-semibold text-brown-darker shadow-sm transition hover:bg-orange-dark active:scale-[0.98]"
          >
            Order Now
            {itemCount > 0 && (
              <span className="ml-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brown-darker px-1 text-xs font-bold text-cream">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-brown md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line/70 bg-cream px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium ${
                    isActive ? "bg-orange/15 text-brown" : "text-brown/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-brown/80"
            >
              Login
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              navigate("/order");
            }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-orange px-5 py-3.5 text-base font-semibold text-brown-darker"
          >
            Order Now
          </button>
        </div>
      )}
    </header>
  );
}
