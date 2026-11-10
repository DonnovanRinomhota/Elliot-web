"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChatMessage, VisitorDetails } from "@/lib/types";
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
  /** The visitor's details, once given. */
  visitor: VisitorDetails | null;
  /** True while the chat is waiting for the details form. */
  needsDetails: boolean;
  /** Message to show above the details form (e.g. from the backend). */
  detailsNote: string | null;
  submitDetails: (details: VisitorDetails) => void;
}

const ElliotChatContext = createContext<ElliotChatContextValue | null>(null);

// Remembered in this browser, so a returning visitor isn't asked again.
const VISITOR_KEY = "elliot_visitor";

function loadVisitor(): VisitorDetails | null {
  try {
    const v = JSON.parse(localStorage.getItem(VISITOR_KEY) || "null");
    return v && v.name && (v.email || v.phone) ? v : null;
  } catch {
    return null;
  }
}

function saveVisitor(v: VisitorDetails) {
  try {
    localStorage.setItem(VISITOR_KEY, JSON.stringify(v));
  } catch {
    /* private mode: details still go with this visit's messages */
  }
}

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

  // Details are only asked for when the backend wants them (needs_contact).
  // The message waits in `pending` and is sent once the form is filled in.
  const [visitor, setVisitor] = useState<VisitorDetails | null>(null);
  const [needsDetails, setNeedsDetails] = useState(false);
  const [detailsNote, setDetailsNote] = useState<string | null>(null);
  const pending = useRef<string | null>(null);

  useEffect(() => {
    setVisitor(loadVisitor());
  }, []);

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((v) => !v), []);

  const deliver = useCallback(
    async (text: string, who: VisitorDetails | null) => {
      setIsTyping(true);
      try {
        const result = await sendChatMessage({
          history: messages,
          message: text,
          conversationId,
          contact: who,
        });
        setConversationId(result.conversationId);
        if (result.needsContact) {
          // The backend has no details for this chat: ask again, then resend.
          pending.current = text;
          setDetailsNote(result.text || null);
          setNeedsDetails(true);
          return;
        }
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

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      setMessages((prev) => [
        ...prev,
        { id: id(), role: "user", text: trimmed, createdAt: Date.now() },
      ]);

      // The site's own assistant answers straight away; it asks for contact
      // details itself when someone wants to book a call. If the backend
      // still wants details first (an agency account), it says so with
      // needs_contact and the form appears.
      await deliver(trimmed, visitor);
    },
    [visitor, deliver]
  );

  const submitDetails = useCallback(
    (details: VisitorDetails) => {
      setVisitor(details);
      saveVisitor(details);
      setNeedsDetails(false);
      setDetailsNote(null);
      const text = pending.current;
      pending.current = null;
      if (text) void deliver(text, details);
    },
    [deliver]
  );

  const value = useMemo(
    () => ({
      isOpen,
      openChat,
      closeChat,
      toggleChat,
      messages,
      isTyping,
      sendMessage,
      visitor,
      needsDetails,
      detailsNote,
      submitDetails,
    }),
    [isOpen, openChat, closeChat, toggleChat, messages, isTyping, sendMessage, visitor, needsDetails, detailsNote, submitDetails]
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
