/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Older pages from when Elliot was pitched to every industry. Kept as
  // redirects so old links still land somewhere useful.
  async redirects() {
    return [
      { source: "/solutions", destination: "/product", permanent: true },
      { source: "/industries", destination: "/industries/real-estate", permanent: true },
    ];
  },
};

export default nextConfig;
