import Avatar from "./Avatar"
import Link from "next/link"
const PostAuthors = ({authorsData, className = ""}) => {
	return <div className={`flex gap-2 items-center ${className}`}>
		<div className="flex">
			{authorsData.map(({frontMatter: {avatar, href, name}}, i) => <Avatar key={name} {...{avatar, href, name}}  />)}
		</div>
		<div>
		{authorsData.map(({frontMatter: {name, href}}, i) => <Link
			key={i}
			href={href}
			className="text-sm font-medium heading-color"
		>
			{name}{i !== authorsData.length-1 && ", "}
			
		</Link>)}
		</div>
	</div>
}

export default PostAuthors