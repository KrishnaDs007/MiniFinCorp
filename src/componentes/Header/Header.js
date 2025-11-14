/**
 * Header Component
 *
 * @description Navigation header component with responsive menu
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import React, { useLayoutEffect, useState } from "react";
import image from "../../utils/images";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const Header = ({ currentNav, setCurrentNav }) => {
	const [size, setSize] = useState([0, 0]);
	const [menuOpen, setMenuOpen] = useState(false);
	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const navContainer = () => {
		return (
			<>
				<nav className='header__nav'>
					<ul className='header__nav-menu'>
						<li
							className={"nav-item" + (currentNav === "home" ? " active" : "")}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("home");
								document.getElementById("homeSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<AiOutlineHome className='nav-item-icon' />
							<span className='nav-item-title'>Home</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={
								"nav-item" + (currentNav === "services" ? " active" : "")
							}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("services");
								document.getElementById("servicesSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<RiMoneyRupeeCircleLine className='nav-item-icon' />
							<span className='nav-item-title'>Services</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={"nav-item" + (currentNav === "about" ? " active" : "")}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("about");
								document.getElementById("aboutSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<AiOutlineUser className='nav-item-icon' />
							<span className='nav-item-title'>About</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={
								"nav-item" + (currentNav === "contact" ? " active" : "")
							}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("contact");
								document.getElementById("contactSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<BiMessageSquareDetail className='nav-item-icon' />
							<span className='nav-item-title'>Contact</span>
							<span className='nav-item-satus'></span>
						</li>
					</ul>
				</nav>
			</>
		);
	};

	return (
		<header className='header'>
			<span className='header__logo-container'>
				<img src={image.Logo} height='24px' alt='MiniFincorp' />
				<h1>MiniFincorp</h1>
			</span>
			{size[0] > 720 ? (
				navContainer()
			) : (
				<div className={"header__overlay" + (menuOpen ? " open" : "")}>
					{navContainer()}
				</div>
			)}
			<span
				className={"header__hamburger" + (menuOpen ? " open" : "")}
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</span>
		</header>
	);
};

export default Header;
