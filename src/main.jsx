import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
console.log("Scroll Y on init:", window.scrollY)


createRoot(document.getElementById("root")).render(<App />)
