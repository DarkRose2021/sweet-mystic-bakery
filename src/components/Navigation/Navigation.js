import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import logo from "../../assets/images/Horizontal-logo.png";
import { useOrder } from "../../context/OrderContext";

function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => {
		setMenuOpen(false);
	};
	const { cart } = useOrder();
	const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo" onClick={closeMenu}>
					<img src={logo} alt="Sweet Mystic Bakery" />
				</Link>

				<button
					className={`hamburger ${menuOpen ? "active" : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle navigation"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<div
					className={`navbar-links 
						${menuOpen ? "open" : ""}`}
				>
					<Link to="/" onClick={closeMenu}>
						Home
					</Link>

					<Link to="/about" onClick={closeMenu}>
						About
					</Link>

					<Link to="/menu" onClick={closeMenu}>
						Menu
					</Link>

					<Link to="/gallery" onClick={closeMenu}>
						Gallery
					</Link>

					{/* <Link to="/custom-orders" onClick={closeMenu}>
						Custom Orders
					</Link> */}

					<Link to="/faq" onClick={closeMenu}>
						FAQ
					</Link>

					<Link to="/contact" onClick={closeMenu}>
						Contact
					</Link>

					<Link to="/cart">🧺 Order ({itemCount})</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
