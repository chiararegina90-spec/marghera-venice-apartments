import type { Metadata } from "next";
import FoodGuidePage from "@/components/FoodGuidePage";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: 'Dove mangiare a Marghera e Venezia | Marghera Venice Apartments',
  description: 'Una guida personale a ristoranti, osterie, bacari, pizza, pasticcerie, gelaterie e delivery tra Marghera e Venezia.',
  alternates: languageAlternates('/dove-mangiare'),
};

export default function Page() {
  return <FoodGuidePage lang='it' />;
}
