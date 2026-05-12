"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { registerAction } from "@/app/actions/auth";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError("");
    setLoading(true);

    const res = await registerAction(formData);

    if (res.error) {
      setLoading(false);
      setError(res.error);
      return;
    }

    // Optionally auto-login
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    router.push("/");
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Form */}
        <div className="bg-card p-8 space-y-6 rounded-xl shadow-2xl border border-border/50">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Logo size={48} />
            <span className="text-xl font-black uppercase tracking-[0.1em] leading-none text-foreground">
              <span className="text-primary">Dark</span>
              <span className="ml-1 text-foreground">Chat</span>
            </span>
          </Link>

          {error && (
            <div className="text-sm text-red-400 bg-red-950/20 border border-red-900/50 px-4 py-3 rounded-sm">
              {error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full pl-11 pr-4 py-3 bg-background text-sm text-foreground placeholder-muted-foreground border border-border/50 rounded-md focus:outline-none focus:border-primary transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 bg-background text-sm text-foreground placeholder-muted-foreground border border-border/50 rounded-md focus:outline-none focus:border-primary transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="At least 8 characters"
                  className="w-full pl-11 pr-11 py-3 bg-background text-sm text-foreground placeholder-muted-foreground border border-border/50 rounded-md focus:outline-none focus:border-primary transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirm" className="block text-sm font-semibold text-foreground">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="confirm"
                  name="confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Confirm your password"
                  className="w-full pl-11 pr-11 py-3 bg-background text-sm text-foreground placeholder-muted-foreground border border-border/50 rounded-md focus:outline-none focus:border-primary transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-90 text-black py-3 rounded-sm font-bold uppercase transition-opacity duration-200 cursor-pointer"
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-primary font-semibold cursor-pointer hover:text-accent transition"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
