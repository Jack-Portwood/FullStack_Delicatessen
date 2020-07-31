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
          <div style={inlineStyle}>Our Story<br/>Before opening his first glorious leader and founder V.G Childe had invented in the British cheese industry.<br/> For some time he had felt that there was a lack of opportunity to buy high quality farmhouse cheese, both in the retail and wholesale sector.
           <br/> Childe Cheesemongers have now been trading for over 150 years, bringing together producers and consumers for mutual benefit. The aim for the future is to continue this process while continually striving to improve
            </div>
        </div>
      </Parallax>

      <h1>. . .</h1>
      <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 800 }}>
          <p style={inlineStyle}>Our Vision<br/>Is to bring you the best produce from Scotland and the world.</p>
        </div>
      </Parallax>

      <h1>. . .</h1>
      <Parallax bgImage={image3} strength={-200}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Our Promise<br/> We only use ethical and local suppliers to bring you the highest quality produce</div>
        </div>
      </Parallax>
      <h1>.  .  .</h1>
      <div style={{ height: "5vh" }}></div>
    </div>
  );
}
export default HomeContainer;
