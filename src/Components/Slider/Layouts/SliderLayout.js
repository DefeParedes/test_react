import React from "react";
import "./Slider.css";

const SliderLayout = props => {
  const selectors = [];
  props.maxIndex.forEach((element, index) => {
    if (index === props.index) {
      selectors.push("selector active");
    } else {
      selectors.push("selector");
    }
  });

  let SliderStyle = {
    minHeight: "50vh"
  };
  if (props.minHeight != null) {
    SliderStyle = {
      minHeight: props.minHeight
    };
  }

  return (
    <div className="Slider" style={SliderStyle}>
      <div className="Slider-container">{props.children}</div>
      <div className="Slider-Buttons">
        <button className="changeImg" onClick={props.backButton}>
          <div>{"<"}</div>
        </button>
        <div className="Slider-Buttons-selectors">
          {selectors.map((item, index) => {
            return (
              <button
                className={item}
                onClick={() => {
                  props.selectImage(index);
                }}
              />
            );
          })}
        </div>
        <button className="changeImg" onClick={props.nextButton}>
          <div>{">"}</div>
        </button>
      </div>
    </div>
  );
};

export default SliderLayout;
