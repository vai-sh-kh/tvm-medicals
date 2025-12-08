import { MetadataRoute } from 'next'
import { APP_CONSTANTS } from '@/constants/app.constant'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${APP_CONSTANTS.website.url}/sitemap.xml`,
  }
}

