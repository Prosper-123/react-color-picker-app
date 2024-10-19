import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('#00FF00')

    function handleColorChange(event) {
        setColor(event.target.value);
    }

  return (
    <div className='color-picker-container'>
      <h1>colour picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
        <p>Pick a Color {color}</p>
      </div>

      <label>
        Select a Color :
        <input type="color" value={color} onChange={handleColorChange}/>
      </label>
    </div>
  )
}

export default ColorPicker
