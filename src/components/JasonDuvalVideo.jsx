import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const JasonDuvalVideo = () => {
	const videoRef = useRef()
	useGSAP(() => {
		const videoTimeline = gsap.timeline({
			// delay: 5,
			scrollTrigger: {
				trigger: "#video-section",
				start: "top 1%",
				end: `${window.innerHeight * 2}`,
				scrub: true,
				pin: true,
				markers: true,
			},
		})

		const fixVideoPosition = gsap.to("#video-section", {
			position: "fixed",
			top: 0,
			left: 0,
			zIndex: 40,
		})
		videoTimeline.add(fixVideoPosition)

		videoRef.current.onloadedmetadata = () => {
			// console.log(">>>here", videoRef.current.duration)
			// if (!videoRef.current) return
			videoTimeline.to(videoRef.current, {
				currentTime: videoRef.current.duration,
				duration: 2,
				// delay: 15,
				ease: "power1.inOut",
			})
		}
		// if (videoRef.current) {
		// }
	}, [])
	return (
		<div id="video-section" className="w-full bg-black h-screen">
			<video
				src="/videos/output1.mp4"
				muted
				playsInline
				preload="auto"
				ref={videoRef}
				className="w-full h-screen fixed top-0 left-0 object-cover"
			/>
			{/* <section
				id="JasonVideo"
				className="fixed top-0 left-0 w-screen h-screen bg-black text-white backdrop-blur-sm"
			>
				<h1>Jason Duval</h1>
				<h2>Jason wants an easy life, but things just keep getting harder.</h2>
				<p>
					Jason grew up around grifters and crooks. After a stint in the Army
					trying to shake off his troubled teens, he found himself in the Keys
					doing what he knows best, working for local drug runners. It might be
					time to try something new.
				</p>
			</section> */}
		</div>
	)
}

export default JasonDuvalVideo
