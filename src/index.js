import colorCard from '../src/templates/color-card.hbs';
import colorCards from '../src/templates/color-cards.hbs';
import colors from '../src/colorpicker.json';

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkUp = createColorCardsMarkUp(colors);

function createColorCardsMarkUp(colors) {
    return colorCards(colors);
};

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

paletteContainer.addEventListener('click', onCardClick);

function onCardClick(e) {
    const isColorCardEl = e.target.classList.contains('color-swatch');
    if (!isColorCardEl) {
        return;
    };
    const color = e.target.dataset.hex;
    document.body.style.backgroundColor = color;
}