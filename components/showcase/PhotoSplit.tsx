import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

/** A photograph beside text: real estate context, never product evidence. */
export default function PhotoSplit({ src, alt, children, reverse = false, className = "", imageClassName = "aspect-[4/3]" }: { src: StaticImageData; alt: string; children: ReactNode; reverse?: boolean; className?: string; imageClassName?: string }) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${className}`}>
      <div className={`relative overflow-hidden rounded-[28px] shadow-[0_40px_80px_-44px_rgba(5,20,50,0.75)] ${imageClassName} ${reverse ? "lg:order-2" : ""}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(6,20,45,0.25))]" />
      </div>
      <div>{children}</div>
    </div>
  );
}
