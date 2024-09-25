/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.freepik.com",
            },
            {
                protocol: 'https',
                hostname: 'sfile.chatglm.cn',
                port: '',
                pathname: '/**', // 允许所有路径
            },
            {
                protocol: "https",
                hostname: "replicate.com",
            },
            {
                protocol: "https",
                hostname: "replicate.delivery",
            },
            {
                protocol: "https",
                hostname: "r2.flux1.ai",
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
            }
        ],
    }
}

module.exports = withNextIntl(nextConfig);