import { Link } from "react-router-dom";
import shopFront from "../assets/lifestyle/shop-front-mockup.jpg";
import espressoCrop from "../assets/lifestyle/espresso-machine-crop.jpg";
import takeaway from "../assets/lifestyle/doffee-takeaway.jpg";
import tee from "../assets/lifestyle/doffee-tee.jpg";
import coldCoffee from "../assets/lifestyle/cold-coffee-mockup.jpg";
import menuFront from "../assets/logo/menu-front.jpg";
import ProductCarousel from "../components/ProductCarousel";
import { CupIcon, DonutIcon, PinIcon, ArrowIcon, BagIcon } from "../components/icons/Icons";
import { menu } from "../data/menu";
import { useOrder } from "../context/OrderContext";

const signaturePicks = [
  ...menu.signatureCoffee,
  menu.croissants[2],
];

const valueProps = [
  {
    Icon: CupIcon,
    title: "Small-batch roasts",
    text: "Beans roasted in short batches so every cup tastes intentional, not mass-produced.",
  },
  {
    Icon: DonutIcon,
    title: "Baked fresh daily",
    text: "Donuts glazed each morning — nothing sits in a case waiting for tomorrow.",
  },
  {
    Icon: PinIcon,
    title: "Cozy neighborhood spot",
    text: "A corner counter built for lingering, not just grabbing and going.",
  },
];

export default function Home() {
  const { openMaintenance } = useOrder();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={shopFront}
            alt="Sunlit doffee storefront window with the logo etched on the glass"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-darker/85 via-brown-darker/40 to-brown-darker/20" />
        </div>
        <div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
          <p className="reveal mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            donut and coffee bliss
          </p>
          <h1 className="reveal max-w-xl font-display text-[42px] font-semibold leading-[1.05] text-cream sm:text-6xl">
            Donut × coffee,
            <br />
            done right.
          </h1>
          <p className="reveal mt-5 max-w-md text-[17px] leading-relaxed text-cream/80">
            Espresso drinks and hand-glazed donuts, made every morning to be eaten and drunk together.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openMaintenance}
              className="flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[15px] font-semibold text-brown-darker transition hover:bg-orange-dark active:scale-[0.98]"
            >
              <BagIcon size={18} />
              Order Now
            </button>
            <Link
              to="/menu"
              className="flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-[15px] font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
            >
              View Menu
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand story strip */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-2xl font-semibold text-orange-dark">
              DO + FFEE
            </p>
            <h2 className="max-w-md font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
              Donut × coffee. Not two shops sharing a wall.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-brown-dark/70">
              Doffee lives at the intersection of a donut shop and a coffee bar — pastries and espresso drinks designed from the start to be eaten and drunk together, not as an afterthought pairing.
            </p>
            <p className="mt-4 max-w-md font-display text-lg italic text-brown-dark/80">
              "Rule of thumb: brown leads, cream carries, orange finishes."
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line/60">
            <img
              src={espressoCrop}
              alt="Doffee branded cups lined up beneath the espresso machine"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Signature picks */}
      <section className="bg-cream-soft/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
                Signature picks
              </h2>
              <p className="mt-2 max-w-md text-brown-dark/65">
                The four things people order twice.
              </p>
            </div>
            <Link
              to="/menu"
              className="flex items-center gap-1.5 text-[15px] font-semibold text-brown transition hover:text-orange-dark"
            >
              See full menu
              <ArrowIcon size={16} />
            </Link>
          </div>
          <ProductCarousel items={signaturePicks} />
        </div>
      </section>

      {/* Why Doffee */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="mb-12 max-w-lg font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
          Why people come back
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {valueProps.map(({ Icon, title, text }) => (
            <div key={title}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/15 text-brown">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-brown-dark">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-brown-dark/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery / community strip */}
      <section className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <h2 className="mb-8 font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
          From the counter
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <img src={takeaway} alt="Customer holding a doffee iced matcha and takeaway bag" className="col-span-2 aspect-[4/3] w-full rounded-2xl object-cover sm:col-span-1 sm:aspect-square" />
          <img src={tee} alt="Barista in a doffee-branded t-shirt at the espresso bar" className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-square" />
          <img src={coldCoffee} alt="Iced coffee in a doffee branded cup" className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-square" />
        </div>
      </section>

      {/* CTA band */}
      <section className="relative mt-20 overflow-hidden sm:mt-28">
        <div className="absolute inset-0">
          <img src={menuFront} alt="" className="h-full w-full object-cover object-[center_48%]" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:py-32">
          <p className="mb-4 max-w-sm text-[17px] leading-relaxed text-cream/85">
            Come sit at the counter, or bring the counter to you.
          </p>
          <button
            type="button"
            onClick={openMaintenance}
            className="rounded-full bg-orange px-8 py-3.5 text-[15px] font-semibold text-brown-darker transition hover:bg-orange-dark active:scale-[0.98]"
          >
            Order Now
          </button>
        </div>
      </section>
    </>
  );
}
