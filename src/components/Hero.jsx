import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

gsap.registerEffect({
	name: "fade",
	effect: (targets, config) => {
		return gsap.to(targets, {
			// opacity: 0,
			onUpdate: function () {
				if (this.progress() > 0) {
					const progress = this.progress()
					console.log(progress)
					const percentVal = progress * 100
					let grad = `linear-gradient(to top, black ${percentVal}%, transparent ${
						10 + percentVal
					}%)`
					gsap.to("#hero", {
						background: grad,
						duration: config.duration,
						yoyo: true,
					})
				}
			},
		})
	},

	defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
	extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
})
const Hero = ({ zIndex }) => {
	// const heroRef = useRef(null)
	useGSAP(() => {
		// Normalize scroll to reduce momentum spikes and unify wheel/touch behavior
		// ScrollTrigger.normalizeScroll(true)
		const maskTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "center 50%",
				end: "+=1500",
				scrub: 4,
				pin: "#hero",
				anticipatePin: 1,
				// invalidateOnRefresh: true,
				// snap: {
				// 	snapTo: "hide-image",
				// },
				// onUpdate: ({ progress, isActive }) => {
				// 	// console.log("enter", progress, isActive)
				// 	// if (progress > 0.7) {
				// 	// for (let i = 100; i >= 10; i--) {
				// 	const percentVal = progress * 100
				// 	let grad = `linear-gradient(to bottom, black ${percentVal}%, transparent ${
				// 		10 + percentVal
				// 	}%)`
				// 	gsap.to("#hero", {
				// 		background: grad,
				// 		// opacity: 0,
				// 	})
				// 	// }
				// 	// }
				// },
				// onScrubComplete: ({ progress, isActive }) => {
				// 	console.log("completed", progress, isActive)
				// },
				// onLeave: ({ progress, direction, isActive }) => {
				// 	// console.log("leave", progress, isActive)
				// 	if (progress > 0.7) {
				// 		for (let i = 100; i >= 10; i--) {
				// 			let grad = `linear-gradient(to bottom, black ${
				// 				i - 10
				// 			}%, transparent ${i}%)`
				// 			gsap.to("#hero", {
				// 				background: grad,
				// 				// opacity: 0,
				// 			})
				// 		}
				// 	}
				// },
				// onSnapComplete: ({ progress, direction, isActive }) => {
				// 	console.log("snap", progress, isActive)
				// },
			},
			// onUpdate: function () {
			// 	console.log("leavetl", this.progress())
			// 	const progress = this.progress()
			// 	if (progress > 0.9) {
			// 		for (let i = 100; i >= 10; i--) {
			// 			let grad = `linear-gradient(to top, black ${
			// 				i - 10
			// 			}%, transparent ${i}%)`
			// 			gsap.to("#hero", {
			// 				background: grad,
			// 				opacity: 0,
			// 				duration: 2,
			// 			})
			// 		}
			// 	}
			// },
			// smoothChildTiming: true,
			// opacity: 0,
			// onComplete: () => {
			// 	console.log("finished")
			// 	gsap.fromTo(
			// 		"#hero",
			// 		{
			// 			background: "black",
			// 			opacity: 1,
			// 		},
			// 		{
			// 			background: "linear-gradient(to bottom, pink, transparent)",
			// 			opacity: 0,
			// 			duration: 5,
			// 			ease: "power2.inOut",
			// 		}
			// 	)
			// },
		})

		// var progress = maskTimeline.progress()
		// console.log("timeline", progress)
		maskTimeline
			.fromTo(
				".under-img",
				{
					scale: 1.1,
					// scale: 1.19,
					// width: "120vw",
					margin: "auto",
				},
				{
					scale: 1,
					objectFit: "cover",
					// transformOrigin: "center center",
					// scale: 1,
					// width: "100vw",
					duration: 2,
					margin: "auto",
					ease: "sine.in",
				}
			)
			.fromTo(
				".masked-img",
				{
					maskSize: "2800%",
				},
				{
					background: "white",
					maskSize: "13%",
					opacity: 1,
					duration: 3,
					ease: "power2.inOut",
					// maskPosition: top,
					maskPosition: "50% 18.7%",
					// position: "absolute",
					// top: "-30%",
					// scrollTrigger: {
					// 	trigger: "#hero",
					// 	start: "bottom 18.7%",
					// 	onUpdate: (self) => {
					// 		console.log("self", self.progress)
					// 	},
					// },
				},
				"<1"
			)
			.addLabel("hide-image")
			.to(
				".under-img",
				{
					opacity: 0,
					duration: 1,
					display: "none",
				},
				"<2"
			)
			.fade("#hero", { duration: 3 })
		// .fromTo(
		// 	"#hero",
		// 	{
		// 		// background: "black",
		// 		// height: "100vh",
		// 		opacity: 1,
		// 		// duration: 3,
		// 	},
		// 	{
		// 		// background: "linear-gradient(to bottom, rgba(0,0,0,1) , transparent)",
		// 		opacity: 0,
		// 		// duration: 2,
		// 		// delay: 1,
		// 		display: "none",
		// 	}
		// )
		// .to(
		// 	".masked-img",
		// 	{
		// 		display: "none",
		// 	},
		// 	"<1"
		// )

		// .to(
		// 	".masked-img",
		// 	{
		// 		height: "30vh",
		// 	},
		// 	"-=1"
		// )
		// .to("#hero", {
		// 	background: "transparent",
		// 	opacity: 0,
		// 	// height: "0",
		// 	duration: 3,
		// 	ease: "power1.out",
		// })

		// maskTimeline
		// 	// .timeScale(0.1)
		// 	.to(".under-img", {
		// 		scale: 1,
		// 		duration: 2,
		// 		opacity: 0,
		// 	})
		// 	.fromTo(
		// 		".masked-img",
		// 		{
		// 			maskSize: "2600%",
		// 			// duration: 3,
		// 			// scale: 0.8,
		// 			// maskImage: "white",
		// 			// translateX: "40%",
		// 			// translateY: "-50%",
		// 			// translateZ: 30,
		// 		},
		// 		{
		// 			maskSize: "10%",
		// 			maskPosition: "center",
		// 			// translateX: "0%",
		// 			translateY: "-35%",
		// 			// translateZ: "1",
		// 			background: "white",
		// 			opacity: 1,
		// 			duration: 4,
		// 		},
		// 		"<1"
		// 	)
		// 	.to(
		// 		".under-img",
		// 		{
		// 			opacity: 0,
		// 			duration: 2,
		// 		},
		// 		"<3"
		// 	)
		// var progress = maskTimeline.totalProgress()
		// console.log("timeline", progress)
	})

	return (
		<div id="hero-wrapper">
			<div
				id="hero"
				className={`bg-black h-full z-50`}
				style={{ zIndex: zIndex }}
				// ref={heroRef}
			>
				{/* <picture>
				<source
					media="(min-width:1020px)"
					srcSet="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
					className="object-contain"
				/>
				<source
					media="(min-width:900px)"
					srcset="/hero/Jason_and_Lucia_02_With_Logos_square.jpg"
					className="object-contain "
				/>
				<img
					src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
					alt="Jason and Lucia with logos"
					className="object-contain"
				/>
			</picture> */}
				{/* <div className="relative w-screen h-screen"> */}
				<div className="masked-img">
					<img
						src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
						alt=""
						className="under-img "
					/>
				</div>
				{/* <div className="under-img h-screen"></div> */}
				{/* </div> */}
			</div>
		</div>
	)
}

export default Hero
