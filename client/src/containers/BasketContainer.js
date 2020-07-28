import React,{useState, useEffect} from 'react';

const BasketContainer = (props) => {
    //need to set the props to state then map over state?
    
   const [BasketState, SetBasketState] = useState(props.basket)

   useEffect(() => {
    SetBasketState(props.basket);
   },[props.basket]);

   const RemoveFromBasket = (itemToRemove) => {
     SetBasketState(
       BasketState.filter((item) => item !== itemToRemove) 
     );
   }
    
 
    //maps over array and outputs indiviual items
  const stock = BasketState.map((item, index) => (
    <div className="product-data" key={index}>
      <p className="product-name">{item.name}</p>
      <p className="product-price">£{item.retailPrice}</p>
      <button onClick={() => RemoveFromBasket(item)}>Remove Item</button>
    </div>
  ));
  console.log("hello", stock);

    return (
    <div>{stock}</div> 
    
    );
}

export default BasketContainer; 