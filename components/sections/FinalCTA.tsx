"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";

export default function FinalCTA() {
  const { openChat } = useElliotChat();

  return (
    <section className="bg-ink py-28 text-paper">
      <div className="container-content text-center">
        <h2 className="font-display text-[2.25rem] leading-[1.1] tracking-tight md:text-[3rem]">
          Give your business an <em className="italic text-violet">AI employee.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-paper/60">
          Let Elliot handle the repetitive work so your team can focus on the
          work that matters.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button variant="invert" size="lg" onClick={openChat}>
            Talk to Elliot
          </Button>
          <ButtonLink href="/demo" variant="invertGhost" size="lg">
            Book a Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
