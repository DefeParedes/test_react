import React, { Component } from "react";
import Slider from "../../../Components/Slider/Containers/Slider";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <Slider minHeight="50vh" />
        <Slider minHeight="25vh" />
        <Slider minHeight="25vh" />
      </div>
    );
  }
}

export default Home;
