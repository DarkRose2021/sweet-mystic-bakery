import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				{/* Brand */}
				<Link to="/" className="navbar-logo">
					Sweet Mystic Bakery
				</Link>

				{/* Navigation */}
				<ul className="navbar-links">
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/about">About</Link>
					</li>

					<li>
						<Link to="/menu">Menu</Link>
					</li>

					<li>
						<Link to="/gallery">Gallery</Link>
					</li>

					<li>
						<Link to="/custom-orders">Custom Orders</Link>
					</li>

					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>

				{/* CTA */}
				<Link to="/custom-orders" className="order-button">
					Order Now
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
