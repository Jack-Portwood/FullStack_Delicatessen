import React, { useEffect, useState } from "react";
import Request from "../helpers/request.js";

function ProduceComponent() {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    // container for fetched data
    const tempProduce = [];
    const url = "/api/produce/type/hardcheese";
    const request = new Request();
    request.get(url).then((data) => console.log(data));
  }, []);

  return <h1> Hello I am the Produce compnent </h1>;
}

export default ProduceComponent;
