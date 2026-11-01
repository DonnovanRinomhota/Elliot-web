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
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-[1.9rem] leading-[1.2] text-fg md:text-[2.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  );
}
