import { useRef, useState } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import Icon from "@/components/Icon"
const SearchBox = ({refine, closeSearch }) => {
	const [value, setValue] = useState("")
	const timerId = useRef(null)
	const delay = 300
	const onChangeDebounced = (event) => {
		const value = event.currentTarget.value
		clearTimeout(timerId.current)
		timerId.current = setTimeout(() =>{
			refine(value)
		}, delay)
		setValue(value)
	}
	return <form className="flex items-center">
		<label
			htmlFor="search-input"
			className="opacity-70 hover:opacity-100"
		>
			<Icon name="search" className="w-5 h-auto" />
		</label>
		<input
			className="SearchBox block bg-transparent w-full px-4 h-14 focus:outline-0 no-outline"
			type="search"
			id="search-input"
			value={value}
			onChange={onChangeDebounced}
			autoComplete="off"
			autoCapitalize="off"
			spellCheck={false}
			autoFocus={true}
			placeholder="Search..."
		/>
		<button
			aria-label="Close search"
			onClick={closeSearch}
			className="opacity-70 hover:opacity-100"
		>
			<Icon  name="close" className="w-4 h-auto" />
		</button>
	</form>
}

export default connectSearchBox(SearchBox)