import Header from "./Header/Header"
import headerNavLinks from "@/data/headerNavLinks"
import Footer from "@/components/Footer/Footer"
import siteMetadata from "@/data/siteMetadata"
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection"
const Layout = ({children}) => {
	return (
		<>
			<Header className="mb-20" navLinks={headerNavLinks} />
			{children}
			<Footer className="mt-28" authorName={siteMetadata.name} />
		</>
	)
}
export default Layout