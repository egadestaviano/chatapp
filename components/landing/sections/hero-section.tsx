import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock, Timer, EyeOff } from "lucide-react";
import { HeroWordRotator } from "@/components/landing/sections/hero-word-rotator";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes custom-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes custom-float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        .animate-c-float { animation: custom-float 4s ease-in-out infinite; will-change: transform; }
        .animate-c-float-slow { animation: custom-float 6s ease-in-out infinite; will-change: transform; }
        .animate-c-float-reverse { animation: custom-float-reverse 5s ease-in-out infinite; will-change: transform; }
        .animate-c-float-delayed { animation: custom-float 5s ease-in-out infinite 1.5s; will-change: transform; }
      `}} />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_minmax(0,600px)] lg:items-center lg:gap-20">
          {/* Image - Show FIRST on mobile, SECOND on desktop */}
          <div className="relative -mx-6 px-6 py-4 select-none lg:order-2 lg:mx-0">
            {/* Brand Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Floating UI Elements */}
            {/* 1. Secure Card */}
            <div className="absolute top-20 lg:left-4 left-6 z-20 flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 p-3 shadow-2xl backdrop-blur-xl animate-c-float">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div className="pr-2">
                <p className="text-[13px] font-bold leading-tight text-foreground">100% Secure</p>
                <p className="text-[11px] text-muted-foreground">E2E Encryption</p>
              </div>
            </div>

            {/* 2. Low Latency Card */}
            <div className="absolute bottom-32 lg:right-4 right-6 z-20 flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 p-3 shadow-2xl backdrop-blur-xl animate-c-float-reverse">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="relative flex h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </div>
              <div className="pr-2">
                <p className="text-[13px] font-bold leading-tight text-foreground">Low Latency</p>
                <p className="text-[11px] text-muted-foreground">&lt; 10ms delay</p>
              </div>
            </div>

            {/* 3. Lightning Fast */}
            <div className="absolute top-8 lg:right-16 right-10 z-10 flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2 shadow-xl backdrop-blur-md animate-c-float-delayed">
              <Timer className="h-4 w-4 text-emerald-500" />
              <span className="text-[12px] font-bold text-foreground">Lightning Fast</span>
            </div>

            {/* 4. Minimal UI */}
            <div className="absolute bottom-20 lg:left-12 left-10 z-10 flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2 shadow-xl backdrop-blur-md animate-c-float-slow">
              <EyeOff className="h-4 w-4 text-primary" />
              <span className="text-[12px] font-bold text-foreground">Minimal Noise</span>
            </div>

            <Image
              src="/svg/hero_ilus.svg"
              alt="Dark Chat Interface"
              width={700}
              priority
              height={700}
              className="relative z-10 h-auto w-full select-none pointer-events-none drop-shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            />
          </div>

          {/* Text - Show SECOND on mobile, FIRST on desktop */}
          <div className="lg:order-1">
            <h1 className="max-w-3xl text-[36px] font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-[56px] uppercase">
              Talk <br />
              <HeroWordRotator words={["Secure", "Fast", "Private", "Authentic", "Secure"]} /> <br />
              Without the noise.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-muted-foreground sm:text-[18px] font-medium">
              Dark Chat is the silent standard for secure, high-contrast messaging. Stripped of shadows and clutter, engineered for absolute clarity and speed.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/register"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-[14px] font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex h-11 items-center rounded-xl border border-border/50 px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}