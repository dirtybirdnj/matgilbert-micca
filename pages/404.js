import MainContainer from "@/components/MainContainer"
import Btn from "@/components/form/Btn"
import Link from "next/link"
import siteMetadata from "@/data/siteMetadata"
import SEO from "@/components/SEO"
export default function _404 () {
	return <>
		<SEO pageName="Page Not Found" />
		<MainContainer className="text-center my-52">
			<h2 className="text-6xl md:text-[100px]">404</h2>
			<p className="text-lg md:text-2xl mt-3">Page Not Found</p>
			<Link href="/"><Btn className="mt-6">Back Home</Btn></Link>
		</MainContainer>
	</>
}