import { useState } from "react";
import { menu, menuSections } from "../data/menu";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const [active, setActive] = useState(menuSections[0].key);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-orange-dark">
          Menu
        </p>
        <h1 className="font-display text-4xl font-semibold text-brown-dark sm:text-5xl">
          The warm world of doffee
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-brown-dark/65">
          Coffee, croissants and sandwiches — everything made to be paired. Prices in PKR.
        </p>
      </header>

      <div className="mb-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {menuSections.map((section) => (
          <button
            key={section.key}
            type="button"
            onClick={() => {
              setActive(section.key);
              document
                .getElementById(section.key)
                ?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              active === section.key
                ? "border-brown bg-brown text-cream"
                : "border-brown/25 text-brown/70 hover:border-brown/50"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {menuSections.map((section, idx) => (
        <section
          key={section.key}
          id={section.key}
          className={idx > 0 ? "mt-16 scroll-mt-24 sm:mt-20" : "scroll-mt-24"}
        >
          <div className="mb-6 flex items-center gap-4">
            <h2 className="font-display text-2xl font-semibold text-brown-dark sm:text-3xl">
              {section.title}
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menu[section.key].map((item) => (
              <MenuCard key={item.id} item={item} sectionKey={section.key} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
