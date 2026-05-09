import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em]", className)}>
      <span className="text-primary flex items-center">
        <span className="opacity-40">[</span>
        <span className="px-1">{index}</span>
        <span className="opacity-40">]</span>
      </span>
      <span className="flex items-center text-foreground/80">
        <span className="text-primary animate-pulse mr-1">_</span>
        {title}
      </span>
    </div>
  );
}
