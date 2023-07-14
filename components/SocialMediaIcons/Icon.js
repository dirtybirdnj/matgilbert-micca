const Icon = ({href = "#", children, ...rest}) => {
	return <a href={href} {...rest} target="_blank" rel="noreferrer">
		{children}
	</a>
}

export default Icon