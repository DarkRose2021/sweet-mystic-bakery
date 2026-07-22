import "./ContactCTA.scss";
import { Link } from "react-router-dom";

const ContactCTA = () => {
	return (
		<section className="contactCTA">
			<div className="contactCTA__container">
				<div className="contactCTA__content">
					<h2>Ready for Something Sweet?</h2>

					<p>
						From cookies and cupcakes to seasonal treats and custom orders,
						Sweet Mystic Bakery is here to make every occasion a little more
						magical.
					</p>

					<div className="contactCTA__buttons">
						<Link to="/menu" className="btn btn-primary">
							View Menu
						</Link>

						<Link to="/contact" className="btn btn-secondary">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactCTA;
