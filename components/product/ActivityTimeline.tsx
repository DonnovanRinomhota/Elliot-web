import { TimelineEvent } from "@/lib/types";

export default function ActivityTimeline({
  events,
  title = "Activity",
}: {
  events: TimelineEvent[];
  title?: string;
}) {
  return (
    <div className="hover-lift rounded-lg border border-ink-line bg-ink p-5 font-mono text-[12.5px] hover:border-violet/40 hover:shadow-glow md:p-6">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="presence-dot" />
        <span className="text-paper/80">{title}</span>
      </div>
      <ol className="mt-3 space-y-0">
        {events.map((e, i) => (
          <li
            key={i}
            className="relative -mx-2 flex gap-4 rounded-md px-2 py-2 transition-colors duration-200 hover:bg-white/[0.05]"
          >
            <span className="w-12 shrink-0 text-white/35">{e.time}</span>
            <div>
              <p className="text-paper/90">{e.label}</p>
              {e.detail && <p className="mt-0.5 text-sky">{e.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
