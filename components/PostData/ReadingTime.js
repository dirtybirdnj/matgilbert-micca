import readingTime from "reading-time"
const ReadingTime = ({content}) => {
	if(!content) return null
	const rt = readingTime(content)
	return <span className="whitespace-nowrap">{rt.text}</span>
}

export default ReadingTime