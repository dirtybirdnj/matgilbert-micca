import MenuEL from "./MenuEl"
const DropDownMenu = ({menuLinks, className = ""}) => {
	return <ul className={`hidden flex-col gap-0.5 p-4  ${className}`}>{
		menuLinks.map(({url, name}, i) =>(
			<MenuEL key={name} url={url} name={name} />
		))
	}</ul>
}

export default DropDownMenu