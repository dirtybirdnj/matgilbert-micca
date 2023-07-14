import getAllPosts from "@/scripts/mdx/getAllPosts"
import PostCardList from "@/components/PostCardList"
import Pagination from "@/components/Pagination"
import calcPaginationProps from "@/scripts/mdx/calcPaginationProps"
import SEO from "@/components/SEO"
import MainContainer  from "@/components/MainContainer"
import getPostsWithTagOrCat from "@/scripts/mdx/getPostsWithTagOrCat"
import FeaturedPostsSection from "@/components/FeaturedPostsSection/FeaturedPostsSection"
import cacheCategories from "@/scripts/posts/cacheCategories"
import SectionTitle from "@/components/SectionTitle"
export function  getStaticProps() {
	const allPosts = getAllPosts()
	const paginationProps = calcPaginationProps({crntPage: 1, numOfPosts: allPosts.length})
	const posts = allPosts.slice(paginationProps.startIndex, paginationProps.endIndex)
	const featuredPosts = getPostsWithTagOrCat("featured")
	cacheCategories()
	return {
		props: {
			posts,
			paginationProps,
			featuredPosts,
		}
	}
}

export default function Home({posts, paginationProps, featuredPosts}) {
	return (
		<>
			<SEO />
			<MainContainer>
				<SectionTitle title="" className="mt-20"/>
				<FeaturedPostsSection featuredPosts={featuredPosts}  />
				<SectionTitle title="Latest Posts" className="mt-32"/>
				<PostCardList posts={posts} />
				<Pagination {...paginationProps} />
			</MainContainer>
		</>
	)
}