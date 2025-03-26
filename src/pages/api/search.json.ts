import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content'

export const GET: APIRoute = async ({ url }): Promise<Response> => {
    try {
        const query: string | null = url.searchParams.get('query');

        // Handle if query is not present
        if (!query) {
        return new Response(JSON.stringify({
            error: 'Query param if missing'
        }), {
            status: 400, // Bad Request
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const allBlogArticles: CollectionEntry<'blog'>[] = await getCollection('blog');

     // Filter articles based on query
     const searchResults = allBlogArticles.filter(article => {
        const titleMatch = article.data.title
        .toLowerCase()
        .includes(query.toLowerCase());
    
    
        const bodyMatch = article.body
        .toLowerCase()
        .includes(query.toLowerCase());
    
        const slugMatch = article.slug
        .toLowerCase()
        .includes(query.toLowerCase());
    
        return titleMatch || bodyMatch || slugMatch;
    });

    return new Response(JSON.stringify(searchResults, null, 2), {
        status: 200, 
        headers: {
            'Content-Type': 'application/json'
        }
    });

    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
};