const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
  // i18n,
  // reactStrictMode: true,

  // webpack(config, { isServer, dev }) {
  //   config.experiments = {
  //     asyncWebAssembly: true,
  //     layers: true,
  //   };

  //   return config;
  // },
};

module.exports = nextConfig;
