import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import WebsiteContent from "./components"
import Loading from "./components/Loading"
import { useAssetsLoader } from "./useAssetsLoader"

gsap.registerPlugin(ScrollTrigger)
function App() {
	const ready = useAssetsLoader()
	return (
		<>
			<div
				style={{
					visibility: ready ? "visible" : "hidden",
				}}
			>
				<WebsiteContent />
			</div>
			{!ready && <Loading />}
		</>
	)
}

export default App
