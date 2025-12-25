import React from "react"

const IntroText = () => {
	return (
		<section
			id="story"
			className="w-screen h-screen bg-black flex flex-col text-white  justify-center fixed top-0 left-0 max-md:h-dvh"
		>
			<div className="story-text-content flex flex-col text-white  justify-center max-md:px-[12%] px-[21%] gap-7 -mt-10 max-md:-mt-0 gradient-text transparent-gradient">
				<h3
					id="storyHeading"
					className=" poppins-extrabold text-6xl max-md:text-4xl"
				>
					Vice City, USA.
				</h3>
				<p
					id="storyContent"
					className=" poppins-medium text-3xl max-md:text-xl"
				>
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
