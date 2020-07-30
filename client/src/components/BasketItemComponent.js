import React, {useState, useEffect,Fragment, } from 'react';
import {Link} from 'react-router-dom';

const BasketItemComponent = (props) =>{

    const [BasketTotal, SetBasketTotal] = useState([])

    
    //need to understand this better
     const clearBasket =(BasketTotal) => {
     SetBasketTotal(
     BasketTotal === 0 
     );
   }

   

   

       return (
      <Fragment>
        <Link to="/home">
          <button className="Clear-Basket" onClick={() => {clearBasket(BasketTotal)}} >
            Clear Basket
            </button>
        </Link>
      <div>Total: £ {BasketTotal}</div>
      </Fragment>
    );
   
    
}

export default BasketItemComponent;
