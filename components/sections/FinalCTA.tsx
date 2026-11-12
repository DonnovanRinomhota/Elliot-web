"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import { ElliotMark } from "@/components/ElliotLogoArt";
import { PRODUCT } from "@/lib/content/product";
import { UI, type Locale } from "@/lib/i18n";

// Same navy sky as the homepage's last section.
export default function FinalCTA({ locale = "en" }: { locale?: Locale }) {
  const { openChat } = useElliotChat();
  const t = PRODUCT[locale].finalCta;

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#071631_0%,#14325c_60%,#2b4f82_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_100%,rgba(196,222,255,0.35),transparent_70%)]" />
      <div className="container-content relative max-w-3xl text-center">
        <ElliotMark size={52} className="mx-auto" />
        <h2 className="mt-8 text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[3.4rem]">{t.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/75">{t.lead}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={UI[locale].bookHref} size="lg" arrow>
            {t.primary}
          </ButtonLink>
          <Button variant="secondary" size="lg" onClick={openChat}>
            {t.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
