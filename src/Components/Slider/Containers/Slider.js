import React, { Component } from "react";
import SliderLayout from "../Layouts/SliderLayout";
import SliderImage from "../Layouts/SliderImage";

// Ejemplo de Archivo de Imagenes
const imagenes = [
  {
    img:
      "https://i-h2.pinimg.com/564x/ed/a9/20/eda9208c87a8e63817b9e0ebb961cdbd.jpg",
    source: [
      {
        img:
          "https://i-h2.pinimg.com/564x/ed/a9/20/eda9208c87a8e63817b9e0ebb961cdbd.jpg",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://i-h2.pinimg.com/564x/ed/a9/20/eda9208c87a8e63817b9e0ebb961cdbd.jpg",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://i-h2.pinimg.com/564x/e2/60/60/e260606002c02ef4ad414f2a7e021447.jpg",
    source: [
      {
        img:
          "https://i-h2.pinimg.com/564x/e2/60/60/e260606002c02ef4ad414f2a7e021447.jpg",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://i-h2.pinimg.com/564x/e2/60/60/e260606002c02ef4ad414f2a7e021447.jpg",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://i-h2.pinimg.com/564x/8b/db/a1/8bdba142bcd3a711a4d3c1ddb54a39ff.jpg",

    source: [
      {
        img:
          "https://i-h2.pinimg.com/564x/8b/db/a1/8bdba142bcd3a711a4d3c1ddb54a39ff.jpg",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://i-h2.pinimg.com/564x/8b/db/a1/8bdba142bcd3a711a4d3c1ddb54a39ff.jpg",
        media: "(max-width: 650px)"
      }
    ]
  }
];

//Componente principal
//  Requiere SliderLayout y SliderImagen
//  Muestra un Slider con botones para cambiar entre las distintas imagenes cargadas.
class Slider extends Component {
  state = {
    imagenes,
    speed: 7000,
    index: 0,
    animacion: "sliderLeft"
  };

  // Timer para cambiar la imagen cada cierto periodo.
  autoChangeImage = () => {
    this.myInterval = setInterval(() => {
      this.nextImage();
    }, this.state.speed);
  };

  //  Salta a la imagen siguiente
  nextImage = () => {
    //  Detener Timer.
    clearInterval(this.myInterval);

    //  Asigna la animacion
    this.setState({ animacion: "sliderRight" });

    //  Cambia la imagen
    if (this.state.index === this.state.imagenes.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }

    //  reinicia el timer
    this.autoChangeImage();
  };

  //  Salta a la imagen anterior
  prevImage = () => {
    //  Detener Timer.
    clearInterval(this.myInterval);

    //  Asigna la animacion
    this.setState({ animacion: "sliderLeft" });

    //  Cambia la imagen
    if (this.state.index === 0) {
      this.setState({ index: this.state.imagenes.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }

    //  reinicia el timer
    this.autoChangeImage();
  };

  selectImage = id => {
    //  Detener Timer.
    clearInterval(this.myInterval);

    this.setState({ index: id });

    //  reinicia el timer
    this.autoChangeImage();
  };

  componentDidMount() {
    // Inicaliza en stado de Imagenes
    if (this.props.imagenes != null) {
      this.setState({ imagenes: this.props.imagenes });
    }
    if (this.props.speed != null) {
      this.setState({ speed: this.props.speed });
    }
    //Inicializa el Timer para pasar de imagen automaticamente cada cierto periodo de tiempo.
    this.autoChangeImage();
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    return (
      <SliderLayout
        nextButton={this.nextImage}
        backButton={this.prevImage}
        selectImage={this.selectImage}
        maxIndex={this.state.imagenes}
        index={this.state.index}
      >
        <SliderImage
          imagen={this.state.imagenes[this.state.index]}
          animacion={this.state.animacion}
        />
      </SliderLayout>
    );
  }
}

export default Slider;
