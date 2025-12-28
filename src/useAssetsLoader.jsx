import { ScrollTrigger } from "gsap/all"
import { useEffect, useState } from "react"

export const useAssetsLoader = () => {
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const waitForAssets = async () => {
			// Images
			const images = Array.from(document.images)
			await Promise.all(
				images.map((img) =>
					img.complete
						? Promise.resolve()
						: new Promise((res) => img.addEventListener("load", res))
				)
			)

			// Videos
			const videos = Array.from(document.querySelectorAll("video"))
			await Promise.all(
				videos.map((v) =>
					v.readyState >= 1
						? Promise.resolve()
						: new Promise((res) => v.addEventListener("loadedmetadata", res))
				)
			)

			// Fonts
			if (document.fonts?.ready) {
				await document.fonts.ready
			}

			setReady(true)
			ScrollTrigger.refresh(true)
		}

		waitForAssets()
	}, [])

	return ready
}
