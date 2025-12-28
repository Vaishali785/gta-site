import ReactLenis from "lenis/react"
import React from "react"
import ClippedImageSection from "./ClippedImageSection"
import ClosingSection from "./ClosingSection"
import HeroWithBigImg from "./HeroWithBigImg"
import IntroText from "./IntroText"
import JasonDuvalVideo from "./JasonDuvalVideo"
import JasonWithGunVideo from "./JasonWithGunVideo"
import Navbar from "./Navbar"
import RaulBautistaIntro from "./RaulBautistaIntro"

const WebsiteContent = () => {
	return (
		<div className="relative overflow-hidden" id="wrapper">
			<ReactLenis
				root
				options={{ lerp: 0.2, smoothWheel: true, syncTouchLerp: 0.2 }}
			/>
			<Navbar />
			<HeroWithBigImg />
			<IntroText />
			<JasonDuvalVideo />
			<JasonWithGunVideo />
			<ClippedImageSection />
			<RaulBautistaIntro />
			<ClosingSection />
		</div>
	)
}

export default WebsiteContent
