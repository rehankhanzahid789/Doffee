import { useEffect, useRef } from "react";
import { MaintenanceIcon, CloseIcon } from "./icons/Icons";
import { useOrder } from "../context/OrderContext";

export default function MaintenanceModal() {
  const { modalOpen, closeMaintenance } = useOrder();
  const dialogRef = useRef(null);
  const okButtonRef = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    if (!modalOpen) return;

    lastFocused.current = document.activeElement;
    okButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMaintenance();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    };
  }, [modalOpen, closeMaintenance]);

  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brown-darker/60 px-4 backdrop-blur-[2px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeMaintenance();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="maintenance-title"
        aria-describedby="maintenance-desc"
        className="relative w-full max-w-md animate-popIn rounded-3xl border-2 border-orange bg-cream p-8 text-center shadow-2xl sm:p-10"
      >
        <button
          type="button"
          onClick={closeMaintenance}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-1.5 text-brown/60 transition hover:bg-brown/10 hover:text-brown"
        >
          <CloseIcon size={18} />
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange/15 text-brown">
          <MaintenanceIcon size={32} />
        </div>

        <h2
          id="maintenance-title"
          className="mb-3 font-display text-2xl font-semibold text-brown-dark sm:text-[26px]"
        >
          Sorry, website down for maintenance
        </h2>
        <p id="maintenance-desc" className="mx-auto mb-7 max-w-xs text-[15px] leading-relaxed text-brown-dark/80">
          Our baristas are behind the counter fixing things up. Please check back soon — the coffee's still warm.
        </p>

        <button
          ref={okButtonRef}
          type="button"
          onClick={closeMaintenance}
          className="w-full rounded-full bg-brown px-6 py-3.5 text-[15px] font-semibold text-cream transition hover:bg-brown-dark active:scale-[0.98] sm:w-auto sm:px-10"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
