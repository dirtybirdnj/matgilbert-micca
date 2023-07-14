import getAllPosts from "./getAllPosts"
const getPostsWithTagOrCat = (tagOrCat, toGet = "tags") => {
	return getAllPosts().filter((post) => post.frontMatter[toGet].includes(tagOrCat))
}

export default getPostsWithTagOrCat