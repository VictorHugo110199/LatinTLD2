/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  tailwind: true,
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  // serverBuildPath: "build/index.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  /* browserNodeBuiltinsPolyfill: {
    modules: {
      events: true,
      url: true,
      util: true,
      fs: true,
      http: true,
      https: true,
      zlib: true,
      stream: true,
      net: true,
      dns: true,
      os: true,
      path: true,
      crypto: true,
      tls: true,
      child_process: true,
    },
  }, */
};
