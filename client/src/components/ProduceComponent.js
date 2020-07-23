import React, { useEffect, useState } from "react";
import Request from "../helpers/request.js";

function ProduceComponent(props) {
  const [produce, setProduce] = useState([]);
  const [basket, setBasket] = useState([]);




  useEffect(() => {
    // fetch request useeffecthooks
    const url = `/api/produce/type/${props.product}`;
    const request = new Request();
    request.get(url).then((data) => setProduce(data));
  }, []);




  //push item into basket uses destructuring 
  const addToBasket = (item) => {
    setBasket([...basket,item]);
  }



  //maps over array and outputs indiviual items
  const stock = produce.map((item, index) => (
    
  
      <div className="product-data" key={index}>
        <img className="product-image" src={item.imgLink} />
        <p className="product-name">{item.name}</p>
        <p className="product-stype"> Style: {item.style}</p>
        <p className="product-orgin"> Origin: {item.origin}</p>
        <p className="product-info"> Description: {item.info}</p>
        <p className="product-price">£{item.retailPrice}</p>
        <button onClick={() => addToBasket(item)}>Add to Basket</button>
      </div>
    
  ));

  return (
    <header>
    {/* move funcitonality to Navbar link */}
      <button> Go to Basket ({basket.length})</button>
      <div className="produce-container">{stock}</div>
    </header>
    
  );
}

export default ProduceComponent;
