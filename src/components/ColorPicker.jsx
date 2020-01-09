import React from 'react';
import styles from '../compcss/ColorPicker.module.css'

const ColorPicker = (props) => (
    <div className="component colorpicker">
        {props.colors.map((color, idx)=>
            <button
                key={color}
                className={styles.button}
                style={{
                    backgroundColor: props.selColorIdx === idx ? 'white' : color,
                    borderColor: color,
                }}
            >
            {/* {color}*/}
            </button>
        )}
    </div>
);


export default ColorPicker;