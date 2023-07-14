import Link from "next/link"
const PostCategories = ({categories}) => {
	if(!categories || !categories.length) return null
	return <div className="flex flex-wrap gap-3">
		{categories.map((c, i) => <Link href={`/category/${c}`} key={c} className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">
			{c}
		</Link>)}
	</div>
}
export default PostCategories