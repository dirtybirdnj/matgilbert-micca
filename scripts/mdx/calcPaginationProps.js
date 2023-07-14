import siteMetadata from "@/data/siteMetadata"
const calcPaginationProps = ({crntPage, numOfPosts}) => {

	const startIndex = siteMetadata.POSTS_PER_PAGE * (crntPage - 1)
	const endIndex = startIndex + siteMetadata.POSTS_PER_PAGE
	
	
	const numOfPages = calcNumOfPages(numOfPosts)

	const nextPage = crntPage < numOfPages? crntPage + 1 : 0
	const prevPage = crntPage > 1? crntPage - 1 : 0

	return {
		startIndex,
		endIndex,
		crntPage,
		nextPage,
		prevPage,
		numOfPages
	}
}
export const calcNumOfPages = (numOfPosts) => {
	return Math.ceil(numOfPosts / siteMetadata.POSTS_PER_PAGE)
}
export default calcPaginationProps