import AuthorAvatar from "./AuthorAvatar"
const AuthorInfoSummary = ({authorData, className}) => {
	const {avatar, name, bio, postsCount, href} = authorData.frontMatter
	return <div className={`max-w-[450px] text-center mx-auto ${className}`}>
			<AuthorAvatar avatar={avatar} />
		
		<h3 className="text-3xl my-3">{name}</h3>
		
		<div className="mb-3">{postsCount} Posts</div>
		<p>{bio}</p>
	</div>
}

export default AuthorInfoSummary