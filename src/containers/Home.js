import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Reactjs x Redux - Instagram</h1>
        <Link to="/counter">Counter Page</Link>
      </div>
    );
  }
}
