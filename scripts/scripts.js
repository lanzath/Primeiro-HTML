//Selecionando as classes 
const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

//loop para percorrer os cards
for (let card of courses) {
    const course = card.getAttribute('id')
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${course}`;
    })
}

//fechando a modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
})

//maximizando o modal
document.querySelector('.maximize-modal').addEventListener('click', () => {
    if (modal.classList.contains('maximized')) {
        modal.classList.remove('maximized');
    } else {
        modal.classList.add('maximized');
    }
}
)