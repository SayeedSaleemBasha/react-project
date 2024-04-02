import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    return (
        <div>
            <h2  className="Header">Products</h2>
            <div className='container'>
                <div className='row'>
                    {
                        Products && Products.length > 0 ? (
                            Products.map((item, index) => (
                                <diV className='col-md-3 mt-4'>
                                    <div className='card p-2,' style={{ height: "100%", border: "2px solid green",boxShadow:"1px solid yellow" }}>
                                        <Link to={`/Product/${item.id}`}>
                                            <img src={item.image} alt={item.title}
                                                style={{ height: "250px", width: "200px",textcolor:"white" }} />
                                            <h5>{item.title}</h5>
                                            <h6>{item.price}</h6>

                                        </Link>

                                    </div>

                                </diV>

                            ))
                        ) : <p>Loading...</p>
                    }

                </div>

            </div>
        </div>
    )
}
export default Products