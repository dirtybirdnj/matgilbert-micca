import MainContainer from "@/components/MainContainer"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import siteMetadata from "@/data/siteMetadata"
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons"
import SEO from "@/components/SEO"
import PageTitle from "@/components/PageTitle"
import Image from 'next/image'
const contact = () => {
	return <>
		<SEO pageName="Contact" />
		<MainContainer className="mb-8">
			<PageTitle
				title="Get in Touch"
				description="Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse."
			/>

			<div className="grid md:grid-cols-2 gap-24">

				<Image src="https://res.cloudinary.com/vtapico/image/upload/c_crop,w_1500,h_1600/v1690491741/matgilbert.com/PXL_20230709_184512608_olnmye.jpg" width="1500" height="1600" alt="Mat with a nice pike in his bright green kayak"/>
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