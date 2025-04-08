/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [{
            hostname : "i.ibb.co",
            protocol : "https"
        }]
    }
};

export default nextConfig;
