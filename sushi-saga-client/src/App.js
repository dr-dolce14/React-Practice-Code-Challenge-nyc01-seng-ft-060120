import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    money: 100,
    display: 0
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then((sushiData) => {
      this.setState({ sushis: sushiData })

    })
  }
  
  fourSushis = () => {
    return this.state.sushis.slice(this.state.display, this.state.display+4)
  }

  moreSushis = (e) => {
    let newDisplay = this.state.display + 4
    if (newDisplay >= this.state.sushis.length) {
      newDisplay = 0
    }
    this.setState({
      display: newDisplay
    })
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price
    if (!this.state.eaten.includes(sushi) && newMoney >= 0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  addMoney = (money) => {
    let cashInfusion = this.state.money + Number(money)
    this.setState({
      money: cashInfusion
    })
  }



  

  render() {
    
   
    return (
      <div className="app">
        <SushiContainer sushis={this.fourSushis()} moreSushis={this.moreSushis} eat={this.eat} eaten={this.state.eaten}/>
        <Table moneyLeft={this.state.money} eaten={this.state.eaten} addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;