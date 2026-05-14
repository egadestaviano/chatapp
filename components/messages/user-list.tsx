"use client";

import { useState, useMemo } from "react";
import { Inbox, Search, Plus, X, Users } from "lucide-react";
import { Avatar } from "./avatar";

interface Participant {
  id: string;
  name?: string | null;
  picture?: string | null;
  isOnline?: boolean;
}

type Session = {
  id: string;
  isGroup?: boolean;
  isAi?: boolean;
  title?: string | null;
  lastMessage?: string | null;
  lastMessageAt?: string | null;
  participants?: Participant[];
};

interface User {
  id: string;
  name?: string | null;
  picture?: string | null;
  isOnline?: boolean;
}

interface UserListProps {
  sessions: Session[];
  users: User[];
  selectedSessionId: string | null;
  onSelectSession: (sessionId: string) => void;
  onOpenNewChat?: () => void;
  onStartChat: (userId: string) => void;
  collapsed?: boolean;
  currentUserId?: string | null;
}

export function UserList({
  sessions,
  selectedSessionId,
  onSelectSession,
  onOpenNewChat,
  collapsed,
  currentUserId,
}: UserListProps) {
  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {
    const q = search.toLowerCase().trim();

    const matched = q
      ? sessions.filter((s) => {
          const title = s.title?.toLowerCase() ?? "";
          const lastMessage = s.lastMessage?.toLowerCase() ?? "";
          const participantNames =
            s.participants?.map((p) => p.name?.toLowerCase()).join(" ") ?? "";

          return (
            title.includes(q) ||
            lastMessage.includes(q) ||
            participantNames.includes(q)
          );
        })
      : sessions;

    return [...matched].sort((a, b) => {
      // AI session always at top
      if (a.isAi && !b.isAi) return -1;
      if (!a.isAi && b.isAi) return 1;

      const aTime = a.lastMessageAt ? new Date(a.lastMessageAt).getTime() : 0;
      const bTime = b.lastMessageAt ? new Date(b.lastMessageAt).getTime() : 0;
      return bTime - aTime;
    });
  }, [search, sessions]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-card">
      {/* New Chat Button */}
      {!collapsed && (
        <button
          onClick={onOpenNewChat}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition cursor-pointer duration-200"
          aria-label="New Chat"
          title="Start new chat"
        >
          <Plus size={24} />
        </button>
      )}

      {/* Header */}
      {!collapsed && (
        <div className="p-[calc(var(--spacing)*4.3)] border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
        </div>
      )}

      {/* SESSIONS LIST */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full">
        {filteredSessions.length === 0 ? (
          <div className="p-6 text-sm text-muted-foreground text-center">
            <Inbox className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
            <p className="font-medium">No conversations yet</p>
            <p className="text-xs mt-1">Click the + button to start chatting</p>
          </div>
        ) : (
          filteredSessions.map((session) => {
            const active = selectedSessionId === session.id;
            const other = session.isGroup
              ? null
              : session.participants?.find((p) => p.id !== currentUserId);

            const displayName = session.isGroup
              ? (session.title ?? "Group Chat")
              : (other?.name ?? "Unknown User");

            const timeStr = session.lastMessageAt
              ? new Date(session.lastMessageAt).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "";

            return (
              <div
                key={session.id}
                className={`w-full px-4 py-3 flex items-center gap-3 border-b border-border/30 transition-colors duration-150
                  ${
                    active
                      ? "bg-primary/10 border-border/10"
                      : "hover:bg-muted/40"
                  }
                `}
              >
                {/* Avatar */}
                {!session.isGroup && other ? (
                  <button
                    type="button"
                    onClick={() => onSelectSession(session.id)}
                    className="shrink-0 cursor-pointer"
                  >
                    <Avatar
                      name={other.name}
                      picture={other.picture}
                      size={48}
                    />
                  </button>
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-muted text-foreground border border-border shrink-0"
                  >
                    <Users className="w-5 h-5" />
                  </div>
                )}

                {/* Info */}
                {!collapsed && (
                  <button
                    type="button"
                    onClick={() => onSelectSession(session.id)}
                    className="flex-1 text-left min-w-0 py-1 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className={`font-semibold text-[15px] truncate ${active ? "text-primary" : "text-foreground"}`}>
                        {displayName}
                      </p>
                      {session.isAi ? (
                        <span className="text-[10px] font-bold text-primary px-1.5 py-0.5 bg-primary/10 rounded tracking-wider leading-none">
                          AI
                        </span>
                      ) : (
                        timeStr && (
                          <span className="text-[10px] font-mono text-muted-foreground shrink-0">
                            {timeStr}
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <p className="text-sm text-muted-foreground truncate">
                        {session.lastMessage || (session.isGroup ? "Group chat" : "No messages yet")}
                      </p>
                      {!session.isAi && !session.isGroup && other?.isOnline && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      )}
                    </div>
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
