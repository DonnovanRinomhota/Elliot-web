import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

export default function NotJustChatbot({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].notJustChatbot;
  return (
    <section className="border-b border-ink bg-ink py-24 text-white">
      <div className="container-content">
        <p className="mb-3 text-[13px] font-medium text-brass-light">{t.eyebrow}</p>
        <h2 className="text-[1.9rem] leading-[1.2] text-white md:text-[2.25rem]">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/60">{t.lead}</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8">
            <p className="text-[13px] font-medium text-white/50">{t.chatbotLabel}</p>
            <p className="mt-4 font-display text-2xl text-paper/80">{t.chatbotTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/50">{t.chatbotText}</p>
          </div>

          <div className="rounded-lg border border-white/20 bg-white/[0.04] p-8">
            <p className="text-[13px] font-medium text-brass-light">Elliot</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {t.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="cursor-default rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-paper transition-all duration-300">
                    {step}
                  </span>
                  {i < t.steps.length - 1 && <span className="text-white/25">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-paper/60">{t.elliotText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
