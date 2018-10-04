import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      series: [],
      seriesText: ''
    }
    this.handleSeries = this.handleSeries.bind(this)
    this.addToSeries = this.addToSeries.bind(this)
    this.removeFromSeries = this.removeFromSeries.bind(this)
  }

  componentDidMount(){ 
    axios.get('http://localhost:3001/api/test').then( response => {
      console.log(response)
      this.setState({series: response.data})
    })
  }

  handleSeries(e){
    this.setState({seriesText: e.target.value})
  }

  addToSeries(){
    axios.post(`http://localhost:3001/api/test?newSeries=${this.state.seriesText}`).then( response => {
      console.log(response.data.pop(), 'FROM THE SERVER')
    })
  }
  removeFromSeries(){
    axios.delete(`http://localhost:3001/api/test/${1}`).then( response => {
      this.setState({series: response.data})
    })
  }

  
  render() {
    console.log('State', this.state)
    return (
      <div className="App">
        <input onChange={this.handleSeries}/>
        <button onClick={this.removeFromSeries} >Press me! </button>
      </div>
    );
  }
}

export default App;
