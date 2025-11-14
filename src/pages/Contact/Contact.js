/**
 * Contact Page Component
 *
 * @description Contact form with EmailJS integration
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_70nre7s",
				"template_gw0cp2i",
				form.current,
				"onpg7BUPA-VgqYm8h",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);

		e.target.reset();
	};

	return (
		<section id='contactSection' className='container contact-container'>
			<div className='container__header'>Reach out to US</div>

			<div className='contact__wrapper'>
				<div className='contact__options'>
					<article className='contact__option'>
						<a
							href='mailto:shivam.goyal@minifincorp.in'
							target='_blank'
							rel='noreferrer'
						>
							<MdOutlineEmail className='contact__option-icon' />
							<h4>Email</h4>
							<h5>shivam.goyal@minifincorp.in</h5>
							<span>Click to send message</span>
						</a>
					</article>
					<article className='contact__option'>
						<a href='https://m.me/shivamgoyal' target='_blank' rel='noreferrer'>
							<RiMessengerLine className='contact__option-icon' />
							<h4>Messanger</h4>
							<h5>Shivam Goyal</h5>
							<span>Click to send message</span>
						</a>
					</article>
					<article className='contact__option'>
						<a
							href='https://wa.me/send?phone=9810492820'
							target='_blank'
							rel='noreferrer'
						>
							<BsWhatsapp className='contact__option-icon' />
							<h4>WhatsApp</h4>
							<h5>+919810492820</h5>
							<span>Click to send message</span>
						</a>
					</article>
				</div>

				<form
					ref={form}
					onSubmit={(e) => {
						sendEmail(e);
					}}
					className='contact__form'
				>
					<input
						type='text'
						name='name'
						id='userName'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='email'
						name='email'
						id='userEmail'
						placeholder='Your Email'
						required
					/>
					<input
						type='phone'
						name='phone'
						id='userPhone'
						placeholder='Your contact no.'
						required
					/>
					<textarea
						name='message'
						id='userMessage'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button
						type='submit'
						className='btn btn-primary contact-form-submit-btn'
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
