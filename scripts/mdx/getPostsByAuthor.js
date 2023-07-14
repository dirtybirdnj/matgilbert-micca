import getAllPosts from "./getAllPosts"
export default (author) => {
	const allPosts = getAllPosts()

	return allPosts.filter(p => p.frontMatter.authors.includes(author))
}