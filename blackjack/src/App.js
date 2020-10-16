import React from 'react';
import './App.css';
import shuffle from './Shuffle';
import Cards from './Cards';
const Data = [{
  PlayerHand: [],
  DealerHand: [],
  dealt: 0,
  deck: shuffle(Cards())
}];
class App extends React.Component {
  constructor() {
    super();
    this.state = { Data };
    console.log(this.state)
  }
  //sets up the number of dealt cards, dealers hand, and the players hand
  //deals starting hands
  start() {
    this.state.dealt = 0
    this.state.PlayerHand = []
    this.state.DealerHand = []
    this.state.deck = shuffle(Cards())
    //can change this for loop to fit how many players, only two for testing purposes
    for (var i = 0; i < 2; i++) {
      console.log(this.state.PlayerHand)
      this.state.PlayerHand.push(this.state.deck[this.state.dealt])
      this.state.dealt += 1
      this.state.DealerHand.push(this.state.deck[this.state.dealt])
      this.state.dealt += 1
    }
    console.log('Hello!', this.state.PlayerHand, this.state.DealerHand)
  }
  //gives the acting player a new card
  hit(person) {
    console.log(person)
    if (person == 0) {
      this.state.PlayerHand.push(this.state.deck[this.state.dealt])
      this.state.dealt += 1
      console.log(this.state.PlayerHand)
    }
    else if (person == 1) {
      this.state.DealerHand.push(this.state.deck[this.state.dealt])
      this.state.dealt += 1
      console.log(this.state.DealerHand)
    }
  }
  render() {
    return (
      <div className="App" >
        <div className='Log'>

        </div>
        <div className='Dealer'>
          <p>
            Dealers:
        </p>
        </div>
        <div className='Player'>
          <p>
            Yours:
        </p>
        </div>
        <div className='Controls'>
          Controls:
        <div className='Buttons'>
            <button onClick={this.Hold}>Hold</button>
            <button onClick={() => this.hit(0)}>Hit Me</button>
            <button onClick={() => this.start()}>Start New Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
