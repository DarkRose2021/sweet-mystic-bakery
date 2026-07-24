import { Link } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
import "./Cart.scss";

function Cart() {
	const { cart, removeFromCart, updateQuantity, total } = useOrder();

	if (cart.length === 0) {
		return (
			<main className="cart-page">
				<section className="empty-cart">
					<h1>Your Basket is Empty</h1>

					<p>It looks like you haven't added any treats yet.</p>

					<Link to="/menu" className="shop-button">
						Browse the Menu
					</Link>
				</section>
			</main>
		);
	}

	return (
		<main className="cart-page">
			<h1>Your Order</h1>
			<div className="cart-container">
				<div className="cart-items">
					{cart.map((item) => (
						<div className="cart-item" key={item.id}>
							<img src={item.image} alt={item.name} />
							<div className="item-info">
								<h2>{item.name}</h2>

								<p>{item.category}</p>

								<span>${item.price.toFixed(2)}</span>
							</div>
							<div className="quantity">
								<button
									onClick={() =>
										updateQuantity(item.id, Math.max(1, item.quantity - 1))
									}
								>
									−
								</button>
								<span>{item.quantity}</span>
								<button
									onClick={() => updateQuantity(item.id, item.quantity + 1)}
								>
									+
								</button>
							</div>
							<div className="subtotal">
								${(item.price * item.quantity).toFixed(2)}
							</div>

							<button
								className="remove"
								onClick={() => removeFromCart(item.id)}
							>
								Remove
							</button>
						</div>
					))}
				</div>
				<aside className="order-summary">
					<h2>Order Summary</h2>

					<div className="summary-row">
						<span>Estimated Total</span>

						<strong>${total.toFixed(2)}</strong>
					</div>

					<p className="note">
						Final pricing may vary depending on customizations, taxes, or
						special requests.
					</p>

					<Link to="/checkout" className="checkout-button">
						Proceed to Checkout
					</Link>
				</aside>
			</div>
		</main>
	);
}

export default Cart;
