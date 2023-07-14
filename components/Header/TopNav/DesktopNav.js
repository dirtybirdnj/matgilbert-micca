import MenuMarkup from "./MenuMarkup"
const DesktopNav = ({navLinks, className = ""}) => {

	return <nav>
		<MenuMarkup
			className={`gap-5 flex ${className}`}
			ddClassName="absolute top-full left-0 bg-white shadow-md dark:bg-black border dark:border-gray-600 rounded-lg border border-gray-100 w-[180px]"
			navLinks={navLinks}
		/>
	</nav>
}
export default DesktopNav