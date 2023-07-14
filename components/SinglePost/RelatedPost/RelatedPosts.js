import RelatedPostCard from "./RelatedPostCard"
import SectionTitle from "@/components/SectionTitle"
const RelatedPosts = ({relatedPosts, className = ""}) => {
	return <div className={` ${className}`}>
		<SectionTitle title="You might also like" />
		
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{
				relatedPosts.map((post, i) => <RelatedPostCard key={post.frontMatter.title} post={post} />)
			}
		</div>
	</div>
}

export default RelatedPosts