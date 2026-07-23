import { Link } from "react-router-dom";
import "./AboutPreview.scss";

// import bakeryImage from "../../assets/images/bakery-story.jpg";

function AboutPreview() {
	return (
		<section className="about-preview">
			<div className="about-container">
				<div className="about-image">
					{/* <img
                        src={bakeryImage}
                        alt="Sweet Mystic Bakery handcrafted desserts"
                    /> */}
					<div className="image-accent">✦</div>
				</div>

				<div className="about-content">
					<p className="eyebrow">Our Story</p>

					<h2>A Little Sweetness, A Little Magic</h2>

					<p>
						Sweet Mystic Bakery creates handcrafted desserts inspired by cozy
						kitchens, seasonal flavors, and the joy of sharing something
						special.
					</p>

					<p>
						As a Kentucky cottage bakery, every treat is thoughtfully made in
						small batches with care, creativity, and a sprinkle of imagination.
					</p>

					<Link to="/about" className="about-button">
						Discover Our Story
					</Link>
				</div>
			</div>
		</section>
	);
}

export default AboutPreview;
