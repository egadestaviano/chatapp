import { SectionLabel } from "@/components/landing/sections/section-label";

export function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      t: "Create an account",
      d: "Sign up with an email or your Google account. Just once, then you're set whenever you want to chat.",
    },
    {
      n: "02",
      t: "Start a chat",
      d: "Pick a friend from the user list, or start a new group to talk with several people at once.",
    },
    {
      n: "03",
      t: "Talk freely",
      d: "Send messages, see who's online, and enjoy a chat that doesn't get in your way.",
    },
  ];

  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="flex gap-12">
        {/* Vertical Label Sidebar */}
        <div className="hidden lg:flex flex-col items-center gap-4 pt-2">
          <div className="w-px h-12 bg-primary/20" />
          <div className="rotate-90 origin-center whitespace-nowrap">
            <SectionLabel index="03" title="Workflow" />
          </div>
          <div className="w-px flex-1 bg-primary/20" />
        </div>

        <div className="flex-1">
          <div className="lg:hidden mb-8">
            <SectionLabel index="03" title="Workflow" />
          </div>
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.04em] sm:text-[42px] uppercase">
            Absolute <span className="text-primary">Streamline.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-foreground font-medium">
            Dark Chat is built for immediate deployment. Authenticate, connect, and broadcast your message in seconds.
          </p>

          <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 items-stretch">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group relative flex flex-col gap-4 bg-card/50 border border-border/50 rounded-3xl p-8 transition-all hover:border-primary/50 hover:bg-secondary/20 h-full overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
              >
                {/* Subtle green accent */}
                <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-primary/5 blur-xl transition-all group-hover:bg-primary/20" />

                <div className="w-12 h-12 grid place-items-center bg-primary text-primary-foreground font-bold font-mono text-lg rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:-translate-y-1 transition-transform relative z-10">
                  {s.n}
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="text-[14px] font-bold tracking-[0.1em] text-foreground uppercase mt-2">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground flex-1 text-justify [text-justify:inter-word]">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
