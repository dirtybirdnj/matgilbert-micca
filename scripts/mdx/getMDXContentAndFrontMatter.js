import fs from "fs"
import matter from "gray-matter"
import getSlugFromPath from "./getSlugFromPath"
const getMDXContentAndFrontMatter = (filePath) => {
	const source = fs.readFileSync(filePath, 'utf8')
	const { content, data: frontMatter } = matter(source)
	const slug = getSlugFromPath(filePath)

	frontMatter.slug = slug

	return {content, frontMatter}
}

export default getMDXContentAndFrontMatter