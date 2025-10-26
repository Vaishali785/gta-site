import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import React, { useRef } from "react"

const HeroScreen = ({ zIndex }) => {
	const heroRef = useRef(null)
	// let split = SplitText.create("#comingSoonContent div")
	useGSAP(() => {
		ScrollTrigger.normalizeScroll(true)
		const maskTimeline = gsap.timeline({})
		let hasComingSoonContentAnimated = false // flag to run the animation once
		let hasComingSoonImgAnimated = false // flag to run the animation once

		ScrollTrigger.create({
			trigger: "#hero",
			start: "top top",
			end: "bottom+=1600",
			pin: true,
			scrub: true,
			animation: maskTimeline,
			onUpdate: ({ progress, direction }) => {
				const val = progress * 100
				const bgVal = (100 - val) * 4
				const bgTransVal = bgVal + 10

				if (progress > 0.8 && direction == 1) {
					heroRef.current.style.background = `linear-gradient(to bottom, black ${bgVal}%, transparent ${bgTransVal}%)` // this is required otherwise with simple bg property gsap converts black to rgba() and keep changing the opacity value with color stop
					// gsap.to("#hero", {
					// 	opacity: 0.2,
					// })
				}
				if (progress > 0.8 && direction == 1 && !hasComingSoonContentAnimated) {
					hasComingSoonContentAnimated = true // otherwise the animation will keep repeating
					gsap.fromTo(
						"#comingSoonContent",
						{
							scale: 1.25,
							opacity: 0.5,
							duration: 5,
							backgroundClip: "text",
							color: "transparent",
							// background: `radial-gradient(circle at 50% ${val}vh, rgb(255, 212, 128) 0vh, rgb(234, 67, 116) 50vh, rgb(117, 32, 102) 90vh, rgba(32, 31, 66, 0) ${
							// 	val + 20
							// }vh)`,
							stagger: 0.1,
						},
						{
							scale: 0.9,
							duration: 2,
							opacity: 1,
							ease: "power1.in",
						}
					)
				}
				if (progress > 0.93 && direction == 1 && !hasComingSoonImgAnimated) {
					hasComingSoonImgAnimated = true // otherwise the animation will keep repeating
					gsap.fromTo(
						".coming-soon-image",
						{
							// scale: 0.35,
							opacity: 0.7,
							// duration: 1,
						},
						{
							// scale: 0.3,
							duration: 1,
							opacity: 1,
							// ease: "power1.in",
							// scale: 0.9,
						}
					)
				}

				if (direction == -1 && progress < 1) {
					gsap.to("#comingSoonScreen div, #comingSoonScreen img", {
						opacity: progress - 0.2 < 0.67 ? 0 : progress - 0.2,
					})
					// gsap.to("#hero", {
					// 	background: `linear-gradient(to bottom, black ${val}%, transparent ${
					// 		val + 7
					// 	}%)`,
					// 	opacity: 1 - progress + 0.5,
					// })
					// gsap.fromTo(
					// 	".masked-img",
					// 	{
					// 		// opacity: progress < 0.7 ? 1 - progress + 0.3 : 1,
					// 		background: "white",
					// 	},
					// 	{
					// 		background: "transparent",
					// 	}
					// )
				}
			},
		})

		maskTimeline
			.fromTo(
				".under-img",
				{
					scale: 1.1,
					margin: "auto",
				},
				{
					scale: 1,
					objectFit: "cover",
					duration: 2,
					margin: "auto",
					ease: "sine.in",
				}
			)
			.addLabel("maskedImg")
			.fromTo(
				".masked-img",
				{
					maskSize: "2800%",
				},
				{
					background: "white",
					maskSize: "13%",
					opacity: 1,
					duration: 3,
					ease: "power2.inOut",
					maskPosition: "50% 18.7%",
				},
				"<1"
			)
			.to(
				".under-img",
				{
					opacity: 0,
					duration: 1,
				},
				"maskedImg+=1"
			)
			.to(
				".masked-img",
				{
					display: "none",
				},
				"maskedImg+=2"
			)
	})

	return (
		<div id="hero-wrapper">
			<div
				id="hero"
				className={`w-full h-screen z-50 flex items-center justify-center`}
				style={{ zIndex: zIndex }}
				ref={heroRef}
			>
				<div className="masked-img bg-black">
					<picture>
						<source
							media="(min-width:1020px)"
							srcSet="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
							className="object-contain under-img"
						/>
						<source
							media="(min-width:900px)"
							srcSet="/hero/Jason_and_Lucia_02_With_Logos_square.jpg"
							className="object-contain under-img "
						/>
						<img
							src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
							alt="Jason and Lucia with logos"
							className="object-contain under-img"
						/>
					</picture>
				</div>
			</div>

			<div
				className={`w-screen h-screen bg-black  text-white flex items-center justify-center fixed top-0`}
				style={{ zIndex: zIndex - 10 }}
				id="comingSoonScreen"
			>
				{/* <div className="w-screen h-screen vi-grad-bg z-30 fixed top-0 left-0"> */}
				<img
					src="/hero/vi.png"
					alt=""
					className="absolute md:top-[-4.3%] max-md:top-[-7.3%] scale-[0.3]  coming-soon-image opacity-50"
				/>

				<div
					className="flex flex-col items-center mt-[30%] absolute bottom-1/6 gradient-text opacity-50 scale-125"
					id="comingSoonContent"
				>
					<div className="font-extrabold text-8xl">Coming</div>
					<div className="font-extrabold text-8xl">Nov 13</div>
					<div className="font-extrabold text-8xl">2026</div>
				</div>
				{/* </div> */}
			</div>

			<div id="story">
				<h3 id="storyHeading" className="">
					Vice City, USA.
				</h3>
				<p id="storyContent" className="">
					Jason and Lucia have always known the deck is stacked against them.
					But when an easy score goes wrong, they find themselves on the darkest
					side of the sunniest place in America, in the middle of a criminal
					conspiracy stretching across the state of Leonida — forced to rely on
					each other more than ever if they want to make it out alive.
				</p>
			</div>
		</div>
	)
}

export default HeroScreen
