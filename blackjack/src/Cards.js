//creates a card array, and then returns it
const Cards = () => {
    var suits = ['♣', '♦', '♥', '♠']
    var chars = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    var deck = []
    //change less than variable for more decks to be added
    for (var i = 0; i < 52; i++) {
        var num = i % 13
        var suit = i % 4
        deck.push(chars[num] + suits[suit])
    }
    return deck
};
export default Cards;