import React, { useEffect, useState } from "react";
import Request from "../helpers/request.js";

function ProduceComponent(props) {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    // container for fetched data
    const tempProduce = [];
    const url = `/api/produce/type/${props.product}`;
    const request = new Request();
    request.get(url).then((data) => setProduce(data));
  }, []);

  const stock = produce.map((item, index) => (
     
      <li>
        {item.name}
        <img src = {item.imgLink} />
      </li>
    
  ))

  return (
  <ul> {stock} </ul>
  );
}

export default ProduceComponent;
