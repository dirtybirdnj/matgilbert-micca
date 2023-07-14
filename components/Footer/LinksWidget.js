import footerLinks from "@/data/footerLinks"
import Link from "next/link"
const LinksWidget = () => {

	return <ul className="flex flex-col gap-2 text-[15px] capitalize font-medium ">
		{
			footerLinks.map(({name, url}, i) => <li key={name}>
				<Link href={url}>{name}</Link>
			</li>)
		}
	</ul>
}

export default LinksWidget