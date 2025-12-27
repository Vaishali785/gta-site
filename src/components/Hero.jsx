import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const Hero = () => {
	useGSAP(() => {
		const maskTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "center 50%",
				end: "bottom 90%",
				scrub: 1.4,
				pin: true,
				invalidateOnRefresh: true,
			},
			opacity: 0,
		})

		maskTimeline
			.timeScale(0.1)
			.fromTo(
				".under-img",
				{
					scale: 1,
					// scale: 1.19,
					// width: "120vw",
					margin: "auto",
				},
				{
					scale: 0.95,
					objectFit: "cover",
					transformOrigin: "center center",
					// scale: 1,
					// width: "100vw",
					duration: 1,
					margin: "auto",
					ease: "sine.in",
				}
			)
			.fromTo(
				".masked-img",
				{
					maskSize: "2600%",
					// duration: 3,
					// scale: 0.8,
					// maskImage: "white",
				},
				{
					background: "white",
					maskSize: "50%",
					opacity: 1,
					duration: 3,
					maskPosition: top,
				},
				"<0.3"
			)
			.to(
				".under-img",
				{
					opacity: 0,
					duration: 2,
				},
				"<1"
			)

		// 	maskTimeline
		// 		// .timeScale(0.1)
		// 		.to(".under-img", {
		// 			scale: 1,
		// 			duration: 2,
		// 			opacity: 0,
		// 		})
		// 		.fromTo(
		// 			".masked-img",
		// 			{
		// 				maskSize: "2600%",
		// 				// duration: 3,
		// 				// scale: 0.8,
		// 				maskImage: "white",
		// 				// translateX: "40%",
		// 				translateY: "0",
		// 				// translateZ: 30,
		// 			},
		// 			{
		// 				maskSize: "10%",
		// 				maskPosition: "center",
		// 				translateX: "0%",
		// 				translateY: "-35%",
		// 				translateZ: "1",
		// 				background: "white",
		// 				opacity: 1,
		// 				duration: 4,
		// 			},
		// 			"<1"
		// 		)
		// 		.to(
		// 			".under-img",
		// 			{
		// 				opacity: 0,
		// 				duration: 2,
		// 			},
		// 			"<3"
		// 		)
	})
	return (
		<div id="hero" className="bg-black ">
			{/* <picture>
				<source
					media="(min-width:1020px)"
					srcSet="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
					className="object-contain"
				/>
				<source
					media="(min-width:900px)"
					srcset="/hero/Jason_and_Lucia_02_With_Logos_square.jpg"
					className="object-contain "
				/>
				<img
					src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
					alt="Jason and Lucia with logos"
					className="object-contain"
				/>
			</picture> */}
			{/* <div className="relative w-screen h-screen"> */}
			<div className="masked-img ">
				<img
					src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
					alt=""
					className="under-img "
				/>
				{/* <div className="under-img h-screen"></div> */}
			</div>
			{/* </div> */}
		</div>
	)
}

export default Hero
