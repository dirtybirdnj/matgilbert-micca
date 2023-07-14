import getMDXFilesPaths from "@/scripts/mdx/getMDXFilesPaths"
import getSlugFromPath from "@/scripts/mdx/getSlugFromPath"
import getPathFromSlug from "@/scripts/mdx/getPathFromSlug"
import getMDXContentAndFrontMatter from "@/scripts/mdx/getMDXContentAndFrontMatter"
import getMDXSource from "@/scripts/mdx/getMDXSource"
import Page from "@/components/Page/Page"
import SEO from "@/components/SEO"
import MainContainer from "@/components/MainContainer"
export async function getStaticPaths() {
	const paths = getMDXFilesPaths("data/pages").map((p) => ({params: {slug: getSlugFromPath(p)}}))
	return {
		paths,
		fallback: false, // means other routes should 404
	}
}
export async function getStaticProps({params:{slug}}) {
	const pagePath = getPathFromSlug({dir: "data/pages", slug})
	const { content, frontMatter } = getMDXContentAndFrontMatter(pagePath)
	const MDXSource = await getMDXSource(content)
	return {
		// Passed to the page component as props
		props: {
			content,
			frontMatter,
			MDXSource
		},
	}
}
const StaticPage = ({ frontMatter, MDXSource }) => {
	return <MainContainer>
		<SEO pageName={frontMatter.title} />
		<Page MDXSource={MDXSource} title={frontMatter.title} />
	</MainContainer>
}
export default StaticPage

StaticPage.layoutProps = {meta: {title: "this works!"}}