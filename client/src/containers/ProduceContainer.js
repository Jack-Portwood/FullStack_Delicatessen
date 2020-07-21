import React from "react";
import {Link} from 'react-router-dom';
;


const ProduceContainer = () => {
    
    return (
      <div>
        <ul>
          <li>
            <Link to="/bluecheese">Blue Cheese</Link>
          </li>
          <li>
            <Link to="/hardcheese">Hard Cheese</Link>
          </li>
          <li>
            <Link to="/softcheese">Soft Cheese</Link>
          </li>
          <li>
            <Link to="/pantry">Pantry</Link>
          </li>
        </ul>
      </div>
    );
    

}
export default ProduceContainer;