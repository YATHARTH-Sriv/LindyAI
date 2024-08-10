/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname:"static.vecteezy.com"
          },
          {
            hostname:"e7.pngegg.com"
          },
          {
            hostname: "banner2.cleanpng.com"
          },
          {
            hostname: "w7.pngwing.com"
          },
          {
            hostname:"i.fbcd.co"
          }
        ]
    }
    
    
};

export default nextConfig;
