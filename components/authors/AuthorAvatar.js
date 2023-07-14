import Image from "next/image"
const AuthorAvatar = ({avatar, size = 160, className = ""}) => {
	return <div
		className={`rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 inline-block leading-[0] ${className}`}
		style={{width: `${size}px`, height: `${size}px`}}
	>
		<div className="pt-[100%] relative">
			<Image
				src={avatar}
				alt="author avatar"
				style={{objectFit: "cover"}}
				fill
				sizes={`${size}px`}
			/>
		</div>
	</div>
}

export default AuthorAvatar