import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import HeroScreen from "./components/HeroScreen"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	return (
		<div className="relative">
			{/* <h1 className="bg-red-400">Hello</h1> */}
			<HeroScreen zIndex={50} />
			{/* <ComingSoonScreen zIndex={40} /> */}
			<div className="h-[1440px] w-full bg-red-400"></div>
		</div>
	)
}

export default App
