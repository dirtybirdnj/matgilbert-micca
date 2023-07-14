import { useState } from 'react'
import Btn from '@/components/form/Btn'
import InputBasic from '@/components/form/InputBasic'
const NewsletterForm2 = ({className = "" }) => {
	const [errMsg, setErrMsg] = useState('')
	const [subscribed, setSubscribed] = useState(false)
	const [loading, setLoading] = useState(false)

	const subscribe = async (e) => {
		e.preventDefault()
		setLoading(true)
		const value = e.target.email.value
		const res = await fetch(`/api/mailchimp`, {
			body: JSON.stringify({
				email: value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})

		const { error } = await res.json()
		setLoading(false)
		if (error) {
			setErrMsg('Your e-mail address is invalid or you are already subscribed!')
			return
		}

		e.target.email.value = ''
		setSubscribed(true)
	}

	return (
		<>
			
			{!subscribed? <div>
				<form className={`flex flex-wrap sm:flex-nowrap gap-y-4 gap-x-2 sm:gap-x-0 bg-transparent sm:bg-gray-100 sm:dark:bg-white/10 sm:rounded-full ${className}`} onSubmit={subscribe}>
					<InputBasic
						name="email"
						type="email"
						className="flex-basis-[300px] h-16 border-none flex-grow rounded-full sm:bg-transparent px-6 bg-gray-100 dark:bg-white/10 sm:dark:bg-transparent no-outline"
						placeholder='Your email address'
						required
						disabled={loading}
						onChange={() => setErrMsg("")}
					/>
					<Btn
						className="flex-grow sm:flex-grow-0"
						type="submit"
						loading={loading}
					>
						Subscribe
					</Btn>
				</form>
				{errMsg !== "" && (
					<div className="mt-4 text-sm text-red-500 dark:text-red-400">{errMsg}</div>
				)}
			</div>
			:
				<p className="text-xl text-center" >You are now subscribed. Thank you!</p>
			}
		</>
	)
}

export default NewsletterForm2