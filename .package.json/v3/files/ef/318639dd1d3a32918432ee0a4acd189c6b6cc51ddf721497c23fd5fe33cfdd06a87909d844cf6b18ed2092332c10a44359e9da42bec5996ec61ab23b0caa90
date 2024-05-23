import type { AstroConfig, RouteData } from 'astro';
interface VercelRoute {
    src: string;
    methods?: string[];
    dest?: string;
    headers?: Record<string, string>;
    status?: number;
    continue?: boolean;
}
export declare function escapeRegex(content: string): string;
export declare function getRedirects(routes: RouteData[], config: AstroConfig): VercelRoute[];
export {};
