import React, {Component} from 'react';
import HeaderLayout from '../components/HeaderLayout';
class Header extends Component {
    state = { 
        texto_boton_2: "Otro botonnnnn",
        otra: "hgjhfgj",
        bol: false
    }
    clickHandler = (event) => {
        let texto = event.target.innerText;
        this.setState({ texto_boton_2: texto });
    }
    render() { 
        return ( 
        <HeaderLayout texto_boton_2={this.state.texto_boton_2} clickHandler={this.clickHandler}>

        </HeaderLayout>
         );
    }
}
 
export default Header;