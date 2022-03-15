import React, { Component } from 'react';
import HornedBeast from './HornedBeast'; // pull in the component to pass props down to
import  {animalData} from '../data';  // let's pull in some pre-written data for our animal wiki
import { Container, Col, Row} from 'react-bootstrap';
export default class Main extends Component {
  render() {
    return (
      <>
      {/* Here, I am using the array map method to pass the data to thier respective properties */}
      <Container fluid>

        <Row xs={1} md={3} lg={4}>
      {animalData.map((el) => (<Col><HornedBeast title={el.title} imageUrl={el.image_url} description={el.description} keyword={el.keyword}/></Col>))}
      </Row>
      </Container>
      </>
    )
  
}
}
