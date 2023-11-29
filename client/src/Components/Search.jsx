import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'

const Search = () => {

    const [products, setProducts] = useState([]);
    const { query } = useParams();

    async function getSeacredProducts() {
        try {
            const response = await axios.post('http://localhost:8000/search', { query })
            if (response.data.success) {
                setProducts(response.data.products)
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (query) {
            getSeacredProducts()
        }
    }, [query])

    return (
        <div>
            {products.length ? products.map((product) => (
                <div>
                    <img src={product.image} />
                    <h1>{product.name}</h1>
                    <h3>Price : {product.price}</h3>
                </div>
            )) : <div>Loading...</div>}
        </div>
    )
}

export default Search