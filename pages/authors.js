import SEO from "@/components/SEO"
import getAuthorsData from "@/scripts/mdx/getAuthorsData"
import MainContainer from "@/components/MainContainer"
import siteMetadata from "@/data/siteMetadata"
import AuthorInfoSummary from "@/components/authors/AuthorInfoSummary"
import PageTitle from "@/components/PageTitle"
export function  getStaticProps() {
	const authorsData = getAuthorsData({withPostsCount: true})
	return {
		props: {
			authorsData
		}	
	}
}
const AuthorsPage = ({authorsData}) => {
	return <>
		<SEO pageName="Authors" />
		<MainContainer>
			<PageTitle
				title="Meet Our Authors"
				description="Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue."
			/>
			<div className="grid grid-cols-4 gap-16" style={{gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))"}}>
				{authorsData.map((authorData, i) => <AuthorInfoSummary key={authorData.frontMatter.name} authorData={authorData} />)}
			</div>
			
		</MainContainer>
	</>
}
export default AuthorsPage