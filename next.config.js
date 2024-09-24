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
        ],
    }
}

module.exports = withNextIntl(nextConfig);