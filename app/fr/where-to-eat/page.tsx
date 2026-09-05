import type { Metadata } from "next";
import FoodGuidePage from "@/components/FoodGuidePage";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'Où manger à Marghera et Venise | Marghera Venice Apartments',
  description: 'Notre guide personnel des restaurants, osterie, bacari, pizzas, pâtisseries, gelaterias et livraisons à Marghera et Venise.',
  alternates: languageAlternates('/fr/where-to-eat'),
};

export default function Page() {
  return <FoodGuidePage lang='fr' />;
}
