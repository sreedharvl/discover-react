// import React from 'react';
import React, { Component } from 'react';

interface GreeterProps {
  companyName: string;
}

// class Greeter extends React.Component {
class Greeter extends Component<GreeterProps> {
  // Constructor

  // Lifecycle methods

  // Event handlers

  // Other functions

  render() {
    return (
      <p>Greetings from {this.props.companyName} (class-based)!</p>
    );  
  }
}

export default Greeter;
