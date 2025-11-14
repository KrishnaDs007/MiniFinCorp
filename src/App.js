/**
 * MiniFinCorp - Financial Services Application
 *
 * @description Main App component with routing and navigation logic
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 * @website https://minifincorp.in
 * @license Apache-2.0
 * @version 0.1.0
 */

import "./styles/main.scss";
import Header from "./componentes/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./componentes/Footer/Footer";
import { useEffect, useState } from "react";
import Services from "./pages/Services/Services";

function App() {
	const [currentNav, setCurrentNav] = useState("home");

	const handleScroll = () => {
		const windowScrollYPosition = window.scrollY;
		const aboutElmPos = document.getElementById("aboutSection")?.offsetTop;
		const servicesElmPos =
			document.getElementById("servicesSection")?.offsetTop;
		const contactElmPos = document.getElementById("contactSection")?.offsetTop;
		const homeElmPos = document.getElementById("homeSection")?.offsetTop;
		if (windowScrollYPosition + 200 >= contactElmPos) {
			setCurrentNav("contact");
		} else if (windowScrollYPosition + 200 >= aboutElmPos) {
			setCurrentNav("about");
		} else if (windowScrollYPosition + 200 >= servicesElmPos) {
			setCurrentNav("services");
		} else if (windowScrollYPosition + 200 >= homeElmPos) {
			setCurrentNav("home");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Header currentNav={currentNav} setCurrentNav={setCurrentNav} />
			<div className='app-body'>
				<Home />
				<Services />
				<About />
				<Contact />
			</div>
			<Footer currentNav={currentNav} setCurrentNav={setCurrentNav} />
		</>
	);
}

export default App;
