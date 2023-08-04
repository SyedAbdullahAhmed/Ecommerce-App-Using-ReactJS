import React, { useState, useEffect } from 'react';

export function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Make an API request to fetch categories and update state
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            // Make an API request to fetch products for the selected category
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error));
        }
    }, [selectedCategory]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            <h2 style={{ textTransform: 'capitalize', marginLeft : "1rem" }}>Categories</h2>
            <select value={selectedCategory} onChange={handleCategoryChange} style={{ textTransform: 'capitalize' , marginLeft : "1rem" }}>
                <option value="">Select</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            
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
        </div>
    );
}
