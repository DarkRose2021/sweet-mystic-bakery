import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ product }) {
	return (
		<Link to={`/menu/${product.id}`} className="view-button">
			<article className="product-card">
				<div className="product-image">
					<img src={product.image} alt={product.name} />

					{product.featured && <span className="badge">Bestseller</span>}
				</div>

				<div className="product-content">
					<p className="category">{product.category}</p>

					<h3>{product.name}</h3>

					<p className="description">{product.description}</p>

					<div className="product-footer">
						<span className="price">${product.price}</span>
					</div>
				</div>
			</article>
		</Link>
	);
}

export default ProductCard;
