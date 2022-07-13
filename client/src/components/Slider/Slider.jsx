import { useState } from "react";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import "./slider.css";

const Slider = () => {
  const [sliderImg, setSliderImg] = useState(img1);

  setTimeout(() => {
    sliderImg === img1 && setSliderImg(img2);
    sliderImg === img2 && setSliderImg(img3);
    sliderImg === img3 && setSliderImg(img1);
  }, 3000);

  return (
    <div className="df slider">
      <div className="slider-hover df ai-c jcc">
        <h1>Bake it, Buy it</h1>
      </div>
      <img className="slider-img" src={sliderImg} alt="slider" />
    </div>
  );
};

export default Slider;
