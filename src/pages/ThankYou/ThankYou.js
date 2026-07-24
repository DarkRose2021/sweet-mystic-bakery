import { Link } from "react-router-dom";

import "./ThankYou.scss";

function ThankYou() {
	const orderNumber = sessionStorage.getItem("orderNumber");
	return (
		<main className="thank-you-page">
			<div className="confirmation-card">
				<div className="icon">✨🦊✨</div>

				<h1>Your Order Request Has Been Received!</h1>

				<h2>Order Number:</h2>
				<p className="order-number">{orderNumber}</p>

				<p>
					Thank you for choosing
					<strong> Sweet Mystic Bakery</strong>.
				</p>

				<p>We've received your order request and will review it shortly.</p>

				<div className="next-steps">
					<h2>What Happens Next?</h2>

					<ul>
						<li>✔ We'll verify availability.</li>

						<li>
							✔ We'll contact you using the email or phone number you provided.
						</li>

						<li>✔ We'll confirm your pickup date and time.</li>

						<li>✔ We'll answer any questions about your order.</li>
					</ul>
				</div>

				<div className="important">
					<h3>Order Reminder</h3>

					<p>
						This submission is an
						<strong> order request</strong>. Your order is not considered
						confirmed until you receive a confirmation from Sweet Mystic Bakery.
					</p>
				</div>

				<div className="buttons">
					<Link to="/menu" className="secondary-btn">
						Browse More Treats
					</Link>

					<Link to="/" className="primary-btn">
						Return Home
					</Link>
				</div>
			</div>
		</main>
	);
}

export default ThankYou;
