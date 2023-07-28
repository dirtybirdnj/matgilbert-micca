import PostTitle from "@/components/PostData/PostTitle"
import PostDataTop from "@/components/PostData/PostDataTop"
import PostThumbnail from "@/components/PostThumbnail"
import PostAuthors from "@/components//PostData/PostAuthors/PostAuthors"
import Figure from '../Figure/Figure'

const PostHeader = ({frontMatter, content}) => {
	return <>

		<PostTitle className="text-3xl sm:text-[2.5rem] mt-6" title={frontMatter.title} />
		<PostDataTop className="text-[15px] mt-3 mb-3" categories={frontMatter.categories} date={frontMatter.date} content={content} />
		<Figure
			src={frontMatter.imgSrc}
			alt="Post thumbnail"
			style={{objectFit: "cover"}}
		/>
	{/*
		<PostThumbnail
			className="mt-12"
			imgSrc={frontMatter.imgSrc}
			sizes="(max-width: 767px) 95vw, 800px"
		/>
		*/}

	</>
}

export default PostHeader