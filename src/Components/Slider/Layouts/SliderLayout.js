import React from "react";
import "./Slider.css";

const SliderLayout = props => {
  return (
    <div className="Slider">
      <div className="Slider-container">{props.children}</div>
      <div className="Slider-Buttons">
        <button onClick={props.backButton}>{"<"}</button>
        <button onClick={props.nextButton}>{">"}</button>
      </div>
    </div>
  );
};

export default SliderLayout;
