import { useState, useEffect } from "react"
import siteMetadata from "@/data/siteMetadata"
import { DiscussionEmbed } from "disqus-react"
import { useTheme } from "next-themes"
import Btn from "@/components/form/Btn"
const Disqus = ({ frontMatter, className = ""}) => {
	const [isShown, setIsShown] = useState(false)
	const {theme} = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])
	useEffect(() => {
		setIsShown(false)

	}, [theme])
	const shortname = siteMetadata.comments.disqusConfig.shortname
	
	if(!shortname || !mounted) return null
	const disqusConfig = {
		url: window.location.href,
		identifier: frontMatter.slug, // Single post id
		title: frontMatter.title // Single post title
	}


	if(!shortname) return null
	return <div
		className={className}
	>
		{
			!isShown? <Btn onClick={() => setIsShown(true)} className="!block mx-auto" >Load Comments</Btn>
			:
			<DiscussionEmbed
				shortname={shortname}
				config={disqusConfig}
				style={{colorScheme: "none"}}
			/>
		}
	</div>
}
export default Disqus;