import Link from "next/link"
const MenuEL = ({url, name}) => {
	return <li>
		<Link
			href={url}
			className="nav__link">
				{name}
		</Link>
	</li>
}

export default MenuEL