import PostThumbnailWithLink from "@/components/PostThumbnailWithLink"
import PostDateAndReadingTime from "@/components/PostData/PostDataTop"
import PostAuthors from "@/components/PostData/PostAuthors/PostAuthors"
import PostTitle from "@/components/PostData/PostTitle"
import PostExcerpt from "@/components/PostData/PostExcerpt"
const HeroPost = ({post, className = ""}) => {
	const {frontMatter:{title, date, categories, imgSrc, summary, href, authorsData}, content} = post
	return <div className={`${className}`}>
		<PostThumbnailWithLink
			imgSrc={imgSrc}
			href={href}
			sizes="(max-width: 1279px) 95vw, 950px"
		/>

		<PostDateAndReadingTime
			className="mt-8"
			categories={categories}
			date={date}
			content={content}
		/>
		<PostTitle
			className="mt-4 text-2xl sm:text-4xl"
			title={title}
			href={href}
		/>
		<PostExcerpt summary={summary} className="mt-4 sm:text-lg"  />
		<PostAuthors className="mt-6" authorsData={authorsData} />
	</div>
}

export default HeroPost