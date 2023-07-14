import PostThumbnailWithLink from "@/components/PostThumbnailWithLink"
import PostDateAndReadingTime from "@/components/PostData/PostDataTop"
import PostTitle from "@/components/PostData/PostTitle"
import PostExcerpt from "@/components/PostData/PostExcerpt"
const SidePost = ({post, className = ""}) => {
	const {frontMatter:{title, date, categories, imgSrc, summary, href}, content} = post
	return <div className={className}>
		<PostThumbnailWithLink
			imgSrc={imgSrc}
			href={href}
			sizes="(max-width: 767px) 95vw, (max-width: 1279px) 40vw, 450px"
		/>
		<PostDateAndReadingTime
			className="mt-6"
			categories={categories}
			date={date}
			content={content}
		/>
		<PostTitle className="mt-3 text-2xl" title={title} href={href} />
		<PostExcerpt className="mt-3" summary={summary} />
	</div>
}

export default SidePost