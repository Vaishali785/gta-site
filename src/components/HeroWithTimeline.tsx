import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const HeroWithTimeline = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			// paused: true,
			// duration: 10,
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: `${window.innerHeight * 3}`,
				scrub: true,
				pin: true,
				markers: true,
			},
		})
		const scaleDownImg = gsap.fromTo(
			".under-img",
			{
				scale: 1.2,
				ease: "power2.inOut",
			},
			{ scale: 1, ease: "power2.inOut" }
		)
		const maskLogoImage = gsap.fromTo(
			".masked-img",
			{
				maskSize: "3500%",
				// maskPosition: "47% 41%",
			},
			{
				maskSize: "16%",
				// maskPosition: "50% 12%",
				// opacity: 0.5,
				background: "white",
				ease: "power1.inOut",
				duration: 5,
			}
		)

		const maskPositionChange = gsap.fromTo(
			".masked-img",
			{
				maskPosition: "50% 18%",
			},
			{
				maskPosition: "50% 20.4%",
				ease: "expo.inOut",
				// duration: 1.5,
			}
		)

		const heroImgFadingOpacity = gsap.to(".under-img", {
			opacity: 0.3,
			background: "white",
			ease: "expo.inOut",
		})

		const heroImgFadingOpacityZero = gsap.to(".under-img", {
			opacity: 0,
			background: "white",
			ease: "expo.inOut",
		})

		const dateTextReveal = gsap.fromTo(
			"#comingSoonContent",
			{
				opacity: 0,
				scale: 1.5,
				backgroundImage: `radial-gradient(circle at 50% 150vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 100vh)`,
			},
			{
				opacity: 1,
				scale: 1.25,
				backgroundImage: `radial-gradient(circle at 50% 125vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 150vh)`,
				duration: 2,
			}
		)

		const dateTextGradientAnimate = gsap.fromTo(
			"#comingSoonContent",
			{
				scale: 1.25,
				backgroundImage: `radial-gradient(circle at 50% 100vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 125vh)`,
			},
			{
				scale: 1,
				backgroundImage: `radial-gradient(circle at 50% 5vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 145vh)`,
				duration: 3,
			}
		)

		const revealViImage = gsap.to(".vi-logo-img", {
			backgroundSize: `clamp(29vh, 35%, 20vh)`,
			opacity: 1,
			maskImage: `radial-gradient(
                circle at 50% 50%,
                rgb(0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 140%
            )`,
			duration: 1.5,
		})

		const hideMaskedText = gsap.to(".masked-img", {
			opacity: 0,
		})

		const scaleDownViImage = gsap.fromTo(
			".vi-logo-img",
			{
				width: "225px",
			},
			{
				width: "185px",
				duration: 3,
				ease: "expo.inOut",
			}
		)

		tl.add(scaleDownImg)
			.add(maskLogoImage, "-=1.5")
			.add(maskPositionChange, "-=1")
			.add(heroImgFadingOpacity, "-=2")
			.add(heroImgFadingOpacityZero, "-=1")
			.add(dateTextReveal, "-=0.9")
			.add(dateTextGradientAnimate, "-=0.3")
			.add(revealViImage, "-=3")
			.add(hideMaskedText, "-=2.9")
			.add(scaleDownViImage, "-=2.8")
	})

	// still lags smooth effect
	return (
		<div id="hero-wrapper">
			<div
				id="hero"
				className={`w-full h-screen z-50 flex items-center justify-center`}
				// style={{ zIndex: zIndex }}
				// ref={heroRef}
			>
				<div className="relative w-fit h-fit !bg-black">
					<img
						src="/hero/vi.png"
						alt=""
						className="vi-logo-img w-[225px] absolute top-1/6 left-1/2 -translate-x-1/2"
					/>
					<div className="masked-img bg-black">
						<picture>
							<source
								media="(min-width:1020px)"
								srcSet="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
								className="object-center object-cover under-img"
							/>
							<source
								media="(min-width:900px)"
								srcSet="/hero/Jason_and_Lucia_02_With_Logos_square.jpg"
								className="object-center object-cover under-img "
							/>
							<img
								src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
								alt="Jason and Lucia with logos"
								className="object-center object-cover under-img"
							/>
						</picture>
					</div>
				</div>

				<div
					className="flex flex-col items-center absolute top-[42%] gradient-text scale-150 opacity-0"
					id="comingSoonContent"
				>
					<div className="font-extrabold text-8xl uppercase">Coming</div>
					<div className="font-extrabold text-8xl uppercase">November 13</div>
					<div className="font-extrabold text-8xl uppercase">2026</div>
				</div>
			</div>
		</div>
	)
}

export default HeroWithTimeline
