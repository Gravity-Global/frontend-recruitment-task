const openModalButtons = document.querySelectorAll('[data-modal-target]');
// if somewhere will be other open modal buttons in the project (modal buttons)
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('#overlay');

// Modal

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// BUTTON COUNTER AND DISPLAY IN POPUP
const buttonCta = document.querySelector('.btn-cta');
const displayNumberOfClicks = document.querySelector('#display-number');
const resetCounterBtn = document.querySelector('.reset-btn');

let count = 0;

buttonCta.addEventListener('click', onClickCount)

resetCounterBtn.addEventListener('click', onResetClick)

function onClickCount() { 
    if (localStorage.getItem("count") !== null) {
        count = Number(window.localStorage.getItem("count"));
    }
    count++;
    window.localStorage.setItem("count", count);
    displayNumberOfClicks.innerHTML = ` ${ count } times `;
    console.log("I'm count", count);
    if(count >= 5){
        showResetButton(count);
        count = 0;
        // buttonCta.disabled = true;
    }
}

const showResetButton = () => {
    resetCounterBtn.style.visibility = 'visible';
}

function onResetClick() {
    localStorage.clear()
    displayNumberOfClicks.innerHTML = `${ count } times`;
    buttonCta.disabled = true;
}

const updateCounter = () => {
    buttonCta.disabled = false;
    count = 0;
    count++;
} 
