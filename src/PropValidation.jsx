import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropValidation extends Component {
  render() 
  {

    return (
      <div>
        <h2>Simple ReactJS Props Validation Example</h2>
        
        <table border='2px solid black' cellPadding='15px'>
            <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Valid</th>
            </tr>

            <tr>
                <td>Array</td>
                <td>{this.props.propArray}</td>
                <td>{Array.isArray(this.props.propArray) ? 'True' : 'False'}</td>
            </tr>

            <tr>
                <td>Boolean</td>
                <td>{this.props.propBool ? 'True' : 'False'}</td>
                <td>{this.props.propBool ? 'True' : 'False'}</td>
            </tr>

            <tr>
                <td>Function</td>
                <td>{this.props.propFunc(5)}</td>
                <td>{this.props.propFunc(5) ? 'True' : 'False'}</td>
            </tr>

            <tr>
                <td>String</td>
                <td>{this.props.propString}</td>
                <td>{this.props.propString ? 'True' : 'False'}</td>
            </tr>

            <tr>
                <td>Number</td>
                <td>{this.props.propNumber}</td>
                <td>{this.props.propNumber ? 'True' : 'False'}</td>
            </tr>
        </table>
      </div>
    )
  }
}

Ex6.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func.isRequired,
    propString: PropTypes.string.isRequired,
    propNumber: PropTypes.number.isRequired
}

Ex6.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (x) {return x * 10},
    propString: 'Hello World!',
    propNumber: 10
}
export default PropValidation;