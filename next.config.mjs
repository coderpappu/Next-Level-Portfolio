/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML files to out/, one per page,
  // ready to upload to the existing Apache hosting (see public/.htaccess).
  output: "export",
  // No image optimisation server on static hosting; images are pre-sized.
  images: { unoptimized: true },
  // /about is written as about.html; .htaccess maps the clean URL to it.
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
