import { MessageCircle, Users, Bell, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/landing/sections/section-label";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  const items = [
    {
      icon: MessageCircle,
      label: "Zero-Latency Stream",
      desc: "Engineered for speed. Messages deliver in real-time with high-precision synchronization across all your devices.",
    },
    {
      icon: Users,
      label: "Encrypted Identity",
      desc: "Your presence is protected. Sharp, minimalist status indicators ensure privacy without compromising connectivity.",
    },
    {
      icon: Bell,
      label: "High-Contrast Core",
      desc: "Optimized for deep focus. A sharp, shadowless design language that eliminates visual noise and digital fatigue.",
    },
    {
      icon: Sparkles,
      label: "Authentic Architecture",
      desc: "Built for meaningful dialogue. A professional environment stripped of stickers, ads, and engagement-bait.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="flex flex-col items-end text-right mb-12">
        <SectionLabel index="02" title="Features" className="mb-4" />
        <h2 className="max-w-2xl text-[28px] font-bold leading-tight tracking-[-0.04em] sm:text-[42px] uppercase">
          Engineered for <span className="text-primary">Elite Clarity.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-foreground font-medium">
          Dark Chat strips away the decorative clutter of modern apps to deliver a messaging experience focused on absolute speed and high-contrast readability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border border-primary/10">
        {items.map(({ icon: Icon, label, desc }, idx) => (
          <div
            key={label}
            className={cn(
              "flex flex-col gap-4 bg-background p-8 transition-all hover:bg-secondary/50 group",
              idx % 2 === 0 ? "pt-12" : "pt-8"
            )}
          >
            <div className="w-10 h-10 grid place-items-center bg-secondary border border-white/5 rounded-sm group-hover:border-primary/50 transition-colors">
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-bold tracking-[0.1em] text-foreground uppercase mt-2">
              {label}
            </h3>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
