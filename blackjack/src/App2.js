import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import shuffle from './Shuffle';
import Cards from './Cards';
import Hand from './Hand';
const App = () => {
    const [pHand, setPHand] = useState([])
    const [dHand, setDHand] = useState([])
    const [dealt, setDealt] = useState(0)
    let deck = (shuffle(Cards()))
    const clear = () => {
        setDealt(0)
        setPHand([])
        setDHand([])
        return true
    }
    const start = (e) => {
        e.preventDefault()
        // deck = (shuffle(Cards()))
        // console.log(deck[0])
        // setPHand([deck.pop()])
        // setDHand([deck.pop()])
        console.log('bruh')
    }
    const hit = (e) => {
        e.preventDefault()
        console.log('got hit!')
    }
    useEffect(() => {
        console.log(pHand, dHand, dealt, deck)
    }, [pHand, dHand, dealt, deck])
    return (
        <div className="App" >
            <div className='Dealer'>
                <p>Dealers:</p>
                <Hand card={dHand} />
            </div>
            <div className='Player'>
                <p>Yours:</p>
                <Hand card={pHand} />
            </div>
            <div className='Controls'>
                Controls:
                <div className='Buttons'>
                    {/* <button onClick={this.Hold}>Hold</button> */}
                    <button onClick={(e) => hit(e)}>Hit Me</button>
                    <button onClick={(e) => start(e)}>Start New Game</button>
                </div>
            </div>
        </div>
    )
}
export default App