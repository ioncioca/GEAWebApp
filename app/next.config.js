/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    // Specify the root directory as the parent directory (where both app and backend are located)
    // This ensures that Next.js correctly handles routing.
    // You can adjust this path based on your project structure.
    basePath: '',
  };
