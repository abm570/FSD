import React, { useState } from 'react'

const ColorChanger = () => {
    const colors = ['red', 'green', 'blue'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeColor = () => {
    setCurrentIndex((currentIndex + 1) % colors.length);
  };
  const boxStyle = {
    height: '150px',
    width: '150px',
    backgroundColor: colors[currentIndex],
    margin: '20px auto',
    border: '2px solid #000',
  };
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const labelStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <div style={labelStyle}>Current Color: {colors[currentIndex]}</div>
      <div style={boxStyle}></div>
      <button onClick={changeColor} style={buttonStyle}>Change Color</button>
    </div>
  );
}

export default ColorChanger
