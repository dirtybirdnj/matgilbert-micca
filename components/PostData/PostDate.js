import { getPostDate } from "@/scripts/posts/getPostTime"
const PostDate = ({date, className = ""}) => {
	if(!date) return null
	return <span className={`whitespace-nowrap ${className}`}>{getPostDate(date)}</span>
}

export default PostDate