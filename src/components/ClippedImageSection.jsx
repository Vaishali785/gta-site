import React from "react"

const ClippedImageSection = () => {
	// useGSAP(() => {
	// 	const clippedTimeline = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: "#clipped-img-section",
	// 			start: `top top+=7vh`,
	// 			end: `+=450vh`,
	// 			scrub: true,

	// 			// pin: true,
	// 			// duration: 5,
	// 			// markers: { startColor: "blue", endColor: "blue", fontSize: "12px" },
	// 		},
	// 		// delay: 70,
	// 	})
	// 	clippedTimeline.to(
	// 		"#clipped-img-section",
	// 		{
	// 			top: 0,
	// 			zIndex: 42,
	// 		},
	// 		"-=3"
	// 	)
	// })
	return (
		<div id="clipped-img-section" className="bg-green-400 ">
			<img
				src="/jason-vid-section/Jason_and_Lucia_Motel_landscape.jpg"
				alt=""
				className="object-contain"
			/>

			<div className="flex  w-full justify-center items-center gap-40 mx-auto bg-black h-3/4">
				<div className="w-1/3 text-8xl text-[#ffb0c4] font-semibold">
					<div>Only in</div>
					<div>Leonida</div>
				</div>
				<div className="w-1/5 text-3xl text-[#ffb0c4]">
					<p>
						When the sun fades and the neon glows, everyone has something to
						gain - and more to lose.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ClippedImageSection
// polygon(0% 0%, 100% 0%, 100% calc(100% - 6vw), 0% 100%)
// polygon(0 0,100% 0,100% calc(100% - 0.2vw),0 100%)
