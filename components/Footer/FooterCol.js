const FooterCol = ({title, children, className = ""}) => {
	return <div className={className}>
		{title && <h3 className="uppercase text-sm tracking-wider mb-6">{title}</h3>}
		{children}
	</div>
}

export default FooterCol