import getAllTagsOrCats from "@/scripts/mdx/getAllTagsOrCats"
import getPostsWithTagOrCat from "@/scripts/mdx/getPostsWithTagOrCat"
import SEO from "@/components/SEO"
import PostCardList from "@/components/PostCardList"
import capitalizeStr from "@/scripts/posts/capitalizeStr"
import MainContainer from "@/components/MainContainer"
import PageTitle from "@/components/PageTitle"
export async function getStaticPaths() {
	const paths = getAllTagsOrCats("categories").map((c) => ({params: {category: c}}))
	return {
		paths,
		fallback: false, // means other routes should 404
	}
}
export async function getStaticProps({params:{category}}) {
	const posts = getPostsWithTagOrCat(category, "categories")
	return {
		// Passed to the page component as props
		props: {
			posts,
			category
		},
	}

	
}
const CategoryPage = ({posts, category}) => {
	return <>
		<SEO
			pageName={capitalizeStr(category)}
		/>
		<MainContainer>
			<PageTitle
				suptitle="category"
				title={category}
			/>
			<PostCardList posts={posts} />
		</MainContainer>
	</>
}
export default CategoryPage 