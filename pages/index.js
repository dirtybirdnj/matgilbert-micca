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
import Figure from "../components/Figure/Figure"


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
			<Figure src="https://res.cloudinary.com/vtapico/image/upload/v1690505449/matgilbert.com/20230621_203138_ldyi8w.jpg" alt="A pink orange and blue sunset showing the adirondack mountains over Lake Champlain. Slight ripples in the water show a streaky vertical reflection of the sun." size="full" />
				<SectionTitle className="mt-32"/>
				<PostCardList posts={posts} />
				<Pagination {...paginationProps} />
			</MainContainer>
		</>
	)
}