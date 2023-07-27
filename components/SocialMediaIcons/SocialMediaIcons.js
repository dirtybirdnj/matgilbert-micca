import Icon from "./Icon"
import { FaTwitter, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa"
const SocialMediaIcons = ({className = "", twitter, youtube, linkedin, github }) => {
	return <div className={`flex gap-5 text-xl heading-color ${className}`}>
<p>Twitter is stupid.</p>
		<Icon href={youtube} aria-label="Youtube link"><FaYoutube /></Icon>
		<Icon href={linkedin} aria-label="LinkedIn link"><FaLinkedinIn /></Icon>
		<Icon href={github} aria-label="Github link"><FaGithub /></Icon>
	</div>
}

export default SocialMediaIcons