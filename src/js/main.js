// getting vars
const showPopupBtn = document.querySelector('.art__content__button');
const modalWrap = document.querySelector('.art__modal-wrap');
const closeBtn = document.querySelector('.art__modal-wrap__popup__closeBtn');
const showCounter = document.querySelector('.click-counter');
const resetBtn = document.querySelector('.art__modal-wrap__popup__resetBtn');

//showing popup window;
showPopupBtn.addEventListener('click', () => {
    modalWrap.style.visibility = 'visible';

    //showing clicks number
    let showClicks = localStorage.getItem('localClicks');
    localStorage.setItem('localClicks', ++showClicks);
    showCounter.textContent = showClicks;


    // showing resetBtn if condition is met;
    showClicks > 5 ? resetBtn.style.display = 'block' : resetBtn.style.display = 'none';
});


// function for hiding popup

const hideModal = () => modalWrap.style.visibility = 'hidden';

modalWrap.addEventListener('click', e => {
    if (e.target.className === 'art__modal-wrap') hideModal();

})
closeBtn.addEventListener('click', () => hideModal());


//reseting local clicks; hiding popup window


resetBtn.addEventListener('click', () => {
    showCounter.textContent = '0';
    localStorage.clear();
    hideModal();
})


