import { Link } from "react-router-dom";
import "./SeasonalBanner.scss";

function SeasonalBanner({

    season = "Seasonal Collection",
    title = "Magical Treats Made for Every Season",
    description = "Limited-time desserts crafted with fresh flavors and a little extra sweetness.",
    image

}) {


    return (

        <section
            className="seasonal-banner"
            style={{
                backgroundImage: `url(${image})`
            }}
        >

            <div className="seasonal-overlay">


                <div className="seasonal-content">


                    <span className="season-label">
                        ✦ {season} ✦
                    </span>



                    <h2>
                        {title}
                    </h2>



                    <p>
                        {description}
                    </p>



                    <Link
                        to="/menu"
                        className="season-button"
                    >
                        View Seasonal Menu
                    </Link>


                </div>


            </div>


        </section>

    );

}


export default SeasonalBanner;