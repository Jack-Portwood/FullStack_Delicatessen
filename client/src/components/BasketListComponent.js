import React, {useState, useEffect,Fragment, } from 'react';
import {Link} from 'react-router-dom';

const BasketListComponent = (props) =>{

  const [basketState, setBasketState] = useState(props.basket);
  const [basketTotal, setBasketTotal] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    caluculateTotal()
    // setBasketState(props.basket);
  }, [counter,props.basket]);

  function removeFromBasket (event) {
    event.preventDefault()
    console.log(event.target.value)
    // makes clone of state to manipulate
    let newBasket = basketState
    newBasket.splice((event.target.value), 1);

    //sets new state from maipulated data
    setBasketState(newBasket)
    
    //pushing data back up to routercontainer
    props.handleB(newBasket);

    //forces re-render 
    setCounter(counter + 1)
  };

  function caluculateTotal() {
    let total = 0
    for(let item of basketState){
      total += item.retailPrice
    }
    setBasketTotal((total).toFixed(2))
  }

  //  maps over array and outputs indiviual items
  const itemInBasket = basketState.map((item, index) => (
    <div className="product-data" key={index}>
      <p className="product-name">{item.name}</p>
      <img alt="imgDB" className="product-image" src={item.imgLink} />
      <p className="product-price">£{item.retailPrice}</p>
      <button value = {index} onClick={removeFromBasket}>Remove Item</button>
    </div>
  ));

    
    //need to understand this better
     function clearBasket(event) {
    event.preventDefault()
     props.handleB([])
     setBasketState([])
   }

       return (
         <Fragment>
           <div>{itemInBasket}</div>

           <Link to="/home">
             <button className="Clear-Basket"onClick={clearBasket}>
               Clear Basket
             </button>
           </Link>
           <div>Total: £ {basketTotal}</div>
         </Fragment>
       );
   
    
}

export default BasketListComponent;
