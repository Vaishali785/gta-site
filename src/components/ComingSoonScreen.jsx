import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const ComingSoonScreen = ({ zIndex }) => {
	useGSAP(() => {
		// const comingTl = gsap.timeline("#comingSoonScreen", {
		// 	scrollTrigger: {
		// 		trigger: "#hero",
		// 		start: "bottom 0%",
		// 		pin: true,
		// 		markers: true,

		// 	},
		// })

		// comingTl.to("#comingSoonScreen", {
		// 	background: "linear-gradient(pink,blue)",
		// })
		gsap.fromTo(
			"#coming-soon-content",
			{
				opacity: 0,
				stagger: 0.2,
			},
			{
				opacity: 1,
				duration: 1,
			}
		)
	})
	return (
		<div
			className={`w-screen h-screen bg-black  text-white flex items-center justify-center fixed top-0`}
			style={{ zIndex: zIndex }}
			id="comingSoonScreen"
		>
			{/* <div className="w-screen h-screen vi-grad-bg z-30 fixed top-0 left-0"> */}
			<img
				src="/hero/vi.png"
				alt=""
				className="absolute top-[4.3%] md:top-[-7.3%] scale-[0.3]"
			/>

			<div
				className="flex flex-col items-center mt-[30%] absolute bottom-1/6 gradient-text"
				id="coming-soon-content"
			>
				<div className="font-extrabold text-8xl">Coming</div>
				<div className="font-extrabold text-8xl">Nov 13</div>
				<div className="font-extrabold text-8xl">2026</div>
			</div>
			{/* </div> */}
		</div>
	)
}

export default ComingSoonScreen
