/**
 * About Page Component
 *
 * @description About section with company information and team
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import Image from "../../utils/images";

const About = () => {
	return (
		<section id='aboutSection' className='container about-container'>
			<div className='container__header'>Minifincorp</div>
			<div className='container__sub-header'>
				Empowering Financial Wellness for a Brighter Future
			</div>
			<div className='about-container__details'>
				<p className='about-container__details-basic'>
					Minifincorp, under the visionary leadership of directors Shivam Goyal
					and Ayushi Goyal, is a trusted financial services provider dedicated
					to helping individuals and businesses achieve financial stability and
					growth. With a customer-centric approach and a commitment to
					innovation, Minifincorp offers a comprehensive suite of products and
					services designed to address the diverse financial needs of its users.
				</p>
				<div className='about-container__details-basic'>
					<h2>Why Choose Minifincorp?</h2>
					<h3>
						Expert Guidance: Our team of financial experts provides personalized
						advice and solutions tailored to your unique needs.
					</h3>
					<ul>
						<li>
							<b>Transparency:</b> We prioritize clarity and honesty in all our
							services, ensuring users are fully informed.
						</li>
						<li>
							<b>Innovation:</b> Leveraging technology, we offer user-friendly
							tools and platforms to simplify financial management.
						</li>
						<li>
							<b>Customer-Centric Approach:</b> Your financial well-being is at
							the heart of everything we do.
						</li>
					</ul>
					<b>Innovation:</b> Leveraging technology, we offer user-friendly tools
					and platforms to simplify financial management. Customer-Centric
					Approach: Your financial well-being is at the heart of everything we
					do. Minifincorp is more than a financial services provider; we are
					your partner in building a secure and prosperous future. Whether
					you&apos;re looking to improve your credit score, secure a loan, plan
					your finances, or protect your loved ones, Minifincorp is here to
					guide you every step of the way.
					<h4>
						Join us today and take the first step toward achieving your
						financial goals with confidence!
					</h4>
				</div>
				<button
					className='about-container__contact-btn'
					onClick={() => {
						document.getElementById("contactSection").scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "nearest",
						});
					}}
				>
					Contact Us
				</button>

				<div className='about-container__directors'>
					<h2>Meet our Directors</h2>
					<div className='about-container__directors-list'>
						<div className='about-container__directors-list-item'>
							<div className='about-container__directors-list-item-showcase'>
								<img src={Image.Director1} alt='projectImg' width={100} />
							</div>
							<div className='about-container__directors-list-item-details'>
								<h3 className='about-container__directors-list-item-details-name'>
									Shivam Goyal
								</h3>
								<span className='about-container__directors-list-item-details-desg'>
									Director
								</span>
								<p className='about-container__directors-list-item-details-work'>
									Started the company to provide various services to the people,
									And help them to become financially strong
								</p>
							</div>
						</div>
						<div className='about-container__directors-list-item'>
							<div className='about-container__directors-list-item-showcase'>
								<img src={Image.Director2} alt='projectImg' width={100} />
							</div>
							<div className='about-container__directors-list-item-details'>
								<h3 className='about-container__directors-list-item-details-name'>
									Ayushi Goyal
								</h3>
								<span className='about-container__directors-list-item-details-desg'>
									Co-Director
								</span>
								<p className='about-container__directors-list-item-details-work'>
									With strong knowledge of finance and insurance needs, helping
									peopele to make brighter future
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
