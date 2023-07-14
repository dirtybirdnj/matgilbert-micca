import MainContainer from "../MainContainer"
import NewsletterForm from "./NewsletterForm"
const NewsletterSection = ({className=""}) => {
	return <MainContainer className={`text-center lg:text-left lg:flex lg:gap-20  xl:gap-36 items-center ${className}`}>
			<div className="flex-grow mb-12 lg:mb-0">
				<h2 className="text-4xl mb-4">Subscribe to our newsletter</h2>
				<p className=" mb-8">Get all the latest posts delivered straight to your inbox. </p>
			</div>
			<NewsletterForm className="lg:min-w-[450px] max-w-[500px] mx-auto" />
	</MainContainer>

}

export default NewsletterSection