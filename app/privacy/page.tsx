"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionLabel } from "@/components/landing/sections/section-label";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const SECTIONS = [
  "Information we collect",
  "How we use information",
  "Sharing and disclosure",
  "Data retention",
  "Security",
  "Contact"
];

export default function PrivacyPage() {
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
            <SectionLabel index="01" title="Privacy" className="mb-8" />
            
            <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter mb-4">
              Privacy <span className="text-primary">Policy.</span>
            </h1>
            
            <p className="text-muted-foreground font-mono text-sm mb-12">
              Last updated: May 9, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-16">
              <section>
                <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                  This page explains what information Dark Chat collects, why we use it, and the choices you have when using the service.
                </p>
              </section>

              <section id="information-we-collect" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Information we collect
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We collect the information needed to create, secure, and maintain your Dark Chat account. This may include your name, email address, password credentials, profile details, avatar, account settings, and any information you choose to add to your profile.
                  </p>
                  <p>
                    When you use Dark Chat, we process messages, conversation records, participant information, timestamps, delivery status, and other metadata that helps the app send, receive, organize, and display your chats correctly.
                  </p>
                  <p>
                    We may also collect technical information such as device type, browser, IP address, session identifiers, authentication activity, and basic usage events. This information helps us understand whether the service is working properly and whether suspicious activity is taking place.
                  </p>
                </div>
              </section>

              <section id="how-we-use-information" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> How we use information
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use your information to provide the core messaging experience, including account access, chat delivery, conversation history, user presence, profile display, and basic personalization across the app.
                  </p>
                  <p>
                    Your information also helps us protect the service. For example, we may use login records, device information, and account activity to detect unauthorized access, prevent abuse, investigate errors, and keep Dark Chat reliable for everyone.
                  </p>
                  <p>
                    We may use your email address to send essential account messages such as verification links, password reset instructions, security alerts, product notices, or updates related to changes in our policies.
                  </p>
                </div>
              </section>

              <section id="sharing-and-disclosure" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Sharing and disclosure
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We do not sell your personal information. We also do not share your private messages with advertisers or unrelated third parties for their own marketing purposes.
                  </p>
                  <p>
                    We may share limited information with trusted service providers that help us run Dark Chat, such as hosting providers, database services, authentication systems, analytics tools, and infrastructure monitoring vendors.
                  </p>
                </div>
              </section>

              <section id="data-retention" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Data retention
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We keep account information for as long as your account remains active or as long as needed to provide the service. Message data and conversation metadata may be retained so your chat history remains available when you return to the app.
                  </p>
                </div>
              </section>

              <section id="security" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Security
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, alteration, or disclosure.
                  </p>
                  <p>
                    No online service can guarantee absolute security. You can help protect your account by using a strong password and signing out on shared devices.
                  </p>
                </div>
              </section>

              <section id="contact" className="space-y-6 pb-20 scroll-mt-32">
                <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="opacity-20">/</span> Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, contact the Dark Chat support team through the available support channel.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span>(c) 2026 Dark Chat</span>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
        </div>
      </footer>
    </div>
  );
}
