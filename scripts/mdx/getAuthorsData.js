import fs from "fs"
import matter from "gray-matter"
import getAuthorsPaths from "./geAuthorsPaths"
import getSlugFromPath from "./getSlugFromPath"
import getAllPosts from "./getAllPosts"
const getAuthorsData = ({authors, withPostsCount = false}) => {
	const paths = getAuthorsPaths(authors)
	const authorsPostsCount = {}
	if(withPostsCount){
		const allPosts = getAllPosts()
		allPosts.forEach(post => {
			post.frontMatter.authorsData.forEach(authorData => {
				const crntAuthorSlug = authorData.frontMatter.slug
				if(!authorsPostsCount[crntAuthorSlug]) authorsPostsCount[crntAuthorSlug] = 0

				authorsPostsCount[crntAuthorSlug]++
			})
		})
	}


	const authorsData = paths.map((p) => {
		const source = fs.readFileSync(p, 'utf8')
		const { content, data: frontMatter } = matter(source)
		const slug = getSlugFromPath(p)
		frontMatter.slug = slug
		frontMatter.href = `/author/${slug}`
		if(withPostsCount) frontMatter.postsCount = authorsPostsCount[slug]? authorsPostsCount[slug] : 0
		return {content, frontMatter}
	})
	if(withPostsCount){
		authorsData.sort((a, b) => b.frontMatter.postsCount - a.frontMatter.postsCount)
	}
	return authorsData

}

export default getAuthorsData
