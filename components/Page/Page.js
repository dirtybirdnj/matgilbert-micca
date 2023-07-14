import MDXBody from "@/components/MDXBody"
const Page = ({MDXSource, title}) => {

	return <div className="max-w-screen-md mx-auto">
		<h1 className="text-4xl sm:text-5xl leading-snug text-center">{title}</h1>
		<MDXBody MDXSource={MDXSource} className="mt-16" />
	</div>
}

export default Page