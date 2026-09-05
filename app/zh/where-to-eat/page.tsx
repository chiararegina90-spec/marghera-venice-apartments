import type { Metadata } from "next";
import FoodGuidePage from "@/components/FoodGuidePage";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: '马尔盖拉和威尼斯美食指南 | Marghera Venice Apartments',
  description: '我们整理的马尔盖拉与威尼斯餐饮指南：餐厅、osterie、bacari、披萨、甜点、冰淇淋与外送选择。',
  alternates: languageAlternates('/zh/where-to-eat'),
};

export default function Page() {
  return <FoodGuidePage lang='zh' />;
}
