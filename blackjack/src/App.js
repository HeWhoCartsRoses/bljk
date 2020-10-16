import React from 'react';
import './App.css';
import shuffle from './Shuffle';
import Cards from './Cards';
import Hand from './Hand';
const Data = {
  PlayerHand: [],
  DealerHand: [],
  dealt: 0,
  deck: shuffle(Cards())
};
//issue here for displaying cards
class App extends React.Component {
  constructor() {
    super();
    this.state = { Data };
    console.log(this.state)
  }
  //supposed to be the starts add new card code, but is having issues. will debug
  addNewCard = (card, person) => {
    if (person === 0) {

      this.setState({ Data: { ...this.state.Data, PlayerHand: [...this.state.Data.PlayerHand, card] } });
    }
    else if (person === 1) {
      this.setState({ Data: { ...this.state.Data, DealerHand: [...this.state.Data.DealerHand, card] } });
    }
  };
  //this one works but either star or addNewCard doesn't. will find bug.
  hit(person) {
    console.log(person)
    if (person === 0) {

      console.log('Data Before', this.state.Data)

      this.state.Data.dealt += 1
      this.setState({ Data: { ...this.state.Data, PlayerHand: [...this.state.Data.PlayerHand, this.state.Data.deck[this.state.Data.dealt]] } });
      console.log('Data after', this.state.Data)
    }
    else if (person === 1) {
      this.setState({ Data: { ...this.state.Data, DealerHand: [...this.state.Data.DealerHand, this.state.Data.deck[this.state.Data.dealt]] } });
      this.state.Data.dealt += 1
      console.log(this.state.Data.DealerHand)
    }
  }
  //sets up the number of dealt cards, dealers hand, and the players hand
  //deals starting hands
  //issue is here. not adding new cards except last one
  start() {
    this.state.Data.dealt = 0
    this.state.Data.PlayerHand = []
    this.state.Data.DealerHand = []
    this.state.Data.deck = shuffle(Cards())
    //can change this for loop to fit how many players, only two for testing purposes
    for (var i = 0; i < 2; i++) {

      this.state.Data.dealt += 1
      this.addNewCard(this.state.Data.deck[this.state.Data.dealt], 0)
      this.state.Data.dealt += 1
      this.addNewCard(this.state.Data.deck[this.state.Data.dealt], 1)
    }
  }
  //does the dealers AI, ran out of time due to hunting bug.
  dealer(pScore) {
    values = { J: 10, Q: 10, K: 10 }

  }
  //the render
  render() {
    return (
      <div className="App" >
        <div className='Log'>

        </div>
        <div className='Dealer'>
          <p>
            Dealers:
        </p>
          <Hand card={this.state.Data.DealerHand} />
        </div>
        <div className='Player'>
          <p>
            Yours:
        </p>
          <Hand card={this.state.Data.PlayerHand} />
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
