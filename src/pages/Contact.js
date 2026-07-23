import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Contact.scss";

function Contact() {
	const form = useRef();

	const [sent, setSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_80hnfvx",

				"template_72be4o8",

				form.current,

				{
					publicKey: "bVPKyuESrPL7l7_rP",
				}
			)

			.then(() => {
				setSent(true);

				e.target.reset();
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<main className="contact-page">
			<section className="contact-header">
				<span>✦ Let's Create Something Sweet ✦</span>
				<h1>Contact Sweet Mystic Bakery</h1>
				<p>
					Have a question, special request, or dessert idea? We would love to
					hear from you.
				</p>
			</section>

			<section className="contact-container">
				<div className="contact-info">
					<h2>Get In Touch</h2>

					<p>
						Whether you are planning a celebration or craving something sweet,
						send us a message and we will help bring your dessert dreams to
						life.
					</p>

					<div className="info-item">
						<h3>✦ Email</h3>

						<p>sweetmysticbakery@gmail.com</p>
					</div>

					<div className="info-item">
						<h3>✦ Pickup</h3>

						<p>
							Local pickup available in Kentucky. Details provided after order
							confirmation.
						</p>
					</div>

					<div className="info-item">
						<h3>✦ Follow Along</h3>

						<div className="social-links">
							<a href="www.google.com">Facebook</a>

							<a href="www.google.com">Instagram</a>

							<a href="www.google.com">Pinterest</a>
						</div>
					</div>
				</div>

				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<div className="form-group">
						<label>Name</label>

						<input type="text" name="customer_name" placeholder="Your name" />
					</div>

					<div className="form-group">
						<label>Email</label>

						<input
							type="email"
							name="customer_email"
							placeholder="Your email"
						/>
					</div>

					<div className="form-group">
						<label>Order Type</label>

						<select name="order_type">
							<option>Cookies</option>

							<option>Cakes</option>

							<option>Custom Order</option>
						</select>
					</div>

					<div className="form-group">
						<label>Message</label>

						<textarea
							name="message"
							rows="5"
							placeholder="Tell us about your order..."
						/>
					</div>

					<button type="submit">Send Sweet Request</button>
					{sent && (
						<p className="success-message">
							✦ Your sweet request has been sent!
						</p>
					)}
				</form>
			</section>
		</main>
	);
}

export default Contact;
