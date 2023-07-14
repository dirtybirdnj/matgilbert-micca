import ContactLine from "./ContactLine"
const ContactInfo = ({email, phone}) => {
	return<div className="grid grid-cols-1 gap-3">
		<ContactLine icon="email" ><a href={`mailto:${email}`}>{email}</a></ContactLine>
	</div>
}
export default ContactInfo