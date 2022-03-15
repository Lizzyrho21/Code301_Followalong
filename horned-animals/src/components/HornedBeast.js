import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import '../Wiki.css';


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
      <div className="wiki-container">
      
   
      <Card style={{  width: "20rem", padding: "auto", margin:'auto', height:'70vh', marginBottom:'1.5rem' }}>
      <Card.Img  style={{height:'40vh'}} variant="top" onClick={() => {this.setState({likes: this.state.likes + 1 })}} src={this.props.imageUrl} alt={this.props.keyword} />
      {/* When the data is pulled in from props, here is how I want to display it */}
      <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>❤️ | {this.state.likes} {this.props.description}</Card.Text>
      <Button>Click to Learn more</Button>
      </Card.Body>
      {/* Here, I use a callback func to set the state and update it realtime */}


      </Card>
      
    
      </div>
    )
  }
}
