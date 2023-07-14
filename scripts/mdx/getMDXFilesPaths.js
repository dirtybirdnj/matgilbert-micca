import fs from "fs"
import path from "path"

const getMDXFilesPaths = (dir = "data/posts") => {
	const dirPath = path.join(process.cwd(), dir)
	const filePaths = []

	const dirContent = fs.readdirSync(dirPath)
	for(let i = 0; i < dirContent.length; i++){
		if(/\.mdx?$/i.test(dirContent[i])){
			filePaths.push(path.join(dirPath, dirContent[i]))
		}
	}
	
	return filePaths
}

export default getMDXFilesPaths