import fs from "fs"
import getAllTagsOrCats from "@/scripts/mdx/getAllTagsOrCats"
const cacheCategories = () => {
	const categories = getAllTagsOrCats("categories")
	fs.writeFile("public/categories.js",`export const categories = ${JSON.stringify(categories)}`, function (err) {
		if (err) return console.log(err);
	});
}

export default cacheCategories