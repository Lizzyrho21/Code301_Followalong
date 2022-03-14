import React, { Component } from 'react';
import HornedBeast from './HornedBeast'; // pull in the component to pass props down to
export default class Main extends Component {
  render() {
    return (
      <>
      <HornedBeast title='Unicorn' imageUrl='TBA' description='I have one horn!'/>
      <HornedBeast title='Rhino' imageUrl='TBA' description='How many horns do I have again?'/>
      </>
    )
  }
}
