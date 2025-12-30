/**
 * API Client for fetching data from the admin API
 * Used by the main website to fetch services, blogs, and FAQs
 * 
 * All functions are designed to return null/empty arrays on failure
 * to allow graceful fallback to static data during build
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin-api-five-pi.vercel.app/api';

// Generic fetch helper - returns null on failure instead of throwing
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            next: { revalidate: 60 }, // Cache for 60 seconds
            ...options,
        });

        if (!res.ok) {
            // Log only in non-production or when debugging
            if (process.env.NODE_ENV === 'development') {
                console.warn(`API returned ${res.status} for ${endpoint}`);
            }
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        // Log only in development
        if (process.env.NODE_ENV === 'development') {
            console.warn(`Fetch failed for ${endpoint}:`, error);
        }
        return null;
    }
}

// Services API
export async function getServices(): Promise<any[]> {
    const data = await fetchAPI<{ success: boolean; data: any[] }>('/services?active=true');
    return data?.data ?? [];
}

export async function getServiceBySlug(slug: string): Promise<any | null> {
    const data = await fetchAPI<{ success: boolean; data: any }>(`/services/${slug}`);
    return data?.data ?? null;
}

// Blogs API
export async function getBlogs(status?: 'published' | 'draft'): Promise<any[]> {
    const query = status ? `?status=${status}` : '';
    const data = await fetchAPI<{ success: boolean; data: any[] }>(`/blogs${query}`);
    return data?.data ?? [];
}

export async function getBlogBySlug(slug: string): Promise<any | null> {
    const data = await fetchAPI<{ success: boolean; data: any }>(`/blogs/${slug}`);
    return data?.data ?? null;
}

export async function getFeaturedBlogs(): Promise<any[]> {
    const data = await fetchAPI<{ success: boolean; data: any[] }>('/blogs?featured=true&status=published');
    return data?.data ?? [];
}

export async function getRelatedBlogs(slug: string, limit = 3): Promise<any[]> {
    const data = await fetchAPI<{ success: boolean; data: any[] }>(`/blogs/${slug}/related`);
    return (data?.data ?? []).slice(0, limit);
}

// FAQ API
export async function getFAQCategories(): Promise<any[]> {
    const data = await fetchAPI<{ success: boolean; data: any[] }>('/faq?active=true');
    return data?.data ?? [];
}

// Categories API
export async function getCategories(type?: 'service' | 'blog'): Promise<any[]> {
    const query = type ? `?type=${type}` : '';
    const data = await fetchAPI<{ success: boolean; data: any[] }>(`/categories${query}`);
    return data?.data ?? [];
}
