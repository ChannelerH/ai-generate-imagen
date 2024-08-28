/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.freepik.com",
            },
        ],
    }
}

module.exports = withNextIntl(nextConfig);