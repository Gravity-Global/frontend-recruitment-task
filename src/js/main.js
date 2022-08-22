const openPopup = document.querySelector('.btn');
const closePopup = document.querySelector('.close-button');
const popupBackground = document.querySelector('.black-transparent');
const displayCount = document.querySelector('.strong');
const resetButton = document.querySelector('.resetButton');

let counter = 0; 
counter = localStorage.getItem('counter') || 0;

openPopup.addEventListener('click', () => {
    const popup = document.querySelector("#popup");
    openPopupFunc(popup);
    countUp();
})

closePopup.addEventListener('click', () => {
    const popup = document.querySelector("#popup");
    closePopupFunc(popup);
    
})

popupBackground.addEventListener('click', () => {
    const popup = document.querySelector("#popup.active");
    closePopupFunc(popup);
})

resetButton.addEventListener('click', () => {
    displayCount.innerText = `0 times`;
    counter = 0;
    localStorage.clear();
});

function openPopupFunc(popup){
    if(popup == null){
        return;
    }
    popup.classList.add('active');
    popupBackground.classList.add('active');
}

function closePopupFunc(popup){
    if(popup == null){
        return;
    }
    popup.classList.remove('active');
    popupBackground.classList.remove('active');
}

function countUp() {
    counter++;
    localStorage.setItem('counter', counter);
    displayCount.innerText = `${counter} times`
    
    if(counter >= 6){
        resetButton.classList.add('active');
    } else {
        resetButton.classList.remove('active');
    }
}
