import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:'Marghera Venice Apartments｜威尼斯附近公寓',template:'%s | Marghera Venice Apartments'},description:'位于威尼斯附近马尔盖拉的两套度假公寓，提供免费私人停车位、便捷公共交通，适合家庭与携宠出行。',openGraph:{locale:'zh_CN',siteName:'Marghera Venice Apartments',type:'website'},twitter:{card:'summary_large_image'}};
export default function LocaleLayout({children}:{children:React.ReactNode}){return children;}
