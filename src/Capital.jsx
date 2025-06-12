import React from 'react'

const Capital = () => {
    const countries = [{id: 1, country: 'India', capital: 'New Delhi'},
                       {id: 2, country: 'France', capital: 'Paris'},
                       {id: 3, country: 'Italy', capital: 'Rome'},
                       {id: 4, country: 'Australia', capital: 'Canberra'},
                       {id: 5, country: 'USA', capital: 'Washington DC'},
                      ];

  return (
    <div>
      <ul>
        {
            countries.map((e) =>
                <li key={e.id}><b>Country:</b> {e.country} - {e.capital}</li>
            )
        }
      </ul>
    </div>
  );
}

export default Capital;