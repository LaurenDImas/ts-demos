import {useEffect, useState} from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const Example = () => {
    const [data, setData] = useState<Product | null>(null)
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://dummyjson.com/product/1')
                const result = await response.json()
                setData(result)
            }catch (e) {
                console.error(e)
            }
        }
        
        fetchData().catch(e => console.error(e))
    })
    return (
        <div>
            {data ? <div>
                <p>id: {data.id}</p>
                <p>title: {data.title}</p>
                <p>description: {data.description}</p>
                <p>price: {data.price}</p>
                <p>discountPercentage: {data.discountPercentage}</p>
                <p>rating: {data.rating}</p>
                <p>stock: {data.stock}</p>
                <p>brand: {data.brand}</p>
                <p>category: {data.category}</p>
                <p>thumbnail: {data.thumbnail}</p>
                <p>
                    Image: {data.images.map((image, i) => (
                        <img key={i} src={image} alt={image} width={100} height={100} />
                    ))}
                </p>
            </div>: <p>Loading...</p>}
        </div>
    )
}
export default Example
