import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const Footer = () => {
	useGSAP(() => {
		const footerTL = gsap.timeline({
			scrollTrigger: {
				trigger: "#footer",
				start: "top top",
				end: "+=800",
				scrub: true,
				// pin: true,
			},
		})

		const sectionScrollToTop = () =>
			gsap.fromTo("#footer", { top: "100%" }, { top: 0 })

		const increaseOpacity = () =>
			gsap.fromTo("#footer", { zIndex: 10 }, { zIndex: 50 })

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

		footerTL
			.add(sectionScrollToTop(), "-=4")
			.add(increaseOpacity(), ">")
			.add(footerTextGradient())
	})
	return (
		<section
			id="footer"
			className="fixed top-full left-0 min-h-screen z-10 w-full border-2 border-red-300"
		>
			<div
				id="footerIntro"
				className="w-full min-h-screen flex flex-col justify-evenly items-center"
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
					<div className="font-extrabold text-[150px] uppercase">Vaishali</div>
					<div className="text-[12px] font-light uppercase mx-auto tracking-[20px] -mt-[30px] pl-4">
						Inspired by Rockstar Games
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
