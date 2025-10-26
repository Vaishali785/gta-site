import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import HeroScreen from "./components/HeroScreen"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	return (
		<div className="relative">
			<HeroScreen zIndex={50} />
		</div>
	)
}

export default App
