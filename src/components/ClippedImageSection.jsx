import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const ClippedImageSection = () => {
	useGSAP(() => {
		const clippedTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#clipped-img-section",
				start: `top center`,
				end: `+=1600`,
				scrub: true,
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
			.add(clipBottom(), "+=5")
			.add(gradientText(), ">=2.5")
			.add(gradientBg(), ">")
	})
	return (
		<div id="clipped-img-section" className="relative z-[41] ">
			<div className=" clipped-img clipped-img-bottom h-full max-md:min-h-[800px] min-h-[1000px] relative">
				<img
					src="/jason-vid-section/jason.webp"
					alt=""
					className="image1 object-cover absolute top-14 max-md:top-0 max-md:h-full max-md:object-[35%]"
				/>
			</div>

			<div
				id="clippedImgText"
				className="clip-text flex max-md:flex-col h-[95vh] w-full justify-center items-center gap-40 max-md:gap-[60px] mx-auto bg-black gradient-text orangish-gradient z-[41] -my-[10vh]"
			>
				<div className="w-1/3 text-8xl font-semibold max-md:w-5/6 poppins-extrabold">
					<div>Only in</div>
					<div>Leonida</div>
				</div>
				<div className="w-1/5 max-md:w-3/4 text-3xl poppins-semibold">
					<p>
						When the sun fades and the neon glows, everyone has something to
						gain - and more to lose.
					</p>
				</div>
			</div>

			{/* <div className="clipped-img clipped-img-top">
				<img
					src="/jason-vid-section/jason.webp"
					alt=""
					className="object-cover "
				/>
			</div> */}
		</div>
	)
}

export default ClippedImageSection

// background: linear-gradient(223.17deg, rgb(28, 24, 41) 0%, rgb(27, 24, 40) 8.61%, rgb(25, 23, 36) 17.21%, rgb(22, 21, 32) 25.82%, rgb(20, 19, 28) 34.42%, rgb(18, 18, 24) 43.03%, rgb(17, 17, 23) 51.63%);
// background: linear-gradient(223.17deg, rgb(35, 114, 135) 0%, rgb(36, 108, 132) 8.61%, rgb(38, 95, 124) 17.21%, rgb(39, 79, 114) 25.82%, rgb(40, 67, 103) 34.42%, rgb(40, 58, 95) 43.03%, rgb(40, 55, 92) 51.63%);

// background: linear-gradient(223.17deg, rgb(84, 91, 117) 0%, rgb(81, 88, 114) 8.61%, rgb(74, 82, 108) 17.21%, rgb(66, 73, 100) 25.82%, rgb(58, 65, 92) 34.42%, rgb(52, 59, 86) 43.03%, rgb(50, 57, 83) 51.63%);

// background: linear-gradient(223.17deg, rgb(195, 98, 103) 0%, rgb(189, 95, 104) 8.61%, rgb(174, 88, 106) 17.21%, rgb(155, 78, 105) 25.82%, rgb(135, 68, 102) 34.42%, rgb(120, 61, 97) 43.03%, rgb(114, 58, 95) 51.63%);
// background: linear-gradient(223.17deg, rgb(81, 93, 71) 0%, rgb(78, 91, 69) 8.61%, rgb(69, 86, 63) 17.21%, rgb(58, 80, 57) 25.82%, rgb(50, 73, 54) 34.42%, rgb(46, 68, 53) 43.03%, rgb(44, 66, 52) 51.63%);
