import "./Allergens.scss";


function Allergens() {


	return (

		<main className="allergens-page">


			<section className="allergens-hero">

				<h1>
					Allergen Information
				</h1>

				<p>
					Your safety matters to us. 
					Please review our allergen information before ordering.
				</p>

			</section>





			<section className="allergens-content">


				<div className="allergen-card">

					<h2>
						Common Allergens
					</h2>


					<p>
						Our baked goods may contain or come into contact
						with common allergens including:
					</p>


					<ul>

						<li>🥛 Milk / Dairy</li>

						<li>🥚 Eggs</li>

						<li>🌾 Wheat / Gluten</li>

						<li>🥜 Peanuts</li>

						<li>🌰 Tree Nuts</li>

						<li>🌱 Soy</li>

					</ul>

				</div>





				<div className="allergen-card">


					<h2>
						Cross-Contact Notice
					</h2>


					<p>

						Sweet Mystic Bakery operates in a home kitchen
						where ingredients containing allergens may be used.

						While we take precautions to prevent cross-contact,
						we cannot guarantee that products are completely
						free from allergens.

					</p>


				</div>





				<div className="allergen-card">


					<h2>
						Custom Orders
					</h2>


					<p>

						If you have dietary concerns or ingredient
						questions, please contact us before placing
						your order.

						We will do our best to discuss available
						options.

					</p>


				</div>





				<div className="allergen-warning">


					<h2>
						Important
					</h2>


					<p>

						Customers with severe allergies should use
						their own judgment when deciding whether
						to consume our products.

					</p>


				</div>



			</section>


		</main>

	);

}


export default Allergens;