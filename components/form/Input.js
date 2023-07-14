import InputBasic from "./InputBasic"
const Input = ({className = "", ...rest}) => {

	return <InputBasic
		className={`txtInputBasics h-16 ${className}`}
		{...rest}
	/>
}

export default Input