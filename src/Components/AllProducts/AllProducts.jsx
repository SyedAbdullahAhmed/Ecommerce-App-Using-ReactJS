import React from "react";
import { useState, useEffect } from "react";
import "./AllProducts.scss"

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="row flex-allpro">
            {products.map((element) => (
                <div className="products" key={element.id}>
                    <div style={{ width: "20rem" }}>
                        <img src={element.image} className="card-img-top img-fluid" alt={element.title} />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <div>Price : ${element.price}</div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
    )

   
}
