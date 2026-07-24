import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useOrder } from "../../context/OrderContext";
import "./Checkout.scss";

function Checkout() {
	const navigate = useNavigate();
	const { cart, total, clearCart } = useOrder();

	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		pickupDate: "",
		pickupTime: "",
		notes: "",
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const orderNumber = `SMB-${Date.now().toString().slice(-6)}`;

		const orderItems = cart
			.map((item) => `${item.quantity} x ${item.name}`)
			.join("\n");

		const templateParams = {
			order_number: orderNumber,
			customer_name: form.name,
			customer_email: form.email,
			phone: form.phone,
			order_items: orderItems,
			total: total.toFixed(2),
			pickup_date: form.pickupDate,
			pickup_time: form.pickupTime,
			notes: form.notes,
		};

		try {
      console.log({
	service:
		process.env.REACT_APP_EMAIL_SERVICE_ID,

	bakery:
		process.env.REACT_APP_BAKERY_TEMPLATE_ID,

	customer:
		process.env.REACT_APP_CUSTOMER_TEMPLATE_ID,

	key:
		process.env.REACT_APP_EMAIL_PUBLIC_KEY
});
			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_BAKERY_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY
			);

			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_CUSTOMER_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY
			);
			sessionStorage.setItem("orderNumber", orderNumber);
			clearCart();
			navigate("/thank-you");
		} catch (error) {
			console.error("Email error:", error);
			alert("Unable to submit order. Please let me know at (270) 901-9974.");
		}
	};
	if (!cart.length) {
		return (
			<main className="checkout-page">
				<h1>Your basket is empty.</h1>
			</main>
		);
	}
	return (
		<main className="checkout-page">
			<h1>Checkout</h1>
			<div className="checkout-grid">
				<section className="checkout-form">
					<h2>Pickup Information</h2>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							required
							onChange={handleChange}
						/>

						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							onChange={handleChange}
						/>

						<input
							type="tel"
							name="phone"
							placeholder="Phone Number"
							required
							onChange={handleChange}
						/>

						<label>Pickup Date</label>

						<input
							type="date"
							name="pickupDate"
							required
							onChange={handleChange}
						/>

						<label>Preferred Pickup Time</label>

						<input
							type="time"
							name="pickupTime"
							required
							onChange={handleChange}
						/>

						<textarea
							name="notes"
							rows="6"
							placeholder="Special requests or notes..."
							onChange={handleChange}
						/>

						<button type="submit">Submit Order Request</button>
					</form>
				</section>
				<aside className="order-summary">
					<h2>Your Order</h2>
					{cart.map((item) => (
						<div className="summary-item" key={item.id}>
							<span>
								{item.quantity} × {item.name}
							</span>
							<strong>${(item.price * item.quantity).toFixed(2)}</strong>
						</div>
					))}
					<hr />
					<div className="summary-total">
						<span>Estimated Total</span>
						<strong>${total.toFixed(2)}</strong>
					</div>
					<p>
						This is an order request only. We'll contact you to confirm
						availability and pickup details.
					</p>
				</aside>
			</div>
		</main>
	);
}
export default Checkout;
