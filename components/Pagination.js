import Link from "next/link"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
const PaginationBtn = ({iconName, page}) => {
	const icons = {
		BsChevronLeft,
		BsChevronRight
	}
	const Icon = icons[iconName]
	return <Link href={`/blog/page/${page}`} className="p-2.5 border border-black rounded-full dark:border-white" aria-label={`Go to page ${page}`}>
			<Icon className="w-4 h-auto" />
	</Link>
}

const Pagination = ({crntPage, nextPage, prevPage, numOfPages}) => {
	
	if(!prevPage && !nextPage) return null

	return <div className="flex justify-center items-center gap-4 mt-20 text-black dark:text-white">
		{prevPage? <PaginationBtn iconName="BsChevronLeft" page={prevPage} /> : null}
		<span className="text-sm">Page {crntPage} of {numOfPages}</span>
		{nextPage? <PaginationBtn iconName="BsChevronRight" page={nextPage} /> : null}
	</div>
}



export default Pagination