import type { AstroIntegration } from 'astro';
import { type DevImageService, type VercelImageConfig } from '../image/shared.js';
import { type VercelSpeedInsightsConfig } from '../lib/speed-insights.js';
import { type VercelWebAnalyticsConfig } from '../lib/web-analytics.js';
export interface VercelStaticConfig {
    webAnalytics?: VercelWebAnalyticsConfig;
    /**
     * @deprecated This option lets you configure the legacy speed insights API which is now deprecated by Vercel.
     *
     * See [Vercel Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart) for instructions on how to use the library instead.
     *
     * https://vercel.com/docs/speed-insights/quickstart
     */
    speedInsights?: VercelSpeedInsightsConfig;
    imageService?: boolean;
    imagesConfig?: VercelImageConfig;
    devImageService?: DevImageService;
}
export default function vercelStatic({ webAnalytics, speedInsights, imageService, imagesConfig, devImageService, }?: VercelStaticConfig): AstroIntegration;
