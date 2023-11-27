import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/AuthContext'
import axios from 'axios'

const Cart = () => {
    const [products, setProducts] = useState([]);
    console.log(products, "products")

    const { state } = useContext(MyContext)
    // console.log(state)

    async function getCartData() {
        try {
            const response = await axios.get('https://fakestoreapi.com/carts/5');
            // console.log(response.data.products)
            if (response.data.products.length) {
                var myCartProducts = []
                for (var i = 0; i < response.data.products.length; i++) {
                    try {
                        const responseForSingleProduct = await axios.get(`https://fakestoreapi.com/products/${response.data.products[i].productId}`)
                        // console.log(responseForSingleProduct.data, "response", i)
                        myCartProducts.push(responseForSingleProduct.data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                setProducts(myCartProducts);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // if (state?.user?.id) {
        // }
        getCartData()
    }, [])
    return (
        <div>
            <h1>Cart</h1>
            {products.length ?
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    {
                        products.map((product) => (
                            <div style={{ cursor: "pointer", width: "21%", border: '2px solid black', height: "400px", marginBottom: '40px' }}>
                                <img style={{ height: "60%", width: "90%", margin: 'auto' }} src={product.image} />
                                <h3>{product.title}</h3>
                                <h4>${product.price}</h4>
                            </div>
                        ))
                    }
                </div>
                :
                <h1>Loading</h1>}

        </div>
    )
}

export default Cart