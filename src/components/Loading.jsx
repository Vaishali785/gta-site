import React from "react"

const Loading = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50">
			<div className="relative w-[100px] h-[100px]">
				<div className="loader-bg w-full h-full absolute top-0 left-0" />
			</div>
		</div>
	)
}

export default Loading

// 2D324F
