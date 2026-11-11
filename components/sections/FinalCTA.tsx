"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import { PRODUCT } from "@/lib/content/product";
import { UI, type Locale } from "@/lib/i18n";

export default function FinalCTA({ locale = "en" }: { locale?: Locale }) {
  const { openChat } = useElliotChat();
  const t = PRODUCT[locale].finalCta;

  return (
    <section className="bg-ink py-20 text-white">
      <div className="container-content text-center">
        <h2 className="text-[1.9rem] leading-[1.2] md:text-[2.4rem]">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/70">
          {t.lead}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={UI[locale].bookHref} variant="invert" size="lg">
            {t.primary}
          </ButtonLink>
          <Button variant="invertGhost" size="lg" onClick={openChat}>
            {t.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
