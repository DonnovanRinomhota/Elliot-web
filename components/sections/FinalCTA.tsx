"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";

export default function FinalCTA() {
  const { openChat } = useElliotChat();

  return (
    <section className="bg-ink py-20 text-white">
      <div className="container-content text-center">
        <h2 className="text-[1.9rem] leading-[1.2] md:text-[2.4rem]">
          See Elliot working for your business.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/70">
          Book a short demo and we&apos;ll set Elliot up with a few of your
          own listings so you can try it yourself.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/book" variant="invert" size="lg">
            Book a demo
          </ButtonLink>
          <Button variant="invertGhost" size="lg" onClick={openChat}>
            Talk to Elliot
          </Button>
        </div>
      </div>
    </section>
  );
}
