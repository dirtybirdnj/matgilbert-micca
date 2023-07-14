const InputBasic = ({name, type, placeholder, className = "", ...rest}) => {
	return <>
		<label className="sr-only" htmlFor={name}>
			{name}
		</label>
		<input
			className={`w-full ${className}`}
			id={name}
			name={name}
			placeholder={placeholder}
			autoComplete="off"
			autoCapitalize="off"
			spellCheck={false}
			type={type}
			{...rest}
			
		/>
	</>
}

export default InputBasic