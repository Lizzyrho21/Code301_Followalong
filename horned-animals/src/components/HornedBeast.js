import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    return (
      <>
      {/* When the data is pull in from props, here is how I want to display it */}
      <h2>{this.props.title}</h2>
      <img style={{width:'200px', height:'200px' }}src={this.props.imageUrl} alt={this.props.keyword}/>
      <p>{this.props.description}</p>
      </>
    )
  }
}
