//creates a card array, and then returns it
const Cards = () => {
    var suits = ['d', 'c', 'h', 's']
    var deck = []
    //change less than variable for more decks to be added
    for (var i = 0; i < 52; i++) {
        var num = i % 13
        var suit = i % 4
        deck.push([num, suits[suit]])
    }
    console.log(deck)
};
export default Cards;