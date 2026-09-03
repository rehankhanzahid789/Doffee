import { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "../components/FormField";
import { UserIcon, MailIcon, LockIcon } from "../components/icons/Icons";
import { useOrder } from "../context/OrderContext";
import logo from "../assets/logo/doffee-06.png";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const { openMaintenance } = useOrder();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    else if (form.password.length < 8) next.password = "Use at least 8 characters.";
    if (!form.confirmPassword) next.confirmPassword = "Please confirm your password.";
    else if (form.confirmPassword !== form.password)
      next.confirmPassword = "Passwords don't match.";
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
        Create your account
      </h1>
      <p className="mt-2 text-center text-[15px] text-brown-dark/60">
        Save your favorites and order faster next time.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        <FormField
          label="Name"
          Icon={UserIcon}
          autoComplete="name"
          value={form.name}
          onChange={handleChange("name")}
          error={errors.name}
          placeholder="Your name"
        />
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
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
          placeholder="At least 8 characters"
        />
        <FormField
          label="Confirm password"
          Icon={LockIcon}
          isPassword
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          error={errors.confirmPassword}
          placeholder="Re-enter your password"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-brown py-3.5 text-[15px] font-semibold text-cream transition hover:bg-brown-dark active:scale-[0.98]"
        >
          Create account
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-brown-dark/65">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-brown transition hover:text-orange-dark">
          Log in
        </Link>
      </p>
    </div>
  );
}
