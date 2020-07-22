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

  const stock = produce.map((item, index) => (
    <div>
      {item.name}
      
        <img className="product-image" src={item.imgLink} />

    </div>
  ));

  return (
  <ul> {stock} </ul>
  );
}

export default ProduceComponent;
