import { connectStateResults } from "react-instantsearch-dom"
import Link from "next/link"
import SearchHighlight from "./SearchHighlight"
const SearchResults = ({searchResults, closeSearch}) => {
	if(!searchResults || !searchResults.query) return null
	const {hits,query} = searchResults
	if(!hits.length) return <p className="mt-4">No results found for <span className="font-semibold">
		&quot;{query}&quot;</span>
	</p>
	return <div className="overflow-y-auto py-4">
		{hits.map((hit, i) =><Link
			href={hit.href}
			key={hit.href + i}
			className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-white/10"
			onClick={closeSearch}
		>
				<h3 className="text-base mb-1">
					<SearchHighlight attribute="title" hit={hit}/>
				</h3>
				<p className="text-sm">
					<SearchHighlight attribute="summary" hit={hit} />
				</p>
			</Link>
		)}
	</div>
}

export default connectStateResults(SearchResults)