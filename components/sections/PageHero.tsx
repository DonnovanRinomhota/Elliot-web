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
    <section className="border-b border-surface-line bg-surface pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="container-content max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="text-[2.4rem] leading-[1.1] text-fg md:text-[3rem]">
          {title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-slate-600">{description}</p>
      </div>
    </section>
  );
}
