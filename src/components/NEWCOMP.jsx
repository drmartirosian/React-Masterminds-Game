import React from "react";

function Newcomp(props) {
    return (
        <div /* className="Newcomp" id={`newcomp-${props.num}`}*/>
            <p>Bedroom /*{props.num}*/</p>
        </div>
    );
}
export default Newcomp;

//Note: in App.js, add import NAME from './src/components/NAME';