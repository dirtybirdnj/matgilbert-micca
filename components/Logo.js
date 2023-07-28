import siteMetadata from "@/data/siteMetadata"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
const Logo = ({className}) => {

	const {theme} = useTheme()
	const logoSrc = theme === "light"? siteMetadata.logo : siteMetadata.logoDark

	return <h1 className="text-4xl sm:text-5xl leading-snug text-center">matgilbert.com</h1>

	/*<img
		className={`block w-auto ${className}`}
		alt="Logo"
		src={logoSrc}
	/>*/
}

export default Logo