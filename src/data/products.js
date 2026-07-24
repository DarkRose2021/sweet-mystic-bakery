import appleCiderSnickerdoodles from "../assets/images/Favicon.png";
import espressoCookies from "../assets/images/Favicon.png";
import spicedCupcakes from "../assets/images/Favicon.png";
import chocolateBrownies from "../assets/images/Favicon.png";
import chocolateCupcakes from "../assets/images/Favicon.png";
import vanillaCupcakes from "../assets/images/Favicon.png";
import saltedCaramelTurtleBrownies from "../assets/images/Favicon.png";
// import appleCiderCupcakes from "../assets/images/AppleCiderCupcakes.jpg";

export const products = [
	{
	id: 1,

	name: "Apple Cider Snickerdoodles",

	category: "Cookies",

	price: 18,

	image: appleCiderSnickerdoodles,

	featured: true,


	description:
		"Soft, buttery snickerdoodles infused with reduced apple cider and coated in a warm blend of cinnamon and seasonal spices. A cozy autumn favorite made for sweet moments.",


	longDescription:
		"Our Apple Cider Snickerdoodles capture the magic of fall in every bite. These soft, chewy cookies are made with rich butter, sweet brown sugar, reduced apple cider, and a comforting blend of cinnamon, nutmeg, and allspice. Each cookie is finished with a spiced sugar coating for the perfect balance of warmth and sweetness.",


	ingredients:
		"Unsalted butter, sugar, light brown sugar, egg, reduced apple cider, salt, all-purpose flour, cream of tartar, baking soda, cinnamon, nutmeg, and allspice.",


	allergens:
		"Contains wheat (gluten), eggs, and milk. Made in a kitchen that also handles other common allergens including nuts, dairy, and soy.",


	seasonal: true,

	season:
		"Fall",


	sizes: [
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Fall Favorite",
		"Seasonal",
		"Cookie",
		"Apple",
		"Cinnamon"
	]
},

	{
	id: 2,

	name: "Espresso Cookies",

	category: "Cookies",

	price: 20,

	image: espressoCookies,

	featured: true,


	description:
		"Rich chocolate cookies infused with bold espresso flavor, semisweet chocolate chips, and finished with a sprinkle of flaky sea salt. A perfect treat for coffee and chocolate lovers.",


	longDescription:
		"Our Espresso Cookies combine deep cocoa flavor with smooth espresso and melty chocolate chips for a decadent bakery-style cookie. Made with real espresso, rich brown sugar, and a touch of sea salt, these cookies deliver the perfect balance of coffeehouse comfort and chocolate indulgence.",


	ingredients:
		"Instant espresso, whole milk, all-purpose flour, unsweetened cocoa powder, baking soda, kosher salt, butter, light brown sugar, eggs, pure vanilla extract, semisweet chocolate chips, and flaky sea salt.",


	allergens:
		"Contains wheat (gluten), eggs, milk, and soy. Made in a kitchen that also handles other common allergens including nuts and dairy.",


	seasonal: false,


	sizes: [
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Cookie",
		"Chocolate",
		"Coffee",
		"Espresso",
		"Bestseller"
	],


	recipeIngredients: [
		"2 tbsp instant espresso",
		"2 tbsp whole milk",
		"2½ cups all-purpose flour",
		"½ cup unsweetened cocoa powder",
		"1 tsp baking soda",
		"¾ tsp kosher salt",
		"1 cup melted butter",
		"1 cup packed light brown sugar",
		"2 large eggs",
		"1 tsp pure vanilla extract",
		"1 cup semisweet chocolate chips",
		"Flaky sea salt for garnish"
	]
},

	{
	id: 3,

	name: "Spiced Cupcakes",

	category: "Cupcakes",

	price: 24,

	image: spicedCupcakes,

	featured: true,


	description:
		"Soft, warmly spiced cupcakes made with cinnamon, nutmeg, cloves, and ginger, topped with sweet frosting for a cozy seasonal treat.",


	longDescription:
		"Our Spiced Cupcakes bring the warmth of the season to every bite. These fluffy cupcakes are crafted with brown sugar, buttermilk, and a comforting blend of cinnamon, nutmeg, cloves, and ginger. Finished with creamy frosting, they are the perfect treat for cozy gatherings, celebrations, or a little everyday sweetness.",


	ingredients:
		"All-purpose flour, sugar, brown sugar, unsalted butter, buttermilk, eggs, baking soda, cinnamon, nutmeg, cloves, ginger, salt, and vanilla extract.",


	allergens:
		"Contains wheat (gluten), eggs, and milk. Made in a kitchen that also handles other common allergens including nuts and soy.",


	seasonal: true,

	season:
		"Fall & Winter",


	sizes: [
		"Single Cupcake",
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Cupcake",
		"Seasonal",
		"Spiced",
		"Cinnamon",
		"Fall Favorite"
	],


	recipeIngredients: [
		"2½ cups all-purpose flour",
		"1 cup sugar",
		"1 cup brown sugar",
		"1 cup unsalted butter",
		"1 cup buttermilk",
		"3 large eggs",
		"2 tsp baking soda",
		"2 tsp ground cinnamon",
		"1 tsp ground nutmeg",
		"1 tsp ground cloves",
		"½ tsp ground ginger",
		"½ tsp salt",
		"1 tsp vanilla extract"
	]
},

	{
	id: 4,

	name: "Chocolate Brownies",

	category: "Brownies",

	price: 18,

	image: chocolateBrownies,

	featured: false,


	description:
		"Rich, fudgy chocolate brownies made with deep cocoa flavor and a soft, decadent center. A classic handcrafted treat for any chocolate lover.",


	longDescription:
		"Our Chocolate Brownies are a timeless favorite made for true chocolate lovers. Crafted with rich cocoa powder, real vanilla, and a perfectly balanced sweetness, these brownies have a fudgy texture and deep chocolate flavor that makes every bite irresistible.",


	ingredients:
		"All-purpose flour, cocoa powder, baking powder, vegetable oil, salt, sugar, vanilla extract, and eggs.",


	allergens:
		"Contains wheat (gluten) and eggs. Made in a kitchen that also handles milk, nuts, and soy.",


	seasonal: false,


	sizes: [
		"Individual Brownie",
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Brownie",
		"Chocolate",
		"Classic",
		"Chocolate Lover"
	],


	recipeIngredients: [
		"¾ cup all-purpose flour",
		"½ cup cocoa powder",
		"¼ tsp baking powder",
		"¾ cup vegetable oil",
		"¼ tsp salt",
		"1½ cups sugar",
		"1½ tsp vanilla extract",
		"3 large eggs"
	]
},

	{
	id: 5,

	name: "Chocolate Cupcakes",

	category: "Cupcakes",

	price: 24,

	image: chocolateCupcakes,

	featured: true,


	description:
		"Rich chocolate cupcakes made with cocoa and espresso for a deep chocolate flavor, topped with smooth chocolate buttercream for an indulgent treat.",


	longDescription:
		"Our Chocolate Cupcakes are a chocolate lover's dream. Made with rich cocoa powder, a touch of espresso to enhance the chocolate flavor, and creamy buttermilk for a soft, moist crumb, each cupcake is finished with a swirl of decadent chocolate buttercream. Perfect for celebrations, special occasions, or whenever you need a little extra chocolate magic.",


	ingredients:
		"All-purpose flour, natural cocoa powder, instant espresso, baking powder, baking soda, salt, eggs, granulated sugar, light brown sugar, vegetable oil, vanilla extract, buttermilk, and chocolate buttercream.",


	allergens:
		"Contains wheat (gluten), eggs, and milk. Made in a kitchen that also handles other common allergens including nuts and soy.",


	seasonal: false,


	sizes: [
		"Single Cupcake",
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Cupcake",
		"Chocolate",
		"Coffee",
		"Classic",
		"Bestseller"
	],


	recipeIngredients: [
		"¾ cup all-purpose flour (spooned and leveled)",
		"½ cup unsweetened natural cocoa powder",
		"1 tsp instant espresso",
		"¾ tsp baking powder",
		"½ tsp baking soda",
		"¼ tsp salt",
		"2 large eggs (room temperature)",
		"½ cup granulated sugar",
		"½ cup packed light brown sugar",
		"⅓ cup vegetable oil",
		"2 tsp pure vanilla extract",
		"½ cup buttermilk (room temperature)",
		"Chocolate buttercream"
	]
},
{
	id: 6,

	name: "Vanilla Cupcakes",

	category: "Cupcakes",

	price: 24,

	image: vanillaCupcakes,

	featured: true,


	description:
		"Light and fluffy vanilla cupcakes made with rich butter, cake flour, and pure vanilla flavor, topped with sweet creamy frosting.",


	longDescription:
		"Our Classic Vanilla Cupcakes are a timeless favorite crafted with a soft, tender crumb and a delicate vanilla flavor. Made with cake flour, real butter, buttermilk, and pure vanilla extract, each cupcake is perfectly balanced and finished with a swirl of creamy frosting. A charming treat for birthdays, celebrations, and everyday sweet moments.",


	ingredients:
		"Cake flour, baking powder, salt, unsalted butter, granulated sugar, eggs, vanilla extract, buttermilk, and vanilla buttercream.",


	allergens:
		"Contains wheat (gluten), eggs, and milk. Made in a kitchen that also handles other common allergens including nuts and soy.",


	seasonal: false,


	sizes: [
		"Single Cupcake",
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Cupcake",
		"Vanilla",
		"Classic",
		"Celebration",
		"Bestseller"
	],


	recipeIngredients: [
		"1¼ cups cake flour (spooned and leveled)",
		"1¼ tsp baking powder",
		"¼ tsp salt",
		"½ cup unsalted butter (softened)",
		"¾ cup granulated sugar",
		"2 large eggs (room temperature)",
		"1 tbsp vanilla extract",
		"½ cup buttermilk (room temperature)",
		"Vanilla buttercream"
	]
},
{
	id: 7,

	name: "Salted Caramel Turtle Brownies",

	category: "Brownies",

	price: 28,

	image: saltedCaramelTurtleBrownies,

	featured: true,


	description:
		"Rich fudgy brownies layered with homemade salted caramel, chocolate chips, and crunchy pecans for the ultimate sweet and salty indulgence.",


	longDescription:
		"Our Salted Caramel Turtle Brownies are a decadent twist on a classic favorite. Each brownie begins with a rich chocolate base made with melted semi-sweet chocolate and cocoa powder, then layered with homemade salted caramel, chocolate chips, and chopped pecans. Finished with the perfect balance of sweet caramel and sea salt, this handcrafted treat is made for unforgettable dessert moments.",


	ingredients:
		"Unsalted butter, semi-sweet chocolate, granulated sugar, eggs, vanilla extract, cocoa powder, all-purpose flour, salt, pecans, semi-sweet chocolate chips, heavy cream, and homemade salted caramel.",


	allergens:
		"Contains wheat (gluten), eggs, milk, and tree nuts (pecans). Made in a kitchen that also handles other common allergens including soy and additional nuts.",


	seasonal: false,


	sizes: [
		"Individual Brownie",
		"Half Dozen",
		"Dozen"
	],


	tags: [
		"Brownie",
		"Chocolate",
		"Caramel",
		"Pecans",
		"Signature",
		"Premium"
	],


	recipeIngredients: [
		"¾ cup unsalted butter",
		"4 oz semi-sweet chocolate bar (coarsely chopped)",
		"2 cups granulated sugar",
		"3 large eggs (room temperature)",
		"2 tsp pure vanilla extract",
		"1 cup unsweetened natural or Dutch-process cocoa powder",
		"1 cup all-purpose flour",
		"1 tsp salt",
		"1 cup chopped pecans",
		"1 cup semi-sweet chocolate chips",
		"1 cup homemade salted caramel",
		"1 cup granulated sugar (for caramel)",
		"6 tbsp unsalted butter (for caramel)",
		"½ cup heavy cream (for caramel)",
		"1 tsp salt (for caramel)"
	]
}
];
