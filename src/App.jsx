import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import HeroScreen from "./components/HeroScreen"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	return (
		<div className="relative">
			<HeroScreen zIndex={50} />
			<div className="h-[1440px] w-full bg-red-400"></div>
		</div>
	)
}

export default App
