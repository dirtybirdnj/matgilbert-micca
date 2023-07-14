const MainContainer = ({className = "", children}) => {
	return <div className={`max-w-[1480px] mx-auto px-5 sm:px-8 ${className}`}>
		{children}
	</div>
}
export default MainContainer