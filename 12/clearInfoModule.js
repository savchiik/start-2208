// clearInfoModule.js
export function clearInfo() {
    const cardContainer = document.body; 

    const cards = cardContainer.getElementsByClassName('card');
    while (cards.length > 0) {
        cards[0].parentNode.removeChild(cards[0]);
    }
}