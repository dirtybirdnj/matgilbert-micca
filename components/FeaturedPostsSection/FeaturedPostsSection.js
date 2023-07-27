import HeroPost from "./HeroPost"
import SidePost from "./SidePost"

const FeaturedPostsSection = ({featuredPosts, className = ""}) => {

	return <>
		<div className={`flex flex-wrap xl:flex-nowrap gap-10 ${className}`}>
			<HeroPost
				post={featuredPosts[0]}
				className="basis-full xl:basis-[100%] shrink-0"
			/>

		</div>
	</>
}

export default FeaturedPostsSection