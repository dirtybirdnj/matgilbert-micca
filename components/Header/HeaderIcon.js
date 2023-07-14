import React, {forwardRef} from "react"
import Icon from "@/components/Icon"
const HeaderIcon = ({name, className = "", ...rest}, ref) => {
	return <button
		ref={ref}
		className={`p-1.5 cursor-pointer ${className}`}
		{...rest}
	>
		<Icon name={name} className="w-5 h-auto" />
	</button>
}

export default forwardRef(HeaderIcon)