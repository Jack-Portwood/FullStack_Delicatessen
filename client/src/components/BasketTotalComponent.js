import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
const BasketTotalComponent = (props) =>{

    const [BasketTotal, SetBasketTotal] = useState(0)



     const clearBasket =(BasketTotal) => {
     SetBasketTotal(
     BasketTotal.length === 0 ? true:false
     );
   }

    return (
      <Fragment>
        <Link to="/home">
          <button className="Clear-Basket" onClick={() => {clearBasket(BasketTotal)}} >
            Clear Basket
            </button>
        </Link>
        <span>Total: £</span>
      </Fragment>
    );


}

export default BasketTotalComponent;
