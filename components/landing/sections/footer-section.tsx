import Link from "next/link";
import { Logo } from "@/components/logo";

export function FooterSection() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <Link
              href="/"
              className="group flex items-center gap-1 rounded-md px-1.5 py-1 -mx-1.5 transition-colors hover:bg-muted/40"
            >
              <Logo size={28} />
              <span className="text-[16px] font-black uppercase tracking-[0.1em] leading-none text-foreground ml-1.5">
                <span className="text-primary">Dark</span>
                <span className="ml-0.5 text-white">Chat</span>
              </span>
            </Link>
            <p className="text-[13.5px] leading-[1.7] text-muted-foreground">
              A premium space to chat with high contrast and zero noise.
              Built for security, speed, and authenticity.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              Pages
            </p>
            <div className="flex flex-col gap-2 text-[13.5px] text-muted-foreground">
              <a
                className="transition-colors hover:text-foreground"
                href="#preview"
              >
                Preview
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href="#features"
              >
                Features
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href="#how"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              Account
            </p>
            <div className="flex flex-col gap-2 text-[13.5px] text-muted-foreground">
              <Link
                className="transition-colors hover:text-foreground"
                href="/login"
              >
                Sign in
              </Link>
              <Link
                className="transition-colors hover:text-foreground"
                href="/register"
              >
                Sign up
              </Link>
              <Link
                className="transition-colors hover:text-foreground"
                href="/forgot-password"
              >
                Forgot password
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              Help
            </p>
            <div className="flex flex-col gap-2 text-[13.5px] text-muted-foreground">
              <Link className="transition-colors hover:text-foreground" href="/privacy">
                Privacy policy
              </Link>
              <Link className="transition-colors hover:text-foreground" href="/terms">
                Terms of use
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-tight text-muted-foreground">
            (c) {new Date().getFullYear()} Dark Chat. Built for authentic
            conversations.
          </p>
          <p className="font-mono text-[11px] tracking-tight text-muted-foreground">
            Made with care
          </p>
        </div>
      </div>
    </footer>
  );
}
