import PostTitle from "@/components/PostData/PostTitle"
import PostDataTop from "@/components/PostData/PostDataTop"
import PostThumbnail from "@/components/PostThumbnail"
import PostAuthors from "@/components//PostData/PostAuthors/PostAuthors"
const PostHeader = ({frontMatter, content}) => {
	return <>
		<PostDataTop className="text-[15px]" categories={frontMatter.categories} date={frontMatter.date} content={content} />
		<PostTitle className="text-3xl sm:text-[2.5rem] mt-6" title={frontMatter.title} />
		<PostAuthors authorsData={frontMatter.authorsData} className="mt-4" />
		<PostThumbnail
			className="mt-12"
			imgSrc={frontMatter.imgSrc}
			sizes="(max-width: 767px) 95vw, 800px"
		/>

	</>
}

export default PostHeader