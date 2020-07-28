import React,{useState} from 'react';

function BasketContainer (props) {
    //can possibly be removed 
    
 
    //maps over array and outputs indiviual items
  const stock = props.basket.map((item, index) => (
    <div className="product-data" key={index}>
      <p className="product-name">{item.name}</p>
      <p className="product-price">£{item.retailPrice}</p>
    </div>
  ));

    return (
    <div>{stock}</div> 
    
    );
}

export default BasketContainer; 