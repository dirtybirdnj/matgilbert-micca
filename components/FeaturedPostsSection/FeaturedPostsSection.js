import HeroPost from "./HeroPost"
import SidePost from "./SidePost"

const FeaturedPostsSection = ({featuredPosts, className = ""}) => {

	return <>
		<div className={`flex flex-wrap xl:flex-nowrap gap-10 ${className}`}>
			<HeroPost
				post={featuredPosts[0]}
				className="basis-full xl:basis-[65%] shrink-0"
			/>
			<div className="flex flex-col md:flex-row xl:flex-col  gap-10 ">
				<SidePost className="flex-1" post={featuredPosts[1]} />
				<SidePost className="flex-1" post={featuredPosts[2]} />
			</div>
		</div>
	</>
}

export default FeaturedPostsSection