import DesktopNav from "./TopNav/DesktopNav"
import Logo from "@/components/Header/LogoWithLink"
import MainContainer from "@/components/MainContainer"
import ThemeToggle from "./ThemeToggle"
import MobileNav from "./TopNav/MobileNav"
import Search from "./Search/Search"
import { useState } from "react"
const Header = ({navLinks, className = ""}) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	return <>
		<header className={`py-5 px-5 sm:px-8 flex items-center  ${className}`}>
			<Logo />
			<div className="flex gap-1 ml-auto">
				<DesktopNav className="hidden lg:flex mr-1" navLinks={navLinks} />

				<ThemeToggle />

				<MobileNav className="lg:hidden relative" navLinks={navLinks} />
			</div>
		</header>
		{isSearchOpen && <Search closeSearch={() => setIsSearchOpen(false)} />}
	</>
}

export default Header