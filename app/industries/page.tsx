import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Card";
import {
  IconBuilding,
  IconPeople,
  IconBriefcase,
  IconHeartPulse,
  IconCart,
  IconGraduation,
  IconBank,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Industries",
  description: "Elliot is configurable across industries, with real estate as the first fully built-out vertical.",
};

const industries = [
  { name: "Real Estate", href: "/industries/real-estate", live: true, Icon: IconBuilding },
  { name: "Recruitment", href: "/industries", live: false, Icon: IconPeople },
  { name: "Professional Services", href: "/industries", live: false, Icon: IconBriefcase },
  { name: "Healthcare", href: "/industries", live: false, Icon: IconHeartPulse },
  { name: "E-commerce", href: "/industries", live: false, Icon: IconCart },
  { name: "Education", href: "/industries", live: false, Icon: IconGraduation },
  { name: "Financial Services", href: "/industries", live: false, Icon: IconBank },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="One platform, configured per industry."
        description="Elliot's knowledge, tools and workflows are shaped around the industry it's deployed in. Real estate is live today; more verticals are on the way."
      />

      <section className="border-b border-surface-line bg-surface py-20">
        <div className="reveal container-content grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) =>
            ind.live ? (
              <Link
                key={ind.name}
                href={ind.href}
                className="group hover-lift rounded-lg border border-surface-line bg-card p-6 shadow-card hover:border-violet/40 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-violet to-sky text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <ind.Icon className="h-5 w-5" />
                  </span>
                  <Badge tone="pulse">Live</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg text-fg transition-colors duration-300 group-hover:text-violet-600">
                  {ind.name}
                </h3>
                <p className="mt-1 text-sm text-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  See the workflow →
                </p>
              </Link>
            ) : (
              <div
                key={ind.name}
                className="hover-lift rounded-lg border border-surface-line bg-surface-dim p-6 transition-colors duration-300 hover:border-violet/20"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-200/60 text-slate-400">
                    <ind.Icon className="h-5 w-5" />
                  </span>
                  <Badge tone="neutral">Coming soon</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg text-slate-500">{ind.name}</h3>
              </div>
            )
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
