import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const JasonWithGunVideo = () => {
	const videoRef2 = useRef()
	useGSAP(() => {
		const mm = gsap.matchMedia()
		mm.add(
			{
				isMobile: "(max-width: 768px)",
				isTab: "(min-width: 769px) and (max-width: 1023px)",
				isLaptop: "(min-width: 1024px)",
			},
			(context) => {
				console.log(context.conditions)
				let { isMobile } = context.conditions

				const videoTimeline2 = gsap.timeline({
					scrollTrigger: {
						trigger: "#video2Section",
						start: "top top",
						end: "+=3000",
						scrub: true,
						pin: true,
						markers: { startColor: "yellow", endColor: "yellow" },
					},
				})

				const video2TextShow = () =>
					gsap.fromTo(
						"#video2Text",
						{
							opacity: 0,
							// bottom: "5vh",
						},
						{
							opacity: 1,
							bottom: isMobile ? "14vh" : "8vh",
							// duration: 1,
							// delay: 2,
						}
					)

				const reduceOpacity = () =>
					gsap.to(
						"#maskedVideo2,#video2Text ",
						// { opacity: 1 },
						{ opacity: 0, zIndex: 30 }
					)

				function addVideoPlayback2() {
					const dur = videoRef2.current.duration
					if (!dur || isNaN(dur)) {
						console.warn("Video metadata not ready")
						return
					}

					// Add AFTER filters and zIndex animation
					videoTimeline2
						// .call(() => videoRef2.current.play(), "-=0.5")
						.fromTo(
							videoRef2.current,
							{
								currentTime: 0,
							},
							{
								currentTime: videoRef2.current.duration,
								ease: "none",
								// duration: ,
							},
							"videoPlayLabel2"
						) // holds timeline while video plays
					// .call(() => videoRef2.current.pause())

					videoTimeline2
						// .add(video2PositionFix())
						// .add(video2IncreaseOpacity(), "videoPlayLabel2-=0.5")
						.add(
							video2TextShow(),
							isMobile ? ">videoPlayLabel2" : "videoPlayLabel2-=0.1"
						)
						.add(
							reduceOpacity(),
							isMobile ? ">videoPlayLabel2" : "videoPlayLabel2+=0.4"
						)
				}

				if (
					videoRef2.current.readyState >= 1 &&
					!isNaN(videoRef2.current.duration)
				) {
					// addVideoPlayback()
					addVideoPlayback2()
				} else {
					videoRef2.current.addEventListener(
						"loadedmetadata",
						() => {
							// addVideoPlayback()
							addVideoPlayback2()
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
		<section id="video2Section" className="w-full h-screen ">
			<div className="w-full h-full mask-video-gun relative" id="maskedVideo2">
				<video
					src="/videos/jason_with_gun.mp4"
					muted
					id="video2"
					// loop
					playsInline
					preload="autoplay"
					ref={videoRef2}
					className="w-full h-screen object-cover max-md:object-[60%]"
				/>
			</div>
			<p
				id="video2Text"
				className="jason-quotes text-[70px] LS-medium text-[#fff9cb] col-start-2 col-span-4 m-0 uppercase tracking-[2px] absolute bottom-[0vh] left-1/5 md:max-lg:left-[8%] md:max-lg:w-1/2 max-md:left-[10%] max-md:w-[53.5%] max-md:text-[15vw] w-1/3 leading-[0.9] opacity-0"
			>
				If anything happens, I'm right behind you.
			</p>
		</section>
	)
}

export default JasonWithGunVideo
