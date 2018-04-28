const defaultFigures = [
  '2','3','4','5','6','7','8','9','10','J','Q','K','A','*'
];

const defaultColors = ['Hearts', 'Tiles', 'Clovers', 'Pikes'];

const createDeck = (figures = defaultFigures, colors = defaultColors) => {
  const deck = [];
  figures.forEach((figure) => {
    colors.forEach((color) => {
      deck.push({
        figure,
        color
      })
    })
  })
  return deck;
};

module.exports = { createDeck };
