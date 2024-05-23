import {
  getAstroImageConfig,
  getDefaultImageConfig
} from "../image/shared.js";
import { emptyDir, writeJson } from "../lib/fs.js";
import { isServerLikeOutput } from "../lib/prerender.js";
import { getRedirects } from "../lib/redirects.js";
import {
  getSpeedInsightsViteConfig
} from "../lib/speed-insights.js";
import {
  getInjectableWebAnalyticsContent
} from "../lib/web-analytics.js";
const PACKAGE_NAME = "@astrojs/vercel/static";
function getAdapter() {
  return {
    name: PACKAGE_NAME,
    supportedAstroFeatures: {
      assets: {
        supportKind: "stable",
        isSquooshCompatible: true,
        isSharpCompatible: true
      },
      staticOutput: "stable",
      serverOutput: "unsupported",
      hybridOutput: "unsupported"
    },
    adapterFeatures: {
      edgeMiddleware: false,
      functionPerRoute: false
    }
  };
}
function vercelStatic({
  webAnalytics,
  speedInsights,
  imageService,
  imagesConfig,
  devImageService = "sharp"
} = {}) {
  let _config;
  return {
    name: "@astrojs/vercel",
    hooks: {
      "astro:config:setup": async ({ command, config, injectScript, updateConfig }) => {
        if (webAnalytics?.enabled) {
          injectScript(
            "head-inline",
            await getInjectableWebAnalyticsContent({
              mode: command === "dev" ? "development" : "production"
            })
          );
        }
        if (command === "build" && speedInsights?.enabled) {
          injectScript("page", 'import "@astrojs/vercel/speed-insights"');
        }
        const outDir = new URL("./.vercel/output/static/", config.root);
        updateConfig({
          outDir,
          build: {
            format: "directory",
            redirects: false
          },
          vite: {
            ...getSpeedInsightsViteConfig(speedInsights?.enabled)
          },
          ...getAstroImageConfig(
            imageService,
            imagesConfig,
            command,
            devImageService,
            config.image
          )
        });
      },
      "astro:config:done": ({ setAdapter, config }) => {
        setAdapter(getAdapter());
        _config = config;
        if (isServerLikeOutput(config)) {
          throw new Error(`${PACKAGE_NAME} should be used with output: 'static'`);
        }
      },
      "astro:build:start": async () => {
        await emptyDir(new URL("./.vercel/output/", _config.root));
      },
      "astro:build:done": async ({ routes }) => {
        await writeJson(new URL("./.vercel/output/config.json", _config.root), {
          version: 3,
          routes: [
            ...getRedirects(routes, _config),
            {
              src: `^/${_config.build.assets}/(.*)$`,
              headers: { "cache-control": "public, max-age=31536000, immutable" },
              continue: true
            },
            { handle: "filesystem" },
            ...routes.find((route) => route.pathname === "/404") ? [
              {
                src: `/.*`,
                dest: `/404.html`,
                status: 404
              }
            ] : []
          ],
          ...imageService || imagesConfig ? {
            images: imagesConfig ? {
              ...imagesConfig,
              domains: [...imagesConfig.domains, ..._config.image.domains],
              remotePatterns: [
                ...imagesConfig.remotePatterns ?? [],
                ..._config.image.remotePatterns
              ]
            } : getDefaultImageConfig(_config.image)
          } : {}
        });
      }
    }
  };
}
export {
  vercelStatic as default
};
