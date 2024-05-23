export type VercelSpeedInsightsConfig = {
    enabled: boolean;
};
export declare function getSpeedInsightsViteConfig(enabled?: boolean): {
    define: Record<string, unknown>;
} | {
    define?: undefined;
};
/**
 * While Vercel adds the `PUBLIC_` prefix for their `VERCEL_` env vars by default, some env vars
 * like `VERCEL_ANALYTICS_ID` aren't, so handle them here so that it works correctly in runtime.
 */
export declare function exposeEnv(envs: string[]): Record<string, unknown>;
