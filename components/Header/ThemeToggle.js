import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import HeaderIcon from "./HeaderIcon"


const ThemeToggle = ({className = ""}) => {
	const {theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])


	if(!mounted) return <HeaderIcon className="invisible" aria-label="Toggle light/dark themes" name="moon" />
	return <HeaderIcon
		aria-label="Toggle light/dark themes"
		onClick={() => setTheme(theme === "light"? "dark" : "light")}
		name={theme === "light"? "moon" : "sun"}
	/>
}

export default ThemeToggle