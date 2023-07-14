import Image from "next/image"
import Link from "next/link"
import AuthorAvatar from "@/components/authors/AuthorAvatar"
const Avatar = ({avatar, href, name}) => {
	return <Link href={href} className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 ">
		<AuthorAvatar
			className="!border-2"
			avatar={avatar}
			size={30}
		/>
	</Link>
}

export default Avatar