import "./Launch.scss";

import logo from "../../assets/images/Main-Logo.png";
// import bakeryImage from "../../assets/images/temp.jpg";

function Launch() {
	return (
		<main className="launch-page">
			<section className="launch-card">

				<div className="launch-content">
					<span>✦ Something Sweet Is Brewing ✦</span>

					<h1>Sweet Mystic Bakery</h1>

					<h2>Opening Soon</h2>

					<p>
						Handcrafted desserts, magical flavors, and homemade treats are
						coming soon. Follow along as we prepare to bring a little sweetness
						to your celebrations.
					</p>

					<div className="launch-actions">
						{/* <Link to="/contact" className="launch-button">
							Contact Us
						</Link> */}

						<a
							href="https://www.facebook.com/profile.php?id=61591828713766"
							target="_blank"
							rel="noreferrer"
							className="social-button"
						>
							Follow Updates
						</a>
					</div>
				</div>

				<div className="launch-image">
					<img src={logo} alt="Sweet treats" />
				</div>
			</section>
		</main>
	);
}

export default Launch;
