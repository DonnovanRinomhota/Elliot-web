export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-[2.1rem] leading-[1.15] tracking-tight text-fg md:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  );
}
