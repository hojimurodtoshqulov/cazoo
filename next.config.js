/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["ru", "uz"],
        defaultLocale: "ru",
    },
    images: {
        domains: [' 10c72c27-767c-4998-967b-2da3e773b024.jprq.live'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
