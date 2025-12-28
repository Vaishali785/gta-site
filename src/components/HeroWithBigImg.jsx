import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const HeroWithBigImg = () => {
	useGSAP(() => {
		const mm = gsap.matchMedia()
		mm.add(
			{
				isMobile: "(max-width: 768px)",
				isTab: "(min-width: 769px) and (max-width: 1023px)",
				isLaptop: "(min-width: 1024px)",
			},
			(context) => {
				let { isMobile, isTab } = context.conditions
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: "#hero",
						start: "top top",
						end: `bottom top+=30%`,
						scrub: true,
						pin: true,
						markers: { startColor: "blue", endColor: "blue" },
					},
				})
				const heroSection = () =>
					gsap.to("#hero-wrapper", {
						zIndex: 40,
						position: "relative",
					})
				const scaleDownImg = () =>
					gsap.fromTo(".images", { scale: 1.1 }, { scale: 1, ease: "circ.in" })

				const fadeBgLogo = () =>
					gsap.fromTo(
						".bg-logo",
						{
							opacity: 1,
						},
						{
							opacity: 0,
							duration: 0.7,
						}
					)
				const maskLogoImage = () =>
					gsap.fromTo(
						".masked-img",
						{
							maskSize: "3500%",
							// maskPosition: "47% 41%",
						},
						{
							maskSize: isMobile ? "45%" : isTab ? "18%" : "16%",
							// maskPosition: "50% 12%",
							// opacity: 0.5,
							background: "white",
							ease: "power1.inOut",
							duration: 5,
						}
					)

				const maskPositionChange = () =>
					gsap.fromTo(
						".masked-img",
						{
							maskPosition: "50% 18%",
						},
						{
							maskPosition: isMobile
								? "50% 21dvh"
								: isTab
								? "50% 20%"
								: "50% 20.4%",
							ease: "expo.inOut",
							// duration: 1.5,
						}
					)

				const heroImgFadingOpacity = () =>
					gsap.to(".under-img", {
						opacity: 0.3,
						background: "white",
						ease: "expo.inOut",
					})

				const heroImgFadingOpacityZero = () =>
					gsap.to(".under-img", {
						opacity: 0,
						zIndex: -1,
						background: "white",
						ease: "expo.inOut",
					})

				const dateTextReveal = () =>
					gsap.fromTo(
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

				const dateTextGradientAnimate = () =>
					gsap.fromTo(
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

				const revealViImage = () =>
					gsap.to(".vi-logo-img", {
						backgroundSize: `clamp(29vh, 35%, 20vh)`,
						opacity: 1,
						maskImage: `radial-gradient(
                circle at 50% 50%,
                rgb(0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 140%
            )`,
						duration: 1.5,
					})

				const hideMaskedText = () =>
					gsap.to(".masked-img", {
						opacity: 0,
					})

				const scaleDownViImage = () =>
					gsap.fromTo(
						".vi-logo-img",
						{
							width: isMobile ? "185px" : isTab ? "18vw" : "225px",
						},
						{
							width: isMobile ? "135px" : isTab ? "14vw" : "185px",
							duration: 3,
							ease: "expo.inOut",
						}
					)
				const blackScreen = () =>
					gsap.fromTo(
						".black-screen",
						{
							zIndex: 40,
							// background:
							// 	"radial-gradient(circle at 50% 190%, rgb(0, 0, 0,0) 45%, rgba(0, 0, 0) 60%)",
							background:
								"radial-gradient(circle at 50% 250%, rgb(0, 0, 0) 60%, rgba(0, 0, 0,0) 80%)",
						},
						{
							position: "fixed",
							bottom: 0,
							left: 0,
							zIndex: 41,
							duration: 2,
							// background:
							// 	"radial-gradient(circle at 50% -170%, rgb(0, 0, 0,0) 45%, rgba(0, 0, 0) 65%)",
							background:
								"radial-gradient(circle at 50% 100%, rgb(0, 0, 0) 60%, rgba(0, 0, 0,0) 80%)",
						}
					)

				tl.add(heroSection())
					.add(scaleDownImg(), "-=0.1")
					.add(fadeBgLogo(), "-=0.5")
					.add(maskLogoImage(), "-=1.5")
					.add(maskPositionChange(), "-=1")
					.add(heroImgFadingOpacity(), "-=2")
					.add(heroImgFadingOpacityZero(), "-=1")
					.add(dateTextReveal(), "-=0.9")
					.add(dateTextGradientAnimate(), "-=0.3")
					.add(revealViImage(), "-=3")
					.add(hideMaskedText(), "-=2.9")
					.add(scaleDownViImage(), "-=2.8")
					.add(blackScreen(), "-=0.9")

				// const hideHeroSection = gsap.to("#hero-wrapper", { display: "none" })
				const showIntroText = () =>
					gsap.to("#story", {
						zIndex: 42,
					})

				const scaleDownIntroText = () =>
					gsap.fromTo(
						".story-text-content",
						{
							scale: isMobile ? 1.15 : 1.25,
						},
						{
							scale: isMobile ? 1 : 0.8,
							duration: 4,
						}
					)
				const animateIntroText = () =>
					gsap.fromTo(
						".story-text-content",
						{
							// opacity: 0,
							// scale: 1.25,
							backgroundImage: `radial-gradient(circle at 50% 140vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 108vh)`,
						},
						{
							// opacity: 1,
							// scale: 0.8,
							backgroundImage: `radial-gradient(circle at 50% 5vh,rgb(255, 212, 128) 0vh,rgb(234, 67, 116) 50vh,rgb(117, 32, 102) 90vh,rgba(32, 31, 66, 0) 145vh)`,
							duration: 5,
							ease: "expo.in",
						}
					)

				const transparentBgOfIntro = () =>
					gsap.to("#story", {
						background: "rgba(0,0,0,.5)",
						opacity: 0.7,
					})
				const hideIntroText = () =>
					gsap.to(".story-text-content", {
						opacity: 0,
						duration: 1,
						zIndex: -1,
					})

				const hideHeroSection = () =>
					gsap.to("#hero-wrapper", {
						opacity: 0,
						zIndex: 0,
					})
				const hideStorySection = () =>
					gsap.to("#story", {
						opacity: 0,
						zIndex: 0,
					})
				const removeBlackScreen = () =>
					gsap.to(".black-screen", {
						position: "auto",
						zIndex: 10,
						opacity: 0,
					})
				tl
					// .add(hideHeroSection)
					.add(showIntroText(), "-=0.5")
					.add(animateIntroText(), "-=2")
					.add(scaleDownIntroText(), "-=1")
					.add(transparentBgOfIntro())
					.add(hideIntroText())
					.add(hideHeroSection(), isMobile ? "-=2.5" : isTab ? "-=3" : "-=1")
					.add(hideStorySection())
					.add(removeBlackScreen())
			}
		)
	})

	// still lags smooth effect
	return (
		<section id="hero-wrapper" className="max-h-[1200px]">
			<div
				id="hero"
				className={`w-full h-screen relative z-40 flex items-center justify-center max-md:h-dvh`}
			>
				<div className="relative w-fit h-fit max-md:h-dvh !bg-black">
					<img
						src="/hero/vi.png"
						alt=""
						className="vi-logo-img w-[225px] absolute top-1/6 left-1/2 -translate-x-1/2 max-md:top-[21dvh]"
					/>
					<div className="masked-img bg-black images">
						<img
							src="/hero/logoImg.webp"
							className="absolute left-[5px] -top-[10px] md:max-lg:top-[6.7vh] md:max-lg:left-[1.4vw] max-md:top-[29.5vh] max-md:scale-[2.8] max-md:left-[3.5vw] z-[1]  bg-logo max-sm:scale-[1.8] max-sm:top-[23.5vh]"
						/>

						<img
							src="/hero/heroImg.webp"
							alt="Jason and Lucia with logos"
							className="laptop object-center object-cover max-md:min-h-dvh md:max-lg:min-h-screen hero-bg-img under-img"
						/>
					</div>
				</div>

				<div
					className="flex flex-col items-center absolute top-[42%] max-md:top-[45dvh] gradient-text transparent-gradient scale-150 opacity-0 poppins-semibold "
					id="comingSoonContent"
				>
					<div className="max-md:poppins-bold font-extrabold max-md:text-[11vw] md:max-lg:text-[10vh] text-8xl uppercase">
						Coming
					</div>
					<div className="max-md:poppins-bold font-extrabold max-md:text-[11vw] md:max-lg:text-[10vh] text-8xl uppercase">
						December 25
					</div>
					<div className="max-md:poppins-bold font-extrabold max-md:text-[11vw] md:max-lg:text-[10vh] text-8xl uppercase">
						2025
					</div>
				</div>
			</div>
			<div className="black-screen black-gradient w-screen h-screen"></div>
		</section>
	)
}

export default HeroWithBigImg
