import getAllPosts from "@/scripts/mdx/getAllPosts"
import siteMetadata from "@/data/siteMetadata"
import PostCardList from "@/components/PostCardList"
import Pagination from "@/components/Pagination"
import SEO from "@/components/SEO"
import MainContainer from "@/components/MainContainer"
import calcPaginationProps, {calcNumOfPages} from "@/scripts/mdx/calcPaginationProps"
import PageTitle from "@/components/PageTitle"
export async function getStaticPaths(){
	const allPosts = getAllPosts()
	const numOfPages = calcNumOfPages(allPosts.length)

	return {
		paths: Array.from({length: numOfPages}, (_, i) => ({params: {page: (i + 1).toString()}})),
		fallback: false, // means other routes should 404
	}
}

export function getStaticProps({params}){
	const allPosts = getAllPosts()
	const crntPage = parseInt(params!= undefined && params.page != undefined? params.page : 1)
	const paginationProps = calcPaginationProps({crntPage, numOfPosts: allPosts.length})

	const posts = allPosts.slice(paginationProps.startIndex, paginationProps.endIndex)

	return {
		props: {
			posts,
			paginationProps
		}
	}
}

const Page = ({posts, paginationProps}) => {
	return <>
		<SEO pageName={`Blog - ${paginationProps.crntPage}`} />
		<MainContainer className="mt-28">
			<PostCardList posts={posts} />
			<Pagination {...paginationProps} />
		</MainContainer>
	</>
}

export default Page