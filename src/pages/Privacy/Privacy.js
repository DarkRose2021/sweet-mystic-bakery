import "./Privacy.scss";

const privacySections = [
	{
		title: "Information We Collect",
		content:
			"When you contact Sweet Mystic Bakery or place an inquiry, we may collect information such as your name, email address, phone number, order details, event information, and any messages you provide.",
	},

	{
		title: "How We Use Your Information",
		content:
			"Information collected is used to respond to inquiries, communicate about orders, provide requested services, improve customer experiences, and maintain accurate order records.",
	},

	{
		title: "Customer Communication",
		content:
			"When you submit a contact form or request information, you may receive emails related to your inquiry, order details, scheduling, or bakery updates.",
	},

	{
		title: "Information Sharing",
		content:
			"Sweet Mystic Bakery does not sell, rent, or trade customer information. Information is only shared when necessary to provide requested services or when required by law.",
	},

	{
		title: "Third-Party Services",
		content:
			"Our website may use trusted third-party services such as email providers, website hosting services, analytics tools, or payment processors. These services may process information according to their own privacy policies.",
	},

	{
		title: "Cookies and Website Data",
		content:
			"Our website may use cookies or similar technologies to improve website functionality, understand visitor interactions, and provide a better browsing experience.",
	},

	{
		title: "Data Security",
		content:
			"We take reasonable steps to protect customer information. However, no online transmission or storage system can be guaranteed to be completely secure.",
	},

	{
		title: "Children's Privacy",
		content:
			"Sweet Mystic Bakery does not knowingly collect personal information from children without appropriate parental consent.",
	},

	{
		title: "Policy Updates",
		content:
			"This Privacy Policy may be updated periodically to reflect changes in our services, technology, or legal requirements.",
	},
];

function Privacy() {
	return (
		<main className="privacy-page">
			<section className="privacy-header">
				<span>✦ Your Privacy Matters ✦</span>

				<h1>Privacy Policy</h1>

				<p>
					Learn how Sweet Mystic Bakery handles and protects your information.
				</p>
			</section>

			<section className="privacy-content">
				{privacySections.map((section, index) => (
					<article className="privacy-card" key={index}>
						<h2>{section.title}</h2>

						<p>{section.content}</p>
					</article>
				))}
			</section>

			<section className="privacy-contact">
				<h2>Questions About Privacy?</h2>

				<p>
					If you have questions about this Privacy Policy or how your
					information is handled, please contact Sweet Mystic Bakery.
				</p>

				<a href="/contact">Contact Us</a>
			</section>
		</main>
	);
}

export default Privacy;