import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const ClippedImageSection = () => {
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
				let { isMobile, isTab, isLaptop } = context.conditions
				const clippedTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: "#clipped-img-section",
						start: `top center`,
						end: isTab ? "+=1000" : `+=1600`,
						scrub: true,
						markers: { startColor: "green", endColor: "green" },
					},
				})

				const clipBottom = () =>
					gsap.fromTo(
						".clipped-img-bottom",
						{
							clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
						},
						{
							clipPath: "polygon(0 0,100% 0,100% 92%, 0 100%)",
							duration: 1.5,
							ease: "power1.out",
							delay: 1,
						}
					)

				const gradientText = () =>
					gsap.fromTo(
						"#clippedImgText",
						{
							backgroundImage: `radial-gradient(circle at 80% 40%, rgb(252, 82, 67) 0%, rgb(223, 58, 147) 50%, transparent 100%)`,
						},
						{
							backgroundImage: `radial-gradient(circle at 70% 70%, rgb(255, 185, 156) 0%, rgb(255, 249, 203) 100%, transparent 100%)`,
							duration: 1.8,
							delay: 2,
						}
					)
				const imagePositionMove = () =>
					gsap.fromTo(
						".image1",
						{
							top: "56px",
						},
						{
							top: "0",
							duration: 2,
						}
					)

				const gradientBg = () =>
					gsap.fromTo(
						"#blackMask",
						{
							background: "rgba(0,0,0,1)",
						},
						{
							background: `rgba(0,0,0,.1)`,
							duration: 1,
							delay: 2.5,
						}
					)

				clippedTimeline
					// .add(clipBottom())
					.add(imagePositionMove(), "-=0.4")
					// .add(imagePositionMoveBack(), "-=0.1")
					.add(clipBottom(), isTab ? "+=1" : "+=5")
					.add(gradientText(), ">=2.5")
					.add(gradientBg(), ">")
			}
		)
	})
	return (
		<div id="clipped-img-section" className="relative z-[41] ">
			<div className=" clipped-img clipped-img-bottom h-full max-md:min-h-[800px] md:max-lg:min-h-[600px] min-h-[900px] relative">
				<img
					src="/jason-vid-section/jason.webp"
					alt=""
					className="image1 object-cover absolute top-14 max-md:top-0 max-md:h-full max-md:object-[35%]"
				/>
			</div>

			<div
				id="clippedImgText"
				className="clip-text flex max-md:flex-col h-[95vh] w-full justify-center items-center gap-40 md:max-lg:gap-20 max-md:gap-[60px] mx-auto bg-black gradient-text orangish-gradient z-[41] -my-[10vh]"
			>
				<div className="w-1/3 text-8xl font-semibold max-md:w-5/6 md:max-lg:w-2/5 poppins-extrabold">
					<div>Only in</div>
					<div>Leonida</div>
				</div>
				<div className="w-1/5 max-md:w-3/4 md:max-lg:w-1/3 text-3xl poppins-semibold">
					<p>
						When the sun fades and the neon glows, everyone has something to
						gain - and more to lose.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ClippedImageSection
