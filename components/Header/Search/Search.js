
import { useEffect, useRef } from "react";
import algoliasearch from "algoliasearch"
import { InstantSearch, No } from "react-instantsearch-dom"
import SearchBox from "./SearchBox"
import SearchResults from "./SearchResults"
const algoliaClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY)

const Search = ({ closeSearch }) => {
	const searchEl = useRef(null)
	const searchClient = {
		...algoliaClient,
		search(requests) {
			if (requests.every(({ params }) => !params.query)) {
				return Promise.resolve({
					results: requests.map(() => ({
						hits: [],
					})),
				});
			}

			return algoliaClient.search(requests);
		},
	};


	const closeOnEsc = (e) => {
		if (e.key === "Escape" || e.keyCode === 27) {
			closeSearch()
		}
	}
	useEffect(() => {
		
		document.body.classList.add("search-active")
		document.addEventListener("keydown", closeOnEsc)

		return () => {
			document.body.classList.remove("search-active")
			document.removeEventListener("keydown", closeOnEsc)
		};
	}, []);

	const closeOnClickOutsideSearchEl = (e) => {
		let targetElement = e.target
		do {
			if (targetElement == searchEl.current) {
				return
			}
			targetElement = targetElement.parentNode
		} while (targetElement)
		closeSearch()
	}

	
	return <div
		className="fixed inset-0 px-5 py-10 sm:py-[10vh] z-50 bg-black/20 dark:bg-white/20"
		onClick={closeOnClickOutsideSearchEl}
	>
		<div className="w-full max-w-lg max-h-full mx-auto bg-white dark:bg-black flex flex-col py-2 px-6 rounded-md shadow-md" ref={searchEl}>
			<InstantSearch searchClient={searchClient} indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}>
				<SearchBox closeSearch={closeSearch} />
				<SearchResults closeSearch={closeSearch} />
			</InstantSearch>
		</div>
	</div>
}

export default Search