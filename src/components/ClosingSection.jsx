import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const ClosingSection = () => {
	const lastVideoRef = useRef()
	useGSAP(() => {
		const lastVideoTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#lastSection",
				start: "top top",
				end: "+=1000",
				pin: true,
				scrub: true,
			},
		})

		const opacityDown = () => gsap.to("#lastVideo", { opacity: 0.1 })
		const zIndexDown = () => gsap.to("#lastSection", { zIndex: 10 })
		const blackScreen = () =>
			gsap.to("#blackMask", { background: "rgba(0,0,0,.8)" })

		lastVideoRef.current.addEventListener("loadedmetadata", () => {
			console.log(lastVideoRef.current.duration)
			lastVideoTl.fromTo(
				lastVideoRef.current,
				{
					currentTime: 0,
				},
				{
					currentTime: lastVideoRef.current.duration,
					duration: 3,
				},
				"lastVideoPlayed"
			)
			lastVideoTl
				.add(opacityDown(), ">")
				.add(zIndexDown(), "-=0.5")
				.add(blackScreen(), "lastVideoPlayed-=0.2")
		})

		// const footerTL = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: "#footer",
		// 		start: "top bottom",
		// 		end: "+=800",
		// 		scrub: true,
		// 		// pin: true,
		// 		markers: true,
		// 	},
		// })

		const sectionScrollToTop = () =>
			gsap.fromTo("#footer", { top: "100%" }, { top: 0, delay: 1 })

		const increaseOpacity = () =>
			gsap.fromTo(
				"#footer",
				{ opacity: 0, zIndex: 10 },
				{ opacity: 1, zIndex: 50, duration: 1 }
			)

		const scaledDownFooterText = () =>
			gsap.fromTo("#footerIntro", { scale: 1.05 }, { scale: 0.9, duration: 5 })

		const footerTextGradient = () =>
			gsap.fromTo(
				"#footerIntroText",
				{
					backgroundImage: `radial-gradient(circle at 50% 75vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 150vh)`,
				},
				{
					backgroundImage: `radial-gradient(circle at 50% -30vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 145vh)`,
					duration: 5,
				}
			)

		lastVideoTl
			.add(sectionScrollToTop(), "lastVideoPlayed+=3")
			.add(increaseOpacity(), ">")
			.add(scaledDownFooterText(), ">")
			.add(footerTextGradient(), "-=3.5")
	})
	return (
		<section id="lastSection" className=" h-screen z-20 ">
			<video
				src="/videos/output3.mp4"
				muted
				id="lastVideo"
				preload="auto"
				playsInline
				className="w-full h-full object-cover"
				ref={lastVideoRef}
			/>

			<div
				id="footer"
				className="fixed top-full left-0 min-h-screen opacity-0 z-10 w-full "
			>
				<div
					id="footerIntro"
					className="w-full min-h-screen flex flex-col justify-evenly items-center scale-105"
				>
					<img src="/hero/vi.png" alt="" className="w-[200px]" />

					<div
						className="flex flex-col items-center  gradient-text transparent-gradient scale-150 opacity-100 poppins-semibold"
						id="footerIntroText"
					>
						{/* <div className="flex items-center justify-center flex-col"></div> */}
						<div className="font-normal text-xs -mb-[34px] tracking-[10px] ">
							Developed By
						</div>
						<div className="font-extrabold text-[150px] uppercase">
							Vaishali
						</div>
						<div className="text-[12px] font-light uppercase mx-auto tracking-[20px] -mt-[30px] pl-4">
							Inspired by Rockstar Games
						</div>
					</div>
				</div>

				<div className="footer-tech-stack w-full h-fit p-4 rounded-2xl">
					<p>A FRONTEND MOTION STUDY</p>
					<p>
						Exploring cinematic UI, scroll-driven animation, and GSAP timelines
						inspired by GTA VI.
					</p>
				</div>
			</div>
		</section>
	)
}

export default ClosingSection
