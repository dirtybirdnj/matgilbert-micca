import siteMetadata from "@/data/siteMetadata"
const getShareLinks = ({title, href}) => {
	const titleEsc = encodeURIComponent(title)
	const url = `${siteMetadata.siteUrl}${href}`
	return {
		t: `https://twitter.com/intent/tweet?url=${url}&text=${titleEsc}`,
		fb: `https://www.facebook.com/sharer.php?u=${url}`,
		li: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
	}
}

export default getShareLinks