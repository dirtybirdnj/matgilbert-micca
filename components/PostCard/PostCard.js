import Link from "next/link"
import PostThumbnailWithLink from "@/components/PostThumbnailWithLink"
import PostDataTop from "@/components/PostData/PostDataTop"
import PostAuthors from "@/components/PostData/PostAuthors/PostAuthors"

const PostCard = ({post}) => {
	const {frontMatter:{title, date, categories, imgSrc, summary, href, authorsData}, content} = post
	return <div>
		<PostThumbnailWithLink imgSrc={imgSrc} href={href}/>
		<PostDataTop className="mt-6" categories={categories} date={date} content={content} />
		<h2 className="text-2xl font-bold mt-4 leading-snug" >
			<Link href={href}>{title}</Link>
		</h2>
		<p className="mt-4">{summary}</p>

	</div>
}

export default PostCard
