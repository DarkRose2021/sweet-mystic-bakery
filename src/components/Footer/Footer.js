import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-brand">
					<h2>Sweet Mystic Bakery</h2>

					<p>
						Handcrafted desserts made with a little sweetness and a little
						magic.
					</p>

					<p className="location">✦ Kentucky Cottage Bakery ✦</p>
				</div>

				{/* Navigation */}
				<div className="footer-links">
					<h3>Explore</h3>

					<Link to="/">Home</Link>

					<Link to="/about">Our Story</Link>

					<Link to="/menu">Menu</Link>

					<Link to="/gallery">Gallery</Link>

					<Link to="/faq">FAQ</Link>
				</div>

				<div className="footer-links">
					<h3>Bakery</h3>

					<Link to="/custom-orders">Custom Orders</Link>

					<Link to="/contact">Contact</Link>

					<Link to="/policies">Policies</Link>

					<Link to="/allergens">Allergens</Link>
					<Link to="/privacy">Privacy</Link>
				</div>

				{/* Social */}
				<div className="footer-social">
					<h3>Follow Along</h3>

					<div className="social-icons">
						<a href="#" aria-label="Facebook">
							Facebook
						</a>

						<a href="#" aria-label="Instagram">
							Instagram
						</a>

						<a href="#" aria-label="Pinterest">
							Pinterest
						</a>
					</div>

					<p>✧ Freshly baked with love ✧</p>
				</div>
			</div>

			<div className="footer-bottom">
				<p>
					&copy; {new Date().getFullYear()} Sweet Mystic Bakery. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
