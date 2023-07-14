import { VscMenu, VscChromeClose } from "react-icons/vsc"
import { MdOutlineWbSunny } from "react-icons/md"
import { TbMoon } from "react-icons/tb"
import { BiSearch } from "react-icons/bi"
import { BsChevronDown } from "react-icons/bs"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
const Icon = ({name, ...rest}) => {
	const iconsObj = {
		menu: VscMenu,
		close: VscChromeClose,
		sun: MdOutlineWbSunny,
		moon: TbMoon,
		search: BiSearch,
		chevronDown: BsChevronDown,
		twitter: FaTwitter,
		facebook: FaFacebookF,
		linkedin: FaLinkedinIn,

	}
	const SelectedIcon = iconsObj.hasOwnProperty(name)? iconsObj[name] : () => <span>No icon with the name {name}</span>
	return <SelectedIcon {...rest} />
}

export default Icon