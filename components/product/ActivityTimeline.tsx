import { TimelineEvent } from "@/lib/types";

export default function ActivityTimeline({
  events,
  title = "Activity",
}: {
  events: TimelineEvent[];
  title?: string;
}) {
  return (
    <div className="rounded-lg border border-ink-line bg-ink p-5 text-[13.5px] md:p-6">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="presence-dot" />
        <span className="text-white/80">{title}</span>
      </div>
      <ol className="mt-3 space-y-0">
        {events.map((e, i) => (
          <li
            key={i}
            className="flex gap-4 py-2"
          >
            <span className="w-12 shrink-0 font-mono text-[12.5px] text-white/50">{e.time}</span>
            <div>
              <p className="text-white/90">{e.label}</p>
              {e.detail && <p className="mt-0.5 text-brass-light">{e.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
