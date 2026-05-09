import { Quote, Send } from "lucide-react";
import { SectionLabel } from "@/components/landing/sections/section-label";

function TestimonialsIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* Phone frame */}
      <div className="relative rounded-sm border border-primary bg-[#0A0A0A] shadow-2xl ring-1 ring-primary/20 overflow-hidden">
        {/* Phone notch area */}
        <div className="flex h-4 items-center justify-center bg-primary">
          <div className="h-0.5 w-8 rounded-full bg-black/40" />
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-white/5 bg-secondary/20 px-4 py-3">
          <div className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-[11px] font-bold text-black uppercase">
            E
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-bold text-foreground truncate uppercase tracking-wider">Emily</p>
            <p className="font-mono text-[9px] text-primary uppercase">● Active</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 px-4 py-5">
          {/* Other - left */}
          <div className="flex items-end gap-1.5">
            <div className="grid h-6 w-6 place-items-center rounded-sm bg-secondary border border-white/10 text-[9px] font-bold text-foreground shrink-0 uppercase">
              E
            </div>
            <div className="max-w-[80%] rounded-sm border border-white/10 bg-black px-3 py-2">
              <p className="text-[11px] leading-snug text-white">The contrast is perfect.</p>
            </div>
          </div>

          {/* Me - right */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-sm bg-primary px-3 py-2">
              <p className="text-[11px] font-bold leading-snug text-black">Zero distractions. ✨</p>
            </div>
          </div>

          {/* Other - left */}
          <div className="flex items-end gap-1.5">
            <div className="grid h-6 w-6 place-items-center rounded-sm bg-secondary border border-white/10 text-[9px] font-bold text-foreground shrink-0 uppercase">
              E
            </div>
            <div className="max-w-[80%] rounded-sm border border-white/10 bg-black px-3 py-2">
              <p className="text-[11px] leading-snug text-white">This is the standard.</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t border-white/5 bg-secondary/10 px-3 py-3">
          <div className="flex-1 rounded-sm bg-secondary border border-white/5 px-3 py-1.5 font-mono text-[9px] text-muted-foreground uppercase tracking-tighter">
            Message...
          </div>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-black"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const quotes = [
    {
      q: "Dark Chat is the silent standard. Stripped of clutter, engineered for absolute clarity. It's the only tool I trust for deep focus communication.",
      n: "Rara",
      r: "Tech Lead",
    },
    {
      q: "The zero-latency delivery is unmatched. I see replies the millisecond they're sent. No noise, just pure performance in every session.",
      n: "Bagas",
      r: "DevOps Engineer",
    },
    {
      q: "The high-contrast interface eliminates visual fatigue. It's professional, authentic, and built for those who value their time.",
      n: "Nadia",
      r: "Product Designer",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="flex flex-col items-center text-center">
        <SectionLabel index="04" title="Validation" className="mb-6" />
        <h2 className="max-w-2xl text-[28px] font-bold leading-tight tracking-[-0.04em] sm:text-[42px] uppercase">
          Trusted by <span className="text-primary">Elite Teams.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-foreground font-medium">
          See why professionals choose Dark Chat for their most critical and focused conversations.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
        {/* Illustration */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-sm border border-primary/20 bg-secondary/10 px-6 py-12 sm:px-12 sm:py-16">
          <div className="relative z-10 w-full">
            <TestimonialsIllustration />
          </div>
        </div>

        {/* Testimonials list */}
        <div className="flex flex-col gap-4">
          {quotes.map((t) => (
            <figure
              key={t.n}
              className="group relative rounded-sm border border-white/5 bg-secondary/20 p-6 transition-all hover:border-primary hover:bg-secondary/40"
            >
              <Quote
                aria-hidden="true"
                className="absolute right-6 top-6 h-5 w-5 text-primary/10 transition-colors group-hover:text-primary/30"
              />
              <blockquote className="pr-10 text-[15px] leading-relaxed text-foreground font-medium">
                &quot;{t.q}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary text-[12px] font-bold text-black uppercase">
                  {t.n[0]}
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold tracking-tight text-foreground uppercase">
                    {t.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {t.r}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
