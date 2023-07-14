import Input from "@/components/form/Input"
import TxtArea from "@/components/form/TxtArea"
import Btn from "@/components/form/Btn"
import { useForm } from "@formspree/react"
const ContactForm = () => {
	const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "ID_placeholder")

	if (state.succeeded) {
		return <p className="text-lg text-center">Thank you for getting in touch!</p>;
	}
	return <form
		onSubmit={handleSubmit}
		className="grid grid-cols-1 gap-6"
	>
		<Input
			name="contact-name"
			type="text"
			placeholder='Name'
			pattern="(([a-zA-Z]+( )?)+)"
			title="Name should consist of alphabets (a to z, A to Z) and single spaces."
			required
			maxLength={32}
			minLength={4}
		/>
		<Input
			name="contact-email"
			type="email"
			placeholder='Email'
			required
		/>

		<TxtArea
			name="message"
			placeholder='Message'
			required
			minLength={10}
		/>
		<Btn type="submit" loading={state.submitting}>Send</Btn>
	</form>
}

export default ContactForm