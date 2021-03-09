import React, { useContext, useEffect, useState } from 'react';
import { contextAPI } from '../../App';
import Counter from '../Counter/Counter';


const allProducts = [
    {name : 'Asus', category: 'laptop'},
    {name : 'Apple', category: 'tablet'},
    {name : 'Dell', category: 'computer'},
    {name : 'Samsung', category: 'phone'},
    {name : 'Nokia', category: 'mobile'},
    {name : 'Nikkon', category: 'camera'},
    {name : 'Php', category: 'watch'}
]
const Home = () => {
    const[ context] = useContext(contextAPI); 
    const [products, setProducts] = useState([])
    useEffect(() => {
       const matchedProducts =allProducts.filter(product => product.category.toLowerCase() === context.toLowerCase());
       setProducts(matchedProducts);
    }, [context])
    return (
        <div>
            <h1>Product Name :{context} </h1>
            {
               products.map(pd => <Counter product={pd}></Counter>)
            }
        </div>
    );
};

export default Home;