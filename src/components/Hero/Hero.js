import { Link } from "react-router-dom";
import "./Hero.scss";

import heroImage from "../../assets/images/temp-hero.png";

function Hero() {
	return (
		<section
			className="hero"
			style={{
				backgroundImage: `url(${heroImage})`,
			}}
		>
			<div className="hero-overlay">
				<div className="hero-content">
					<span className="hero-sparkle">✦ Handcrafted with Love ✦</span>

					<h1>Sweet Mystic Bakery</h1>

					<p className="tagline">
						Enchanted desserts inspired by cozy kitchens, seasonal flavors, and
						a little everyday magic.
					</p>

					<div className="hero-buttons">
						<Link to="/menu" className="primary-button">
							Explore Menu
						</Link>

						<Link to="/custom-orders" className="secondary-button">
							Custom Orders
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
