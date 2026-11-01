import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", pl: "/pl" } },
};

export default function Page() {
  return <HomePage locale="en" />;
}
