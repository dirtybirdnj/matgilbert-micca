import HeaderIcon from "@/components/Header/HeaderIcon"
const SearchIcon = ({openSearch}) => {
	return <HeaderIcon
		aria-label="Search"
		name="search"
		onClick={openSearch}
	/>
}

export default SearchIcon