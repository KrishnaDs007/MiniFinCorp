/**
 * Footer Component
 *
 * @description Footer component with social links and navigation
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = ({ currentNav, setCurrentNav }) => {
	return (
		<section
			id='footerSection'
			className='container career-container footer-container'
			style={{ minHeight: "12rem", paddingBottom: "2rem" }}
		>
			<footer>
				<span
					className='footer__logo'
					onClick={() => {
						setCurrentNav("about");
						document.getElementById("aboutSection").scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "nearest",
						});
					}}
				>
					MiniFincorp Corporate Advisor Pvt. Ltd.
				</span>

				<div>
					<h3 style={{ margin: 0 }}>
						#C-15, Basement 1, sector 3, Noida <br /> Uttar Pradesh - 201301
					</h3>
				</div>

				<ul className='permalinks'>
					<li>
						<span
							onClick={() => {
								setCurrentNav("home");
								document.getElementById("homeSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Home
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("services");
								document.getElementById("servicesSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Services
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("about");
								document.getElementById("aboutSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							About
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("contact");
								document.getElementById("contactSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Contact
						</span>
					</li>
				</ul>

				<div className='footer__socials'>
					<a href='https://facebook.com' target='_blank' rel='noreferrer'>
						<FaFacebookF />
					</a>
					<a href='https://instagram.com' target='_blank' rel='noreferrer'>
						<FiInstagram />
					</a>
					<a href='https://twitter.com' target='_blank' rel='noreferrer'>
						<IoLogoTwitter />
					</a>
				</div>

				<div className='footer__copyright'>
					<small>&copy; minifincorp.in All rights reserved</small>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
