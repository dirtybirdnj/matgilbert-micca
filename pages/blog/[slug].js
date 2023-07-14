import getMDXFilesPaths from "@/scripts/mdx/getMDXFilesPaths"
import getSlugFromPath from "@/scripts/mdx/getSlugFromPath"
import getAllPosts from "@/scripts/mdx/getAllPosts"
import SinglePost from "@/components/SinglePost/SinglePost"
import SEO from "@/components/SEO"
import getRelatedPosts from "@/scripts/posts/getRelatedPosts"
import getMDXSource from "@/scripts/mdx/getMDXSource"
export async function getStaticPaths() {
	const paths = getMDXFilesPaths().map((p) => ({params: {slug: getSlugFromPath(p)}}))
	return {
		paths,
		fallback: false, // means other routes should 404
	}
}

export async function getStaticProps({params:{slug}}) {
	const allPosts = getAllPosts()
	const post = allPosts.find((p) => p.frontMatter.slug === slug)
	const MDXSource = await getMDXSource(post.content)
	const relatedPosts = getRelatedPosts(post)
	return {
		// Passed to the page component as props
		props: {
			MDXSource,
			frontMatter: post.frontMatter,
			content: post.content,
			relatedPosts
		},
	}
}

const Blog = ({MDXSource, frontMatter, content, relatedPosts}) => {
	const {title: pageName, summary: description, imgSrc: featuredImage, date} = frontMatter
	const ogType = "article"
	return <>
		<SEO {...{pageName, description, featuredImage, date, ogType}} />
		<SinglePost {...{MDXSource, frontMatter, content, relatedPosts}} />
	</>
}


export default Blog