import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SeasonalBanner from "../components/SeasonalBanner/SeasonalBanner";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import Testimonial from "../components/Testimonial/Testimonial";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import autumnBanner from "../assets/images/Horizontal-logo.png";

import "./Home.scss";

function Home() {
	return (
		<main className="home">
			<Hero />
			<section className="home-section">
				<div className="section-header">
					<span>✦ Fresh From the Oven ✦</span>

					<h2>Featured Treats</h2>

					<p>
						From handcrafted cookies to decadent cakes, discover some of our
						favorite bakery creations.
					</p>
				</div>
				<ProductGrid />
			</section>
			<SeasonalBanner
				season="Autumn Collection"
				title="Cozy Flavors Have Arrived"
				description="Celebrate the season with pumpkin spice cupcakes, caramel cookies, cinnamon rolls, and other handcrafted favorites available for a limited time."
				image={autumnBanner}
			/>
			<AboutPreview />
			<Testimonial />
			<ContactCTA />
		</main>
	);
}

export default Home;
