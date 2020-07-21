import React, {Fragment} from "react";

const BlueCheeseComponent = (props) => {
  if(!props.produce){
    return "loading..."
  }

  return (
    <Fragment>
      <p>
        {props.produce.type} {props.produce.name}
      </p>
    </Fragment>
  )
}

export default BlueCheeseComponent;
