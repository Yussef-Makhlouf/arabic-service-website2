import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin-dashboard/', '/admin-api/', '/private/'],
        },
        sitemap:[
             'https://tebaservices.com/sitemap.xml',
              'https://www.tebaservices.com/sitemap.xml',
        ]
    }
}
