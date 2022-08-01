import { useState } from "react";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import "./slider.css";

const Slider = () => {
  const [sliderImg, setSliderImg] = useState(img1);
  const [text, setText] = useState("");

  setTimeout(() => {
    if (sliderImg === img1) {
      setSliderImg(img2);
      setText("Bake it");
    }
    if (sliderImg === img2) {
      setSliderImg(img3);
      setText("Buy it");
    }
    if (sliderImg === img3) {
      setSliderImg(img1);
      setText("Sell it");
    }
  }, 2000);

  return (
    <div className="df slider">
      <div className="slider-hover df ai-c jcc">
        <h1>{text}</h1>
      </div>
      <img className="slider-img" src={sliderImg} alt="slider" />
    </div>
  );
};

export default Slider;
