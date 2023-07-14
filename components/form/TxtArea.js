const TxtArea = ({name, type, placeholder, className = "", ...rest}) => {
	return <>
	<label className="sr-only" htmlFor={name}>
		{name}
	</label>
	<textarea
		className={`txtInputBasics !rounded-3xl !h-auto ${className}`}
		id={name}
		name={name}
		rows={6}
		placeholder={placeholder}
		type={type}
		{...rest}
	/>
</>
}

export default  TxtArea