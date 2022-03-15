import React, { Component } from 'react'

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    // declaring the state to save likes
    this.state = {
      likes : 0
    }
  }
  render() {
    return (
      <>
      {/* When the data is pulled in from props, here is how I want to display it */}
      <h2>{this.props.title}</h2>
      {/* Here, I use a callback func to set the state and update it realtime */}
      <img onClick={() => {this.setState({likes: this.state.likes + 1 })}} style={{width:'200px', height:'200px' }}src={this.props.imageUrl} alt={this.props.keyword}/>
    
      <p> ❤️ | {this.state.likes} {this.props.description}</p>
      </>
    )
  }
}
