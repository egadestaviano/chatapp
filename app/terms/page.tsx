"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionLabel } from "@/components/landing/sections/section-label";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const SECTIONS = [
  "Acceptance of terms",
  "Your account",
  "Acceptable use",
  "Service availability",
  "Intellectual property",
  "Limitation of liability",
  "Contact"
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%" }
    );

    SECTIONS.forEach((section) => {
      const id = section.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-white/5 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">Dark Chat</span>
          </Link>
          <Link href="/" className="text-xs font-mono uppercase tracking-widest text-primary hover:opacity-70 transition-opacity flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Contents
                </p>
                <nav className="flex flex-col gap-3">
                  {SECTIONS.map((item) => {
                    const id = item.toLowerCase().replace(/\s+/g, "-");
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={item}
                        href={`#${id}`}
                        className={cn(
                          "text-[12px] transition-all leading-tight flex items-center gap-2",
                          isActive 
                            ? "text-primary font-bold translate-x-1" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {isActive && <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />}
                        {item}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div>
            <SectionLabel index="02" title="Legal" className="mb-8" />
            
            <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter mb-4">
              Terms of <span className="text-primary">Use.</span>
            </h1>
            
            <p className="text-muted-foreground font-mono text-sm mb-12">
              Last updated: May 9, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-16">
              <section>
                <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                  These terms describe the rules and responsibilities that apply when you create an account or use Dark Chat.
                </p>
              </section>

              <section id="acceptance-of-terms" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Acceptance of terms
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    By accessing, creating an account, or using Dark Chat, you agree to follow these Terms of Use. These terms apply to your use of the website, messaging features, account tools, and any related services we provide.
                  </p>
                  <p>
                    If you do not agree with these terms, you should not use Dark Chat. Using the service means you understand that your access is subject to these rules, our Privacy Policy, and any additional notices shown inside the app.
                  </p>
                </div>
              </section>

              <section id="your-account" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Your account
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    You are responsible for providing accurate account information and keeping it up to date. You are also responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.
                  </p>
                  <p>
                    We may suspend, restrict, or terminate accounts that violate these terms, create security risks, disrupt the service, impersonate others, or are used in a way that may harm Dark Chat or its users.
                  </p>
                </div>
              </section>

              <section id="acceptable-use" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Acceptable use
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    You agree to use Dark Chat responsibly and lawfully. You may not use the service to harass, threaten, abuse, impersonate, defraud, spam, exploit, or harm other people.
                  </p>
                  <p>
                    You are responsible for the messages, profile information, and content you send or share. Please only share content that you have the right to use.
                  </p>
                </div>
              </section>

              <section id="service-availability" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Service availability
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We work to keep Dark Chat fast, available, and reliable, but we cannot guarantee that the service will always be uninterrupted or error free.
                  </p>
                </div>
              </section>

              <section id="intellectual-property" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Intellectual property
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dark Chat, including its software, interface, visual design, branding, and logos, is owned by us or our licensors. These terms allow you to use the service, but they do not transfer ownership to you.
                  </p>
                </div>
              </section>

              <section id="limitation-of-liability" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Limitation of liability
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    To the fullest extent permitted by law, Dark Chat is provided on an as-is basis. We do not make warranties that the service will meet every expectation or be free from errors.
                  </p>
                </div>
              </section>

              <section id="contact" className="space-y-6 pb-20 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Use, contact the Dark Chat support team through the available support channel.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span>(c) 2026 Dark Chat</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
