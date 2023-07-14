import Link from "next/link"
import Logo from "@/components/Logo"
const LogoWithLink = () => {

	return <Link href="/">
		<Logo className="max-h-[36px]"  />
	</Link>
}

export default LogoWithLink