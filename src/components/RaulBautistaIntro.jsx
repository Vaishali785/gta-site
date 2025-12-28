import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

const RaulBautistaIntro = () => {
	const videoRef = useRef()
	useGSAP(() => {
		const mm = gsap.matchMedia()

		mm.add(
			{
				isSmallMobile: "(max-width: 550px)",
				isMobile: "(max-width: 768px)",
				isTab: "(min-width: 769px) and (max-width: 1023px)",
				isLaptop: "(min-width: 1024px)",
			},
			(context) => {
				const { isSmallMobile, isMobile, isTab } = context.conditions
				const raulTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: "#raulBautistaSection",
						start: "top 35%",
						end: isTab ? "+=1000" : "+=1800",
						scrub: true,
						marker: { startColor: "purple", endColor: "purple" },
					},
				})

				const clipPath = () =>
					gsap.fromTo(
						".raul-bg-mask",
						{
							clipPath: `polygon(0 8%, 100% 0, 100% 100% , 0 100%)`,
							// maskImage: `linear-gradient(180deg, #000000 84%, transparent 100%)`,
						},
						{
							clipPath: `polygon(0 0%, 100% 0, 100% 100% , 0 100%)`,
							// maskImage: `linear-gradient(180deg, #000000 0%, transparent 100%)`,
							duration: 0.8,
						}
					)

				const moveBgImg = () =>
					gsap.fromTo(
						".raul-bg-img",
						{ y: "0" },
						{
							y: "56px",
							delay: 0.5,
						}
					)

				const moveTextUp = () =>
					gsap.fromTo(
						"#RaulIntroContent",
						{
							y: "10px",
						},
						{
							y: "-70px",
						},
						"hideEverything"
					)

				const fadeBgImg = () =>
					gsap.fromTo(
						".raul-bg-mask",
						{
							maskImage: `linear-gradient(180deg, #000000 84%, transparent 100%)`,
						},
						{
							maskImage: `linear-gradient(180deg, #000000 0%, transparent 100%)`,
							duration: 0.8,
						}
					)
				const changeVideoBg = () =>
					gsap.to("#blackMask", {
						background: "rgba(0,0,0,0.7)",
						// duration: 0.6,
					})

				raulTimeline
					// .add(removeGradientBg())
					.add(clipPath(), "-=0.7")
					.add(moveBgImg(), "-=0.3")
					.add(moveTextUp(), "-=0.7")
					.add(fadeBgImg(), "+=0.35")
					.add(changeVideoBg(), "+=1.4")
				// .add(moveRightImg(), "")
				// .add(increaseOpacity(), "-=0.1")

				const videoTL = gsap.timeline({
					scrollTrigger: {
						trigger: "#raulHalfVideo",
						start: "top top",
						end: isTab ? "+=1600" : "+=1400",
						pin: true,
						scrub: true,
						anticipatePin: 1,
						pinSpacing: true,
						markers: { startColor: "yellow", endColor: "yellow" },
					},
				})

				const halfTextAnimation = () =>
					gsap.to("#raulHalfText", {
						top: isMobile ? "-30%" : "60%",
						duration: 2,
					})

				const removeBlackMask = () =>
					gsap.to("#blackMask", {
						background: "rgba(0, 0, 0, 0.1)",
						duration: 1.5,
						// delay: 6,
					})

				const translateRightImg = () =>
					gsap.fromTo(
						"#raulInCarImg",
						{
							y: 0,
						},
						{
							y: "-25px",
							duration: 2,
							delay: 2,
						}
					)

				function addVideoPlayback() {
					const dur = videoRef.current.duration
					if (!dur || isNaN(dur)) {
						console.warn("Video metadata not ready")
						return
					}
					videoTL.fromTo(
						videoRef.current,
						{
							currentTime: 0,
						},
						{
							currentTime: videoRef.current.duration,
							ease: "none",
							duration: 3,
						},
						"playVideo"
					) // holds timeline while video plays

					videoTL.add(halfTextAnimation(), "playVideo+=0.1")
					// videoTL.add(removeBlackMask(), ">")
				}

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
							// videoTL.add(removeBlackMask(), ">")
							// addVideoPlayback2()
						},
						{
							once: true,
						}
					)
				}

				const afterHalfVideoTl = gsap.timeline({
					scrollTrigger: {
						trigger: "#raulPics2",
						start: "top 70%",
						end: "+=600",
						scrub: true,
						markers: { startColor: "pink", endColor: "pink" },
					},
				})

				afterHalfVideoTl
					.add(removeBlackMask())
					.add(translateRightImg(), "-=0.1")
				// .add(translateRightText(), "-=0.2")

				const postcardTL = gsap.timeline({
					scrollTrigger: {
						trigger: "#postcard",
						start: "top 30%",
						end: isSmallMobile ? "+=400" : "+=1000",
						// pin: true,
						scrub: true,
						markers: { startColor: "red", endColor: "red" },
						anticipatePin: 1,
						pinSpacing: false,
					},
				})

				const scalePostcardBg = () =>
					gsap.to(".postcard-bg", {
						transform: `scale(1.05,1.05)`,
						duration: 2,
					})
				postcardTL
					// .add(scalePostcard())
					.add(scalePostcardBg())
			}
		)
	})
	return (
		<>
			<section id="raulBautistaSection" className=" relative z-[42]">
				{/* bg gradient */}
				<div
					id="raulSectionBg"
					className="raul-section-bg absolute top-0 left-0 w-screen h-full z-0 opacity-0"
				/>

				{/* main images */}
				<div className="raul-bg-mask z-10">
					<div className="raul-bg-img h-screen w-full ">
						<img
							src="/raul_bautista/raul.webp"
							alt=""
							className="raul-img object-cover h-[120vh] w-screen object-[30%_0] top-0 absolute"
						/>
					</div>
				</div>

				<div
					id="RaulIntroContent"
					className="absolute top-0 grid grid-cols-12 max-md:block max-md:top-[40%] max-md:h-fit md:max-lg:px-[5vw] px-[var(--video-padding-inline)] gap-x-6 h-screen max-sm:top-3/5"
				>
					<div className="flex flex-col col-start-9 md:max-lg:col-start-8 md:max-lg:col-span-5  justify-center col-span-4 pt-[var(--video-padding-inline)] max-md:pt-0">
						<h2 className="text-[90px] max-md:text-[15vh] md:max-lg:text-[80px] LS-medium text-[#fff9cb] m-0 uppercase tracking-[1px] leading-[1] max-sm:text-[12vh]">
							Raul Bautista
						</h2>
						<div>
							<p className="text-4xl poppins-bold text-[#ffed95] my-5 tracking-[0.6px]">
								Experience counts.
							</p>
							<p className="text-xl poppins-semibold text-white">
								Confidence, charm, and cunning <br />— Raul’s a seasoned bank
								robber always on the hunt for talent ready to take the risks
								that bring the biggest rewards.
							</p>
						</div>
					</div>
				</div>

				{/* two grid images */}
				<div
					id="RaulPics"
					className="grid grid-cols-12 max-md:grid-cols-6 px-[var(--video-padding-inline)] max-md:pt-[30vh] gap-x-6 max-md:gap-x-3 leading-[1.3]  top-full raul-gradient-bg2 z-10 relative max-md:px-[var(--video-mobile-padding-inline)] max-md:hiddenn max-sm:flex max-sm:px-5 "
				>
					{/* <div className="bg raul-gradient-bg w-screen h-screen -mx-[var(--video-padding-inline)] absolute top-full"></div> */}
					<div className="w-[calc(100%_+var(--video-padding-inline))] -ml-[var(--video-padding-inline)] col-start-1 col-span-6 h-fit hover:cursor-pointer max-md:w-full max-md:ml-0  aspect-square am:max-md:flex-1 max-sm:w-1/2">
						<img
							src="/raul_bautista/Raul_Bautista_01.jpg"
							alt=""
							className="object-cover aspect-square object-[70%_center]  h-full hover:border-4 hover:border-[#fff9cb] transition-all duration-300 "
						/>
					</div>
					<div className="right-img col-start-7 col-span-6 max-md:col-start-1 pt-[calc(var(--video-padding-inline)/1.5)] pb-[63px]  hover:cursor-pointer max-sm:flex-1 max-sm:py-0">
						<img
							src="/raul_bautista/Raul_Bautista_03.jpg"
							alt=""
							className="object-cover aspect-square h-full hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer"
						/>
					</div>
				</div>
			</section>

			{/* half video */}
			<section id="RaulHalfVideoSection" className="h-fit gap-x-6 ">
				<div className="half relative h-fit grid grid-cols-12 max-md:grid-cols-6  px-[var(--video-padding-inline)] md:max-lg:px-[10vw] gap-x-6 md:max-lg:gap-x-2 max-md:gap-x-2 max-md:px-5">
					<div
						id="raulHalfVideo"
						className="video w-[calc(100%_+var(--video-padding-inline))] min-h-screen col-start-7 col-span-6 max-md:col-start-1 max-md:w-full"
					>
						<video
							src="/videos/raul.mp4"
							className="h-full my-auto w-full  object-cover max-md:w-full max-md:max-h-3/4 max-md:pt-5"
							muted
							// loop
							playsInline
							preload="auto"
							ref={videoRef}
						></video>
					</div>
					<div
						className="col-start-1 col-span-5 absolute top-full max-md:top-1/3 max-md:relative max-md:left-[12%]"
						id="raulHalfText"
					>
						<p
							className={`LS-medium uppercase text-7xl md:max-lg:text-[54px] font-bold text-[#fff9cb] tracking-[1.2px]  quotes max-md:text-[11vw]`}
						>
							Life is full of surprises, my friend. I think we'd all be wise to
							remember that.
						</p>
					</div>
				</div>

				{/* two grid images */}
				<div
					id="raulPics2"
					className="grid grid-cols-12 max-md:block px-[var(--video-padding-inline)] gap-x-6 leading-[1.3]  top-full raul-gradient-bg2 z-10 relative"
				>
					{/* <div className="bg raul-gradient-bg w-screen h-screen -mx-[var(--video-padding-inline)] absolute top-full"></div> */}
					<div
						id="raulInCarImg"
						className="w-full pt-[calc(var(--video-padding-inline)/1.5)] col-start-2 col-span-5 h-fit max-md:py-[calc(var(--video-padding-inline)/1.5)]"
					>
						<img
							src="/raul_bautista/Raul_Bautista_02.jpg"
							alt=""
							className="object-cover aspect-square object-[70%_center] hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer "
						/>

						<div
							className="lg:w-[65%] pt-36 max-md:w-full max-md:py-8 md:max-lg:w-full"
							id="textAfterRaulInCar"
						>
							<p className="text-4xl poppins-bold text-[#ffed95] my-5 tracking-[1.1px] max-md:text-4xl">
								A professional adapts.
							</p>
							<p className="text-xl poppins-semibold text-white max-md:text-2xl">
								Raul's recklessness raises the stakes with every score. Sooner
								or later, his crew will have to double down or pull their chips
								from the table.
							</p>
						</div>
					</div>
					<div
						id="raulInSuitImg"
						className="right-img col-start-7 col-span-5 pt-10 translate-y-2.5 max-sm:pt-0 max-sm:pb-10"
					>
						<img
							src="/raul_bautista/Raul_Bautista_04.jpg"
							alt=""
							className="object-cover aspect-9/16 h-[70%] hover:border-4 hover:border-[#fff9cb] transition-all duration-300 hover:cursor-pointer max-sm:h-[50vh] max-sm:w-full"
						/>
					</div>
				</div>
			</section>

			<section
				id="postcard"
				className="postcard-section px-[15vw] py-[7vw]  min-h-screen w-full max-md:px-[5vw] max-md:min-h-5/6 max-md:pb-[15vh]"
			>
				<div className="postcard overflow-hidden relative scale-95 hover:rotate-[0.5deg] hover:brightness-110 hover:scale-100 transition-all duration-700 hover:cursor-pointer max-md:scale-100">
					<img
						src="/raul_bautista/postcard-overlay.webp"
						alt=""
						className="relative z-10"
					/>
					<div className="postcard-bg absolute top-0 left-0 z-0"></div>
				</div>
				{/* </div> */}
			</section>
		</>
	)
}

export default RaulBautistaIntro
