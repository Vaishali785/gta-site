import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { ReactLenis } from "lenis/react"
import { useLayoutEffect, useState } from "react"
import ClippedImageSection from "./components/ClippedImageSection"
import ClosingSection from "./components/ClosingSection"
import HeroWithBigImg from "./components/HeroWithBigImg"
import IntroText from "./components/IntroText"
import JasonDuvalVideo from "./components/JasonDuvalVideo"
import JasonWithGunVideo from "./components/JasonWithGunVideo"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import RaulBautistaIntro from "./components/RaulBautistaIntro"

gsap.registerPlugin(ScrollTrigger)
function App() {
	const [loaded, setLoaded] = useState(false)

	useLayoutEffect(() => {
		const images = Array.from(document.images)
		const videos = Array.from(document.querySelectorAll("video"))

		const fontPromises = document.fonts.ready

		const imgPromises = images.map((img) =>
			img.complete
				? Promise.resolve()
				: new Promise((res) => img.addEventListener("load", res))
		)

		const videoPromises = videos.map((v) =>
			v.readyState >= 2
				? Promise.resolve()
				: new Promise((res) => v.addEventListener("loadedmetadata", res))
		)

		Promise.all([...imgPromises, ...videoPromises, fontPromises]).then(() => {
			setLoaded(true)
		})
	}, [])

	if (!loaded) return <Loading />
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
