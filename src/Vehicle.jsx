import React from 'react'

const Vehicle = () => {
    const cardStyle = {border: '2px solid grey', padding: '20px', backgroundColor: 'whitesmoke', width:'10%', boxShadow:'10px 10px 10px grey'}

  return (
    <>
    <h2>Vehicle Information</h2>
    <div style={{display: 'flex', flexDirection:'row', padding: '20px', gap: '20px'}}>
      <div style={cardStyle}>
        <p><b>Model:</b> BMW M3 GTR</p>
        <p><b>Manufacturer:</b> BMW</p>
        <p><b>Year:</b> 2001</p>
        <p><b>Fuel Type:</b> Petrol</p>
      </div>

      <div style={cardStyle}>
        <p><b>Model:</b> Lexus LFA</p>
        <p><b>Manufacturer:</b> Lexus</p>
        <p><b>Year:</b> 2010</p>
        <p><b>Fuel Type:</b> Petrol</p>
      </div>

      <div style={cardStyle}>
        <p><b>Model:</b> Ford Mustang GT</p>
        <p><b>Manufacturer:</b> Ford</p>
        <p><b>Year:</b> 2017</p>
        <p><b>Fuel Type:</b> Petrol</p>
      </div>

      <div style={cardStyle}>
        <p><b>Model:</b> Porsche Cayman 911 Carrera</p>
        <p><b>Manufacturer:</b> Porsche</p>
        <p><b>Year:</b> 2025</p>
        <p><b>Fuel Type:</b> Petrol</p>
      </div>

      <div style={cardStyle}>
        <p><b>Model:</b> Chevrolet Corvette ZR1</p>
        <p><b>Manufacturer:</b> Chevrolet</p>
        <p><b>Year:</b> 2025</p>
        <p><b>Fuel Type:</b> Petrol</p>
      </div>
    </div>
    </>
  );
}

export default Vehicle;