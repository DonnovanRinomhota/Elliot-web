"use client";

import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import ElliotChat from "@/components/chat/ElliotChat";

export default function ElliotChatLauncher() {
  const { isOpen, toggleChat } = useElliotChat();

  return (
    <>
      {isOpen && <ElliotChat />}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? "Close Elliot chat" : "Open Elliot chat"}
        aria-expanded={isOpen}
        className={`fixed bottom-5 right-5 z-40 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet to-sky text-white shadow-glowLg transition-all duration-300 hover:scale-105 hover:shadow-glowLg active:scale-95 ${
          isOpen ? "hidden sm:flex" : "flex"
        }`}
        style={{ bottom: "max(1.25rem, calc(env(safe-area-inset-bottom) + 0.75rem))" }}
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path
              d="M4 6.5C4 5.12 5.12 4 6.5 4h9C16.88 4 18 5.12 18 6.5v6c0 1.38-1.12 2.5-2.5 2.5H9l-4 3v-3H6.5C5.12 15 4 13.88 4 12.5v-6z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-pulse animate-pulseDot" />
        </span>
      </button>
    </>
  );
}
