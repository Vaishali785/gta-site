import React from "react"
import Logo from "./Logo"

const Navbar = () => {
	return (
		<div className="w-full fixed top-1/12 px-16 max-md:px-10 flex justify-between z-[100]">
			<Logo />
			<div className="flex flex-col gap-1 items-center justify-evenly">
				<div className="w-7 h-1.5 bg-white"></div>
				<div className="w-7 h-1.5 bg-white"></div>
			</div>
		</div>
	)
}

export default Navbar
