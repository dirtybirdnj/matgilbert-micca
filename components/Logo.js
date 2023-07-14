import siteMetadata from "@/data/siteMetadata"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
const Logo = ({className}) => {
	
	const {theme} = useTheme()
	const logoSrc = theme === "light"? siteMetadata.logo : siteMetadata.logoDark
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])
	if(!mounted) return null
	return <img
		className={`block w-auto ${className}`}
		alt="Logo"
		src={logoSrc}
	/>
}

export default Logo