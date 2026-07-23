import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.scss";

import cookies from "../../assets/images/gallery/cookies.jpg";
import cupcakes from "../../assets/images/gallery/cupcakes.jpg";
import cake from "../../assets/images/gallery/cake.jpg";
import cinnamonRolls from "../../assets/images/gallery/cinnamon-rolls.jpg";

const featuredProducts = [
	{
		id: 1,
		name: "Moonlit Lavender Cookies",
		description:
			"Soft handcrafted cookies with a delicate lavender vanilla flavor.",
		price: 18,
		category: "Cookies",
		image: cookies,
		badge: "Customer Favorite",
	},

	{
		id: 2,
		name: "Mystic Berry Cupcakes",
		description: "Fluffy berry cupcakes topped with sweet buttercream.",
		price: 30,
		category: "Cupcakes",
		image: cupcakes,
		badge: "Best Seller",
	},

	{
		id: 3,
		name: "Enchanted Celebration Cake",
		description: "Custom cakes designed for birthdays and special moments.",
		price: 75,
		category: "Cakes",
		image: cake,
		badge: "Custom",
	},

	{
		id: 4,
		name: "Cinnamon Roll Collection",
		description: "Fresh baked cinnamon rolls finished with vanilla glaze.",
		price: 24,
		category: "Breakfast",
		image: cinnamonRolls,
		badge: "Seasonal",
	},
];

function FeaturedProducts() {
	return (
		<section className="featured-products">
			<div className="featured-header">
				<span>✦ Sweet Favorites ✦</span>

				<h2>Featured Treats</h2>

				<p>Discover some of our most loved handcrafted desserts.</p>
			</div>

			<div className="featured-grid">
				{featuredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}

export default FeaturedProducts;
