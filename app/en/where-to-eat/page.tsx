import type { Metadata } from "next";
import FoodGuidePage from "@/components/FoodGuidePage";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'Where to eat in Marghera and Venice | Marghera Venice Apartments',
  description: 'A personal guide to restaurants, osterie, bacari, pizza, pastry shops, gelato and delivery in Marghera and Venice.',
  alternates: languageAlternates('/en/where-to-eat'),
};

export default function Page() {
  return <FoodGuidePage lang='en' />;
}
