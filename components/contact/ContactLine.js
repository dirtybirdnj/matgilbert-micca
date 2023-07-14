import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
const ContactLine = ({children, icon}) => {
	const icons = {
		email: AiOutlineMail,
		phone: AiOutlinePhone
	}
	const CrntIcon = icons[icon]
	return <div className="flex gap-3 items-center">
		<CrntIcon />
		{children}
	</div>
}

export default ContactLine