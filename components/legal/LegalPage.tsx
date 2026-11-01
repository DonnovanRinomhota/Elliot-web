// Shared layout for the Privacy Policy and Terms, in either language.
// Content is plain data: a paragraph is a string, a bullet list is a string[].

export type LegalSection = { h: string; body: (string | string[])[] };

export type LegalDoc = {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="border-b border-surface-line bg-surface pt-14 pb-12 md:pt-20">
        <div className="container-content max-w-3xl">
          <p className="eyebrow mb-3">{doc.eyebrow}</p>
          <h1 className="text-[2.4rem] leading-[1.1] text-fg md:text-[3rem]">{doc.title}</h1>
          <p className="mt-4 text-sm text-slate-600">
            {doc.updatedLabel}: {doc.updated}
          </p>
          <p className="mt-6 text-[16px] leading-relaxed text-slate-700">{doc.intro}</p>
        </div>
      </section>

      <section className="bg-card py-14">
        <div className="container-content max-w-3xl">
          <ol className="space-y-10">
            {doc.sections.map((s, i) => (
              <li key={s.h}>
                <h2 className="text-[1.25rem] leading-snug text-fg">
                  <span className="mr-2 text-brass-dark dark:text-brass-light">{i + 1}.</span>
                  {s.h}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
                  {s.body.map((b, j) =>
                    Array.isArray(b) ? (
                      <ul key={j} className="list-disc space-y-1.5 pl-5 marker:text-brass">
                        {b.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{b}</p>
                    ),
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
