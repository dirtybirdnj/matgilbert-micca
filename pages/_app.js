import Layout from "@/components/Layout"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import { Inter } from '@next/font/google'
import Head from "next/head"
const inter = Inter({ subsets: ['latin'] })
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		setScrollbarWidthVar()
	}, [])
	const setScrollbarWidthVar = () => {
		const scrollbarWidth = window.innerWidth - document.body.clientWidth
		document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)
	}
	return <>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
		<style jsx global>{`
			html {
				font-family: ${inter.style.fontFamily};
			}
		`}</style>
		<ThemeProvider defaultTheme="light" attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
		</>
}

export default MyApp
