import getAllPosts from "./getAllPosts"
const getAllTagsOrCats = (toGet = "tags") => {
	const posts = getAllPosts()

	const obj = {}

	posts.forEach((post) => {
		post.frontMatter[toGet].forEach((a) => {
			obj[a.toLowerCase()] = true
		})
	})

	return Object.keys(obj)
}

export default getAllTagsOrCats