import { useState } from "react";
import { Link } from "react-router-dom";
import { PinIcon, ClockIcon, LinkedInIcon, CheckIcon } from "./icons/Icons";

const team = [
  { name: "Fakiha Khan", url: "https://www.linkedin.com/in/fakiha-khan-b3a16b243/" },
  { name: "Rehan Zahid", url: "https://www.linkedin.com/in/dev-rehan-zahid/" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-brown-darker text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-3xl font-semibold text-cream">
            doffee<span className="text-orange">.</span>
          </p>
          <p className="mt-2 text-sm text-cream/60">donut and coffee bliss</p>
          <p className="mt-5 max-w-[26ch] text-sm leading-relaxed text-cream/60">
            Croissants and espresso drinks, designed to be eaten and drunk together.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            {team.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-cream/20 py-2 pl-3 pr-4 text-sm text-cream/75 transition hover:border-orange hover:text-orange"
              >
                <LinkedInIcon size={16} className="shrink-0" />
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-cream">Quick links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
            <li><Link to="/menu" className="transition hover:text-orange">Menu</Link></li>
            <li><Link to="/about" className="transition hover:text-orange">About</Link></li>
            <li><Link to="/order" className="transition hover:text-orange">Order Now</Link></li>
            <li><Link to="/contact" className="transition hover:text-orange">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-cream">Visit us</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/60">
            <li className="flex items-start gap-2.5">
              <PinIcon size={16} className="mt-0.5 shrink-0 text-orange" />
              <span>14 Blossom Street, F-7 Markaz, Islamabad</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ClockIcon size={16} className="mt-0.5 shrink-0 text-orange" />
              <span>Mon–Sun, 8:00 AM – 10:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-cream">Stay in the loop</h3>
          <p className="mt-4 text-sm text-cream/60">New flavors, first. No spam, ever.</p>
          {subscribed ? (
            <p className="mt-4 flex items-center gap-2 rounded-full bg-cream/10 px-4 py-3 text-sm text-orange">
              <CheckIcon size={16} />
              Thanks — you're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full min-w-0 rounded-full border border-cream/20 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-orange focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-orange px-4 py-2.5 text-sm font-semibold text-brown-darker transition hover:bg-orange-dark"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-cream/10 py-5">
        <p className="text-center text-xs text-cream/45">
          © {new Date().getFullYear()} doffee. All rights reserved. Concept by Fakiha Khan, site by{" "}
          <Link to="/about" className="underline decoration-cream/30 underline-offset-2 hover:text-orange">
            Rehan Zahid
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
