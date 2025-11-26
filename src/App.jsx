import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import HeroWithTimeline from "./components/HeroWithTimeline"
import IntroText from "./components/IntroText"
import JasonDuvalVideo from "./components/JasonDuvalVideo"

// export const MasterTlContext = createContext(null)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	const masterTl = useRef(gsap.timeline())
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
				// markers: true,
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
		const blackScreen = gsap.fromTo(
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
			.add(blackScreen, "-=0.9")

		// const hideHeroSection = gsap.to("#hero-wrapper", { display: "none" })
		const showIntroText = gsap.to("#story", {
			zIndex: 50,
		})

		const scaleDownIntroText = gsap.fromTo(
			".story-text-content",
			{
				scale: 1.25,
			},
			{
				scale: 0.8,
				duration: 4,
			}
		)
		const animateIntroText = gsap.fromTo(
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

		const transparentBgOfIntro = gsap.to("#story", {
			background: "transparent",
		})
		const hideIntroText = gsap.to(".story-text-content", {
			opacity: 0,
			duration: 1,
		})

		const hideStorySection = gsap.to("#story,#hero-wrapper", {
			opacity: 0,
			zIndex: 0,
		})
		tl
			// .add(hideHeroSection)
			.add(showIntroText, "-=0.5")
			.add(animateIntroText, "-=2")
			.add(scaleDownIntroText, "-=1")
			.add(transparentBgOfIntro)
			.add(hideIntroText)
			.add(hideStorySection)
	})
	return (
		// <MasterTlContext.Provider value={masterTl.current}>
		<div className="relative">
			{/* <Hero2 zIndex={50} /> */}
			<HeroWithTimeline />
			<IntroText />
			<JasonDuvalVideo />
			<div className="h-[1440px] w-full bg-red-400"></div>
		</div>
		// </MasterTlContext.Provider>
	)
}

export default App
