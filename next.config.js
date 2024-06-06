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
};

module.exports = nextConfig;
