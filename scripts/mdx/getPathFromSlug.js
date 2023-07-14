import fs from "fs"
import path from "path"
import getSlugFromPath from "./getSlugFromPath"
const getPathFromSlug = ({dir = "data/posts", slug}) => {
	const dirPath = path.join(process.cwd(), dir)

	
	const dirContent = fs.readdirSync(dirPath)
	let filePath = ""
	for(let i = 0; i < dirContent.length; i++){
		if(/\.mdx?$/i.test(dirContent[i])){
			const crntFilePath = path.join(dirPath, dirContent[i])
			const crntSlug = getSlugFromPath(crntFilePath)
			if(crntSlug === slug){
				filePath = crntFilePath
				break
			}
		}
	}
	return filePath
}

export default getPathFromSlug