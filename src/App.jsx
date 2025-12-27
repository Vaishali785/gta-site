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

	// useLayoutEffect(() => {
	// 	if ("scrollRestoration" in history) {
	// 		history.scrollRestoration = "manual"
	// 	}
	// 	window.scrollTo(0, 0)

	// }, [])

	// useLayoutEffect(() => {
	// 	window.scrollTo(0, 0)
	// 	ScrollTrigger.clearScrollMemory()
	// 	ScrollTrigger.refresh(true)
	// }, [])

	useEffect(() => {
		// const img = new Image()
		// img.src = "/hero/heroImg.webp"

		// img.onload = () => setLoaded(true)

		// const onLoad = () => {
		// 	ScrollTrigger.refresh()
		// }

		// window.addEventListener("load", onLoad)

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

	if (!loaded) {
		console.log("loading...")
		return <Loading />
	}
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
