import MainContainer from "@/components/MainContainer"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import siteMetadata from "@/data/siteMetadata"
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons"
import SEO from "@/components/SEO"
import PageTitle from "@/components/PageTitle"
const contact = () => {
	return <>
		<SEO pageName="Contact" />
		<MainContainer className="mb-8">
			<PageTitle
				title="Get in Touch"
				description="Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse."
			/> 
			<div className="grid md:grid-cols-2 gap-24">
				<ContactForm />
				<div>
					<h3 className="text-2xl mb-6">Contact Info</h3>
					<ContactInfo
						email={siteMetadata.socials.email}
						phone={siteMetadata.socials.phone}
					/>
					<h3 className="text-2xl mb-6 mt-12">Socials</h3>
					<SocialMediaIcons {...siteMetadata.socials} />
				</div>

				
			</div>
		</MainContainer>
	</>
}

export default contact