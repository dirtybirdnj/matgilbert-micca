export const getPostDate = (date) => {
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC"
	}
	const formatter = new Intl.DateTimeFormat("en-US", options)

	return formatter.format(new Date(date))
}

