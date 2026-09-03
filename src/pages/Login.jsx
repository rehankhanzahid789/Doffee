import { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "../components/FormField";
import { MailIcon, LockIcon } from "../components/icons/Icons";
import { useOrder } from "../context/OrderContext";
import logo from "../assets/logo/doffee-06.png";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const { openMaintenance } = useOrder();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) openMaintenance();
  };

  return (
    <div className="mx-auto flex min-h-[80svh] max-w-md flex-col justify-center px-5 py-16 sm:px-0">
      <Link to="/" className="mx-auto mb-8">
        <img src={logo} alt="doffee. donut and coffee bliss" className="h-12 w-auto" />
      </Link>

      <h1 className="text-center font-display text-3xl font-semibold text-brown-dark">
        Welcome back
      </h1>
      <p className="mt-2 text-center text-[15px] text-brown-dark/60">
        Log in to pick up where you left off.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        <FormField
          label="Email"
          Icon={MailIcon}
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
          placeholder="you@email.com"
        />
        <FormField
          label="Password"
          Icon={LockIcon}
          isPassword
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
          placeholder="Enter your password"
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={openMaintenance}
            className="text-sm font-medium text-brown/70 transition hover:text-orange-dark"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-brown py-3.5 text-[15px] font-semibold text-cream transition hover:bg-brown-dark active:scale-[0.98]"
        >
          Log in
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-brown-dark/65">
        New to doffee?{" "}
        <Link to="/signup" className="font-semibold text-brown transition hover:text-orange-dark">
          Create an account
        </Link>
      </p>
    </div>
  );
}
