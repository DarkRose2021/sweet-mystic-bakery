import { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { menuItems } from "./menuData";
import "./Menu.scss";

const categories = [
	"All",
	"Cookies",
	"Cupcakes",
	"Cakes",
	"Breakfast",
	"Pastries",
	"Bars",
	"Pies",
	"Bread",
];

function Menu() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredItems =
		selectedCategory === "All"
			? menuItems
			: menuItems.filter((item) => item.category === selectedCategory);

	return (
		<main className="menu-page">
			<section className="menu-hero">
				<span>✦ Handcrafted Daily ✦</span>

				<h1>Our Menu</h1>

				<p>
					Browse our handcrafted collection of cookies, cakes, pastries, breads,
					and seasonal favorites.
				</p>
			</section>

			<section className="menu-filters">
				{categories.map((category) => (
					<button
						key={category}
						className={selectedCategory === category ? "active" : ""}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				))}
			</section>

			<section className="menu-grid">
				{filteredItems.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</section>
		</main>
	);
}

export default Menu;