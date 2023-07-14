import MenuMarkup from "./MenuMarkup"
import { useRouter } from "next/router"
import { useRef, useState, useEffect } from "react"
import HeaderIcon from "@/components/Header/HeaderIcon"
const MobileNav = ({navLinks, className = ""}) => {
	const menuElement = useRef(null)
	const menuAndButton = useRef(null)
	const [isOpen, setIsOpen] = useState(false)
	const showHideNav = () => {
		setIsOpen(!isOpen)
	}
	const router = useRouter()

	useEffect(() => {
		if (isOpen) {
			setIsOpen(false)
		}
	}, [router.asPath])


	const closeOnClickOutside = (e) => {
		let targetElement = e.target
		do {
			if (targetElement == menuAndButton.current) {
				return
			}
			targetElement = targetElement.parentNode
		} while (targetElement)
		setIsOpen(false)
	}
	useEffect(() => {
		document.addEventListener("click", closeOnClickOutside)

		return () => {
			document.addEventListener("click", closeOnClickOutside)
		};
	}, []);
	return <nav ref={menuAndButton} className={`${className}`}>
		{isOpen && <MenuMarkup
			className={`absolute z-40 right-0 top-full w-[200px] bg-white dark:bg-black border dark:border-gray-600 rounded-lg p-4 mt-2`}
			ref={menuElement}
			navLinks={navLinks}
		/>}
		<HeaderIcon
			className={`${isOpen? "hidden" : ""}`}
			aria-label="Nav"
			name="menu"
			onClick={showHideNav}
		/>
		<HeaderIcon
			className={`${isOpen? "" : "hidden"}`}
			aria-label="Nav"
			name="close"
			onClick={showHideNav}
		/>
		
	</nav>
}

export default MobileNav