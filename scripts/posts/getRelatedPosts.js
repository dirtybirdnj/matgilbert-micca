import getPostsWithTagOrCat from "@/scripts/mdx/getPostsWithTagOrCat"
import siteMetadata from "@/data/siteMetadata";
const getRelatedPosts = (crntPost) => {
	const {frontMatter:{categories, tags, slug: crntPostSlug}} = crntPost

	const postsMap = new Map();

	categories.forEach(c => {
		const posts = getPostsWithTagOrCat(c, "categories")
		posts.forEach(p => {
			if(!postsMap.has(p.frontMatter.slug)) postsMap.set(p.frontMatter.slug, p)
		})
	})
	tags.forEach(t => {
		const posts = getPostsWithTagOrCat(t)
		posts.forEach(p => {
			if(!postsMap.has(p.frontMatter.slug)) postsMap.set(p.frontMatter.slug, p)
		})
	});

	postsMap.delete(crntPostSlug)

	const allRelatedPosts = [...postsMap.values()]

	// randomize posts order
	allRelatedPosts.sort(() => Math.random() > 0.5? 1 : -1)

	return allRelatedPosts.slice(0, siteMetadata.RELATED_POSTS_COUNT)
	
}

export default getRelatedPosts