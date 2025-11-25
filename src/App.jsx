import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import HeroWithTimeline from "./components/HeroWithTimeline"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	return (
		<div className="relative">
			{/* <Hero2 zIndex={50} /> */}
			<HeroWithTimeline />
			<div className="h-[1440px] w-full bg-red-400"></div>
		</div>
	)
}

export default App
