import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const JasonDuvalVideo = () => {
	const videoRef = useRef()
	const videoConRef = useRef()

	useGSAP(() => {
		const videoTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#videoSection",
				start: "top top",
				end: "+=2300",
				scrub: true,
				pin: true,
			},
		})

		const removeFilters = () =>
			gsap.fromTo(
				"#video1",
				{
					filter: "brightness(0.9) blur(4px)",
				},
				{
					filter: "brightness(1) blur(0px)",
					// duration: 0.3,
				}
			)

		const maskBlackScreenVideo = () =>
			gsap.fromTo(
				"#maskedVideo",
				{
					maskImage: `radial-gradient(circle at 150vw 50vh, rgb(0, 0, 0) 100vw, rgb(0, 0, 0) 150vw)`,
				},
				{
					maskImage: `radial-gradient(circle at 95vw 5vh, rgb(0, 0, 0) 30vw, rgb(0, 0, 0,.2) 60vw)`,
					duration: 2,
				}
			)

		const jasonVideoPositionChange = () =>
			gsap.to("#JasonVideo", {
				bottom: "100vh",
				duration: 2,
			})

		const opacityReduce = () =>
			gsap.fromTo(
				"#maskedVideo",
				{
					opacity: 1,
				},
				{
					opacity: 0,
					// background: "black",
				}
			)
		const video2PositionFix = () =>
			gsap.to("#video2Section", {
				// opacity: 0,
				zIndex: 41,
				position: "fixed",
				top: "0vh",
			})
		const reduceOpacityOfText = () =>
			gsap.to("#JasonVideo", {
				opacity: 0,
				zIndex: 0,
			})
		const video2IncreaseOpacity = () =>
			gsap.fromTo(
				"#video2Section",
				{
					opacity: 0,
					// zIndex: -10,
				},
				{
					opacity: 1,
					// zIndex: 41,
				}
			)
		// Wait for metadata → THEN add video playback tween
		function addVideoPlayback() {
			const dur = videoRef.current.duration
			if (!dur || isNaN(dur)) {
				console.warn("Video metadata not ready")
				return
			}

			videoTimeline
				// .add(fixFirstVideo(), "-=1.8")
				// .add(increaseZIndex(), "-=1.8")
				.to("#videoSectionWrapper", { opacity: 1 }, "-=1.5")
				.add(removeFilters(), "-=1.4")

			// Add AFTER filters and zIndex animation
			videoTimeline
				.call(() => videoRef.current.play(), "-=2")
				.fromTo(
					videoRef.current,
					{
						currentTime: 0,
					},
					{
						currentTime: videoRef.current.duration,
						ease: "none",
						duration: 3,
					}
				) // holds timeline while video plays
				.call(() => videoRef.current.pause(), "videoPlayLabel")

			videoTimeline
				.add(maskBlackScreenVideo(), "videoPlayLabel-=3")
				.add(jasonVideoPositionChange(), "videoPlayLabel-=2")
				.add(opacityReduce(), "videoPlayLabel-=1.5")
				.add(reduceOpacityOfText(), "videoPlayLabel-=0.5")
				// .to("#video2Section", { zIndex: 41 }, "videoPlayLabel+=1.3")
				.add(video2IncreaseOpacity(), "-=0.3")
				.add(video2PositionFix(), "-=0.5")
			// console.log(videoTimeline.totalDuration())
		}

		// Metadata already available?
		if (videoRef.current.readyState >= 1 && !isNaN(videoRef.current.duration)) {
			addVideoPlayback()
			// addVideoPlayback2()
		} else {
			videoRef.current.addEventListener(
				"loadedmetadata",
				() => {
					addVideoPlayback()
					// addVideoPlayback2()
				},
				{
					once: true,
				}
			)
		}
	})
	return (
		<section
			id="videoSectionWrapper"
			className="h-full w-full absolute top-0 opacity-0"
			ref={videoConRef}
		>
			<div id="videoSection" className="w-full  h-screen z-0 mask-video0">
				<div className="w-full h-full mask-video" id="maskedVideo">
					<video
						src="/videos/output1.mp4"
						muted
						// loop
						playsInline
						preload="auto"
						ref={videoRef}
						id="video1"
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
						<div className="col-start-2 col-span-4 mt-16 mb-28">
							<p className="text-4xl noto-sans-thaana-medium text-[#ffb0c4] mb-5 ">
								Jason wants an easy life, but things just keep getting harder.
							</p>
							<p className="text-xl kanit-regular">
								Jason grew up around grifters and crooks. After a stint in the
								Army trying to shake off his troubled teens, he found himself in
								the Keys doing what he knows best, working for local drug
								runners. It might be time to try something new.
							</p>
						</div>
						<img
							src="/jason-vid-section/Jason_Duval_01.jpg"
							alt=""
							className="col-start-2 col-span-5 aspect-[9/16] object-[80%_center] object-cover hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
						/>
					</div>

					<div className="right-side grid grid-cols-6 col-start-7 col-span-6 w-full pt-[20vh] gap-8">
						<div className="w-[calc(100%_+var(--video-padding-inline))] col-start-1 col-span-6 h-fit">
							<img
								src="/jason-vid-section/Jason_Duval_02.jpg"
								alt=""
								className="object-cover aspect-square object-[5%_center] hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
							/>
						</div>
						<div className="col-start-1 col-span-5">
							<img
								src="/jason-vid-section/Jason_Duval_06.jpg"
								alt=""
								className="object-cover aspect-square  hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default JasonDuvalVideo
