import React, { useEffect, useState } from "react";
import Request from "../helpers/request.js";

function ProduceComponent(props) {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    // fetch request useeffecthooks
    const url = `/api/produce/type/${props.product}`;
    const request = new Request();
    request.get(url).then((data) => setProduce(data));
  }, []);

  //maps over array and outputs indiviual items
  const stock = produce.map((item, index) => (
    <div>
      <img className="product-image" src={item.imgLink} />
      <div className="product-name">
        <p className="product-name">{item.name}</p>
        <p className="product-info">{item.info}</p>
        <p className="product-stype">{item.style}</p>
        <p className="product-orgin">{item.origin}</p>
      </div>
    </div>
  ));

  return (
    <div className="produce-container">
      {stock}
      
    
    </div>
  );
}

export default ProduceComponent;
