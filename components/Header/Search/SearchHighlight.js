import { connectHighlight } from "react-instantsearch-dom"
const SearchHighlight = ({ highlight, attribute, hit }) => {
	const parsedHit = highlight({
		highlightProperty: '_highlightResult',
		attribute,
		hit
	})
	return <>
			{parsedHit.map(
				(part, i) =><span key={part.value + i}>
					{part.isHighlighted ? <span className="text-primary underline">{part.value}</span> : part.value}
				</span>
			)}
	</>
}

export default  connectHighlight(SearchHighlight)