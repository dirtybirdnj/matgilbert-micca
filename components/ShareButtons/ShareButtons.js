import SBtn from "./SBtn"
import getShareLinks from "@/scripts/posts/getShareLinks"
import Icon from "@/components/Icon"
const ShareButtons = ({title, href,className = ""}) => {
	const sLinks = getShareLinks({title, href})
	return <div className={`flex items-center ${className}`}>
		<span className="font-semibold mr-4 text-sm uppercase data-color">Share:</span>
		<div className="flex gap-4">
			<SBtn href={sLinks.t} aria-label="Twitter share button"><Icon name="twitter" /></SBtn>
			<SBtn href={sLinks.fb} aria-label="Facebook share button"><Icon name="facebook" /></SBtn>
			<SBtn href={sLinks.li} aria-label="LinkedIn share button"><Icon name="linkedin" /></SBtn>
		</div>
	</div>
}

export default ShareButtons