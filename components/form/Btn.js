import { AiOutlineLoading } from "react-icons/ai"
const Btn = ({children, loading = false,className = "", ...rest}) => {

	return <button
		className={`btn relative ${className}`}
		disabled={loading}
		{...rest}
	>
		<span className={loading? "invisible" : ""}>
			{children}
		</span>
		{loading && <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><AiOutlineLoading className="animate-spin" /></span>}
	</button>
}

export default Btn