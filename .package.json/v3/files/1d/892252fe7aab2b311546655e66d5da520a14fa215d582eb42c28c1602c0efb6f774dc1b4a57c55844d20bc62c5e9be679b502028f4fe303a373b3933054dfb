function getSpeedInsightsViteConfig(enabled) {
  if (enabled) {
    return {
      define: exposeEnv(["VERCEL_ANALYTICS_ID"])
    };
  }
  return {};
}
function exposeEnv(envs) {
  const mapped = {};
  envs.filter((env) => process.env[env]).forEach((env) => {
    mapped[`import.meta.env.PUBLIC_${env}`] = JSON.stringify(process.env[env]);
  });
  return mapped;
}
export {
  exposeEnv,
  getSpeedInsightsViteConfig
};
