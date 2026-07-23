import { useState } from "react";
import "./FAQ.scss";

const faqItems = [
	{
		question: "How far in advance should I place an order?",
		answer:
			"For standard treats, we recommend ordering at least 48-72 hours ahead. Custom cakes, dessert tables, and larger orders may require additional notice.",
	},

	{
		question: "Do you offer custom desserts?",
		answer:
			"Yes! We love creating custom desserts for birthdays, weddings, holidays, and special celebrations. Contact us with your ideas and we will help create something magical.",
	},

	{
		question: "Where is Sweet Mystic Bakery located?",
		answer:
			"Sweet Mystic Bakery is a Kentucky cottage bakery offering local pickup options. Pickup details will be provided after your order is confirmed.",
	},

	{
		question: "Do you offer delivery?",
		answer:
			"Delivery options may be available depending on location and order size. Please contact us for availability.",
	},

	{
		question: "What allergens should I know about?",
		answer:
			"Our kitchen processes common allergens including wheat, dairy, eggs, and nuts. Please let us know about allergies when ordering so we can discuss options.",
	},

	{
		question: "Do you offer seasonal desserts?",
		answer:
			"Absolutely! We create limited-time seasonal collections throughout the year including holiday boxes, themed treats, and special flavors.",
	},

	{
		question: "Do you ship your desserts?",
		answer:
			"Currently, Sweet Mystic Bakery focuses on local pickup and approved delivery options.",
	},
];

function FAQ() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<main className="faq-page">
			<section className="faq-header">
				<span>✦ Questions & Answers ✦</span>

				<h1>Frequently Asked Questions</h1>

				<p>Everything you need to know before ordering your magical treats.</p>
			</section>

			<section className="faq-container">
				{faqItems.map((item, index) => (
					<article
						className={`faq-item ${activeIndex === index ? "active" : ""}`}
						key={index}
					>
						<button onClick={() => toggleFAQ(index)}>
							<span>{item.question}</span>

							<span className="icon">{activeIndex === index ? "−" : "+"}</span>
						</button>

						<div className="faq-answer">
							<p>{item.answer}</p>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}

export default FAQ;
