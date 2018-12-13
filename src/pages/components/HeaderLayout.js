import React from 'react';

const HeaderLayout = (props) => {
    console.log(props);
    return ( 
        <div className="header">
            {props.children}
            <button onClick = {props.clickHandler }>un boton</button>
            <button onClick = {props.clickHandler }>un boton2</button>
            <button onClick = {props.clickHandler }>un boton3</button>
            <div>
                <h2>{props.texto_boton_2}</h2>
                <p>maury aca</p>
            </div>
            <button>{props.texto_boton_2}</button>
        </div>
     );
}
 
export default HeaderLayout;