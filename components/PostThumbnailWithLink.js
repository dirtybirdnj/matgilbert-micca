import Link from "next/link"
import PostThumbnail from "./PostThumbnail"
const PostThumbnailWithLink = ({imgSrc, href, className = "", ...rest}) => {
	if(!imgSrc) return null
	return <Link href={href} className={`block ${className}`}>
			<PostThumbnail imgSrc={imgSrc} {...rest} />
	</Link>
}

export default PostThumbnailWithLink