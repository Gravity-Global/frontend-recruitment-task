// document.querySelector('.btn').addEventListener('click', countUp)
// const displayCount = document.querySelector('.counter');

// let counter = 0;
// function countUp() {
//     counter++;
//     displayCount.innerText++;

//     console.log("pokaż popup na click")
    
//     if(counter === 5){
//         console.log('jest 5 i pokaż reset button');
//     }
// }

const openPopup = document.querySelector('.btn');
const closePopup = document.querySelector('.close-button');
const popupBackground = document.querySelector('.black-transparent');

openPopup.addEventListener('click', () => {
    const popup = document.querySelector("#popup");
    openPopupFunc(popup);
})

closePopup.addEventListener('click', () => {
    const popup = button.closest('.popup');
    openPopupFunc(popup);
})
popupBackground.addEventListener('click', ()=>{
    const popup = document.querySelector('.popups.active');
    closePopup(popup);
})



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