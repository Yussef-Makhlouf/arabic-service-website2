import { MetadataRoute } from 'next'
import { SERVICE_SLUGS } from '@/lib/service-data'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tebaservices.com'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/blog',
        '/faq',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic service routes
    const serviceRoutes = SERVICE_SLUGS.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        images: post.image ? [`${baseUrl}${post.image}`] : undefined,
    }))

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
