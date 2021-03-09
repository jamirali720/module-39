import React from 'react';


const Counter = (props) => {
  
        const { name, category} =  props.product;
    return (
        <div>
                <h1> Product Brand : {name}</h1>
                <h1> Product category : {category}</h1>
        </div>
    );
};

export default Counter;