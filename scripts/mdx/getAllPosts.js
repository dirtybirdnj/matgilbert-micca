import getMDXFilesPaths from "./getMDXFilesPaths"
import getAuthorsData from "./getAuthorsData"
import getMDXContentAndFrontMatter from "./getMDXContentAndFrontMatter"
const getAllPosts = () => {
	const posts = getMDXFilesPaths().map( (filePath) => {
		const { content, frontMatter } = getMDXContentAndFrontMatter(filePath)

		if(!frontMatter.tags) frontMatter.tags = []
		frontMatter.tags = frontMatter.tags.map((t) => t.toLowerCase())

		if(!frontMatter.categories) frontMatter.categories = []
		frontMatter.categories = frontMatter.categories.map((c) => c.toLowerCase())
		
		frontMatter.authors = frontMatter.authors? frontMatter.authors : ["main"]
		const authorsData = getAuthorsData({authors: frontMatter.authors})

		frontMatter.authorsData = authorsData
		frontMatter.href = `/blog/${frontMatter.slug}`
		return {
			content,
			frontMatter,
			filePath,
			
		}
	})
	posts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date ))
	return posts
}
export default getAllPosts