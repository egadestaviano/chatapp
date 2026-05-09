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

          <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex flex-col gap-5 group"
              >
                <div className="w-12 h-12 grid place-items-center bg-primary text-black font-bold font-mono text-lg rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.3)] group-hover:scale-110 transition-transform">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold tracking-tight text-foreground uppercase">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
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
