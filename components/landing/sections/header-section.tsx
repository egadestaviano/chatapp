"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Logo } from "@/components/logo";

export function HeaderSection() {
  const { data: session, status } = useSession();
  const isAuthed = status === "authenticated" && !!session?.user;
  const username = session?.user?.name || session?.user?.email?.split("@")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-primary bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-1 rounded-md px-1.5 py-1 -mx-1.5 transition-colors hover:bg-muted/40"
        >
          <Logo size={32} />
          <span className="text-[16px] font-black uppercase tracking-[0.1em] leading-none text-foreground ml-2">
            <span className="text-primary">Dark</span>
            <span className="ml-1 text-white">Chat</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#preview", label: "Preview" },
            { href: "#features", label: "Features" },
            { href: "#how", label: "How it works" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex h-8 items-center gap-2">
          {status === "loading" ? null : isAuthed ? (
            <Link
              href="/messages"
              className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-[13.5px] font-medium text-foreground transition-colors hover:bg-muted/40"
            >
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-[12px] font-semibold uppercase text-foreground ring-1 ring-border"
              >
                {username?.charAt(0) || "?"}
              </span>
              <span className="max-w-[140px] truncate">{username}</span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-md px-3 py-1.5 text-[13.5px] text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-[13.5px] font-medium text-background transition-opacity hover:opacity-90"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
