import React,{useState} from 'react';

function BasketContainer (props) {
  const [basket, setBasket] = useState([props.basket]);
    console.log("hello",props.basket)
    //maps over array and outputs indiviual items
  const stock = props.basket.map((item, index) => (
    <div className="product-data" key={index}>
      <p className="product-name">{item.name}</p>
      <p className="product-price">£{item.retailPrice}</p>
    </div>
  ));

    return (
      [stock]
    );
    
    
}

export default BasketContainer; 