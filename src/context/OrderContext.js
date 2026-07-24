import { createContext, useContext, useState } from "react";
const OrderContext = createContext();

export function OrderProvider({ children }) {
	const [cart, setCart] = useState([]);
	const addToCart = (product, quantity = 1) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			}
			return [
				...prev,
				{
					...product,
					quantity,
				},
			];
		});
	};

	const removeFromCart = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const updateQuantity = (id, qty) => {
		setCart((prev) =>
			prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
		);
	};

	const clearCart = () => setCart([]);
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<OrderContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				total,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export const useOrder = () => useContext(OrderContext);
