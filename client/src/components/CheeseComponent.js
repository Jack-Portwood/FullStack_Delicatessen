import React, { useEffect, useState } from "react";
import Request from "../helpers/request.js";

function CheeseComponent() {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    // container for fetched data
    const tempProduce = [];
    const url = "/api/produce/type/softcheese";
    const request = new Request();
    request.get(url)
      .then(data => console.log(data))
  }, []);

  return <h1> hello I am the cheese compnent I am poorly named</h1>;
}

export default CheeseComponent;
