import Image from "next/image"
const PostThumbnail = ({imgSrc, className = "", sizes = "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1480px) 33.3vw, 450px", ...rest}) => {
	if(!imgSrc) return null
	return <div className={`block relative pt-[75%] bg-black/5 dark:bg-white/5 ${className}`}>
		<Image
			src={imgSrc}
			alt="Post thumbnail"
			style={{objectFit: "cover"}}
			fill
			sizes={sizes}
			{...rest}
		/>
	</div>
}

export default PostThumbnail