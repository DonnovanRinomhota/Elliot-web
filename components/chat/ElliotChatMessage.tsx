import { ChatMessage } from "@/lib/types";

export default function ElliotChatMessage({ message }: { message: ChatMessage }) {
  const isElliot = message.role === "elliot";

  return (
    <div className={`flex ${isElliot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-4 py-2.5 text-[14px] leading-relaxed animate-fadeUp ${
          isElliot
            ? "bg-card border border-surface-line text-slate-900"
            : "bg-ink text-paper"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-lg border border-surface-line bg-card px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-typingDot"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
