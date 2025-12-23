import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { ReactLenis, useLenis } from "lenis/react"
import ClippedImageSection from "./components/ClippedImageSection"
import ClosingSection from "./components/ClosingSection"
import HeroWithBigImg from "./components/HeroWithBigImg"
import IntroText from "./components/IntroText"
import JasonDuvalVideo from "./components/JasonDuvalVideo"
import JasonWithGunVideo from "./components/JasonWithGunVideo"
import Navbar from "./components/Navbar"
import RaulBautistaIntro from "./components/RaulBautistaIntro"

// export const MasterTlContext = createContext(null)
gsap.registerPlugin(ScrollTrigger)
function App() {
	const lenis = useLenis()

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

export default App
