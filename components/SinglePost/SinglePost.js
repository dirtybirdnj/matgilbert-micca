import PostHeader from "./PostHeader"
import PostTags from "@/components/PostData/PostTags"
import MainContainer from "@/components/MainContainer"
import RelatedPosts from "./RelatedPost/RelatedPosts"
import MDXBody from "@/components/MDXBody"
import ShareButtons from "@/components/ShareButtons/ShareButtons"
import Disqus from "@/components/Disqus"

const SinglePost = ({MDXSource, frontMatter, content, relatedPosts}) => {
	return <MainContainer key={frontMatter.title}>
		<div className="max-w-screen-md mx-auto " >
			<PostHeader {...{frontMatter, content}} />
			<MDXBody className="mt-16" MDXSource={MDXSource} />
			<PostTags className="mt-16" tags={frontMatter.tags} />
			<ShareButtons className="mt-16" title={frontMatter.title} href={frontMatter.href} />
		</div>
		<RelatedPosts className="mt-20" relatedPosts={relatedPosts} />
	</MainContainer>
}
export default SinglePost