import React from "react";
import { Parallax } from "react-parallax";

const image1 = "https://mellischeese.net/wp-content/uploads/2017/12/IMG_9680.jpg";
const image2 = "https://mellischeese.net/wp-content/uploads/2017/12/IMG_9739.jpg";
const image3 =  "https://mellischeese.net/wp-content/uploads/2020/04/IMG_1576__1588243470_92.207.104.30.jpg";

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position:'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)'
}
function HomeContainer() {
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={image1} strength={500} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Our Story</div>
        </div>
      </Parallax>

      <h1>. . .</h1>
      <Parallax bgImage={image2} blur={{ min: -1, max: 6 }}>
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
      <div style={{ height: "50vh" }}></div>
    </div>
  );
}
export default HomeContainer;
