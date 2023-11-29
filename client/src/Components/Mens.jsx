import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Mens() {

    const router = useNavigate();
    const [sort, setSort] = useState("");
    console.log(sort, "sort")

    const [products, setProducts] = useState([]);

    console.log(products, "products")

    async function getProducts() {
        try {
            // alert(sort)
            const response = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`)
            // console.log(response.data, "response from api")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    // async function sortByPrice() {
    //     try {
    //         const response = await axios.get(`https://fakestoreapi.com/products?initialValue=${initialVlaue}&endingValue=${endingvalue}`)
    //         setProducts(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        // alert("Page loaded..")
        getProducts()
    }, [sort])

    return (
        <div>
            <h1>Mens </h1>
            <div>
                <h2>Sorting</h2>
                <select onChange={(event) => setSort(event.target.value)}>
                    {/* <option>Select</option> */}
                    <option value='asc'>Ase</option>
                    <option value='desc'>Dese</option>
                </select>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products.map((product) => (
                    <div onClick={() => router(`/single-product/${product.id}`)} style={{ cursor: "pointer", width: "21%", border: '2px solid black', height: "400px", marginBottom: '40px' }}>
                        <img style={{ height: "60%", width: "90%", margin: 'auto' }} src={product.image} />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Mens;