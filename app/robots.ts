import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/guest', '/guest-content'] },
    sitemap: 'https://www.margheraveniceapartments.com/sitemap.xml',
    host: 'https://www.margheraveniceapartments.com',
  };
}
