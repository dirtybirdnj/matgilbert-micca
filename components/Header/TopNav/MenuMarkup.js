import { useRef, forwardRef, useEffect, Fragment } from "react"
import MenuEL from "./MenuEl"
import DropDownMenu from "./DropDownMenu"
import Icon from "@/components/Icon"
import { useRouter } from "next/router"
const MenuMarkup = ({navLinks, className = "", ddClassName = ""}, ref) => {
	const openedMenuEl = useRef(null)
	const router = useRouter();

	

	const handleDropDownMenu = (e) => {
		e.stopPropagation()

		const crntClicked = e.target
		const prevClicked = openedMenuEl.current
		if(prevClicked){
			closeDD()
		}

		if(crntClicked !== prevClicked){
			openedMenuEl.current = crntClicked
			crntClicked.classList.add("isOpen")
		}
	}
	const closeDD = () => {
		if(!openedMenuEl.current) return
		openedMenuEl.current.classList.remove("isOpen")
		openedMenuEl.current = null
	}
	const closeOnClickOutside = (e) => {
		if(!openedMenuEl.current) return
		const menuParent = openedMenuEl.current.parentNode
		let targetElement = e.target
		do {
			if (targetElement == menuParent) {
				return
			}
			targetElement = targetElement.parentNode
		} while (targetElement)
		closeDD()
	}
	useEffect(() => {
		document.addEventListener("click", closeOnClickOutside)

		return () => {
			document.addEventListener("click", closeOnClickOutside)
		};
	}, []);
	useEffect(closeDD, [router.asPath])
	return <ul className={`heading-color ${className}`} ref={ref}>{
		navLinks.map(({url, name, children}, i) =>(<Fragment key={name}>
			{
				children? <li className="relative z-20">
					<span className="nav__link dropDownMenuButton !flex gap-2 items-center" onClick={handleDropDownMenu}>
						<span className="pointer-events-none">{name}</span>
						<Icon className="pointer-events-none" name="chevronDown"/>
					</span>
					<DropDownMenu  menuLinks={children} className={ddClassName} />
				</li>
				:
				<MenuEL url={url} name={name}  />
			}
		</Fragment>))
	}</ul>
}

export default forwardRef(MenuMarkup)