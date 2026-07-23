import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";
import "./ProductGrid.scss";


function ProductGrid(){

    return(
        <section className="product-grid">

            {
                products.map(product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))
            }

        </section>
    );
}

export default ProductGrid;