import { useEffect, useState } from "react";
import axios from 'axios';

function Mens() {

    const [products, setProducts] = useState([]);

    console.log(products, "products")

    async function getProducts() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            // console.log(response.data, "response from api")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        // alert("Page loaded..")
        getProducts()
    }, [])

    return (
        <div>
            <h1>Mens </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products.map((product) => (
                    <div style={{ width: "21%", border: '2px solid black', height: "400px", marginBottom: '40px' }}>
                        <img style={{ height: "60%", width: "90%", margin: 'auto' }} src={product.image} />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mens;