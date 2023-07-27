/* eslint-disable import/no-anonymous-default-export */
export default {
	title: "matgilbert.com - creative engineering mixed with outdoors and cooking. Nerd things, fish things, art things.",
	description: "A blog for the random thoughts, ideas and creativity that comes out of Mat Gilbert. All the stuff that's fit to post and some other stuff that maybe shouldn't be public. Send it.",
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