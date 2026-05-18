"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Logo } from "@/components/logo";

export default function NotFound() {
  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans selection:bg-primary/30 selection:text-foreground">
      {/* Top spacing for vertical centering */}
      <div className="h-10" />

      {/* Main Content */}
      <div className="max-w-md w-full mx-auto px-6 py-8 flex flex-col items-center text-center space-y-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 mb-2">
          <Logo size={36} />
          <span className="text-base font-black uppercase tracking-[0.1em] text-foreground">
            <span className="text-primary">Dark</span>
            <span className="ml-1 text-white">Chat</span>
          </span>
        </div>

        {/* 404 Code with badge */}
        <div className="relative">
          <h1 className="text-8xl font-black tracking-tighter text-primary select-none animate-pulse">
            404
          </h1>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-foreground text-background text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm">
            Lost Connection
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Alamat URL mungkin salah, atau halaman telah dipindahkan.
          </p>
        </div>

        {/* Easy Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
          <button
            onClick={handleGoBack}
            className="flex-1 px-4 py-3 cursor-pointer bg-secondary hover:bg-muted text-xs font-bold uppercase tracking-wider rounded-md border border-border text-foreground transition-all duration-150 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
          <Link
            href="/"
            className="flex-1 px-4 py-3 bg-primary hover:opacity-90 text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-150 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Ke Beranda
          </Link>
        </div>
      </div>

      {/* Elegant minimalist footer */}
      <footer className="py-6 text-center border-t border-border/30 bg-card/10">
        <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
          Dark Chat // Status 404
        </p>
      </footer>
    </div>
  );
}
