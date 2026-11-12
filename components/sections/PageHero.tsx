// The top of every inner page: the homepage's navy sky, smaller.
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
    <section className="relative overflow-hidden pb-20 pt-36 md:pb-24 md:pt-44">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#0a1830_0%,#13284a_55%,#0a1426_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(800px_380px_at_80%_10%,rgba(120,165,225,0.28),transparent_65%),radial-gradient(600px_300px_at_10%_100%,rgba(217,165,108,0.10),transparent_70%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="container-content relative max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 text-[2.6rem] font-medium leading-[1.06] text-white md:text-[3.6rem]">{title}</h1>
        <p className="mt-6 max-w-2xl text-[17.5px] leading-relaxed text-white/75">{description}</p>
      </div>
    </section>
  );
}
