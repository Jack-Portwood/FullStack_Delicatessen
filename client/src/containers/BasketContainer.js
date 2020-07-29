import React,{useState, useEffect, Fragment} from 'react';
import { Link } from "react-router-dom";


const BasketContainer = (props) => {
    //need to set the props to state then map over state?
    
   const [BasketState, SetBasketState] = useState([])

   useEffect(() => {
    SetBasketState(props.basket);
   },[props.basket]);

   const RemoveFromBasket = (itemToRemove) => {
     SetBasketState(
       BasketState.filter((item) => item !== itemToRemove)
     );
   }

   const clearBasket =(BasketState) => {
     SetBasketState(
     BasketState.length === 0 ? true:false
     );
   }
   
    
 
    //maps over array and outputs indiviual items
  const itemInBasket = BasketState.map((item, index) => (
    <div className="product-data" key={index}>
      <p className="product-name">{item.name}</p>
      <img alt="imgDB" className="product-image" src={item.imgLink} />
      <p className="product-price">£{item.retailPrice}</p>
      <button onClick={() => RemoveFromBasket(item)}>Remove Item</button>
    </div>
  ));

    return (
      <Fragment>
        <div>{itemInBasket}</div>

        <Link to="/home">
          <button className="Clear-Basket" onClick={() => {clearBasket(BasketState)}}>
            Clear Basket
          </button>
        </Link>
        <span>
          Total:£
        </span>
      </Fragment>
    );
}

export default BasketContainer; 