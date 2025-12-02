import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import HeroWithTimeline from "./components/HeroWithTimeline"
import IntroText from "./components/IntroText"
import JasonDuvalVideo from "./components/JasonDuvalVideo"

// export const MasterTlContext = createContext(null)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	// const masterTimeline = useMasterTimeline()

	// useLayoutEffect(() => {
	// 	masterTimeline.add(heroSection())
	// 	masterTimeline.add(firstVideoSection(), "-=2.5")
	// 	const st = ScrollTrigger.create({
	// 		// paused: true,
	// 		animation: masterTimeline,
	// 		trigger: "#wrapper",
	// 		start: "top top",
	// 		end: window.innerHeight * 5,
	// 		scrub: true,
	// 		pin: true,
	// 		markers: true,
	// 	})

	// 	return () => st.kill()
	// }, [masterTimeline])

	return (
		// <MasterTlContext.Provider value={masterTl.current}>
		<div className="relative overflow-hidden" id="wrapper">
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
