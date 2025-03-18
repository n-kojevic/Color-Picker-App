
import React, {useState} from "react"



function ColorPicker() {
    const[color, setColor] = useState("#FFFFFF");
    
    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return(

        <div className="color-picker-container">
            <h1 className="color-magic-title">Color Picker</h1>
            <div className="color-picker-display" style={{backgroundColor: color}}>
            <p>Selected color: {color}</p>
            </div>
            <label className="label">Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
        
    )
}

export default ColorPicker