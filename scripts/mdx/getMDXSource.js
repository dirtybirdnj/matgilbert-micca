import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"
import rehypePrism from "@mapbox/rehype-prism"
const getMDXSource = async (fileContent) => {
	const MDXSource = await serialize(fileContent, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
	})

	return MDXSource

}

export default getMDXSource