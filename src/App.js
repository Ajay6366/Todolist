import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  inCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    if(this.state.count==12){
      this.setState({count:1})
    }
  };
  deCount = () => {
    this.setState({
      count: this.state.count - 1
    })
    if (this.state.count < 1) {
      this.setState({ count: 0 })
    }
  }
  render() {
    return (
      <div className="tc">
        <h2>Counter</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.inCount}>Increment</button>
        <button onClick={this.deCount}>Decrement</button>
      </div>
    )
  }
}


export default App;