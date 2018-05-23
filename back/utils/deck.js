const defaultFigures = [
  '2','3','4', 'K', 'K', 'K', 'K', '9','10','J','Q','K','A','*'
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
