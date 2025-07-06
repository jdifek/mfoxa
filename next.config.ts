/* eslint-disable @typescript-eslint/no-require-imports */

const withNextIntl = require("next-intl/plugin")("./app/i18n/request.ts");

const nextConfig = {
  // experimental: {
  //   optimizeCss: false, // отключает lightningcss
  // },
  images: {
    domains: [
      "via.placeholder.com",
      "mfo.qissseee.tech"
    ],
  },
};

module.exports = withNextIntl(nextConfig);
