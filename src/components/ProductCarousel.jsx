import { useRef } from "react";
import { formatPrice } from "../data/menu";
import { ChevronIcon } from "./icons/Icons";
import { useOrder } from "../context/OrderContext";

export default function ProductCarousel({ items }) {
  const trackRef = useRef(null);
  const { addItem } = useOrder();

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const distance = card ? card.offsetWidth + 20 : 300;
    track.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            data-card
            key={item.id}
            className="w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl border border-line/60 bg-white/60 sm:w-[46%] lg:w-[30%]"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-cream-soft">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-brown-dark">
                  {item.name}
                </h3>
                <span className="shrink-0 text-[15px] font-semibold text-orange-dark">
                  {formatPrice(item.price)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-brown-dark/65">
                {item.description}
              </p>
              <button
                type="button"
                onClick={() => addItem(item)}
                className="mt-4 w-full rounded-full border border-brown/25 py-2.5 text-sm font-semibold text-brown transition hover:border-brown hover:bg-brown hover:text-cream"
              >
                Add to order
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll to previous items"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/25 text-brown transition hover:border-brown hover:bg-brown hover:text-cream"
        >
          <ChevronIcon size={18} className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll to next items"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/25 text-brown transition hover:border-brown hover:bg-brown hover:text-cream"
        >
          <ChevronIcon size={18} />
        </button>
      </div>
    </div>
  );
}
