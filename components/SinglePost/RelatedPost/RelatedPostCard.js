import Link from "next/link"
import PostThumbnailWithLink from "@/components/PostThumbnailWithLink"

const RelatedPostCard = ({post}) => {
	const {frontMatter:{title, imgSrc, href}} = post
	return <div>
		<PostThumbnailWithLink
			imgSrc={imgSrc}
			href={href}
			sizes="(max-width: 639px) 95vw, (max-width: 1023px) 40vw, (max-width: 1480px) 20vw, 330px"
		/>
		<h2 className="text-xl mt-4 font-bold leading-snug" >
			<Link href={href}>{title}</Link>
		</h2>
	</div>
}

export default RelatedPostCard
