const PageTitle = ({title, suptitle, description}) => {
	return <div className="mb-24 text-center max-w-screen-sm mx-auto">
		{suptitle && <span className="text-sm uppercase data-color tracking-wider ">{suptitle}</span>}
		<h2 className="text-3xl sm:text-5xl capitalize">{title}</h2>
		{description && <p className="mt-4 text-lg">{description}</p>}
	</div>
}

export default PageTitle