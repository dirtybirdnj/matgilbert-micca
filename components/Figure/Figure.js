const FigureBasic = ({caption = "", src, alt = "", size = ""}) => {
	
	return <figure className={size && `figure-${size}`} >
		<img src={src} alt={alt} />
		{caption && <figcaption>{caption}</figcaption>}
	</figure>
}

export default FigureBasic