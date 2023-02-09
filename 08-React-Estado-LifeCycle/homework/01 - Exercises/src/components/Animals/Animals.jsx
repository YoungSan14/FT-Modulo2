import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super();
  }
  
  render () {
    // const {zooAnimals} = this.props;
    return (
      <div>
        {
          this.props.zooAnimals.map(animal => (
            <div>
              <h5>{animal.name}</h5>
              <img 
                src={animal.image} 
                alt={animal.name}
                width='300px'
                />
                <span>{animal.specie}</span>
            </div>
          ))
        }
      </div>
    )
  }
}
