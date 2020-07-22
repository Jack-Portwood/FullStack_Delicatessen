import React from "react";
import {Link} from 'react-router-dom';


const ProduceContainer = () => {
    
    return (
      <div className = "produce-boxes">
        
          <div className = "blue-cheese-box">
            <Link to="/bluecheese">Blue Cheese</Link>
          </div>
          <div className = "hard-cheese-box">
            <Link to="/hardcheese">Hard Cheese</Link>
          </div>
          <div className = "soft-cheese-box">
            <Link to="/softcheese">Soft Cheese</Link>
          </div>
          <div className = "pantry-box">
            <Link to="/pantry">Pantry</Link>
          </div>

      </div>
    );
    

}
export default ProduceContainer;