export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-surface pt-16 pb-16 md:pt-20 md:pb-20">
      <div
        aria-hidden="true"
        className="mesh-bg pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[900px] -translate-x-1/2 animate-blobFloat opacity-50"
      />
      <div className="container-content relative max-w-2xl animate-fadeUp">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="font-display text-[2.5rem] leading-[1.1] tracking-tight text-fg md:text-[3rem]">
          {title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-slate-600">{description}</p>
      </div>
    </section>
  );
}
