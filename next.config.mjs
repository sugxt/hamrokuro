/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PB_URL: process.env.PB_URL,
        LOCAL_URL:process.env.LOCAL_URL,
      }
};

export default nextConfig;
