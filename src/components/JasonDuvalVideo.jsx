import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const JasonDuvalVideo = () => {
	const videoRef = useRef()
	const videoConRef = useRef()

	useGSAP(() => {
		const mm = gsap.matchMedia()
		mm.add(
			{
				isMobile: "(max-width: 750px)",
				isTab: "(min-width: 751px) and (max-width: 1023px)",
				isLaptop: "(min-width: 1024px)",
			},
			(context) => {
				let { isMobile } = context.conditions
				const videoTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: "#videoSection",
						start: "top top",
						end: isMobile ? "+=1500" : "+=2300",
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
							maskImage: isMobile
								? `radial-gradient(circle at 50vw 40vh, rgb(0, 0, 0) 60vw, rgba(0, 0, 0, 0.667) 75vw)`
								: `radial-gradient(circle at 95vw 5vh, rgb(0, 0, 0) 30vw, rgb(0, 0, 0,.2) 60vw)`,
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
				}

				// Metadata already available?
				if (
					videoRef.current.readyState >= 1 &&
					!isNaN(videoRef.current.duration)
				) {
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
			}
		)
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
						src="/videos/jason_hugging.mp4"
						muted
						// loop
						playsInline
						preload="auto"
						ref={videoRef}
						id="video1"
						className="w-full h-screen object-cover max-md:object-[80%]"
					/>
				</div>
				<div
					id="JasonVideo"
					className="absolute -bottom-[200vh] max-md:-bottom-[400vh] md:max-lg:-bottom-[250vh] left-0 w-screen  text-white grid grid-cols-12 max-md:grid-cols-6 px-[var(--video-padding-inline)] max-md:px-[var(--video-mobile-padding-inline)] gap-x-6 max-md:gap-x-2 leading-[1.3]"
				>
					<div className="left-side grid grid-cols-6 col-span-6  ">
						<h2 className="text-[90px] LS-medium text-[#fff9cb] col-start-2 max-md:col-start-1 col-span-4 md:max-lg:col-span-6 m-0 uppercase tracking-[1px] max-md:text-[12vh] max-md:leading-[1] max-md:tracking-[3px]">
							Jason Duval
						</h2>
						<div className="col-start-2 col-span-4 mt-16 mb-28  max-md:col-start-1  max-md:mt-8 max-md:mb-10 max-md:col-span-5 md:max-lg:col-span-6 ">
							<p className="text-4xl text-[#ffb0c4] mb-5 poppins-bold max-md:tracking-[1px]">
								Jason wants an easy life, but things just keep getting harder.
							</p>
							<p className="text-xl poppins-bold">
								Jason grew up around grifters and crooks. After a stint in the
								Army trying to shake off his troubled teens, he found himself in
								the Keys doing what he knows best, working for local drug
								runners. It might be time to try something new.
							</p>
						</div>
						<img
							src="/jason-vid-section/Jason_Duval_01.jpg"
							alt=""
							className="max-md:hidden col-start-2 h-full col-span-5 aspect-[9/16] object-[80%_center] object-cover hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
						/>
					</div>

					<div className="right-side grid grid-cols-6 col-start-7 col-span-6  max-md:col-start-1 w-full max-md:w-fit max-md:overflow-hidden pt-[20vh] max-md:pt-0 gap-8">
						<div className="w-[calc(100%_+var(--video-padding-inline))] max-md:w-[calc(100%_+var(--video-mobile-padding-inline))] h-full col-start-1 col-span-6 h-fit">
							<img
								src="/jason-vid-section/Jason_Duval_02.jpg"
								alt=""
								className="object-cover aspect-square h-full object-[5%_center] hover:border-4 hover:border-[#fff9cb]  max-md:-mx-5 transition-all duration-300 hover:cursor-pointer"
							/>
						</div>
						<div className="col-start-1 col-span-5 max-md:min-w-[700px] max-md:h-fit max-md:flex  max-md:overflow-x-scroll">
							<img
								src="/jason-vid-section/Jason_Duval_06.jpg"
								alt=""
								className="object-cover max-md:aspect-[9/16] aspect-square flex-1 w-[350px] hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
							/>
							<img
								src="/jason-vid-section/Jason_Duval_01.jpg"
								alt=""
								className="md:hidden flex-1 aspect-[9/16] object-[80%_center] object-cover w-[350px] hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default JasonDuvalVideo
