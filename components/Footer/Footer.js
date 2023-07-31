import FooterCol from "./FooterCol"
import MainContainer from "@/components/MainContainer"
import CategoriesWidget from "./CategoriesWidget"
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons"
import siteMetadata from "@/data/siteMetadata"
import AboutUsWidget from "./AboutUsWidget"
import LinksWidget from "./LinksWidget"
import Link from 'next/link'

const Footer = ({authorName, categories, className}) => {
	return <MainContainer className={className}>
		<div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-12 pt-20 border-t border-gray-100 dark:border-gray-900 pb-24">
			<FooterCol className="lg:col-span-2"><AboutUsWidget /></FooterCol>
			<FooterCol className="lg:col-span-2" title="categories"><CategoriesWidget categories={categories} /></FooterCol>
			<FooterCol title="links"><LinksWidget /></FooterCol>
			<FooterCol title="social"><SocialMediaIcons {...siteMetadata.socials} /></FooterCol>
		</div>
		<div className="py-6 text-sm text-center uppercase tracking-wide">
			© 2023 {authorName}. Made in Vermont. <Link href="https://www.vtapi.co" target="_blank">vtapi.co</Link>
		</div>
	</MainContainer>
}

export default Footer