# GTA VI Website Clone 🎮🔥

A high-fidelity **GTA VI website clone** built with **React + GSAP**, focused on cinematic animations, scroll-driven storytelling, and performance optimization across devices.

This project recreates the _feel_ and _interaction quality_ of Rockstar-style marketing pages, not the game itself.

> ⚠️ **Disclaimer**: This is a **personal, non-commercial project** created for learning and portfolio purposes. All trademarks, characters, and assets belong to Rockstar Games.

---

## 🌐 Live Demo

👉 **Live URL**: https://gta6-vaishali.netlify.app/

---

## ✨ Key Features

- 🎬 **GSAP ScrollTrigger animations** (timeline-based, scrubbed, pinned sections)
- 🧭 **Smooth scrolling** using `@studio-freight/lenis`
- 📱 **Fully responsive** (mobile, tablet, laptop)
- 🖼 **Optimized images** using `picture`, `srcset`, and responsive breakpoints
- 🎥 **Video-heavy sections** with scroll-synced playback
- 🚀 **Performance-focused** (Lighthouse-friendly, mobile optimized)
- 🎨 **Custom typography** with optimized `woff2` fonts
- ⚡ Production-ready deployment (Netlify-compatible)

---

## 🛠 Tech Stack

| Category      | Tech                           |
| ------------- | ------------------------------ |
| Framework     | React (Vite)                   |
| Animations    | GSAP + ScrollTrigger           |
| Smooth Scroll | Lenis                          |
| Styling       | Tailwind CSS                   |
| Media         | HTML5 Video, Responsive Images |
| Deployment    | Netlify                        |

---

## 👩‍💻 Author

**Vaishali** -
Frontend Developer | GSAP | Performance-focused UI

---

## 📜 License

This project is for **educational and portfolio use only**.
All GTA-related assets and branding belong to **Rockstar Games**.

---

⭐ If you liked this project, feel free to star it or reach out!

<!-- V1 -> Animation with changing hero section bg to transparent and showing coming soon text  -->
<!-- V2 -> Animated radial bg for text from transparent to colorful -->

<!--
    remove scrollbar from hero section
    support reverse scroll
    mobile responsiveness
 -->

<!-- Go inside videos folder and then run this command -->
<!-- ffmpeg -i output1.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output11.mp4
ffmpeg version 8.0 Copyright (c) 2000-2025 the FFmpeg developers -->

<!-- jason video -->
<!-- scrollTrigger: {
				trigger: "#video-section",
				start: `top top+=100vh`,
				end: `+=360vh`,
				scrub: true,
				pin: true,

				// pinSpacing: false,
				// duration: 5,
				markers: { startColor: "yellow" },
			},

<section
			id="video-section"
			className="w-full h-screen absolute top-[90vh] z-0 mask-video0 "
			ref={container}
		>
 -->
