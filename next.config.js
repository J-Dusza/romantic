/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.ctfassets.net",
      "cdn2.steamgriddb.com",
      "reaganray.com",
      "static.wikia.nocookie.net",
    ],
    dangerouslyAllowSVG: true,
  },
  // i18n: {
  //   locales: ["pl", "en"],
  //   defaultLocale: "en",
  // },
};

module.exports = nextConfig;
