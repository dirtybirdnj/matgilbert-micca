import Link from "next/link"
import AuthorAvatar from "./AuthorAvatar"
const AuthorInfoSummary = ({authorData}) => {
	const {avatar, name, postsCount, href} = authorData.frontMatter
	return <div className="text-center">
		<Link href={href}>
			<AuthorAvatar avatar={avatar} size={180}/>
		</Link>
		
		<h3 className="text-2xl my-2"><Link href={href}>{name}</Link></h3>
		
		<div>{postsCount} Posts</div>
	</div>
}

export default AuthorInfoSummary