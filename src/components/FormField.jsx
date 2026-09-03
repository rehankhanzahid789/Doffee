import { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "./icons/Icons";

export default function FormField({
  label,
  Icon,
  error,
  type = "text",
  isPassword = false,
  ...inputProps
}) {
  const id = useId();
  const [show, setShow] = useState(false);
  const resolvedType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-brown-dark">
        {label}
      </label>
      <div
        className={`flex items-center gap-2.5 rounded-2xl border bg-white/70 px-4 py-3 transition focus-within:border-brown ${
          error ? "border-red-400" : "border-line"
        }`}
      >
        {Icon && <Icon size={18} className="shrink-0 text-brown/50" />}
        <input
          id={id}
          type={resolvedType}
          className="w-full min-w-0 bg-transparent text-[15px] text-brown-darker placeholder:text-brown/35 focus:outline-none"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...inputProps}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            className="shrink-0 text-brown/50 transition hover:text-brown"
          >
            {show ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
