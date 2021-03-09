import React, { useContext } from 'react';
import { contextAPI } from '../../App';
import Home from '../Home/Home';


const Header = () => {
    const context = useContext(contextAPI);
    const [category, setCategory] = context;
  


    return (
        <div>
            <h1> this is header {category}</h1>
            <button onClick={() => setCategory('camera')}>Camera</button>
            <button onClick={() => setCategory('phone')}>Phone</button>
            <button onClick={() => setCategory('laptop')}>Laptop</button>
                <Home></Home>
        </div>
    );
};

export default Header;