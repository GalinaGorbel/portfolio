let items = document.querySelectorAll('.portfolio__item');
let backCards = document.querySelectorAll('.portfolio__item-back');

document.addEventListener('DOMContentLoaded', e => {
    if (e.target.title == 'Portfolio') {

        items.forEach(item => {
            e.preventDefault();
            item.classList.add('portfolio__item-show')
        })
    }
})

backCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.opacity = 1;
    })
    card.addEventListener('mouseout', () => {
        card.style.opacity = 0;
    })
})