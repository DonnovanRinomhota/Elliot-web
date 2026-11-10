import { Fragment, ReactNode } from "react";
import { ChatMessage } from "@/lib/types";

// Elliot's replies can contain line breaks, **bold**, [label](url) links and
// bare links (property pages, Google Meet). Rendered as React elements, never
// as HTML, so nothing in a message can inject markup.
const TOKEN = /\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>()]+[^\s<>().,;:!?'"])/g;

function link(href: string, label: string, key: string) {
  return (
    <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 [overflow-wrap:anywhere]">
      {label}
    </a>
  );
}

export function renderChatText(text: string): ReactNode {
  return text.split("\n").map((line, i, lines) => {
    const parts: ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(line))) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      const key = `${i}-${m.index}`;
      if (m[1]) parts.push(<strong key={key}>{m[1]}</strong>);
      else if (m[2] && m[3]) parts.push(link(m[3], m[2], key));
      else if (m[4]) parts.push(link(m[4], m[4], key));
      last = m.index + m[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return (
      <Fragment key={i}>
        {parts}
        {i < lines.length - 1 && <br />}
      </Fragment>
    );
  });
}

export default function ElliotChatMessage({ message }: { message: ChatMessage }) {
  const isElliot = message.role === "elliot";

  return (
    <div className={`flex ${isElliot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-4 py-2.5 text-[14px] leading-relaxed animate-fadeUp ${
          isElliot
            ? "bg-card border border-surface-line text-slate-900"
            : "bg-ink text-paper dark:bg-ink-line"
        }`}
      >
        {isElliot ? renderChatText(message.text) : message.text}
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
