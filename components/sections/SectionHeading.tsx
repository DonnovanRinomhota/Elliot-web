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
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${align === "center" ? "eyebrow-center text-slate-600" : ""}`}>{eyebrow}</p>}
      <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[3rem]">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}
