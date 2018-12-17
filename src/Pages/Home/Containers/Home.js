import React, { Component } from "react";
import Slider from "../../../Components/Slider/Containers/Slider";

const styleDiv = {
  height: "25vh",
  width: "500px"
};

const imagenes = [
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/014/672/752/large/lee-b-df.jpg?1544971671",
    source: [
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/014/672/752/large/lee-b-df.jpg?1544971671",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/014/672/752/large/lee-b-df.jpg?1544971671",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/014/561/208/large/lee-b-c5.jpg?1544493288",
    source: [
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/014/561/208/large/lee-b-c5.jpg?1544493288",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/014/561/208/large/lee-b-c5.jpg?1544493288",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://cdnb.artstation.com/p/assets/images/images/014/564/433/large/lee-b-c2.jpg?1544507746",
    source: [
      {
        img:
          "https://cdnb.artstation.com/p/assets/images/images/014/564/433/large/lee-b-c2.jpg?1544507746",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://cdnb.artstation.com/p/assets/images/images/014/564/433/large/lee-b-c2.jpg?1544507746",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/014/332/402/large/lee-b-c6.jpg?1543519311"
  },
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/012/594/222/large/lee-b-maru-160901.jpg?1535561039"
  },
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/012/096/710/large/lee-b-maru-160722.jpg?1533026323"
  }
];

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <Slider />
        <Slider height="50vh" imagenes={imagenes} />
        <Slider height="25vh" showButtons={false} speed={5000} />
        <div className="conteiner" style={styleDiv}>
          <Slider />
        </div>
      </div>
    );
  }
}

export default Home;
