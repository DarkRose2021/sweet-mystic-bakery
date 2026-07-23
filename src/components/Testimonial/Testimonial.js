import "./Testimonial.scss";


const testimonials = [

    {
        id:1,
        name:"Emily R.",
        location:"Bowling Green, KY",
        review:
        "The cupcakes were absolutely beautiful and tasted even better! Every detail felt handmade and special.",
        rating:5
    },


    {
        id:2,
        name:"Sarah M.",
        location:"Kentucky",
        review:
        "Sweet Mystic Bakery made our celebration unforgettable. The cookies were delicious and everyone loved them!",
        rating:5
    },


    {
        id:3,
        name:"Jessica T.",
        location:"Kentucky",
        review:
        "The seasonal treats are my favorite. You can tell every dessert is made with so much care.",
        rating:5
    }

];



function Testimonial() {


    return (

        <section className="testimonials">


            <div className="testimonials-container">


                <div className="section-heading">


                    <span>
                        ✦ Customer Love ✦
                    </span>


                    <h2>
                        Sweet Words From Our Customers
                    </h2>


                    <p>
                        Every dessert has a story,
                        and we love being part of yours.
                    </p>


                </div>



                <div className="testimonial-grid">


                    {
                        testimonials.map((testimonial) => (

                            <article
                                className="testimonial-card"
                                key={testimonial.id}
                            >


                                <div className="stars">

                                    {
                                        Array(testimonial.rating)
                                        .fill("★")
                                        .map((star,index)=>(
                                            <span key={index}>
                                                {star}
                                            </span>
                                        ))
                                    }

                                </div>



                                <p className="review">

                                    "{testimonial.review}"

                                </p>



                                <div className="customer">


                                    <h3>
                                        {testimonial.name}
                                    </h3>


                                    <span>
                                        {testimonial.location}
                                    </span>


                                </div>


                            </article>

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default Testimonial;