import SEO from "@/components/SEO"
import MainContainer from "@/components/MainContainer"
import AuthorInfo from "@/components/authors/AuthorInfo"
import getAuthorsData from "@/scripts/mdx/getAuthorsData"
import getAuthorsPaths from "@/scripts/mdx/geAuthorsPaths"
import getSlugFromPath from "@/scripts/mdx/getSlugFromPath"
import getPostsByAuthor from "@/scripts/mdx/getPostsByAuthor"
import PostCardList from "@/components/PostCardList"
export async function getStaticPaths() {
	const paths = getAuthorsPaths().map((p) => ({params: {slug: getSlugFromPath(p)}}))
	return {
		paths,
		fallback: false, // means other routes should 404
	}
}
export async function getStaticProps({params:{slug}}) {
	return {
		// Passed to the page component as props
		props: {
			authorData: getAuthorsData({authors: [slug], withPostsCount: true})[0],
			posts: getPostsByAuthor(slug)
		},
	}
}
const AuthorPage =  ({authorData, posts}) => {
	return <>
		<SEO pageName={authorData.frontMatter.name} />
		<MainContainer>
			<AuthorInfo authorData={authorData} className="mb-20" />
			<PostCardList posts={posts} />
		</MainContainer>
	</>
}

export default AuthorPage