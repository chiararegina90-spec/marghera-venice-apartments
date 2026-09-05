import type { Metadata } from "next";
import FoodGuidePage from "@/components/FoodGuidePage";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'Essen in Marghera und Venedig | Marghera Venice Apartments',
  description: 'Unser persönlicher Guide zu Restaurants, Osterie, Bacari, Pizza, Pasticcerien, Gelato und Lieferservice in Marghera und Venedig.',
  alternates: languageAlternates('/de/where-to-eat'),
};

export default function Page() {
  return <FoodGuidePage lang='de' />;
}
