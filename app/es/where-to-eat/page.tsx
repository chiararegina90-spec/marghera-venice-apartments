import type { Metadata } from "next";
import FoodGuidePage from "@/components/FoodGuidePage";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'Dónde comer en Marghera y Venecia | Marghera Venice Apartments',
  description: 'Nuestra guía personal de restaurantes, osterie, bacari, pizza, pastelerías, heladerías y delivery en Marghera y Venecia.',
  alternates: languageAlternates('/es/where-to-eat'),
};

export default function Page() {
  return <FoodGuidePage lang='es' />;
}
