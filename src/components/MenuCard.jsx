import { formatPrice } from "../data/menu";
import { CupIcon, DonutIcon } from "./icons/Icons";
import { useOrder } from "../context/OrderContext";

const placeholderIcon = {
  croissants: DonutIcon,
  sandwiches: CupIcon,
  signatureCoffee: CupIcon,
};

export default function MenuCard({ item, sectionKey }) {
  const { addItem } = useOrder();
  const PlaceholderIcon = placeholderIcon[sectionKey] || DonutIcon;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-line/60 bg-white/60 transition hover:border-orange/50 hover:shadow-[0_10px_30px_rgba(94,49,21,0.08)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-soft">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange/20 to-brown/10 text-brown/40">
            <PlaceholderIcon size={44} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-brown-dark">
            {item.name}
          </h3>
          <span className="shrink-0 font-body text-[15px] font-semibold text-orange-dark">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-dark/65">
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
    </div>
  );
}
