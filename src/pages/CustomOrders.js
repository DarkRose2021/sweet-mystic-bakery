import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./CustomOrders.scss";

const orderTypes = [
	{
		icon: "🎂",
		title: "Custom Cakes",
		description:
			"Birthday cakes, celebration cakes, themed designs, and elegant creations.",
	},

	{
		icon: "🧁",
		title: "Dessert Tables",
		description:
			"Beautiful assortments for weddings, parties, and special events.",
	},

	{
		icon: "🍪",
		title: "Custom Cookies",
		description:
			"Decorated cookies designed around your theme and celebration.",
	},

	{
		icon: "✨",
		title: "Seasonal Requests",
		description: "Unique holiday treats and limited-edition creations.",
	},
];

function CustomOrders() {
	const form = useRef();

	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	const sendOrder = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_80hnfvx",

				"template_1wgjos2",

				form.current,

				{
					publicKey: "bVPKyuESrPL7l7_rP",
				}
			)

			.then(() => {
				setSent(true);
				setError(false);

				e.target.reset();
			})

			.catch((err) => {
				console.error(err);

				setError(true);
			});
	};
	return (
		<main className="custom-orders-page">

			<section className="custom-header">
				<span>✦ Create Something Magical ✦</span>

				<h1>Custom Orders</h1>

				<p>
					Have a special event coming up? Let Sweet Mystic Bakery help create
					desserts made just for you.
				</p>
			</section>

			<section className="order-options">
				{orderTypes.map((item, index) => (
					<article key={index} className="order-card">
						<div>{item.icon}</div>

						<h2>{item.title}</h2>

						<p>{item.description}</p>
					</article>
				))}
			</section>

			<section className="custom-form-section">
				<div className="form-intro">
					<h2>Tell Us About Your Event</h2>

					<p>Share your vision and we will help create the perfect dessert.</p>
				</div>

				<form ref={form} onSubmit={sendOrder} className="custom-order-form">
					<div className="form-row">
						<div className="form-group">
							<label>Name</label>

							<input
								type="text"
								name="customer_name"
								placeholder="Your name"
								required
							/>
						</div>

						<div className="form-group">
							<label>Email</label>

							<input
								type="email"
								name="customer_email"
								placeholder="Your email"
								required
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Event Date</label>

							<input type="date" name="event_date" required />
						</div>

						<div className="form-group">
							<label>Guest Count</label>

							<input
								type="number"
								name="guest_count"
								placeholder="Approximate guests"
							/>
						</div>
					</div>

					<div className="form-group">
						<label>Dessert Type</label>

						<select name="dessert_type">
							<option>Select one</option>

							<option>Cake</option>

							<option>Cookies</option>

							<option>Cupcakes</option>

							<option>Dessert Table</option>

							<option>Other</option>
						</select>
					</div>

					<div className="form-group">
						<label>Theme / Inspiration</label>

						<textarea
							name="message"
							rows="5"
							placeholder="
    Tell us colors, themes,
    flavors, or ideas you have..."
						/>
					</div>

					<div className="form-group">
						<label>Inspiration Image</label>

						<input
							type="text"
							name="inspiration_link"
							placeholder="Paste an inspiration image link"
						/>
					</div>

					<button type="submit">Send Custom Request ✦</button>

					{sent && (
						<p className="success-message">
							✦ Your custom order request has been sent!
						</p>
					)}

					{error && (
						<p className="error-message">
							Something went wrong. Please try again.
						</p>
					)}
				</form>
			</section>
		</main>
	);
}

export default CustomOrders;
