import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const JasonDuvalVideo = () => {
	const videoRef = useRef()
	useGSAP(() => {
		const videoTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#video-section",
				start: "top top",
				end: "+=600%  bottom",
				scrub: true,
				pin: "#video-section",
				// duration: 5,
				// markers: true,
			},
		})

		videoTimeline
			.to(
				"#video-section",
				{
					top: 0,
				},
				"-=0.8"
			)
			.to(
				"video",
				{
					zIndex: 41,
				},
				"-=0.8"
			)
			.fromTo(
				"video",
				{
					filter: "brightness(0.9) blur(10px)",
				},
				{
					filter: "brightness(1) blur(0px)",
					duration: 0.3,
				},
				"+=1"
			)

		// videoRef.current.onloadedmetadata = () => {
		// 	console.log(">>>here", videoRef.current.duration)
		// 	videoTimeline.to(
		// 		videoRef.current,

		// 		{
		// 			currentTime: videoRef.current.duration,
		// 			duration: 2,
		// 		}
		// 	)
		// }
		// Wait for metadata → THEN add video playback tween
		function addVideoPlayback() {
			const dur = videoRef.current.duration
			if (!dur || isNaN(dur)) {
				console.warn("Video metadata not ready")
				return
			}

			console.log(">>>hey")
			// Add AFTER filters and zIndex animation
			videoTimeline
				.call(() => videoRef.current.play(), "-=1")
				.to(videoRef.current, {
					currentTime: videoRef.current.duration,
					ease: "none",
					duration: 2,
				}) // holds timeline while video plays
				.call(() => videoRef.current.pause(), "videoPlayLabel")

				.fromTo(
					"#maskedVideo",
					{
						maskImage: `radial-gradient(circle at 150vw 50vh, rgb(0, 0, 0) 100vw, rgb(0, 0, 0) 150vw)`,
					},
					{
						maskImage: `radial-gradient(circle at 95vw 5vh, rgb(0, 0, 0) 30vw, rgb(0, 0, 0,.2) 60vw)`,
						duration: 2,
					},
					"videoPlayLabel-=3"
				)

			videoTimeline
				.to(
					"#JasonVideo",
					{
						bottom: 0,
						duration: 2,
					},
					"videoPlayLabel-=2"
				)

				.to(
					"#maskedVideo",
					{
						opacity: 0.1,
						// background: "black",
					},
					"videoPlayLabel-=1.5"
				)
		}

		// Metadata already available?
		if (videoRef.current.readyState >= 1 && !isNaN(videoRef.current.duration)) {
			addVideoPlayback()
		} else {
			videoRef.current.addEventListener(
				"loadedmetadata",
				() => {
					console.log(
						">>>>>>>",
						videoRef.current.readyState,
						videoRef.current.duration
					)
					addVideoPlayback()
				},

				{
					once: true,
				}
			)
		}
	})
	return (
		<section
			id="video-section"
			className="w-full h-screen fixed top-full left-0 z-0 mask-video0"
		>
			<div className="w-full h-full mask-video" id="maskedVideo">
				<video
					src="/videos/output1.mp4"
					muted
					// loop
					playsInline
					preload="autoplay"
					ref={videoRef}
					className="w-full h-screen object-cover "
				/>
			</div>
			<div
				id="JasonVideo"
				className="absolute -bottom-[200vh] left-0 w-screen  text-white grid grid-cols-12 px-[var(--video-padding-inline)] gap-x-6 leading-[1.3]"
			>
				<div className="left-side grid grid-cols-6 col-span-6">
					<h2 className="text-[90px] LS-medium text-[#fff9cb] col-start-2 col-span-4 m-0 uppercase tracking-[1px]">
						Jason Duval
					</h2>
					<div className="col-start-2 col-span-4 my-16">
						<p className="text-4xl noto-sans-thaana-medium text-[#ffb0c4] mb-5 ">
							Jason wants an easy life, but things just keep getting harder.
						</p>
						<p className="text-xl kanit-regular">
							Jason grew up around grifters and crooks. After a stint in the
							Army trying to shake off his troubled teens, he found himself in
							the Keys doing what he knows best, working for local drug runners.
							It might be time to try something new.
						</p>
					</div>
					<img
						src="/jason-vid-section/Jason_Duval_01.jpg"
						alt=""
						className="col-start-2 col-span-5 aspect-[9/16] object-[80%_center] object-cover"
					/>
				</div>

				<div className="video-images grid grid-cols-6 col-start-7 col-span-6 w-full pt-[30vh] gap-8">
					<div className="w-[calc(100%_+var(--video-padding-inline))] col-start-1 col-span-6 ">
						<img
							src="/jason-vid-section/Jason_Duval_02.jpg"
							alt=""
							className="object-cover aspect-square object-[5%_center]"
						/>
					</div>
					<div className="col-start-1 col-span-6">
						<img
							src="/jason-vid-section/Jason_Duval_06.jpg"
							alt=""
							className="object-cover aspect-square "
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default JasonDuvalVideo
