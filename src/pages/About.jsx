import shopFront from "../assets/lifestyle/shop-front-mockup.jpg";
import cafeSignage from "../assets/lifestyle/cafe-signage.jpg";
import coldCoffee from "../assets/lifestyle/cold-coffee-mockup.jpg";
import donutProcess from "../assets/products/donut.jpg";
import { ClockIcon, PinIcon, MailIcon, LinkedInIcon } from "../components/icons/Icons";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday – Sunday", time: "9:00 AM – 11:00 PM" },
];

const credits = [
  {
    role: "Brand & concept design",
    name: "Fakiha Khan",
    email: "fa.fakiha19@gmail.com",
    linkedin: "https://www.linkedin.com/in/fakiha-khan-b3a16b243/",
  },
  {
    role: "Website development",
    name: "Rehan Zahid",
    email: "rehankhanzahid789@gmail.com",
    linkedin: "https://www.linkedin.com/in/dev-rehan-zahid/",
  },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={shopFront}
            alt="doffee storefront window etched with the logo, lit by afternoon sun"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-darker/55" />
        </div>
        <div className="relative mx-auto flex min-h-[46svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Our story
          </p>
          <h1 className="max-w-lg font-display text-4xl font-semibold text-cream sm:text-5xl">
            DO + FFEE
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
              Donut × coffee, not donut and coffee.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-brown-dark/70">
              Doffee started as a simple question: why does the donut shop close before the coffee bar opens, and why do coffee bars treat Croissants as an afterthought in a glass case? We built doffee to sit exactly at that intersection — Croissants and espresso drinks designed together from the first recipe test, meant to be eaten and drunk in the same sitting.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-brown-dark/70">
              Every donut is glazed the same morning it's sold. Every espresso drink is built to hold its own against something sweet, not disappear next to it. Nothing on the menu is there because a supplier had it — it's there because it works with something else on the counter.
            </p>
            <p className="mt-6 font-display text-xl italic text-brown-dark/80">
              "Rule of thumb: brown leads, cream carries, orange finishes."
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line/60">
            <img
              src={cafeSignage}
              alt="Sidewalk sign outside doffee showing the logo, a caramel donut, and an iced coffee"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream-soft/60 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-3xl border border-line/60 md:order-1">
            <img
              src={donutProcess}
              alt="A doffee baker glazing fresh donuts by hand"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
              How we make it
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-brown-dark/70">
              Dough is proofed overnight, shaped and fried each morning, and glazed within the hour — while it's still warm enough for the glaze to set into it rather than sit on top. Espresso is pulled to order, one shot at a time, on a machine that never runs longer than a single service without recalibrating.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-brown-dark/70">
              It's slower than buying pre-made. We think you can taste the difference.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
              The idea behind Doffee
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-brown-dark/70">
              We asked Fakiha, who designed the Doffee concept, how it came together:
            </p>
          </div>
          <figure className="rounded-3xl border border-line/60 bg-white/50 p-8 sm:p-10">
            <blockquote className="text-[16px] italic leading-relaxed text-brown-dark/80">
              <p>
                "Honestly, it started pretty naturally haha. Since café culture is growing so much, especially among Gen Z and even the middle-aged crowd, I thought about what kind of café brand I'd personally want to see. I wanted something warm, welcoming, and a little Parisian — somewhere you could just come, slow down, grab a coffee and donut, and enjoy the moment.
              </p>
              <p className="mt-4">
                That's basically how Doffee came to life, donut + coffee, built around the idea of simple little moments of bliss. From the warm colors and Parisian-inspired setting to the playful identity and signature pairings, I wanted the whole brand to feel cozy and inviting, like a little world you'd want to step into."
              </p>
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-brown-dark">
              — Fakiha Khan, on designing Doffee
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-cream-soft/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="mb-2 font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
            Who made this
          </h2>
          <p className="mb-10 max-w-lg text-[15px] leading-relaxed text-brown-dark/65">
            The Doffee concept was designed by Fakiha Khan and built into a website by Rehan Zahid.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {credits.map((person) => (
              <div
                key={person.name}
                className="rounded-3xl border border-line/60 bg-white/60 p-6 sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-dark">
                  {person.role}
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-brown-dark">
                  {person.name}
                </p>
                <div className="mt-4 flex flex-col gap-2.5 text-sm text-brown-dark/70">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2.5 transition hover:text-orange-dark"
                  >
                    <MailIcon size={17} className="shrink-0 text-orange-dark" />
                    {person.email}
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 transition hover:text-orange-dark"
                  >
                    <LinkedInIcon size={17} className="shrink-0 text-orange-dark" />
                    LinkedIn profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 rounded-3xl border border-line/60 bg-white/50 p-8 sm:p-12 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold text-brown-dark sm:text-3xl">
              Find us
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <PinIcon size={20} className="mt-0.5 shrink-0 text-orange-dark" />
                <div>
                  <p className="font-semibold text-brown-dark">Address</p>
                  <p className="text-sm text-brown-dark/65">14 Blossom Street, F-7 Markaz, Islamabad</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold text-brown-dark sm:text-3xl">
              Opening hours
            </h2>
            <ul className="space-y-4">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center gap-3">
                  <ClockIcon size={20} className="shrink-0 text-orange-dark" />
                  <div className="flex w-full items-center justify-between gap-4 border-b border-line/60 pb-3 text-sm">
                    <span className="font-semibold text-brown-dark">{h.day}</span>
                    <span className="text-brown-dark/65">{h.time}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-line/60">
              <img
                src={coldCoffee}
                alt="Two iced drinks in doffee cups on the counter"
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
