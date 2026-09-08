"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ChatMessage } from "@/lib/types";
import { GREETING } from "@/lib/demoResponses";
import { sendChatMessage } from "@/services/elliotApi";

interface ElliotChatContextValue {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  messages: ChatMessage[];
  isTyping: boolean;
  sendMessage: (text: string) => Promise<void>;
}

const ElliotChatContext = createContext<ElliotChatContextValue | null>(null);

function id() {
  return Math.random().toString(36).slice(2, 10);
}

export function ElliotChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: id(), role: "elliot", text: GREETING, createdAt: Date.now() },
  ]);
  // Tracks the live-mode backend's conversation id across turns, so
  // multi-message context actually persists server-side instead of every
  // message being treated as a new conversation. Stays null in demo mode
  // (sendChatMessage never returns one there) with no effect on behavior.
  const [conversationId, setConversationId] = useState<string | null>(null);

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((v) => !v), []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMessage: ChatMessage = {
        id: id(),
        role: "user",
        text: trimmed,
        createdAt: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      try {
        const result = await sendChatMessage({
          history: messages,
          message: trimmed,
          conversationId,
        });
        setConversationId(result.conversationId);
        setMessages((prev) => [
          ...prev,
          { id: id(), role: "elliot", text: result.text, createdAt: Date.now() },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: id(),
            role: "elliot",
            text: "I'm having trouble responding right now — please try again in a moment, or book a demo and the team will follow up directly.",
            createdAt: Date.now(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [messages, conversationId]
  );

  const value = useMemo(
    () => ({ isOpen, openChat, closeChat, toggleChat, messages, isTyping, sendMessage }),
    [isOpen, openChat, closeChat, toggleChat, messages, isTyping, sendMessage]
  );

  return (
    <ElliotChatContext.Provider value={value}>
      {children}
    </ElliotChatContext.Provider>
  );
}

export function useElliotChat() {
  const ctx = useContext(ElliotChatContext);
  if (!ctx) {
    throw new Error("useElliotChat must be used within ElliotChatProvider");
  }
  return ctx;
}
