import React, { useEffect, useState } from "react";
import Request from "../helpers/request.js";
import ProduceDetail from "./ProduceDetail"

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
      {item.name}
      <img className="product-image" src={item.imgLink} />
    </div>
  ));

  return (
      <div className = "produce-container"> 
        {stock} 
      </div>
  );
}

export default ProduceComponent;
