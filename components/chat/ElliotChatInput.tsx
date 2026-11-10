"use client";

import { useState, FormEvent } from "react";

export default function ElliotChatInput({
  onSend,
  disabled,
  placeholder = "Ask Elliot anything…",
  inputId = "elliot-chat-input",
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  /** Unique per chat on the page (the live demo has its own). */
  inputId?: string;
}) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-surface-line bg-card p-3"
    >
      <label htmlFor={inputId} className="sr-only">
        Message Elliot
      </label>
      <input
        id={inputId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-md border border-surface-line bg-surface px-3 py-2.5 text-base text-fg placeholder:text-slate-400 focus:border-violet focus:outline-none md:text-sm"
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink text-paper disabled:opacity-40"
        aria-label="Send message"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2 8H14M14 8L9 3M14 8L9 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
