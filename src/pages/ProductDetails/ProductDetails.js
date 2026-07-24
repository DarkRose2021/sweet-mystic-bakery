import { useParams, Link } from "react-router-dom";
import "./ProductDetails.scss";
import { useOrder } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

function ProductDetails() {
	const { addToCart } = useOrder();
	const navigate = useNavigate();

	const { id } = useParams();
	const product = products.find((item) => item.id === Number(id));

	if (!product) {
		return (
			<section className="not-found">
				<h1>Treat Not Found</h1>
				<Link to="/menu">Return to Menu</Link>
			</section>
		);
	}
	return (
		<main className="product-details">
			<div className="product-details-image">
				<img src={product.image} alt={product.name} />
			</div>
			<div className="product-details-content">
				<p className="category">{product.category}</p>
				<h1>{product.name}</h1>
				<p className="description">{product.longDescription}</p>
				<h2>Ingredients</h2>
				<p>{product.ingredients}</p>
				<h2>Allergens</h2>
				<p>{product.allergens}</p>
				<span className="price">${product.price}</span>

				<button
					className="order-button"
					onClick={() => {
						addToCart(product);
						navigate("/cart");
					}}
				>
					Add to Order
				</button>
			</div>
		</main>
	);
}

export default ProductDetails;
