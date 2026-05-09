import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroWordRotator } from "@/components/landing/sections/hero-word-rotator";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_minmax(0,600px)] lg:items-center lg:gap-20">
          {/* Image - Show FIRST on mobile, SECOND on desktop */}
          <div className="relative -mx-6 px-6 py-4 select-none lg:order-2 lg:mx-0">
            {/* Brand Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <Image
              src="/svg/hero_ilus.svg"
              alt="Dark Chat Interface"
              width={700}
              priority
              height={700}
              className="relative z-10 h-auto w-full select-none pointer-events-none drop-shadow-[0_0_30px_rgba(0,255,65,0.15)]"
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
                className="inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-6 text-[14px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex h-11 items-center rounded-sm border border-white/20 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
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