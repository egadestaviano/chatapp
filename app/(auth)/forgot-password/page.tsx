"use client"

import { useState } from "react"
import { Mail, ArrowLeft } from "lucide-react"
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState(false)

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

          {!emailSent ? (
            <>
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3 bg-background text-sm text-foreground placeholder-muted-foreground border border-border/50 rounded-md focus:outline-none focus:border-primary transition"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={() => setEmailSent(true)}
                className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold uppercase py-3 rounded-md transition-opacity duration-200 cursor-pointer"
              >
                Send reset link
              </button>
            </>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-foreground text-sm leading-relaxed">
                If an account exists for this email, a password reset link has been sent.
              </p>

              <button
                onClick={() => setEmailSent(false)}
                className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm font-medium transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Try again
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Remember your password?{" "}
          <button
            onClick={() => (window.location.href = "/login")}
            className="text-primary font-semibold cursor-pointer hover:text-accent transition"
          >
            Sign in
          </button>
        </p>

      </div>
    </div>
  )
}