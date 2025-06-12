import React from 'react'
import './landmarks.css'

const Landmarks = () => {
    const landmarks = [{name:'Taj Mahal', location: 'Agra', country: 'India'},
                        {name:'Effiel Tower', location: 'Paris', country: 'France'},
                        {name:'Statue of Liberty', location: 'New York', country: 'USA'},
                        {name:'Great Wall of China', location: 'Beijing', country: 'China'},
    ];

  return (
    <div className='outerContainer'>
      {
        landmarks.map((l,index) => (
            <div key={index} className='innerContainer'>
                <h3>{l.name}</h3>
                <p>{l.location} - {l.country}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Landmarks
