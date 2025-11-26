import React from "react"

const HeroWithTimeline = () => {
	// still lags smooth effect
	return (
		<section id="hero-wrapper">
			<div
				id="hero"
				className={`w-full h-screen z-40 flex items-center justify-center`}
			>
				<div className="relative w-fit h-fit !bg-black">
					<img
						src="/hero/vi.png"
						alt=""
						className="vi-logo-img w-[225px] absolute top-1/6 left-1/2 -translate-x-1/2"
					/>
					<div className="masked-img bg-black">
						<picture>
							<source
								media="(min-width:1020px)"
								srcSet="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
								className="object-center object-cover under-img"
							/>
							<source
								media="(min-width:900px)"
								srcSet="/hero/Jason_and_Lucia_02_With_Logos_square.jpg"
								className="object-center object-cover under-img "
							/>
							<img
								src="/hero/Jason_and_Lucia_02_With_Logos_landscape.jpg"
								alt="Jason and Lucia with logos"
								className="object-center object-cover under-img"
							/>
						</picture>
					</div>
				</div>

				<div
					className="flex flex-col items-center absolute top-[42%] gradient-text transparent-gradient scale-150 opacity-0 poppins-semibold"
					id="comingSoonContent"
				>
					<div className="font-extrabold text-8xl uppercase">Coming</div>
					<div className="font-extrabold text-8xl uppercase">November 13</div>
					<div className="font-extrabold text-8xl uppercase">2026</div>
				</div>

				{/* <IntroText /> */}
			</div>
			<div className="black-screen black-gradient w-screen h-screen"></div>
		</section>
	)
}

export default HeroWithTimeline
