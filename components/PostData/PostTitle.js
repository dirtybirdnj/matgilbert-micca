import Link from "next/link"
const PostTitle = ({title, href, className = ""}) => {
	return <h2 className={`font-bold leading-snug ${className}`} >
	{href? <Link href={href}>{title}</Link> : title}
</h2>
}

export default PostTitle