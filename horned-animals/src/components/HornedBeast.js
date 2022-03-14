import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imageUrl} alt='horned animal'/>
      <p>{this.props.description}</p>
      </>
    )
  }
}
