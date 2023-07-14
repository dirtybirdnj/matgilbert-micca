import fs from 'fs'
import path from 'path'

export const AUTHORS_PATH = path.join(process.cwd(), "data", "authors")

const getAuthorsPaths = (slectedAuthors = [])=> {
	const dirContent = fs.readdirSync(AUTHORS_PATH)
	let authorsMdxFilesNames = dirContent.filter(a => /\.mdx?$/.test(a))
	if(slectedAuthors.length){
		authorsMdxFilesNames = authorsMdxFilesNames.filter(a => slectedAuthors.includes(a.replace(/\.mdx?$/, "")))
	}

	const fullMdxPaths = authorsMdxFilesNames.map((a) => path.join(AUTHORS_PATH, a))

	return fullMdxPaths
}

export default getAuthorsPaths