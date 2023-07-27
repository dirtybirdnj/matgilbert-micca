/** @type {import('next').NextConfig} */



const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false }
		return config
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		domains: ["ik.imagekit.io","res.cloudinary.com"],
		deviceSizes: [450, 600, 750, 828, 1080, 1200],
	},
}

module.exports = nextConfig
