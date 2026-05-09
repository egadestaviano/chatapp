import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div className="flex flex-col items-start gap-8 rounded-sm border border-primary bg-secondary p-10 sm:flex-row sm:items-end sm:justify-between sm:p-14">
        <div className="max-w-xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Join the standard
          </span>
          <h2 className="mt-3 text-[30px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[46px] text-white uppercase">
            Communication, <br />
            <span className="text-primary">Refined.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-muted-foreground font-medium max-w-md">
            Step into a shadowless environment built for absolute clarity. Secure your digital identity and start chatting without compromise.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/register"
            className="inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-8 text-[15px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
