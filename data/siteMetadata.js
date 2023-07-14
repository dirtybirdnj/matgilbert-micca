export default {
	title: "matgilbert.com - creative engineering mixed with outdoors and cooking. Nerd things, fish things, art things.",
	description: "A blog created with Next.js and Tailwind.css",
	name: "matgilbert.com",
	socials: {
		github: "https://github.com/dirtybirdnj",
		youtube: "https://www.youtube.com/channel/UCEpKM9PeTruK-BK5iwIIsyw",
		linkedin: "https://www.linkedin.com/in/matgilbertvt/	",
		email: "mat@vtapi.co"
	},
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
	logo: "/logo.svg",
	logoDark: "/logo-dark.svg",
	socialBanner: "https://ik.imagekit.io/nextjs23/micca/elise-wilcox-b7GNy1-pgCM-unsplash.jpg",
	comments: {
		disqusConfig: {
			shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
		}
	},
	POSTS_PER_PAGE: 6,
	RELATED_POSTS_COUNT: 4
}