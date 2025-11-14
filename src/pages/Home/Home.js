/**
 * Home Page Component
 *
 * @description Main landing page with loan types carousel
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import Image from "../../utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const Home = () => {
	const loanTypes = [
		{
			id: 1,
			title: "Personal Loan",
			description:
				"Secure instant personal loans tailored to your needs, offering flexible repayment plans.",
			image: Image.LoanImg1,
			suggestion: "Apply now for quick approval!",
		},
		{
			id: 2,
			title: "Home Loan",
			description:
				"Turn your dream of owning a home into reality with our affordable and customizable home loan options.",
			image: Image.LoanImg2,
			suggestion: "Check eligibility and apply today!",
		},
		{
			id: 3,
			title: "Business Loan",
			description:
				"Accelerate your business growth with our tailored loan solutions designed to meet your needs.",
			image: Image.LoanImg3,
			suggestion: "Expand your business with ease!",
		},
		{
			id: 4,
			title: "Insurance",
			description:
				"Protect what matters most with our comprehensive insurance plans tailored to your lifestyle.",
			image: Image.InsuranceImg,
			suggestion: "Get instant quotes and secure your future!",
		},
		{
			id: 5,
			title: "Property Loan",
			description:
				"Invest in real estate with our flexible property loan options designed for your financial goals.",
			image: Image.LoanImg4,
			suggestion: "Start your property journey today!",
		},
		{
			id: 6,
			title: "Professional Loan",
			description:
				"Advance your career with our specialized loan solutions crafted for professionals like you.",
			image: Image.LoanImg5,
			suggestion: "Achieve your professional aspirations now!",
		},
	];

	return (
		<div className='hero-container' id='homeSection'>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				{loanTypes.map((loan) => (
					<SwiperSlide key={loan.id}>
						<div className='slide-content'>
							<img src={loan.image} alt={loan.title} className='slide-image' />
							<div className='slide-overlay'>
								<h2 className='slide-title'>{loan.title}</h2>
								<p className='slide-description'>{loan.description}</p>
								<p className='slide-suggestion'>{loan.suggestion}</p>
								<button
									className='slide-button'
									onClick={() => {
										document.getElementById("contactSection").scrollIntoView({
											behavior: "smooth",
											block: "start",
											inline: "nearest",
										});
									}}
								>
									Apply Now
								</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Home;
