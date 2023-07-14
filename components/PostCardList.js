import PostCard from "./PostCard/PostCard"
const PostCardList =  ({posts}) => {
	return <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{posts.map((post, i) => <PostCard key={post.frontMatter.title} post={post} />)}
</div>
}

export default PostCardList