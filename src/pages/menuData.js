import cookies from "../assets/images/Favicon.png";
import cupcakes from "../assets/images/Favicon.png";
import cake from "../assets/images/Favicon.png";
import cinnamonRolls from "../assets/images/Favicon.png";
import brownies from "../assets/images/Favicon.png";
import pie from "../assets/images/Favicon.png";
import bread from "../assets/images/Favicon.png";
import macarons from "../assets/images/Favicon.png";

export const menuItems = [
	{
		id: 1,
		name: "Moonlit Lavender Cookies",
		category: "Cookies",
		description: "Soft vanilla cookies infused with culinary lavender.",
		price: 18,
		image: cookies,
		featured: true,
	},

	{
		id: 2,
		name: "Mystic Berry Cupcakes",
		category: "Cupcakes",
		description: "Fresh berry cupcakes topped with silky buttercream.",
		price: 30,
		image: cupcakes,
	},

	{
		id: 3,
		name: "Enchanted Celebration Cake",
		category: "Cakes",
		description: "Beautiful custom cakes for birthdays and celebrations.",
		price: 75,
		image: cake,
	},

	{
		id: 4,
		name: "Cinnamon Rolls",
		category: "Breakfast",
		description: "Fresh baked cinnamon rolls with vanilla glaze.",
		price: 24,
		image: cinnamonRolls,
	},

	{
		id: 5,
		name: "French Macarons",
		category: "Pastries",
		description: "Elegant assorted macarons in seasonal flavors.",
		price: 28,
		image: macarons,
	},

	{
		id: 6,
		name: "Chocolate Brownies",
		category: "Bars",
		description: "Rich fudgy brownies with premium cocoa.",
		price: 20,
		image: brownies,
	},

	{
		id: 7,
		name: "Seasonal Berry Pie",
		category: "Pies",
		description: "Flaky crust filled with fresh seasonal berries.",
		price: 32,
		image: pie,
	},

	{
		id: 8,
		name: "Artisan Bread",
		category: "Bread",
		description: "Crusty artisan bread baked fresh each week.",
		price: 10,
		image: bread,
	},
];
