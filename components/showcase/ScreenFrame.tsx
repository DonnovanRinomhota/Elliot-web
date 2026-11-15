import Image from "next/image";
import { SCREEN_IMAGES, type ScreenKey } from "@/lib/content/screens";

/** A real dashboard screenshot in a quiet browser frame. Never stretched. */
export default function ScreenFrame({ screen, alt, priority = false, sizes = "(min-width: 1280px) 1100px, 100vw", className = "" }: { screen: ScreenKey; alt: string; priority?: boolean; sizes?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[18px] border border-white/15 bg-[#0a1a36] shadow-[0_40px_80px_-40px_rgba(2,10,30,0.9),0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}>
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 rounded-md bg-white/[0.06] px-3 py-0.5 text-[11px] text-white/45">app.getelliot.eu</span>
      </div>
      <Image src={SCREEN_IMAGES[screen]} alt={alt} priority={priority} sizes={sizes} placeholder="blur" className="block h-auto w-full" />
    </div>
  );
}
