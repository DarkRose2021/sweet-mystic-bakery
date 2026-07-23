import "./Policies.scss";

const policies = [
	{
		title: "Ordering Policy",
		icon: "🧁",
		content:
			"Orders should be placed as early as possible to ensure availability. Standard orders typically require advance notice, while custom cakes, event desserts, and larger orders may require additional planning time.",
	},

	{
		title: "Custom Orders",
		icon: "✨",
		content:
			"Custom desserts are created specifically for your celebration. Please provide inspiration photos, desired flavors, colors, theme details, and event information when requesting a custom order.",
	},

	{
		title: "Payment Policy",
		icon: "💛",
		content:
			"Payment is required to confirm your order. Orders are not considered reserved until payment has been received.",
	},

	{
		title: "Cancellation Policy",
		icon: "🌿",
		content:
			"Because desserts are prepared specifically for each customer, cancellation and refund availability may vary depending on the preparation stage and order date.",
	},

	{
		title: "Pickup Policy",
		icon: "🏡",
		content:
			"Pickup details, including date, time, and location instructions, will be provided after your order is confirmed. Please arrive during your scheduled pickup window.",
	},

	{
		title: "Allergen Information",
		icon: "⚠️",
		content:
			"Our bakery prepares products using ingredients including wheat, dairy, eggs, and other common allergens. Please inform us of allergies before ordering. We cannot guarantee an allergen-free environment.",
	},

	{
		title: "Cottage Bakery Information",
		icon: "🌸",
		content:
			"Sweet Mystic Bakery operates as a cottage bakery following applicable Kentucky cottage food requirements. Customers should review ingredient labels and product information provided with each order.",
	},

	{
		title: "Seasonal Availability",
		icon: "🍂",
		content:
			"Seasonal desserts and limited collections are available for a limited time and may change throughout the year based on ingredient availability.",
	},
];

function Policies() {
	return (
		<main className="policies-page">
			<section className="policies-header">
				<span>✦ Bakery Information ✦</span>

				<h1>Policies & Information</h1>

				<p>
					Everything you need to know before ordering your Sweet Mystic treats.
				</p>
			</section>

			<section className="policies-grid">
				{policies.map((policy, index) => (
					<article className="policy-card" key={index}>
						<div className="policy-icon">{policy.icon}</div>

						<h2>{policy.title}</h2>

						<p>{policy.content}</p>
					</article>
				))}
			</section>

			<section className="policy-note">
				<h2>Have Questions?</h2>

				<p>
					If you have a question about an order, ingredients, or a custom
					dessert request, please reach out. We are happy to help!
				</p>

				<a href="/contact">Contact Sweet Mystic Bakery</a>
			</section>
		</main>
	);
}

export default Policies;