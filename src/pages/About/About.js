import { Link } from "react-router-dom";
import "./About.scss";

import bakerImage from "../../assets/images/Main-Logo.png";
import cookiesImage from "../../assets/images/Main-Logo.png";

function About() {
	return (
		<main className="about-page">
			<section className="about-hero">
				<div className="overlay">
					<span>✦ Welcome to Sweet Mystic ✦</span>
					<h1>Where Homemade Meets a Little Magic</h1>
					<p>
						Every dessert is handcrafted in small batches, inspired by cozy
						kitchens, woodland charm, and joyful celebrations.
					</p>
				</div>
			</section>

			<section className="story-section">
				<div className="story-image">
					<img src={bakerImage} alt="Baker decorating cookies" />
				</div>

				<div className="story-content">
					<span className="section-label">Our Story</span>
					<h2>Baking Memories One Treat at a Time</h2>
					<p>
						Sweet Mystic Bakery began with a love of baking, creativity, and
						sharing homemade desserts with family and friends. What started as a
						hobby grew into a passion for creating beautiful, handcrafted treats
						that make every occasion feel special.
					</p>
					<p>
						As a Kentucky cottage bakery, every order is prepared in small
						batches using quality ingredients, thoughtful details, and a touch
						of imagination.
					</p>
				</div>
			</section>

			<section className="values">
				<div className="section-heading">
					<span>✦ What We Believe ✦</span>
					<h2>Our Bakery Values</h2>
				</div>

				<div className="value-grid">
					<article>
						<h3>🌿 Quality Ingredients</h3>
						<p>
							Every recipe begins with carefully selected, fresh ingredients.
						</p>
					</article>

					<article>
						<h3>🧁 Handmade with Care</h3>
						<p>Every dessert is baked, decorated, and packaged by hand.</p>
					</article>

					<article>
						<h3>✨ Creative Designs</h3>
						<p>
							Seasonal collections and custom desserts inspired by nature and
							celebration.
						</p>
					</article>
				</div>
			</section>

			<section className="process">
				<div className="process-content">
					<span className="section-label">From Kitchen to Celebration</span>
					<h2>Our Baking Process</h2>
					<p>
						Every order begins with fresh ingredients, careful preparation, and
						attention to every little detail. From mixing and baking to
						decorating and packaging, every step is done with care so your
						desserts arrive ready to make someone's day a little sweeter.
					</p>
				</div>

				<div className="process-image">
					<img src={cookiesImage} alt="Fresh bakery cookies" />
				</div>
			</section>

			<section className="about-cta">
				<h2>Ready to Order Something Sweet?</h2>
				<p>We'd love to help make your next celebration extra memorable.</p>

				<Link to="/contact" className="cta-button">
					Contact Us
				</Link>
			</section>
		</main>
	);
}

export default About;
