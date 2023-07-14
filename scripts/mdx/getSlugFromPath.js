import path from "path"
const getSlugFromPath = (filePath) => {

	const splitDir = filePath.split(path.sep)

	return formatSlug(splitDir[splitDir.length - 1])
	
}

const formatSlug = (slug) => {
	return slug.replace(/\.mdx?/i, '').toLowerCase()
}

export default getSlugFromPath