const SBtn = ({href, children, ...rest}) => {
	return <a
		className="text-md border-2 p-2.5 rounded-full text-black border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
		href={href}
		target="_blank" rel="noreferrer" {...rest}>{children}
	</a>
}
export default SBtn