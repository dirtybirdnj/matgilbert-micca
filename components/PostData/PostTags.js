import Link from "next/link"
const PostTags = ({tags, className = ""}) => {
	if(!tags.length) return null
	return <div className={`flex flex-wrap gap-3 ${className}`}>
		{tags.map((t, i) => <Link href={`/tag/${t}`} key={t} className="text-xs font-semibold data-color rounded-full capitalize bg-gray-100 py-2 px-3 dark:bg-zinc-900 whitespace-nowrap" >
			{t}
		</Link>)}
	</div>
}
export default PostTags