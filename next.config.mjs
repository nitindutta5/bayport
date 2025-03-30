/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.coversandall.com.au'
          },
        ]
      }
};

export default nextConfig;
