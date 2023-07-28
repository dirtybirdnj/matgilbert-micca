import { MDXRemote } from "next-mdx-remote"
import Figure from "./Figure/Figure"
import Gallery from "react-photo-gallery"

const MDXBody = ({MDXSource, className = ""}) => {
	return <div className={`prose sm:prose-lg max-w-none dark:prose-invert prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 ${className}`}>
		<MDXRemote
			components={{
				Figure,
				Gallery
			}}
			{...MDXSource}
		/>
	</div>
}

export default MDXBody