import React from 'react'

class Classbased extends React.Component {
  render() {
    return (
      <div className="component classcard">
        <h1>This is created using Class Components </h1>
        <p>This is done using external CSS</p>
        <p style={{color : 'blue'}}>This is done using inline CSS</p>
      </div>    
    )
  }
}

export default Classbased;
