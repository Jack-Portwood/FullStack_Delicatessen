import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";


const inlineStyle = {
  background: "#f9f9f9",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

function HomeContainer() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>. . .</h1>
      <Parallax bgImage={image1} strength={500} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Our Story</div>
        </div>
      </Parallax>

      <h1>. . .</h1>
      <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 800 }}>
          <p style={inlineStyle}>Our Vision</p>
        </div>
      </Parallax>

      <h1>. . .</h1>
      <Parallax bgImage={image3} strength={-200}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Our Promise</div>
        </div>
      </Parallax>
      <h1>.  .  .</h1>
      <div style={{ height: "5vh" }}></div>
    </div>
  );
}
export default HomeContainer;
