import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { ReactLenis } from "lenis/react"
import { useEffect, useState } from "react"
import ClippedImageSection from "./components/ClippedImageSection"
import ClosingSection from "./components/ClosingSection"
import HeroWithBigImg from "./components/HeroWithBigImg"
import IntroText from "./components/IntroText"
import JasonDuvalVideo from "./components/JasonDuvalVideo"
import JasonWithGunVideo from "./components/JasonWithGunVideo"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import RaulBautistaIntro from "./components/RaulBautistaIntro"

// const JasonDuvalVideo = lazy(() => import("./components/JasonDuvalVideo"))
// const JasonWithGunVideo = lazy(() => import("./components/JasonWithGunVideo"))
// const RaulBautistaIntro = lazy(() => import("./components/RaulBautistaIntro"))
// const ClippedImageSection = lazy(() =>
// 	import("./components/ClippedImageSection")
// )
// const ClosingSection = lazy(() => import("./components/ClosingSection"))

// export const MasterTlContext = createContext(null)
gsap.registerPlugin(ScrollTrigger)
function App() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		// const img = new Image()
		// img.src = "/hero/heroImg.webp"

		// img.onload = () => setLoaded(true)

		// const onLoad = () => {
		// 	ScrollTrigger.refresh()
		// }

		// window.addEventListener("load", onLoad)

		let refreshTimeout

		const refresh = () => {
			clearTimeout(refreshTimeout)
			refreshTimeout = setTimeout(() => {
				ScrollTrigger.refresh()
			}, 100)
		}

		const images = document.images
		for (let img of images) {
			if (!img.complete) {
				img.addEventListener("load", refresh)
			}
		}

		const videos = document.querySelectorAll("video")
		videos.forEach((video) => {
			video.addEventListener("loadedmetadata", refresh)
		})

		setLoaded(true)
		return () => clearTimeout(refreshTimeout)
	}, [])

	if (!loaded) return <Loading />
	return (
		<div className="relative overflow-hidden" id="wrapper">
			<ReactLenis
				root
				options={{ lerp: 0.2, smoothWheel: true, syncTouchLerp: 0.2 }}
			/>
			{/* <Suspense fallback={<Loading />}> */}
			<Navbar />
			<HeroWithBigImg />
			<IntroText />
			{/* <Suspense fallback={null}> */}
			<JasonDuvalVideo />
			<JasonWithGunVideo />
			<ClippedImageSection />
			<RaulBautistaIntro />
			<ClosingSection />
			{/* </Suspense> */}
			{/* </Suspense> */}
		</div>
	)
}

export default App
