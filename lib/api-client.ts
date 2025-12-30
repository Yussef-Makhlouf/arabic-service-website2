/**
 * API Client for fetching data from the admin API
 * Used by the main website to fetch services, blogs, and FAQs
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Generic fetch helper
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            next: { revalidate: 60 }, // Cache for 60 seconds
            ...options,
        });

        if (!res.ok) {
            console.error(`API Error ${res.status} for ${endpoint}:`, await res.text());
            throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`Fetch failed for ${endpoint}:`, error);
        throw error;
    }
}

// Services API
export async function getServices() {
    const data = await fetchAPI<{ success: boolean; data: any[] }>('/services?active=true');
    return data.data;
}

export async function getServiceBySlug(slug: string) {
    const data = await fetchAPI<{ success: boolean; data: any }>(`/services/${slug}`);
    return data.data;
}

// Blogs API
export async function getBlogs(status?: 'published' | 'draft') {
    const query = status ? `?status=${status}` : '';
    const data = await fetchAPI<{ success: boolean; data: any[] }>(`/blogs${query}`);
    return data.data;
}

export async function getBlogBySlug(slug: string) {
    const data = await fetchAPI<{ success: boolean; data: any }>(`/blogs/${slug}`);
    return data.data;
}

export async function getFeaturedBlogs() {
    const data = await fetchAPI<{ success: boolean; data: any[] }>('/blogs?featured=true&status=published');
    return data.data;
}

export async function getRelatedBlogs(slug: string, limit = 3) {
    try {
        const data = await fetchAPI<{ success: boolean; data: any[] }>(`/blogs/${slug}/related`);
        return data.data.slice(0, limit);
    } catch {
        return [];
    }
}

// FAQ API
export async function getFAQCategories() {
    const data = await fetchAPI<{ success: boolean; data: any[] }>('/faq?active=true');
    return data.data;
}

// Categories API
export async function getCategories(type?: 'service' | 'blog') {
    const query = type ? `?type=${type}` : '';
    const data = await fetchAPI<{ success: boolean; data: any[] }>(`/categories${query}`);
    return data.data;
}
