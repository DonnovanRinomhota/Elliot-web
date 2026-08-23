"use client";

import { useEffect, useRef } from "react";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import ElliotChatMessage, { TypingIndicator } from "@/components/chat/ElliotChatMessage";
import ElliotChatInput from "@/components/chat/ElliotChatInput";
import { SUGGESTED_PROMPTS } from "@/lib/demoResponses";

export default function ElliotChat() {
  const { messages, isTyping, sendMessage, closeChat } = useElliotChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      role="dialog"
      aria-label="Chat with Elliot"
      className="fixed inset-x-0 bottom-0 z-50 flex h-[80vh] w-full flex-col overflow-hidden rounded-t-2xl border-t border-surface-line bg-surface shadow-cardHover animate-fadeUp sm:inset-x-auto sm:bottom-24 sm:right-5 sm:h-[560px] sm:max-h-[75vh] sm:w-[380px] sm:rounded-lg sm:border [animation-duration:280ms]"
    >
      <div className="flex items-center justify-between border-b border-ink-line bg-ink px-4 py-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] sm:pt-3.5">
        <div className="flex items-center gap-2.5">
          <span className="presence-dot" />
          <div>
            <p className="text-sm font-medium text-paper">Elliot</p>
            <p className="text-xs text-paper/60">AI employee · online</p>
          </div>
        </div>
        <button
          onClick={closeChat}
          aria-label="Close chat"
          className="flex h-9 w-9 items-center justify-center rounded-md text-paper/70 hover:bg-white/10 hover:text-paper sm:h-auto sm:w-auto sm:p-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <ElliotChatMessage key={m.id} message={m} />
        ))}
        {isTyping && <TypingIndicator />}

        {messages.length === 1 && (
          <div className="flex flex-col gap-2 pt-2">
            {SUGGESTED_PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => sendMessage(p)}
                className="rounded-md border border-surface-line bg-card px-3 py-2.5 text-left text-[14px] text-slate-700 transition-colors hover:border-violet/40 hover:text-violet-600 sm:py-2 sm:text-[13px]"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pb-[env(safe-area-inset-bottom)]">
        <ElliotChatInput onSend={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}
