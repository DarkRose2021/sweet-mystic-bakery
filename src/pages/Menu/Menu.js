import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import "./Menu.scss";

function Menu() {
	const [selectedCategory] = useState("All");

	const filteredItems =
		selectedCategory === "All"
			? products
			: products.filter((item) => item.category === selectedCategory);

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

			<section className="menu-grid">
				{filteredItems.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</section>
		</main>
	);
}

export default Menu;