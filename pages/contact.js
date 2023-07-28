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
				title="Contact Mat"
			/>
			<div className="grid md:grid-cols-2 gap-24">

				<Image src="https://res.cloudinary.com/vtapico/image/upload/c_crop,w_1500,h_1600/v1690491741/matgilbert.com/PXL_20230709_184512608_olnmye.jpg" width="1500" height="1600" alt="Mat with a nice pike in his bright green kayak"/>
				<div>

					<h3 className="text-2xl mb-6">I love helping people</h3>
					<p>If there&apos;s something you think I can help you with please reach out. I love to hear crazy ideas, and I respect anyone who&apos;s willing to put in the effort.</p>
	<br/>
					<p className="text-2xl mb-6">{siteMetadata.socials.email}</p>

					<h3 className="text-2xl mb-6 mt-12">Socials</h3>
					<SocialMediaIcons {...siteMetadata.socials} />

					<h3 className="text-2xl mb-6 mt-12">No voicemail.</h3>
					<p>It&apos;s not 1985 anymore and we don&apos;t send faxes either.</p>

					<h3 className="text-2xl mb-6 mt-12">No solicitation.</h3>
					<p>I don&apos;t want website services. I don&apos;t need help with logo design, business funding or any other sort of assistance. If you call me and try to sell me any of these services I will direct you to this page and ask you to read it to me.</p>

				</div>


			</div>
		</MainContainer>
	</>
}

export default contact