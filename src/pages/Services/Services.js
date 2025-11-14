/**
 * Services Page Component
 *
 * @description Financial services showcase with EMI calculator
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import { useState } from "react";
import { servicesData } from "../../utils/constants";

const Services = () => {
	const [loanAmount, setLoanAmount] = useState(500000);
	const [tenure, setTenure] = useState(60);
	const [tenureType, setTenureType] = useState("months");
	const [interestRate, setInterestRate] = useState(12);
	const [emi, setEmi] = useState(11122.22);

	const calculateEMI = () => {
		const principal = parseFloat(loanAmount);
		const rate = parseFloat(interestRate) / 100 / 12;
		let time = parseFloat(tenure);

		if (tenureType === "years") {
			time = time * 12;
		}

		const emiValue =
			(principal * rate * Math.pow(1 + rate, time)) /
				(Math.pow(1 + rate, time) - 1) || 0;

		setEmi(emiValue.toFixed(2));
	};

	return (
		<>
			<section
				id='calculatorSection'
				className='container services-calculator-container'
			>
				<div className='container__header'>Calculate your EMI</div>
				<div className='calculator__container'>
					<div className='calculator__container-item'>
						<label className='calculator__container-item-label'>
							Loan Amount (₹):
						</label>
						<input
							type='number'
							min={10000}
							step={1000}
							max={100000000}
							value={loanAmount}
							onChange={(e) => setLoanAmount(e.target.value)}
						/>
					</div>
					<div className='calculator__container-item'>
						<label className='calculator__container-item-label'>Tenure:</label>
						<div className='calculator__container-item-group'>
							<input
								type='number'
								min={1}
								value={tenure}
								onChange={(e) => setTenure(e.target.value)}
							/>
							<span>
								<select
									value={tenureType}
									onChange={(e) => setTenureType(e.target.value)}
								>
									<option value='months'>Months</option>
									<option value='years'>Years</option>
								</select>
							</span>
						</div>
					</div>
					<div className='calculator__container-item'>
						<label className='calculator__container-item-label'>
							Interest Rate (%):
						</label>
						<input
							type='number'
							min={1}
							max={100}
							value={interestRate}
							onChange={(e) => setInterestRate(e.target.value)}
						/>
					</div>
					<button
						className='calculator__container-item-button'
						onClick={calculateEMI}
					>
						Calculate EMI
					</button>
					<div className='calculator__container-item calculator__container-footer'>
						<h2>Your projected EMI: ₹{emi}</h2>
					</div>
				</div>
			</section>
			<section id='servicesSection' className='container services-container'>
				<div className='container__header'>Services</div>
				<div className='services-wrapper'>
					<div className='services-wrapper__content'>
						{servicesData.map((elm, i) => {
							return (
								<div
									className={
										"services-wrapper__block" + (i % 2 ? " right-aligned" : "")
									}
									key={i + "product" + elm.id}
								>
									<div className='services-wrapper__block-showcase'>
										<img src={elm.image} alt='projectImg' width={100} />
									</div>
									<div className='services-wrapper__block-details'>
										<h1 className='block-details__title'>{elm.title}</h1>
										<p className='block-details__desc'>{elm.description}</p>
										<div className='block-details__footer'>
											<button
												onClick={() => {
													document
														.getElementById("contactSection")
														.scrollIntoView({
															behavior: "smooth",
															block: "start",
															inline: "nearest",
														});
												}}
											>
												Contact Us
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
