import React, { Component } from 'react';
import HornedBeast from './HornedBeast'; // pull in the component to pass props down to
import  {animalData} from '../data';  // let's pull in some pre-written data for our animal wiki
export default class Main extends Component {
  render() {
    return (
      <>
      {/* Here, I am using the array map method to pass the data to thier respective properties */}
      {animalData.map((el) => (<HornedBeast title={el.title} imageUrl={el.image_url} description={el.description} keyword={el.keyword}/>))}
      
      </>
    )
  
}
}
