import React from "react"

const IntroText = () => {
	return (
		<section
			id="story"
			className="w-screen h-screen bg-black flex flex-col text-white  justify-center fixed top-0 left-0"
		>
			<div className="story-text-content flex flex-col text-white  justify-center !px-[21%] gap-7 -mt-10 gradient-text transparent-gradient">
				<h3 id="storyHeading" className=" poppins-semibold text-6xl ">
					Vice City, USA.
				</h3>
				<p id="storyContent" className=" poppins-regular text-3xl ">
					Jason and Lucia have always known the deck is stacked against them.
					But when an easy score goes wrong, they find themselves on the darkest
					side of the sunniest place in America, in the middle of a criminal
					conspiracy stretching across the state of Leonida — forced to rely on
					each other more than ever if they want to make it out alive.
				</p>
			</div>
		</section>
	)
}

export default IntroText
