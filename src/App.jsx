import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import Hero from "./components/Hero"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {
	return (
		<>
			{/* <h1 className="bg-red-400">Hello</h1> */}
			<Hero />
			<div className="h-[1440px] w-full bg-red-400"></div>
		</>
	)
}

export default App
