import { useState } from "react";
import "./Gallery.scss";
import { galleryImages } from "./galleryData";

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

function Gallery() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredImages =
		activeCategory === "All"
			? galleryImages
			: galleryImages.filter((image) => image.category === activeCategory);

	return (
		<main className="gallery-page">
			<section className="gallery-header">
				<span>✦ Our Creations ✦</span>

				<h1>Bakery Gallery</h1>

				<p>
					Browse a collection of handcrafted desserts, seasonal favorites, and
					custom creations from Sweet Mystic Bakery.
				</p>
			</section>

			<section className="gallery-filters">
				{categories.map((category) => (
					<button
						key={category}
						className={activeCategory === category ? "active" : ""}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</button>
				))}
			</section>

			<section className="gallery-grid">
				{filteredImages.map((item) => (
					<article className="gallery-card" key={item.id}>
						<img src={item.image} alt={item.title} />

						<div className="overlay">
							<h3>{item.title}</h3>

							<span>{item.category}</span>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}

export default Gallery;
