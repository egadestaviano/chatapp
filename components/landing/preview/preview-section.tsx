"use client";

import { useMemo, useState } from "react";
import { PreviewSidebar } from "@/components/landing/preview/preview-sidebar";
import { PreviewChatPane } from "@/components/landing/preview/preview-chat-pane";
import {
  MESSAGES_BY_SESSION,
  SESSIONS,
  type PreviewMessage,
  type SessionItem,
} from "@/components/landing/preview/preview-data";
import { SectionLabel } from "@/components/landing/sections/section-label";

export function PreviewSection() {
  const [sessions, setSessions] = useState<SessionItem[]>(SESSIONS);
  const [selectedSessionId, setSelectedSessionId] = useState(SESSIONS[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [messagesBySession, setMessagesBySession] =
    useState<Record<string, PreviewMessage[]>>(MESSAGES_BY_SESSION);

  const filteredSessions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return sessions;

    return sessions.filter((session) =>
      [session.name, session.message].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [search, sessions]);

  const selectedSession =
    sessions.find((session) => session.id === selectedSessionId) ?? sessions[0];

  const selectedMessages = messagesBySession[selectedSession.id] ?? [];

  function handleSelectSession(sessionId: string) {
    setSelectedSessionId(sessionId);
    setInputValue("");
    setSidebarOpen(false);
  }

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    const now = new Date();
    const message: PreviewMessage = {
      id: `${selectedSession.id}-${now.getTime()}`,
      text,
      time: now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      self: true,
    };

    setMessagesBySession((current) => ({
      ...current,
      [selectedSession.id]: [...(current[selectedSession.id] ?? []), message],
    }));
    setSessions((current) =>
      current.map((session) =>
        session.id === selectedSession.id
          ? { ...session, message: text, time: message.time }
          : session
      )
    );
    setInputValue("");
  }

  return (
    <section id="preview" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,660px)_minmax(320px,1fr)] lg:items-center">
        <div className="w-full max-w-[660px] overflow-hidden rounded-sm border border-primary/30 bg-card lg:justify-self-end shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-primary/20 bg-secondary/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
            </div>
            <div className="font-mono text-[9px] text-primary/40 uppercase tracking-widest">
              secure_session_v1.0
            </div>
          </div>
          <div className="relative grid h-[420px] grid-cols-1 sm:grid-cols-[200px_1fr]">
            {sidebarOpen && (
              <button
                type="button"
                className="absolute inset-0 z-20 bg-background/70 backdrop-blur-[1px] sm:hidden"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close conversations"
              />
            )}
            <PreviewSidebar
              sessions={filteredSessions}
              selectedSessionId={selectedSession.id}
              search={search}
              onSearchChange={setSearch}
              onSelectSession={handleSelectSession}
              onClose={() => setSidebarOpen(false)}
              mobileOpen={sidebarOpen}
            />
            <PreviewChatPane
              session={selectedSession}
              messages={selectedMessages}
              inputValue={inputValue}
              onInputChange={setInputValue}
              onSend={handleSend}
              onOpenSidebar={() => setSidebarOpen(true)}
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-[46px] uppercase">
            Pure <br />
            <span className="text-primary">Functionality.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted-foreground font-medium">
            Designed to feel instantly comfortable, with a clean conversation
            layout, clear message flow, and live typing activity that keeps
            every chat feeling active.
          </p>
          <div className="mt-8">
            <SectionLabel index="01" title="Live Preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
