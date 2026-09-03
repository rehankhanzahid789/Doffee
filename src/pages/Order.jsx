import { useState } from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import { menu, menuSections, formatPrice } from "../data/menu";
import { BagIcon, PlusIcon, MinusIcon, CloseIcon, ClockIcon } from "../components/icons/Icons";

const pickupTimes = ["As soon as possible", "In 15 minutes", "In 30 minutes", "In 1 hour"];

export default function Order() {
  const { items, addItem, updateQty, removeItem, subtotal, openMaintenance } = useOrder();
  const [pickupTime, setPickupTime] = useState(pickupTimes[0]);
  const [sectionKey, setSectionKey] = useState(menuSections[0].key);

  const deliveryFee = items.length > 0 ? 150 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="mb-10 max-w-xl">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-orange-dark">
          Order
        </p>
        <h1 className="font-display text-4xl font-semibold text-brown-dark sm:text-5xl">
          Start your order
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-brown-dark/65">
          Build your order, choose a pickup time, and check out.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Item picker */}
        <div>
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuSections.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => setSectionKey(section.key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  sectionKey === section.key
                    ? "border-brown bg-brown text-cream"
                    : "border-brown/25 text-brown/70 hover:border-brown/50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {menu[sectionKey].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-line/60 bg-white/50 p-4"
              >
                <div className="min-w-0">
                  <p className="font-display text-[17px] font-semibold text-brown-dark">
                    {item.name}
                  </p>
                  <p className="truncate text-sm text-brown-dark/55">{item.description}</p>
                  <p className="mt-1 text-sm font-semibold text-orange-dark">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(item)}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-brown/25 px-4 py-2 text-sm font-semibold text-brown transition hover:border-brown hover:bg-brown hover:text-cream"
                >
                  <PlusIcon size={15} />
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart summary */}
        <aside className="h-fit rounded-3xl border border-line/60 bg-white/60 p-6 lg:sticky lg:top-24">
          <h2 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-brown-dark">
            <BagIcon size={20} />
            Your order
          </h2>

          {items.length === 0 ? (
            <p className="rounded-2xl bg-cream-soft px-4 py-8 text-center text-sm text-brown-dark/55">
              Your cart is empty. Add something from the menu to get started.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-brown-dark">{item.name}</p>
                    <p className="text-xs text-brown-dark/55">{formatPrice(item.price)} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-brown/25 text-brown transition hover:border-brown"
                    >
                      <MinusIcon size={13} />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold text-brown-dark">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-brown/25 text-brown transition hover:border-brown"
                    >
                      <PlusIcon size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="ml-1 text-brown/40 transition hover:text-red-500"
                    >
                      <CloseIcon size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 border-t border-line/60 pt-5">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-brown-dark">
              <ClockIcon size={16} className="text-orange-dark" />
              Pickup time
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full rounded-xl border border-line bg-white/70 px-3.5 py-2.5 text-sm text-brown-darker focus:border-brown focus:outline-none"
            >
              {pickupTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 space-y-2 border-t border-line/60 pt-5 text-sm">
            <div className="flex justify-between text-brown-dark/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-brown-dark/70">
              <span>Service fee</span>
              <span>{deliveryFee ? formatPrice(deliveryFee) : "—"}</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-semibold text-brown-dark">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={openMaintenance}
            className="mt-6 w-full rounded-full bg-orange py-3.5 text-[15px] font-semibold text-brown-darker transition hover:bg-orange-dark active:scale-[0.98]"
          >
            Place order
          </button>

          <p className="mt-4 text-center text-xs text-brown-dark/45">
            Prefer to browse first?{" "}
            <Link to="/menu" className="font-semibold text-brown/70 hover:text-orange-dark">
              View full menu
            </Link>
          </p>
        </aside>
      </div>
    </div>
  );
}
