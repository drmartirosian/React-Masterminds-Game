import React from 'react';

const ColorPicker = (props, selColorIdx) => (
    <div className="component colorpicker">
        {props.colors.map(color=>
        <button key={color}>{color}</button>
        )}
    </div>
);

export default ColorPicker;