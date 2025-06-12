import React, { Component } from 'react'

class Resturant extends React.Component {
  render() {
    const resturant = [{res: 'Mainland China', menu: [{id: 1, item: 'Fried Rice'}, {id: 2, item: 'Noodles'}]},
                       {res: 'Little Italy', menu: [{id: 1, item: 'Pasta'}, {id: 2, item: 'Pizza'}]}
                      ];

    return (
      <div>
        {
            resturant.map(((r, index) =>(
                <div key={index}>
                    <h2>{r.res}</h2>
                    <ul>
                        {
                            r.menu.map((menuItem) =>(
                                <li key={menuItem.id}>{menuItem.item}</li>
                            ))
                        }
                    </ul>
                </div>
            )))
        }
      </div>
    )
  }
}

export default Resturant;