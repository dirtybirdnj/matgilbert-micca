import getAllTagsOrCats from "@/scripts/mdx/getAllTagsOrCats"
import getPostsWithTagOrCat from "@/scripts/mdx/getPostsWithTagOrCat"
import SEO from "@/components/SEO"
import PostCardList from "@/components/PostCardList"
import capitalizeStr from "@/scripts/posts/capitalizeStr"
import MainContainer from "@/components/MainContainer"
import PageTitle from "@/components/PageTitle"
export async function getStaticPaths() {
	const paths = getAllTagsOrCats().map((t) => ({params: {tag: t}}))
	return {
		paths,
		fallback: false, // means other routes should 404
	}
}
export async function getStaticProps({params:{tag}}) {
	const posts = getPostsWithTagOrCat(tag)
	return {
		// Passed to the page component as props
		props: {
			posts,
			tag
		},
	}

	
}
export default function TagPage ({posts, tag}) {
	return <>
		<SEO
			pageName={capitalizeStr(tag)}
		/>
		<MainContainer>
			<PageTitle
				suptitle="tag"
				title={tag}
			/>
			<PostCardList posts={posts} />
		</MainContainer>
	</>
}